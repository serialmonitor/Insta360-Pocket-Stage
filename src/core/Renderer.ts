/**
 * Renderer.ts — CHRONO-MORPH 主渲染控制器
 *
 * 职责：
 * 1. 初始化 Three.js WebGLRenderer (WebGL2)、场景、正交相机
 * 2. 定义 PassContext 与 Pass 接口（下游 agent 的契约）
 * 3. 按管线顺序实例化并调度所有 Pass
 * 4. requestAnimationFrame 主循环
 *
 * ⚠️ 下游 agent 请勿修改此文件，只需实现各自的 Pass stub。
 */

import * as THREE from 'three'
import { useStore, type ChronoMorphState } from '../state/store'

// ─── Pass 契约类型 ───────────────────────────────────────────────────────────

/** MediaPipe Pose Landmark (33 points) */
export interface PoseLandmark {
  x: number          // normalized 0-1
  y: number          // normalized 0-1
  z: number          // relative depth
  visibility: number // 0-1
}

/** 每个关节点的运动数据 */
export interface JointMotion {
  velocity: THREE.Vector2      // 帧间速度
  acceleration: THREE.Vector2  // 加速度
  speed: number                // velocity magnitude
  exceedsThreshold: boolean    // 是否超过运动阈值
}

/** Pass 之间共享的渲染目标字典 */
export type RenderTargetDict = Record<string, THREE.WebGLRenderTarget>

/** 所有 Pass 共享的上下文 */
export interface PassContext {
  // Three.js 核心
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.OrthographicCamera
  width: number
  height: number

  // 时间
  deltaTime: number
  elapsedTime: number
  frameCount: number

  // 视频
  videoTexture: THREE.VideoTexture | null
  videoElement: HTMLVideoElement | null

  // 姿态
  poseLandmarks: PoseLandmark[] | null  // 33 points or null
  posePresent: boolean

  // 运动
  motionData: JointMotion[] | null      // per-joint motion, index matches landmark

  // 音频
  audioBass: number           // 0-1 normalized bass energy
  audioSpectrum: Float32Array | null  // full spectrum if available

  // Store 快照
  store: ChronoMorphState

  // Pass 间共享的 render targets
  renderTargets: RenderTargetDict

  // 通用数据传递槽（Pass 之间可自由存取）
  shared: Record<string, unknown>
}

/** 统一 Pass 接口 */
export interface Pass {
  /** 每帧更新逻辑（计算、准备数据） */
  update?(ctx: PassContext): void
  /** 每帧渲染逻辑（绘制到 renderTarget 或屏幕） */
  render?(ctx: PassContext): void
  /** 清理资源 */
  dispose?(): void
}

// ─── 管线 Pass 导入 ──────────────────────────────────────────────────────────

import { VideoLayer } from './VideoLayer'
import { PoseTracker } from './PoseTracker'
import { MotionField } from './MotionField'
import { AudioAnalyzer } from './AudioAnalyzer'
import { ParticleSystem } from './ParticleSystem'
import { AfterimagePass } from './AfterimagePass'
import { SkeletonLines } from './SkeletonLines'
import { AsciiPass } from './AsciiPass'
import { GeometryPhantom } from './GeometryPhantom'
import { CompositePass } from './CompositePass'
import { Exporter } from './Exporter'

// ─── 管线顺序 ────────────────────────────────────────────────────────────────

const PIPELINE_ORDER = [
  'VideoLayer',
  'PoseTracker',
  'MotionField',
  'AudioAnalyzer',
  'ParticleSystem',
  'AfterimagePass',
  'SkeletonLines',
  'AsciiPass',
  'GeometryPhantom',
  'CompositePass',
] as const

// ─── Renderer 主类 ───────────────────────────────────────────────────────────

export class Renderer {
  private container: HTMLElement
  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene
  private camera!: THREE.OrthographicCamera
  private clock = new THREE.Clock()
  private frameCount = 0
  private animationId: number | null = null
  private disposed = false

  // Video
  private videoElement: HTMLVideoElement | null = null
  private videoTexture: THREE.VideoTexture | null = null
  private cameraStream: MediaStream | null = null

  // Pass instances (按管线顺序)
  private passes: Pass[] = []
  private videoLayer!: VideoLayer
  private poseTracker!: PoseTracker
  private motionField!: MotionField
  private audioAnalyzer!: AudioAnalyzer
  private particleSystem!: ParticleSystem
  private afterimagePass!: AfterimagePass
  private skeletonLines!: SkeletonLines
  private asciiPass!: AsciiPass
  private geometryPhantom!: GeometryPhantom
  private compositePass!: CompositePass
  private exporter!: Exporter

  // Shared context state
  private renderTargets: RenderTargetDict = {}
  private shared: Record<string, unknown> = {}

  // Pose & Motion data (由 PoseTracker/MotionField 写入)
  private poseLandmarks: PoseLandmark[] | null = null
  private posePresent = false
  private motionData: JointMotion[] | null = null

  // Audio data (由 AudioAnalyzer 写入)
  private audioBass = 0
  private audioSpectrum: Float32Array | null = null

  constructor(container: HTMLElement) {
    this.container = container
  }

  /** 初始化渲染器、相机、视频、所有 Pass */
  init(): void {
    const width = this.container.clientWidth || window.innerWidth
    const height = this.container.clientHeight || window.innerHeight

    // WebGL2 Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true, // for export
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x0a0a0f, 1)
    this.renderer.autoClear = false
    this.container.appendChild(this.renderer.domElement)

    // Scene
    this.scene = new THREE.Scene()

    // Orthographic camera (适配竖屏)
    const aspect = width / height
    const frustumSize = 2 // NDC-like: -1 to 1
    this.camera = new THREE.OrthographicCamera(
      -frustumSize * aspect / 2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      100
    )
    this.camera.position.z = 10

    // Video element
    this.setupVideo()

    // Instantiate passes in pipeline order
    this.videoLayer = new VideoLayer(this.renderer, this.scene, this.camera)
    this.poseTracker = new PoseTracker()
    this.motionField = new MotionField()
    this.audioAnalyzer = new AudioAnalyzer()
    this.particleSystem = new ParticleSystem()
    this.afterimagePass = new AfterimagePass()
    this.skeletonLines = new SkeletonLines()
    this.asciiPass = new AsciiPass()
    this.geometryPhantom = new GeometryPhantom()
    this.compositePass = new CompositePass()
    this.exporter = new Exporter()

    this.passes = [
      this.videoLayer,
      this.poseTracker,
      this.motionField,
      this.audioAnalyzer,
      this.particleSystem,
      this.afterimagePass,
      this.skeletonLines,
      this.asciiPass,
      this.geometryPhantom,
      this.compositePass,
    ]

    // Resize handler
    window.addEventListener('resize', this.onResize)

    // Start loop
    this.clock.start()
    this.loop()
  }

  private setupVideo(): void {
    const store = useStore.getState()
    this.videoElement = document.createElement('video')
    this.videoElement.src = store.videoSrc
    this.videoElement.crossOrigin = 'anonymous'
    this.videoElement.loop = true
    this.videoElement.muted = true  // 必须 muted 才能自动播放；AudioAnalyzer 通过 Web Audio API 获取音频
    this.videoElement.playsInline = true
    this.videoElement.preload = 'auto'

    this.videoElement.addEventListener('loadedmetadata', () => {
      if (!this.videoElement) return
      useStore.getState().setDuration(this.videoElement.duration)

      if (this.videoTexture) this.videoTexture.dispose()
      this.videoTexture = new THREE.VideoTexture(this.videoElement)
      this.videoTexture.minFilter = THREE.LinearFilter
      this.videoTexture.magFilter = THREE.LinearFilter
      this.videoTexture.format = THREE.RGBAFormat
      this.videoTexture.colorSpace = THREE.SRGBColorSpace

      // Auto-play
      this.videoElement.play().then(() => {
        useStore.getState().setPlaying(true)
      }).catch(() => {
        // Autoplay blocked, wait for user interaction
        console.warn('[CHRONO-MORPH] Autoplay blocked. Click to play.')
      })
    })

    this.videoElement.addEventListener('timeupdate', () => {
      if (!this.videoElement) return
      useStore.getState().setCurrentTime(this.videoElement.currentTime)
    })

    // Load
    this.videoElement.load()
  }

  private onResize = (): void => {
    const width = this.container.clientWidth || window.innerWidth
    const height = this.container.clientHeight || window.innerHeight
    const aspect = width / height
    const frustumSize = 2

    this.renderer.setSize(width, height)
    this.camera.left = -frustumSize * aspect / 2
    this.camera.right = frustumSize * aspect / 2
    this.camera.top = frustumSize / 2
    this.camera.bottom = -frustumSize / 2
    this.camera.updateProjectionMatrix()
  }

  private loop = (): void => {
    if (this.disposed) return
    this.animationId = requestAnimationFrame(this.loop)

    const deltaTime = this.clock.getDelta()
    const elapsedTime = this.clock.getElapsedTime()
    this.frameCount++

    // Build PassContext
    const ctx: PassContext = {
      renderer: this.renderer,
      scene: this.scene,
      camera: this.camera,
      width: this.container.clientWidth || window.innerWidth,
      height: this.container.clientHeight || window.innerHeight,
      deltaTime,
      elapsedTime,
      frameCount: this.frameCount,
      videoTexture: this.videoTexture,
      videoElement: this.videoElement,
      poseLandmarks: this.poseLandmarks,
      posePresent: this.posePresent,
      motionData: this.motionData,
      audioBass: this.audioBass,
      audioSpectrum: this.audioSpectrum,
      store: useStore.getState(),
      renderTargets: this.renderTargets,
      shared: this.shared,
    }

    // Clear
    this.renderer.clear()

    // Execute pipeline: update all, then render all
    for (const pass of this.passes) {
      if (pass.update) {
        pass.update(ctx)
      }
    }
    for (const pass of this.passes) {
      if (pass.render) {
        pass.render(ctx)
      }
    }

    // Sync back mutable data from passes
    // PoseTracker writes to ctx.shared['poseLandmarks'] and ctx.shared['posePresent']
    if (ctx.shared['poseLandmarks'] !== undefined) {
      this.poseLandmarks = ctx.shared['poseLandmarks'] as PoseLandmark[] | null
    }
    if (ctx.shared['posePresent'] !== undefined) {
      this.posePresent = ctx.shared['posePresent'] as boolean
    }
    // MotionField writes to ctx.shared['motionData']
    if (ctx.shared['motionData'] !== undefined) {
      this.motionData = ctx.shared['motionData'] as JointMotion[] | null
    }
    // AudioAnalyzer writes to ctx.shared['audioBass'] and ctx.shared['audioSpectrum']
    if (ctx.shared['audioBass'] !== undefined) {
      this.audioBass = ctx.shared['audioBass'] as number
    }
    if (ctx.shared['audioSpectrum'] !== undefined) {
      this.audioSpectrum = ctx.shared['audioSpectrum'] as Float32Array | null
    }
  }

  /** 播放/暂停控制 */
  play(): void {
    this.videoElement?.play()
    useStore.getState().setPlaying(true)
  }

  pause(): void {
    this.videoElement?.pause()
    useStore.getState().setPlaying(false)
  }

  togglePlay(): void {
    if (this.videoElement?.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  /** 获取 video element 引用（供 Exporter 等使用） */
  getVideoElement(): HTMLVideoElement | null {
    return this.videoElement
  }

  /** 切换到摄像头实时输入（替代视频文件） */
  async startCamera(): Promise<void> {
    if (!this.videoElement) return
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    })
    // 停掉旧摄像头流（若有）
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach((t) => t.stop())
    }
    this.cameraStream = stream

    const v = this.videoElement
    v.pause()
    v.removeAttribute('src')
    v.srcObject = stream
    v.loop = false
    v.muted = true
    // srcObject 赋值会触发 loadedmetadata → 重建 VideoTexture、setDuration
    try {
      await v.play()
      useStore.getState().setPlaying(true)
    } catch {
      /* play 被拦截时等待用户手势 */
    }
    useStore.getState().setVideoSrc('camera')
  }

  /** 停止摄像头流并释放设备 */
  stopCamera(): void {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach((t) => t.stop())
      this.cameraStream = null
    }
    if (this.videoElement) {
      this.videoElement.srcObject = null
    }
  }

  /** 是否正在使用摄像头 */
  isUsingCamera(): boolean {
    return this.cameraStream !== null
  }

  /** 获取 renderer 引用 */
  getRenderer(): THREE.WebGLRenderer {
    return this.renderer
  }

  /** 获取 exporter 实例 */
  getExporter(): Exporter {
    return this.exporter
  }

  /** 销毁所有资源 */
  dispose(): void {
    this.disposed = true
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
    }
    window.removeEventListener('resize', this.onResize)

    // Dispose passes
    for (const pass of this.passes) {
      if (pass.dispose) pass.dispose()
    }
    if (this.exporter.dispose) this.exporter.dispose()

    // Dispose render targets
    for (const key of Object.keys(this.renderTargets)) {
      this.renderTargets[key].dispose()
    }

    // Dispose video
    this.stopCamera()
    if (this.videoElement) {
      this.videoElement.pause()
      this.videoElement.src = ''
      this.videoElement.load()
    }
    if (this.videoTexture) {
      this.videoTexture.dispose()
    }

    // Dispose Three.js
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }
}
