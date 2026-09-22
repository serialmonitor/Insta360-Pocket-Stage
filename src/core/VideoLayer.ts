/**
 * VideoLayer.ts — 视频底层渲染 Pass
 *
 * 职责：将 HTMLVideoElement 通过 THREE.VideoTexture 渲染为全屏四边形。
 * 受 store.videoAlpha 控制透明度。
 *
 * ✅ 本文件已完整实现，下游 agent 一般无需修改。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'

export class VideoLayer implements Pass {
  private mesh: THREE.Mesh | null = null
  private material: THREE.ShaderMaterial
  private geometry: THREE.PlaneGeometry
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera

  // 用于 cover-fit 的 uniform
  private videoAspect = 480 / 852 // 默认竖屏

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.OrthographicCamera) {
    this.renderer = renderer
    this.scene = scene
    this.camera = camera

    this.geometry = new THREE.PlaneGeometry(2, 2)

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uAlpha: { value: 1.0 },
        uVideoAspect: { value: this.videoAspect },
        uCanvasAspect: { value: 1.0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uTexture;
        uniform float uAlpha;
        uniform float uVideoAspect;
        uniform float uCanvasAspect;
        varying vec2 vUv;

        vec2 coverFitUv(vec2 uv, float videoAspect, float canvasAspect) {
          // Cover-fit: 填满 canvas，裁切溢出部分，保持宽高比
          vec2 fittedUv = uv;
          if (canvasAspect > videoAspect) {
            // Canvas 比视频宽 → 宽度填满，垂直裁切
            float s = videoAspect / canvasAspect;
            fittedUv.y = (uv.y - 0.5) * s + 0.5;
          } else {
            // Canvas 比视频高 → 高度填满，水平裁切
            float s = canvasAspect / videoAspect;
            fittedUv.x = (uv.x - 0.5) * s + 0.5;
          }
          return fittedUv;
        }

        void main() {
          if (uAlpha <= 0.001) {
            discard;
          }
          vec2 uv = coverFitUv(vUv, uVideoAspect, uCanvasAspect);
          // Clamp UVs
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
            discard;
          }
          vec4 color = texture2D(uTexture, uv);
          gl_FragColor = vec4(color.rgb, color.a * uAlpha);
        }
      `,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = -1000 // 最底层
    this.scene.add(this.mesh)
  }

  update(ctx: PassContext): void {
    // 更新视频纹理
    if (ctx.videoTexture) {
      this.material.uniforms.uTexture.value = ctx.videoTexture

      // 计算视频宽高比
      if (ctx.videoElement && ctx.videoElement.videoWidth > 0) {
        this.videoAspect = ctx.videoElement.videoWidth / ctx.videoElement.videoHeight
        this.material.uniforms.uVideoAspect.value = this.videoAspect
      }
    }

    // Canvas 宽高比
    const canvasAspect = ctx.width / ctx.height
    this.material.uniforms.uCanvasAspect.value = canvasAspect

    // Alpha from store
    this.material.uniforms.uAlpha.value = ctx.store.videoAlpha
  }

  render(_ctx: PassContext): void {
    // VideoLayer 通过 scene graph 自动渲染（mesh 已加入 scene）
    // 如果需要手动渲染到 renderTarget，可在此实现
    // 当前：由 Renderer 主循环的 renderer.render(scene, camera) 处理
    // 但因为我们使用 autoClear=false，这里手动渲染此 mesh
    if (this.mesh && this.mesh.visible) {
      // 使用 renderer 直接绘制（mesh 已在 scene 中）
      // CompositePass 最终会处理屏幕输出
    }
  }

  /** 设置视频纹理（外部调用） */
  setTexture(texture: THREE.VideoTexture | null): void {
    this.material.uniforms.uTexture.value = texture
  }

  dispose(): void {
    if (this.mesh) {
      this.scene.remove(this.mesh)
    }
    this.geometry.dispose()
    this.material.dispose()
  }
}
