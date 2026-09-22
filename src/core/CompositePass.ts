/**
 * CompositePass.ts — 最终合成 Pass
 *
 * ⚠️ 本文件由下游 agent 实现，接口签名勿改。
 *
 * 职责：
 * - 将所有前序 Pass 的输出合成为最终画面
 * - 应用 Bloom 辉光效果 (store.composite.bloomStrength)
 * - 应用色彩滤镜 (store.composite.filterColor)
 * - 应用遮罩混合 (store.composite.maskStrength)
 * - 最终输出到屏幕 (null renderTarget)
 *
 * 合成顺序（从底到顶）：
 * 1. VideoLayer 输出 (ctx.renderTargets['video'] 或 scene 直接渲染)
 * 2. AfterimagePass 输出 (ctx.renderTargets['afterimage'])
 * 3. ParticleSystem 输出 (ctx.renderTargets['particle'])
 * 4. SkeletonLines 输出 (ctx.renderTargets['skeleton'] 或 scene)
 * 5. AsciiPass 输出 (ctx.renderTargets['ascii'])
 * 6. GeometryPhantom 输出 (ctx.renderTargets['geometry'] 或 scene)
 * 7. Bloom + Color Filter + Final output to screen
 *
 * 依赖：
 * - ctx.renderTargets 字典中所有前序 pass 的输出
 * - store.composite: { bloomStrength, filterColor, maskStrength }
 * - shaders/composite.glsl
 *
 * ⚡ 当前 stub 实现：直通渲染（保证画面可见）
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import compositeFragmentShader from '../shaders/composite.glsl?raw'

export class CompositePass implements Pass {
  private quadMesh: THREE.Mesh
  private quadMaterial: THREE.ShaderMaterial
  private quadScene: THREE.Scene
  private quadCamera: THREE.OrthographicCamera

  constructor() {
    // 最终合成用的全屏四边形
    this.quadScene = new THREE.Scene()
    this.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    this.quadMaterial = new THREE.ShaderMaterial({
      uniforms: {
        // 当前 stub: 只使用主场景渲染结果
        tScene: { value: null },
        tAfterimage: { value: null },
        tParticle: { value: null },
        tAscii: { value: null },
        tGeometry: { value: null },
        uBloomStrength: { value: 0.8 },
        uFilterColor: { value: new THREE.Color('#0a0a1a') },
        uMaskStrength: { value: 0.4 },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: compositeFragmentShader,
      depthTest: false,
      depthWrite: false,
    })

    const quadGeo = new THREE.PlaneGeometry(2, 2)
    this.quadMesh = new THREE.Mesh(quadGeo, this.quadMaterial)
    this.quadMesh.frustumCulled = false
    this.quadScene.add(this.quadMesh)
  }

  update(ctx: PassContext): void {
    // 更新 uniforms
    this.quadMaterial.uniforms.uBloomStrength.value = ctx.store.composite.bloomStrength
    this.quadMaterial.uniforms.uFilterColor.value.set(ctx.store.composite.filterColor)
    this.quadMaterial.uniforms.uMaskStrength.value = ctx.store.composite.maskStrength
    this.quadMaterial.uniforms.uResolution.value.set(ctx.width, ctx.height)

    // 绑定各 pass 的 renderTarget 纹理
    if (ctx.renderTargets['afterimage']) {
      this.quadMaterial.uniforms.tAfterimage.value = ctx.renderTargets['afterimage'].texture
    }
    if (ctx.renderTargets['particle']) {
      this.quadMaterial.uniforms.tParticle.value = ctx.renderTargets['particle'].texture
    }
    if (ctx.renderTargets['ascii']) {
      this.quadMaterial.uniforms.tAscii.value = ctx.renderTargets['ascii'].texture
    }
    if (ctx.renderTargets['geometry']) {
      this.quadMaterial.uniforms.tGeometry.value = ctx.renderTargets['geometry'].texture
    }
  }

  render(ctx: PassContext): void {
    // 1. 先将主 scene 渲染到临时 renderTarget
    const sceneRT = ctx.renderTargets['scene']
    if (!sceneRT) {
      // 创建 scene renderTarget（首次）
      ctx.renderTargets['scene'] = new THREE.WebGLRenderTarget(ctx.width, ctx.height, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
      })
    }
    const rt = ctx.renderTargets['scene']
    rt.setSize(ctx.width, ctx.height)

    ctx.renderer.setRenderTarget(rt)
    ctx.renderer.clear()
    ctx.renderer.render(ctx.scene, ctx.camera)
    ctx.renderer.setRenderTarget(null)

    // 2. 绑定 scene 纹理
    this.quadMaterial.uniforms.tScene.value = rt.texture

    // 3. 渲染合成四边形到屏幕
    ctx.renderer.clear()
    ctx.renderer.render(this.quadScene, this.quadCamera)
  }

  dispose(): void {
    this.quadMesh.geometry.dispose()
    this.quadMaterial.dispose()
  }
}
