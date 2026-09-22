/**
 * MotionField.ts — 运动场计算 Pass
 *
 * 读取 ctx.poseLandmarks，帧间差分计算每个关节的速度/加速度，
 * 标记超过运动阈值的节点，将 JointMotion[] 写入 ctx.shared['motionData']。
 */

import * as THREE from 'three'
import type { Pass, PassContext, PoseLandmark, JointMotion } from './Renderer'

export class MotionField implements Pass {
  private prevLandmarks: PoseLandmark[] | null = null
  private prevVelocity: THREE.Vector2[] = []

  constructor() {
    // noop
  }

  update(ctx: PassContext): void {
    const landmarks = ctx.poseLandmarks
    if (!landmarks || landmarks.length === 0) {
      ctx.shared['motionData'] = null
      this.prevLandmarks = null
      return
    }

    const dt = Math.max(ctx.deltaTime, 1e-3)
    // sensitivity 越低 → 阈值越低 → 越容易触发。归一化速度单位/秒。
    const sensitivity = ctx.store.afterimage.sensitivity
    const threshold = 0.15 + sensitivity * 0.9

    const motion: JointMotion[] = new Array(landmarks.length)

    for (let i = 0; i < landmarks.length; i++) {
      const cur = landmarks[i]
      const prev = this.prevLandmarks?.[i]

      const velocity = new THREE.Vector2(0, 0)
      if (prev) {
        velocity.set((cur.x - prev.x) / dt, (cur.y - prev.y) / dt)
      }

      const prevVel = this.prevVelocity[i] ?? new THREE.Vector2(0, 0)
      const acceleration = new THREE.Vector2(
        (velocity.x - prevVel.x) / dt,
        (velocity.y - prevVel.y) / dt
      )

      const speed = velocity.length()
      // 低可见度关节的运动不可信，抑制其触发
      const reliable = cur.visibility > 0.4
      const exceedsThreshold = reliable && speed > threshold

      motion[i] = { velocity, acceleration, speed, exceedsThreshold }
      this.prevVelocity[i] = velocity
    }

    ctx.shared['motionData'] = motion
    // 深拷贝当前帧作为历史（landmarks 引用每帧被替换，浅存引用即可）
    this.prevLandmarks = landmarks
  }

  render(_ctx: PassContext): void {
    // 仅计算数据
  }

  dispose(): void {
    this.prevLandmarks = null
    this.prevVelocity = []
  }
}
