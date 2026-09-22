/**
 * AfterimagePass.ts — 残影/拖尾 Pass
 *
 * 每帧将 cover-fit 后的视频画到 video ping-pong 缓冲；用当前/上一视频帧的差异
 * 作运动掩码，与历史累积缓冲按 fade 衰减取 max，输出到 ctx.renderTargets['afterimage']。
 * 仅贡献运动残影（静止区域衰减为黑），由 CompositePass 叠加到画面。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import afterimageFragment from '../shaders/afterimage.glsl?raw'

const QUAD_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

// cover-fit 复制视频到画布空间
const COPY_FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVideoAspect;
  uniform float uCanvasAspect;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    if (uCanvasAspect > uVideoAspect) {
      float s = uVideoAspect / uCanvasAspect;
      uv.y = (vUv.y - 0.5) * s + 0.5;
    } else {
      float s = uCanvasAspect / uVideoAspect;
      uv.x = (vUv.x - 0.5) * s + 0.5;
    }
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }
    gl_FragColor = vec4(texture2D(uTexture, uv).rgb, 1.0);
  }
`

function makeRT(): THREE.WebGLRenderTarget {
  return new THREE.WebGLRenderTarget(1, 1, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
  })
}

export class AfterimagePass implements Pass {
  private scene = new THREE.Scene()
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private quad: THREE.Mesh
  private copyMat: THREE.ShaderMaterial
  private accMat: THREE.ShaderMaterial

  private videoA = makeRT()
  private videoB = makeRT()
  private histA = makeRT()
  private histB = makeRT()
  private videoCurIsA = true
  private histReadIsA = true
  private sized = false

  constructor() {
    this.copyMat = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uVideoAspect: { value: 480 / 852 },
        uCanvasAspect: { value: 1 },
      },
      vertexShader: QUAD_VERT,
      fragmentShader: COPY_FRAG,
      depthTest: false,
      depthWrite: false,
    })
    this.accMat = new THREE.ShaderMaterial({
      uniforms: {
        tVideoCur: { value: null },
        tVideoPrev: { value: null },
        tHistory: { value: null },
        uFade: { value: 0.75 },
        uSensitivity: { value: 0.5 },
        uColor: { value: new THREE.Color('#00fff2') },
      },
      vertexShader: QUAD_VERT,
      fragmentShader: afterimageFragment,
      depthTest: false,
      depthWrite: false,
    })
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.copyMat)
    this.quad.frustumCulled = false
    this.scene.add(this.quad)
  }

  private resize(w: number, h: number): void {
    for (const rt of [this.videoA, this.videoB, this.histA, this.histB]) rt.setSize(w, h)
    this.sized = true
  }

  update(ctx: PassContext): void {
    if (this.videoA.width !== ctx.width || this.videoA.height !== ctx.height) {
      this.resize(ctx.width, ctx.height)
    }
    const a = ctx.store.afterimage
    this.accMat.uniforms.uFade.value = a.fade
    this.accMat.uniforms.uSensitivity.value = a.sensitivity
    this.accMat.uniforms.uColor.value.set(a.color)

    if (ctx.videoElement && ctx.videoElement.videoWidth > 0) {
      this.copyMat.uniforms.uVideoAspect.value =
        ctx.videoElement.videoWidth / ctx.videoElement.videoHeight
    }
    this.copyMat.uniforms.uCanvasAspect.value = ctx.width / ctx.height
  }

  render(ctx: PassContext): void {
    if (!this.sized || !ctx.videoTexture) {
      // 无视频时输出空历史，避免 composite 采样到未初始化纹理
      ctx.renderTargets['afterimage'] = this.histReadIsA ? this.histA : this.histB
      return
    }
    const r = ctx.renderer
    const videoCur = this.videoCurIsA ? this.videoA : this.videoB
    const videoPrev = this.videoCurIsA ? this.videoB : this.videoA
    const histRead = this.histReadIsA ? this.histA : this.histB
    const histWrite = this.histReadIsA ? this.histB : this.histA

    // 1) cover-fit 复制当前视频帧
    this.quad.material = this.copyMat
    this.copyMat.uniforms.uTexture.value = ctx.videoTexture
    r.setRenderTarget(videoCur)
    r.render(this.scene, this.camera)

    // 2) 累积残影
    this.quad.material = this.accMat
    this.accMat.uniforms.tVideoCur.value = videoCur.texture
    this.accMat.uniforms.tVideoPrev.value = videoPrev.texture
    this.accMat.uniforms.tHistory.value = histRead.texture
    r.setRenderTarget(histWrite)
    r.render(this.scene, this.camera)
    r.setRenderTarget(null)

    ctx.renderTargets['afterimage'] = histWrite

    // 3) 交换缓冲
    this.videoCurIsA = !this.videoCurIsA
    this.histReadIsA = !this.histReadIsA
  }

  dispose(): void {
    this.copyMat.dispose()
    this.accMat.dispose()
    this.quad.geometry.dispose()
    for (const rt of [this.videoA, this.videoB, this.histA, this.histB]) rt.dispose()
  }
}
