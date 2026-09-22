/**
 * PoseTracker.ts — MediaPipe Pose 姿态追踪 Pass
 *
 * 初始化 PoseLandmarker (GPU delegate)，逐帧检测视频，将 33 个归一化关键点
 * 写入 ctx.shared['poseLandmarks']，检测状态写入 ctx.shared['posePresent']。
 */

import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision'
import type { Pass, PassContext, PoseLandmark } from './Renderer'

const WASM_BASE = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm'
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task'

export class PoseTracker implements Pass {
  private landmarker: PoseLandmarker | null = null
  private initializing = false
  private lastVideoTime = -1

  constructor() {
    void this.initialize()
  }

  private async initialize(): Promise<void> {
    if (this.initializing || this.landmarker) return
    this.initializing = true
    try {
      const fileset = await FilesetResolver.forVisionTasks(WASM_BASE)
      this.landmarker = await PoseLandmarker.createFromOptions(fileset, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numPoses: 1,
        minPoseDetectionConfidence: 0.5,
        minPosePresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
      })
    } catch (err) {
      console.error('[CHRONO-MORPH] PoseLandmarker init failed:', err)
    } finally {
      this.initializing = false
    }
  }

  update(ctx: PassContext): void {
    const video = ctx.videoElement
    if (!this.landmarker || !video || video.readyState < 2) return
    // 隔帧去重：仅在视频推进到新帧时检测
    if (video.currentTime === this.lastVideoTime) return
    this.lastVideoTime = video.currentTime

    try {
      const result = this.landmarker.detectForVideo(video, performance.now())
      const first = result.landmarks && result.landmarks[0]
      if (first && first.length > 0) {
        const landmarks: PoseLandmark[] = first.map((lm) => ({
          x: lm.x,
          y: lm.y,
          z: lm.z,
          visibility: lm.visibility ?? 1,
        }))
        ctx.shared['poseLandmarks'] = landmarks
        ctx.shared['posePresent'] = true
      } else {
        ctx.shared['poseLandmarks'] = null
        ctx.shared['posePresent'] = false
      }
    } catch (err) {
      // detectForVideo 偶发时间戳错误时静默跳过该帧
      void err
    }
  }

  render(_ctx: PassContext): void {
    // 不直接渲染
  }

  dispose(): void {
    this.landmarker?.close()
    this.landmarker = null
  }
}
