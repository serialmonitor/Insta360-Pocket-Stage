/**
 * AsciiPass.ts — ASCII 字符化 Pass
 *
 * 将视频画面按 store.ascii.density 网格降采样为亮度，映射到 ascii-atlas.png
 * 字符图集，输出着色字符层到 ctx.renderTargets['ascii']。禁用时输出透明。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import asciiFragment from '../shaders/ascii.glsl?raw'

const QUAD_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

export class AsciiPass implements Pass {
  private scene = new THREE.Scene()
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private material: THREE.ShaderMaterial
  private quad: THREE.Mesh
  private rt: THREE.WebGLRenderTarget
  private atlas: THREE.Texture

  constructor() {
    this.atlas = new THREE.TextureLoader().load('/assets/ascii-atlas.png')
    this.atlas.flipY = false
    this.atlas.minFilter = THREE.NearestFilter
    this.atlas.magFilter = THREE.NearestFilter
    this.atlas.generateMipmaps = false

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tInput: { value: null },
        tAtlas: { value: this.atlas },
        uCells: { value: new THREE.Vector2(40, 71) },
        uColor: { value: new THREE.Color('#00fff2') },
        uAtlasSize: { value: 10 },
        uVideoAspect: { value: 480 / 852 },
        uCanvasAspect: { value: 1 },
      },
      vertexShader: QUAD_VERT,
      fragmentShader: asciiFragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    })
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material)
    this.quad.frustumCulled = false
    this.scene.add(this.quad)

    this.rt = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    })
  }

  update(ctx: PassContext): void {
    if (this.rt.width !== ctx.width || this.rt.height !== ctx.height) {
      this.rt.setSize(ctx.width, ctx.height)
    }
    ctx.renderTargets['ascii'] = this.rt

    const a = ctx.store.ascii
    this.material.uniforms.uColor.value.set(a.color)
    const canvasAspect = ctx.width / ctx.height
    const rows = Math.max(4, Math.floor(a.density))
    const cols = Math.max(4, Math.round(rows * canvasAspect))
    this.material.uniforms.uCells.value.set(cols, rows)
    this.material.uniforms.uCanvasAspect.value = canvasAspect
    if (ctx.videoElement && ctx.videoElement.videoWidth > 0) {
      this.material.uniforms.uVideoAspect.value =
        ctx.videoElement.videoWidth / ctx.videoElement.videoHeight
    }
    this.material.uniforms.tInput.value = ctx.videoTexture
  }

  render(ctx: PassContext): void {
    ctx.renderer.setRenderTarget(this.rt)
    ctx.renderer.setClearColor(0x000000, 0)
    ctx.renderer.clear()
    if (ctx.store.ascii.enabled && ctx.videoTexture) {
      ctx.renderer.render(this.scene, this.camera)
    }
    ctx.renderer.setRenderTarget(null)
    ctx.renderer.setClearColor(0x0a0a0f, 1)
  }

  dispose(): void {
    this.material.dispose()
    this.quad.geometry.dispose()
    this.rt.dispose()
    this.atlas.dispose()
  }
}
