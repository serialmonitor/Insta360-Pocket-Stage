/**
 * Exporter.ts — 导出/录制模块
 *
 * 用 canvas.captureStream() 抓取渲染画面，混入视频元素音轨，经 MediaRecorder
 * 录制为 webm；支持 PNG 截图。不在渲染管线中，由 UI 调用。
 */

import type { Pass, PassContext } from './Renderer'

function pickMimeType(): string {
  const candidates = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm;codecs=vp9',
    'video/webm',
  ]
  for (const c of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(c)) return c
  }
  return 'video/webm'
}

export class Exporter implements Pass {
  private mediaRecorder: MediaRecorder | null = null
  private chunks: Blob[] = []
  private recording = false

  constructor() {
    // noop
  }

  update(_ctx: PassContext): void {}
  render(_ctx: PassContext): void {}

  get isRecording(): boolean {
    return this.recording
  }

  startRecording(
    canvas: HTMLCanvasElement,
    audioElement?: HTMLVideoElement | null,
    options?: { mimeType?: string; bitrate?: number; fps?: number }
  ): void {
    if (this.recording) return
    const fps = options?.fps ?? 30
    const stream = canvas.captureStream(fps)

    // 混入音轨（视频元素需已 unmute，见 AudioAnalyzer）
    if (audioElement) {
      const el = audioElement as HTMLVideoElement & {
        captureStream?: () => MediaStream
        mozCaptureStream?: () => MediaStream
      }
      try {
        const capture = el.captureStream ?? el.mozCaptureStream
        const audioStream = capture?.call(el)
        const track = audioStream?.getAudioTracks()[0]
        if (track) stream.addTrack(track)
      } catch (err) {
        console.warn('[CHRONO-MORPH] 音轨捕获失败，导出无声:', err)
      }
    }

    const mimeType = options?.mimeType ?? pickMimeType()
    this.chunks = []
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: options?.bitrate ?? 8_000_000,
    })
    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.chunks.push(e.data)
    }
    this.mediaRecorder.start(100)
    this.recording = true
  }

  stopRecording(): Promise<Blob | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || !this.recording) {
        resolve(null)
        return
      }
      const mimeType = this.mediaRecorder.mimeType || 'video/webm'
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: mimeType })
        this.chunks = []
        this.recording = false
        resolve(blob)
      }
      this.mediaRecorder.stop()
    })
  }

  /** 停止录制并触发浏览器下载 */
  async stopAndDownload(filename = 'chrono-morph.webm'): Promise<void> {
    const blob = await this.stopRecording()
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  captureScreenshot(canvas: HTMLCanvasElement): string | null {
    try {
      return canvas.toDataURL('image/png')
    } catch (err) {
      console.warn('[CHRONO-MORPH] 截图失败:', err)
      return null
    }
  }

  dispose(): void {
    if (this.recording && this.mediaRecorder) {
      try {
        this.mediaRecorder.stop()
      } catch (err) {
        void err
      }
    }
    this.recording = false
    this.mediaRecorder = null
    this.chunks = []
  }
}
