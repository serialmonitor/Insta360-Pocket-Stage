/**
 * coords.ts — 坐标转换工具
 * MediaPipe 归一化坐标 (左上原点, x∈[0,1], y∈[0,1])
 * ↔ Three.js NDC (中心原点, x∈[-1,1], y∈[-1,1], Y轴向上)
 *
 * 下游 agent 可直接 import 使用，勿修改函数签名。
 */

import * as THREE from 'three'

/**
 * MediaPipe 归一化坐标 → Three.js NDC (考虑竖屏宽高比)
 * @param mpX MediaPipe x (0-1, 左→右)
 * @param mpY MediaPipe y (0-1, 上→下)
 * @param aspect canvas宽高比 (width/height)，竖屏 < 1
 * @returns THREE.Vector2 in NDC space
 */
export function mediapipeToNDC(mpX: number, mpY: number, aspect: number): THREE.Vector2 {
  // Y翻转: MediaPipe y=0 是顶部, Three.js y=+1 是顶部
  const ndcX = mpX * 2 - 1
  const ndcY = -(mpY * 2 - 1)

  // 竖屏宽高比映射: 当 aspect < 1 时，X 范围需要缩放以保持正方形像素
  // 对于正交相机覆盖整个视口，NDC 已经是 [-1,1] 无需额外缩放
  // 但如果需要保持世界坐标中的正方形比例:
  const scaledX = ndcX * Math.min(aspect, 1)
  const scaledY = ndcY * Math.min(1 / aspect, 1)

  return new THREE.Vector2(
    aspect < 1 ? ndcX : scaledX,
    aspect < 1 ? scaledY : ndcY
  )
}

/**
 * MediaPipe 归一化坐标 → Three.js 世界坐标 (正交相机)
 * @param mpX MediaPipe x (0-1)
 * @param mpY MediaPipe y (0-1)
 * @param cameraWidth 正交相机宽度 (frustum width)
 * @param cameraHeight 正交相机高度 (frustum height)
 * @returns THREE.Vector3 世界坐标 (z=0)
 */
export function mediapipeToWorld(
  mpX: number,
  mpY: number,
  cameraWidth: number,
  cameraHeight: number
): THREE.Vector3 {
  const worldX = (mpX - 0.5) * cameraWidth
  const worldY = (0.5 - mpY) * cameraHeight  // Y翻转
  return new THREE.Vector3(worldX, worldY, 0)
}

/**
 * Three.js NDC → MediaPipe 归一化坐标
 * @param ndcX NDC x (-1 to 1)
 * @param ndcY NDC y (-1 to 1)
 * @returns [mpX, mpY] 归一化坐标 (0-1)
 */
export function ndcToMediapipe(ndcX: number, ndcY: number): [number, number] {
  const mpX = (ndcX + 1) / 2
  const mpY = (1 - ndcY) / 2  // Y翻转回来
  return [mpX, mpY]
}

/**
 * 像素坐标 → NDC
 * @param px 像素 x
 * @param py 像素 y (从顶部)
 * @param width canvas 宽度
 * @param height canvas 高度
 */
export function pixelToNDC(px: number, py: number, width: number, height: number): THREE.Vector2 {
  return new THREE.Vector2(
    (px / width) * 2 - 1,
    -(py / height) * 2 + 1
  )
}

/**
 * NDC → 像素坐标
 */
export function ndcToPixel(ndcX: number, ndcY: number, width: number, height: number): [number, number] {
  return [
    ((ndcX + 1) / 2) * width,
    ((1 - ndcY) / 2) * height,
  ]
}

/**
 * 计算竖屏视频在 canvas 中的 cover-fit 变换参数
 * 用于将视频纹理正确映射到 canvas（保持宽高比，裁切溢出）
 */
export function getCoverFitTransform(
  videoWidth: number,
  videoHeight: number,
  canvasWidth: number,
  canvasHeight: number
): { scaleX: number; scaleY: number; offsetX: number; offsetY: number } {
  const videoAspect = videoWidth / videoHeight
  const canvasAspect = canvasWidth / canvasHeight

  let scaleX = 1
  let scaleY = 1

  if (canvasAspect > videoAspect) {
    // canvas 更宽，以宽度为基准
    scaleY = videoAspect / canvasAspect
  } else {
    // canvas 更高，以高度为基准
    scaleX = canvasAspect / videoAspect
  }

  return { scaleX, scaleY, offsetX: 0, offsetY: 0 }
}
