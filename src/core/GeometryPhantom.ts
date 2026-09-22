/**
 * GeometryPhantom.ts — 几何魅影 Pass
 *
 * 在高加速度/高速关节处发射漂浮的多面体线框（instanced），随速度漂移、旋转、
 * 随生命淡出，随 ctx.audioBass 脉动缩放。渲染到 ctx.renderTargets['geometry']。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import { mediapipeToWorld } from './coords'

const POOL = 64

export class GeometryPhantom implements Pass {
  private scene = new THREE.Scene()
  private mesh: THREE.InstancedMesh
  private material: THREE.MeshBasicMaterial
  private rt: THREE.WebGLRenderTarget
  private dummy = new THREE.Object3D()

  private px = new Float32Array(POOL)
  private py = new Float32Array(POOL)
  private vx = new Float32Array(POOL)
  private vy = new Float32Array(POOL)
  private life = new Float32Array(POOL)
  private maxLife = new Float32Array(POOL)
  private rot = new Float32Array(POOL)
  private rotSpeed = new Float32Array(POOL)
  private baseScale = new Float32Array(POOL)
  private cursor = 0
  private spawnAcc = 0

  constructor() {
    const geo = new THREE.OctahedronGeometry(0.08, 0)
    this.material = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8b5cf6'),
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    })
    this.mesh = new THREE.InstancedMesh(geo, this.material, POOL)
    this.mesh.frustumCulled = false
    this.mesh.count = 0
    this.scene.add(this.mesh)

    this.rt = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    })
  }

  private spawn(x: number, y: number, vX: number, vY: number, size: number): void {
    const i = this.cursor
    this.cursor = (this.cursor + 1) % POOL
    this.px[i] = x
    this.py[i] = y
    this.vx[i] = vX
    this.vy[i] = vY
    const ml = 0.8 + Math.random() * 1.2
    this.life[i] = ml
    this.maxLife[i] = ml
    this.rot[i] = Math.random() * Math.PI
    this.rotSpeed[i] = (Math.random() - 0.5) * 3
    this.baseScale[i] = size * (0.5 + Math.random() * 0.9)
  }

  update(ctx: PassContext): void {
    if (this.rt.width !== ctx.width || this.rt.height !== ctx.height) {
      this.rt.setSize(ctx.width, ctx.height)
    }
    ctx.renderTargets['geometry'] = this.rt

    const g = ctx.store.geometry
    this.material.color.set(g.filterColor)
    this.material.opacity = 0.3 + g.maskStrength * 0.6

    const dt = Math.min(ctx.deltaTime, 0.05)
    const cam = ctx.camera
    const camW = cam.right - cam.left
    const camH = cam.top - cam.bottom

    if (!g.enabled) {
      this.mesh.count = 0
      return
    }

    // ── 发射：高加速度关节 ──
    const motion = ctx.motionData
    const landmarks = ctx.poseLandmarks
    if (motion && landmarks) {
      let best = -1
      let bestAcc = 0
      for (let i = 0; i < motion.length; i++) {
        const a = motion[i].acceleration.length()
        if (motion[i].exceedsThreshold && a > bestAcc) {
          bestAcc = a
          best = i
        }
      }
      if (best >= 0) {
        this.spawnAcc += (6 + ctx.audioBass * 10) * dt
        let n = Math.floor(this.spawnAcc)
        this.spawnAcc -= n
        n = Math.min(n, 4)
        for (let k = 0; k < n; k++) {
          const lm = landmarks[best]
          const wp = mediapipeToWorld(lm.x, lm.y, camW, camH)
          const vel = motion[best].velocity
          this.spawn(
            wp.x + (Math.random() - 0.5) * 0.1,
            wp.y + (Math.random() - 0.5) * 0.1,
            vel.x * camW * 0.15 + (Math.random() - 0.5) * 0.2,
            -vel.y * camH * 0.15 + (Math.random() - 0.5) * 0.2,
            g.size
          )
        }
      }
    }

    // ── 更新实例矩阵 ──
    const audioPulse = 1 + ctx.audioBass * 0.6
    let count = 0
    for (let i = 0; i < POOL; i++) {
      if (this.life[i] <= 0) continue
      this.life[i] -= dt
      if (this.life[i] <= 0) continue
      this.vy[i] += -0.2 * dt // 轻微下坠
      this.vx[i] *= 0.98
      this.vy[i] *= 0.98
      this.px[i] += this.vx[i] * dt
      this.py[i] += this.vy[i] * dt
      this.rot[i] += this.rotSpeed[i] * dt

      const lifeN = this.life[i] / this.maxLife[i]
      const s = this.baseScale[i] * lifeN * audioPulse
      this.dummy.position.set(this.px[i], this.py[i], 0)
      this.dummy.rotation.set(this.rot[i], this.rot[i] * 0.7, 0)
      this.dummy.scale.set(s, s, s)
      this.dummy.updateMatrix()
      this.mesh.setMatrixAt(count, this.dummy.matrix)
      count++
    }
    this.mesh.count = count
    this.mesh.instanceMatrix.needsUpdate = true
  }

  render(ctx: PassContext): void {
    ctx.renderer.setRenderTarget(this.rt)
    ctx.renderer.setClearColor(0x000000, 0)
    ctx.renderer.clear()
    if (this.mesh.count > 0) ctx.renderer.render(this.scene, ctx.camera)
    ctx.renderer.setRenderTarget(null)
    ctx.renderer.setClearColor(0x0a0a0f, 1)
  }

  dispose(): void {
    this.mesh.geometry.dispose()
    this.material.dispose()
    this.rt.dispose()
  }
}
