/**
 * AudioAnalyzer.ts — 音频分析 Pass
 *
 * 从 ctx.videoElement 建立 Web Audio 图，提取 20-150Hz 低频能量，
 * 平滑归一化后乘 store.audioBassGain，写入 ctx.shared['audioBass']。
 *
 * 约束：Renderer 中视频 muted=true 且自动播放。浏览器要求 AudioContext 必须在
 * 用户手势后创建/resume；createMediaElementSource 会接管元素音频，muted 元素经
 * Web Audio 输出为静音，故建立音频图后需 unmute 元素。本类自带一次性手势监听，
 * 无需外部接线即可工作（UI 播放按钮的点击即是有效手势）。
 */

import type { Pass, PassContext } from './Renderer'

export class AudioAnalyzer implements Pass {
  private audioContext: AudioContext | null = null
  private analyser: AnalyserNode | null = null
  private source: MediaElementAudioSourceNode | null = null
  private freqData: Uint8Array | null = null
  private smoothedBass = 0
  private connectedEl: HTMLVideoElement | null = null
  private gestured = false

  constructor() {
    const onGesture = () => {
      this.gestured = true
    }
    window.addEventListener('pointerdown', onGesture, { once: true })
    window.addEventListener('keydown', onGesture, { once: true })
  }

  /** 建立并恢复音频图。可由 UI 在用户手势时显式调用，或由 update 自动触发。 */
  ensureContext(videoEl: HTMLVideoElement | null): void {
    if (!videoEl) return
    if (!this.audioContext) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.audioContext = new Ctor()
      this.analyser = this.audioContext.createAnalyser()
      this.analyser.fftSize = 1024
      this.analyser.smoothingTimeConstant = 0.7
      this.freqData = new Uint8Array(this.analyser.frequencyBinCount)
    }
    if (this.connectedEl !== videoEl && this.audioContext && this.analyser) {
      try {
        this.source = this.audioContext.createMediaElementSource(videoEl)
        this.source.connect(this.analyser)
        this.analyser.connect(this.audioContext.destination)
        this.connectedEl = videoEl
        videoEl.muted = false // 经 Web Audio 输出，需取消静音才有信号
      } catch (err) {
        void err // 该元素已建过 source
      }
    }
    if (this.audioContext.state === 'suspended') {
      void this.audioContext.resume()
    }
  }

  update(ctx: PassContext): void {
    if (this.gestured && ctx.videoElement) {
      this.ensureContext(ctx.videoElement)
    }
    if (!this.analyser || !this.freqData) {
      ctx.shared['audioBass'] = 0
      return
    }
    this.analyser.getByteFrequencyData(this.freqData)

    const sampleRate = this.audioContext?.sampleRate ?? 44100
    const binHz = sampleRate / this.analyser.fftSize
    const lo = Math.max(1, Math.floor(20 / binHz))
    const hi = Math.min(this.freqData.length - 1, Math.ceil(150 / binHz))

    let sum = 0
    for (let i = lo; i <= hi; i++) sum += this.freqData[i]
    const avg = sum / Math.max(1, hi - lo + 1) / 255

    const gained = Math.min(1, avg * ctx.store.audioBassGain)
    // 快升慢降，突出鼓点脉冲
    if (gained > this.smoothedBass) this.smoothedBass = gained
    else this.smoothedBass += (gained - this.smoothedBass) * 0.15

    ctx.shared['audioBass'] = this.smoothedBass
    ctx.shared['audioSpectrum'] = Float32Array.from(this.freqData, (v) => v / 255)
  }

  render(_ctx: PassContext): void {
    // 不渲染
  }

  dispose(): void {
    try {
      this.source?.disconnect()
      this.analyser?.disconnect()
    } catch (err) {
      void err
    }
    void this.audioContext?.close()
    this.audioContext = null
    this.analyser = null
    this.source = null
    this.connectedEl = null
  }
}
