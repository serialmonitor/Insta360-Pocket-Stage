import { useState, type ReactNode, type RefObject } from 'react'
import { useStore } from '../state/store'
import type { Renderer } from '../core/Renderer'
import { Slider } from './Slider'
import { ColorPicker } from './ColorPicker'
import { Toggle } from './Toggle'
import { PresetBar } from './PresetBar'

function Section({ title, accent = '#00fff2', children, defaultOpen = true }: {
  title: string
  accent?: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-cyber-border rounded-md bg-cyber-bg/40 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full px-3 py-2 hover:bg-cyber-surface/60 transition-colors"
      >
        <span className="font-display text-[11px] tracking-widest uppercase" style={{ color: accent }}>
          {title}
        </span>
        <span className="font-mono text-[10px] text-cyber-muted">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-3 pb-3 pt-1 space-y-2.5">{children}</div>}
    </div>
  )
}

function fmtTime(s: number): string {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export function ControlPanel({ rendererRef }: { rendererRef: RefObject<Renderer | null> }) {
  const store = useStore()
  const set = store.set
  const [recording, setRecording] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const patch = <K extends 'afterimage' | 'skeleton' | 'ascii' | 'geometry' | 'particle' | 'composite'>(
    key: K,
    partial: Partial<(typeof store)[K]>
  ) => {
    set({ [key]: { ...store[key], ...partial } } as never)
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const renderer = rendererRef.current
    renderer?.stopCamera()
    const video = renderer?.getVideoElement()
    if (video) {
      video.pause()
      video.srcObject = null
      video.loop = true
      video.src = url
      video.load()
    }
    store.setVideoSrc(url)
  }

  const handleCamera = async () => {
    const renderer = rendererRef.current
    if (!renderer) return
    try {
      await renderer.startCamera()
    } catch (err) {
      console.error('[CHRONO-MORPH] camera error', err)
      window.alert('无法访问摄像头：请检查浏览器权限，并确认通过 localhost / https 访问。')
    }
  }

  const handleExport = async () => {
    const renderer = rendererRef.current
    if (!renderer) return
    const exporter = renderer.getExporter()
    if (recording) {
      setRecording(false)
      await exporter.stopAndDownload(`chrono-morph-${Date.now()}.webm`)
    } else {
      exporter.startRecording(renderer.getRenderer().domElement, renderer.getVideoElement(), { fps: 30 })
      setRecording(true)
    }
  }

  const handleScreenshot = () => {
    const renderer = rendererRef.current
    if (!renderer) return
    const url = renderer.getExporter().captureScreenshot(renderer.getRenderer().domElement)
    if (!url) return
    const a = document.createElement('a')
    a.href = url
    a.download = `chrono-morph-${Date.now()}.png`
    a.click()
  }

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="absolute top-4 right-4 z-20 px-3 py-2 rounded-md border border-cyber-cyan/60 bg-cyber-surface/80 backdrop-blur-sm font-display text-[11px] tracking-widest uppercase text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
      >
        ⚙ Panel
      </button>
    )
  }

  return (
    <div className="absolute top-4 right-4 z-20 w-[300px] max-h-[calc(100%-2rem)] flex flex-col rounded-lg border border-cyber-border bg-cyber-surface/85 backdrop-blur-md shadow-neon-cyan/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-cyber-border">
        <div>
          <h1 className="font-display text-sm tracking-widest text-cyber-cyan">CHRONO-MORPH</h1>
          <p className="font-mono text-[9px] text-cyber-muted">ULTIMATE // v1.0</p>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          className="font-mono text-xs text-cyber-muted hover:text-cyber-cyan"
        >
          ▸
        </button>
      </div>

      {/* Transport */}
      <div className="px-3 py-2 border-b border-cyber-border space-y-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => rendererRef.current?.togglePlay()}
            className="px-3 py-1.5 rounded border border-cyber-cyan/60 font-mono text-[10px] uppercase tracking-wider text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
          >
            {store.isPlaying ? '❚❚ Pause' : '▶ Play'}
          </button>
          <span className="font-mono text-[10px] text-cyber-muted tabular-nums">
            {fmtTime(store.currentTime)} / {fmtTime(store.duration)}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <label className="flex-1 px-2 py-1.5 rounded border border-cyber-border font-mono text-[10px] uppercase tracking-wider text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan transition-colors cursor-pointer text-center">
            ⬆ Video
            <input type="file" accept="video/*" onChange={handleUpload} className="hidden" />
          </label>
          <button
            type="button"
            onClick={handleCamera}
            className="flex-1 px-2 py-1.5 rounded border border-cyber-border font-mono text-[10px] uppercase tracking-wider text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
          >
            ◎ Camera
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleExport}
            className="flex-1 px-2 py-1.5 rounded border font-mono text-[10px] uppercase tracking-wider transition-colors"
            style={{
              borderColor: recording ? '#ff00e5' : '#1e1e2e',
              color: recording ? '#ff00e5' : '#64748b',
              boxShadow: recording ? '0 0 8px #ff00e566' : 'none',
            }}
          >
            {recording ? '⏹ Stop' : '● Rec'}
          </button>
          <button
            type="button"
            onClick={handleScreenshot}
            className="px-2 py-1.5 rounded border border-cyber-border font-mono text-[10px] uppercase tracking-wider text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
            title="screenshot"
          >
            ◉
          </button>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5 chrono-scroll">
        <Section title="Global">
          <Slider label="Video Alpha" value={store.videoAlpha} min={0} max={1} onChange={(v) => set({ videoAlpha: v })} />
          <Slider label="Bass Gain" value={store.audioBassGain} min={0} max={3} accent="#f59e0b" onChange={(v) => set({ audioBassGain: v })} />
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted">Quality</span>
            <div className="flex gap-1">
              {(['low', 'medium', 'high'] as const).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => set({ quality: q })}
                  className="px-2 py-0.5 rounded font-mono text-[9px] uppercase border transition-colors"
                  style={{
                    borderColor: store.quality === q ? '#00fff2' : '#1e1e2e',
                    color: store.quality === q ? '#00fff2' : '#64748b',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Afterimage" accent="#00fff2">
          <Slider label="Fade" value={store.afterimage.fade} min={0} max={1} onChange={(v) => patch('afterimage', { fade: v })} />
          <Slider label="Sensitivity" value={store.afterimage.sensitivity} min={0} max={1} onChange={(v) => patch('afterimage', { sensitivity: v })} />
          <ColorPicker label="Tint" value={store.afterimage.color} onChange={(v) => patch('afterimage', { color: v })} />
        </Section>

        <Section title="Skeleton" accent="#ff00e5">
          <Toggle label="Enabled" accent="#ff00e5" checked={store.skeleton.enabled} onChange={(v) => patch('skeleton', { enabled: v })} />
          <Slider label="Grid Density" value={store.skeleton.gridDensity} min={0} max={30} step={1} accent="#ff00e5" onChange={(v) => patch('skeleton', { gridDensity: v })} />
          <Slider label="Link Distance" value={store.skeleton.linkDistance} min={0} max={1} accent="#ff00e5" onChange={(v) => patch('skeleton', { linkDistance: v })} />
          <ColorPicker label="Color" value={store.skeleton.color} onChange={(v) => patch('skeleton', { color: v })} />
        </Section>

        <Section title="Particles" accent="#00fff2" defaultOpen={false}>
          <Slider label="Emission Rate" value={store.particle.emissionRate} min={0} max={800} step={1} onChange={(v) => patch('particle', { emissionRate: v })} />
          <Slider label="Size" value={store.particle.size} min={0.5} max={8} step={0.1} onChange={(v) => patch('particle', { size: v })} />
          <Slider label="Gravity" value={store.particle.gravity} min={-2} max={2} step={0.05} onChange={(v) => patch('particle', { gravity: v })} />
          <Slider label="Max Count" value={store.particle.maxCount} min={500} max={20000} step={100} onChange={(v) => patch('particle', { maxCount: v })} />
          <ColorPicker label="Color" value={store.particle.color} onChange={(v) => patch('particle', { color: v })} />
        </Section>

        <Section title="ASCII" accent="#00fff2" defaultOpen={false}>
          <Toggle label="Enabled" checked={store.ascii.enabled} onChange={(v) => patch('ascii', { enabled: v })} />
          <Slider label="Density" value={store.ascii.density} min={16} max={120} step={1} onChange={(v) => patch('ascii', { density: v })} />
          <ColorPicker label="Color" value={store.ascii.color} onChange={(v) => patch('ascii', { color: v })} />
        </Section>

        <Section title="Geometry" accent="#8b5cf6" defaultOpen={false}>
          <Toggle label="Enabled" accent="#8b5cf6" checked={store.geometry.enabled} onChange={(v) => patch('geometry', { enabled: v })} />
          <Slider label="Size" value={store.geometry.size} min={0.2} max={3} step={0.05} accent="#8b5cf6" onChange={(v) => patch('geometry', { size: v })} />
          <Slider label="Mask Strength" value={store.geometry.maskStrength} min={0} max={1} accent="#8b5cf6" onChange={(v) => patch('geometry', { maskStrength: v })} />
          <ColorPicker label="Filter" value={store.geometry.filterColor} onChange={(v) => patch('geometry', { filterColor: v })} />
        </Section>

        <Section title="Composite" accent="#f59e0b" defaultOpen={false}>
          <Slider label="Bloom" value={store.composite.bloomStrength} min={0} max={2} accent="#f59e0b" onChange={(v) => patch('composite', { bloomStrength: v })} />
          <Slider label="Mask Strength" value={store.composite.maskStrength} min={0} max={1} accent="#f59e0b" onChange={(v) => patch('composite', { maskStrength: v })} />
          <ColorPicker label="Filter" value={store.composite.filterColor} onChange={(v) => patch('composite', { filterColor: v })} />
        </Section>

        <Section title="Presets" accent="#ff00e5">
          <PresetBar />
        </Section>
      </div>
    </div>
  )
}
