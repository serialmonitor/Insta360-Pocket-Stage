/**
 * SkeletonLines.ts — 骨骼连线 + 网格采样点 Pass
 *
 * 读取 ctx.poseLandmarks，按 MediaPipe Pose 拓扑画骨骼线；在每段骨骼上按
 * gridDensity 插值群点；对归一化距离 < linkDistance 的关键点对绘制额外连线。
 * 直接加入 ctx.scene（由 CompositePass 渲染进 tScene）。
 */

import * as THREE from 'three'
import type { Pass, PassContext } from './Renderer'
import { mediapipeToWorld } from './coords'

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8],
  [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19],
  [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24],
  [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32],
]

const LINE_CAP = 4000 // 顶点上限（2000 线段）
const POINT_CAP = 2048

export class SkeletonLines implements Pass {
  private lineGeo: THREE.BufferGeometry
  private lineMat: THREE.LineBasicMaterial
  private lines: THREE.LineSegments
  private pointGeo: THREE.BufferGeometry
  private pointMat: THREE.PointsMaterial
  private points: THREE.Points

  private linePos: Float32Array
  private pointPos: Float32Array
  private sceneRef: THREE.Scene | null = null

  constructor() {
    this.linePos = new Float32Array(LINE_CAP * 3)
    this.pointPos = new Float32Array(POINT_CAP * 3)

    this.lineGeo = new THREE.BufferGeometry()
    this.lineGeo.setAttribute('position', new THREE.BufferAttribute(this.linePos, 3).setUsage(THREE.DynamicDrawUsage))
    this.lineGeo.setDrawRange(0, 0)
    this.lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#ff00e5'),
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    })
    this.lines = new THREE.LineSegments(this.lineGeo, this.lineMat)
    this.lines.frustumCulled = false
    this.lines.renderOrder = 10

    this.pointGeo = new THREE.BufferGeometry()
    this.pointGeo.setAttribute('position', new THREE.BufferAttribute(this.pointPos, 3).setUsage(THREE.DynamicDrawUsage))
    this.pointGeo.setDrawRange(0, 0)
    this.pointMat = new THREE.PointsMaterial({
      color: new THREE.Color('#ff00e5'),
      size: 4,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    })
    this.points = new THREE.Points(this.pointGeo, this.pointMat)
    this.points.frustumCulled = false
    this.points.renderOrder = 11
  }

  update(ctx: PassContext): void {
    if (!this.sceneRef) {
      this.sceneRef = ctx.scene
      ctx.scene.add(this.lines)
      ctx.scene.add(this.points)
    }
    const s = ctx.store.skeleton
    const visible = s.enabled && ctx.posePresent && !!ctx.poseLandmarks
    this.lines.visible = visible
    this.points.visible = visible
    if (!visible) {
      this.lineGeo.setDrawRange(0, 0)
      this.pointGeo.setDrawRange(0, 0)
      return
    }

    this.lineMat.color.set(s.color)
    this.pointMat.color.set(s.color)

    const lm = ctx.poseLandmarks!
    const cam = ctx.camera
    const camW = cam.right - cam.left
    const camH = cam.top - cam.bottom

    let lv = 0 // line vertex count
    let pv = 0 // point vertex count

    const pushLine = (ax: number, ay: number, bx: number, by: number) => {
      if (lv + 2 > LINE_CAP) return
      let o = lv * 3
      this.linePos[o] = ax; this.linePos[o + 1] = ay; this.linePos[o + 2] = 0
      o += 3
      this.linePos[o] = bx; this.linePos[o + 1] = by; this.linePos[o + 2] = 0
      lv += 2
    }
    const pushPoint = (x: number, y: number) => {
      if (pv + 1 > POINT_CAP) return
      const o = pv * 3
      this.pointPos[o] = x; this.pointPos[o + 1] = y; this.pointPos[o + 2] = 0
      pv += 1
    }

    // 骨骼线 + 段上插值群点
    const density = Math.max(0, Math.floor(s.gridDensity))
    for (const [a, b] of CONNECTIONS) {
      const la = lm[a]
      const lb = lm[b]
      if (!la || !lb || la.visibility < 0.3 || lb.visibility < 0.3) continue
      const wa = mediapipeToWorld(la.x, la.y, camW, camH)
      const wb = mediapipeToWorld(lb.x, lb.y, camW, camH)
      pushLine(wa.x, wa.y, wb.x, wb.y)
      for (let g = 1; g <= density; g++) {
        const t = g / (density + 1)
        pushPoint(wa.x + (wb.x - wa.x) * t, wa.y + (wb.y - wa.y) * t)
      }
    }

    // 关键点作为节点
    for (let i = 0; i < lm.length; i++) {
      if (lm[i].visibility < 0.3) continue
      const w = mediapipeToWorld(lm[i].x, lm[i].y, camW, camH)
      pushPoint(w.x, w.y)
    }

    // 距离 < linkDistance 的关键点对额外连线
    const link = s.linkDistance
    for (let i = 0; i < lm.length; i++) {
      const a = lm[i]
      if (a.visibility < 0.3) continue
      for (let j = i + 1; j < lm.length; j++) {
        const b = lm[j]
        if (b.visibility < 0.3) continue
        const dx = a.x - b.x
        const dy = a.y - b.y
        if (dx * dx + dy * dy < link * link) {
          const wa = mediapipeToWorld(a.x, a.y, camW, camH)
          const wb = mediapipeToWorld(b.x, b.y, camW, camH)
          pushLine(wa.x, wa.y, wb.x, wb.y)
        }
      }
    }

    this.lineGeo.setDrawRange(0, lv)
    this.pointGeo.setDrawRange(0, pv)
    ;(this.lineGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
    ;(this.pointGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true
  }

  render(_ctx: PassContext): void {
    // 通过 scene graph 由 CompositePass 渲染
  }

  dispose(): void {
    if (this.sceneRef) {
      this.sceneRef.remove(this.lines)
      this.sceneRef.remove(this.points)
    }
    this.lineGeo.dispose()
    this.lineMat.dispose()
    this.pointGeo.dispose()
    this.pointMat.dispose()
  }
}
