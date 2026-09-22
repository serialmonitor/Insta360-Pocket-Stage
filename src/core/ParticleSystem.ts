/**
 * ParticleSystem.ts — 粒子系统 Pass（CPU 模拟 + THREE.Points 渲染）
 *
 * 从 ctx.motionData 中超阈值关节发射粒子，发射速率受 store.particle.emissionRate
 * 与 ctx.audioBass 调制；CPU 更新重力/阻尼/生命衰减；渲染到 ctx.renderTargets['particle']。
 *
 * 采用 CPU 模拟（而非 GPGPU float 纹理）以获得跨设备可靠性，符合计划降级策略。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import { mediapipeToWorld } from './coords'
import particleFragment from '../shaders/particleRender.glsl?raw'

const CAPACITY = 20000 // 硬上限，store.maxCount 为活跃软上限

const VERT = /* glsl */ `
  attribute float aLife;
  attribute float aSize;
  uniform float uSize;
  varying float vLife;
  void main() {
    vLife = aLife;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSize * (0.4 + vLife); // 随生命淡出缩小
  }
`

export class ParticleSystem implements Pass {
  private scene = new THREE.Scene()
  private geometry: THREE.BufferGeometry
  private material: THREE.ShaderMaterial
  private points: THREE.Points
  private rt: THREE.WebGLRenderTarget

  // CPU 粒子状态
  private px = new Float32Array(CAPACITY)
  private py = new Float32Array(CAPACITY)
  private vx = new Float32Array(CAPACITY)
  private vy = new Float32Array(CAPACITY)
  private life = new Float32Array(CAPACITY)
  private maxLife = new Float32Array(CAPACITY)
  private psize = new Float32Array(CAPACITY)
  private alive = new Uint8Array(CAPACITY)
  private cursor = 0
  private emitAcc = 0

  // GPU attribute 缓冲（每帧压缩写入活跃粒子）
  private posAttr: Float32Array
  private lifeAttr: Float32Array
  private sizeAttr: Float32Array

  constructor() {
    this.posAttr = new Float32Array(CAPACITY * 3)
    this.lifeAttr = new Float32Array(CAPACITY)
    this.sizeAttr = new Float32Array(CAPACITY)

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.posAttr, 3).setUsage(THREE.DynamicDrawUsage))
    this.geometry.setAttribute('aLife', new THREE.BufferAttribute(this.lifeAttr, 1).setUsage(THREE.DynamicDrawUsage))
    this.geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizeAttr, 1).setUsage(THREE.DynamicDrawUsage))
    this.geometry.setDrawRange(0, 0)

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uSize: { value: 2.0 },
        uColor: { value: new THREE.Color('#00fff2') },
        uOpacity: { value: 1.0 },
      },
      vertexShader: VERT,
      fragmentShader: particleFragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.points = new THREE.Points(this.geometry, this.material)
    this.points.frustumCulled = false
    this.scene.add(this.points)

    this.rt = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    })
  }

  private spawn(worldX: number, worldY: number, vX: number, vY: number, baseSize: number): void {
    const i = this.cursor
    this.cursor = (this.cursor + 1) % CAPACITY
    this.px[i] = worldX
    this.py[i] = worldY
    this.vx[i] = vX
    this.vy[i] = vY
    const ml = 0.6 + Math.random() * 0.9
    this.life[i] = ml
    this.maxLife[i] = ml
    this.psize[i] = baseSize * (0.6 + Math.random() * 0.8)
    this.alive[i] = 1
  }

  update(ctx: PassContext): void {
    const p = ctx.store.particle
    const dt = Math.min(ctx.deltaTime, 0.05)
    const cam = ctx.camera
    const camW = cam.right - cam.left
    const camH = cam.top - cam.bottom

    // ── 发射 ──
    const motion = ctx.motionData
    const landmarks = ctx.poseLandmarks
    if (motion && landmarks) {
      const emitters: number[] = []
      for (let i = 0; i < motion.length; i++) {
        if (motion[i].exceedsThreshold) emitters.push(i)
      }
      if (emitters.length > 0) {
        const audioBoost = 1 + ctx.audioBass * 2.5
        const rate = p.emissionRate * audioBoost
        this.emitAcc += rate * dt
        let toEmit = Math.floor(this.emitAcc)
        this.emitAcc -= toEmit
        // 活跃软上限
        toEmit = Math.min(toEmit, p.maxCount)
        for (let n = 0; n < toEmit; n++) {
          const j = emitters[n % emitters.length]
          const lm = landmarks[j]
          const wp = mediapipeToWorld(lm.x, lm.y, camW, camH)
          const vel = motion[j].velocity
          // 归一化速度 → 世界速度（Y 翻转），加随机散射
          const spread = 0.15
          const vX = vel.x * camW * 0.25 + (Math.random() - 0.5) * spread
          const vY = -vel.y * camH * 0.25 + (Math.random() - 0.5) * spread
          this.spawn(
            wp.x + (Math.random() - 0.5) * 0.03,
            wp.y + (Math.random() - 0.5) * 0.03,
            vX,
            vY,
            p.size
          )
        }
      }
    }

    // ── 物理更新 + 压缩写入 attribute ──
    const ay = -p.gravity // store.gravity>0 下落，<0 上升
    const damping = 0.6
    let count = 0
    for (let i = 0; i < CAPACITY; i++) {
      if (!this.alive[i]) continue
      let l = this.life[i] - dt
      if (l <= 0) {
        this.alive[i] = 0
        continue
      }
      this.life[i] = l
      let vX = this.vx[i]
      let vY = this.vy[i]
      vY += ay * dt
      const d = 1 - damping * dt
      vX *= d
      vY *= d
      this.vx[i] = vX
      this.vy[i] = vY
      this.px[i] += vX * dt
      this.py[i] += vY * dt

      const o = count * 3
      this.posAttr[o] = this.px[i]
      this.posAttr[o + 1] = this.py[i]
      this.posAttr[o + 2] = 0
      this.lifeAttr[count] = l / this.maxLife[i]
      this.sizeAttr[count] = this.psize[i]
      count++
    }

    this.geometry.setDrawRange(0, count)
    ;(this.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    ;(this.geometry.getAttribute('aLife') as THREE.BufferAttribute).needsUpdate = true
    ;(this.geometry.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate = true

    // uniforms
    this.material.uniforms.uSize.value = p.size * (1 + ctx.audioBass * 0.8)
    this.material.uniforms.uColor.value.set(p.color)
    this.material.uniforms.uOpacity.value = 1.0

    // 确保 RT 尺寸
    if (this.rt.width !== ctx.width || this.rt.height !== ctx.height) {
      this.rt.setSize(ctx.width, ctx.height)
    }
    ctx.renderTargets['particle'] = this.rt
  }

  render(ctx: PassContext): void {
    ctx.renderer.setRenderTarget(this.rt)
    ctx.renderer.setClearColor(0x000000, 0)
    ctx.renderer.clear()
    ctx.renderer.render(this.scene, ctx.camera)
    ctx.renderer.setRenderTarget(null)
    ctx.renderer.setClearColor(0x0a0a0f, 1)
  }

  dispose(): void {
    this.geometry.dispose()
    this.material.dispose()
    this.rt.dispose()
  }
}
