import { create } from 'zustand'

// ─── Types ───────────────────────────────────────────────────────────────────

export type QualityLevel = 'low' | 'medium' | 'high'

export interface AfterimageParams {
  fade: number          // 0-1, trail persistence
  sensitivity: number   // 0-1, motion detection threshold
  color: string         // hex color tint
}

export interface SkeletonParams {
  color: string         // hex
  gridDensity: number   // int, particles per bone segment
  linkDistance: number  // 0-1, max link distance normalized
  enabled: boolean
}

export interface AsciiParams {
  enabled: boolean
  density: number       // int, character grid resolution
  color: string         // hex
}

export interface GeometryParams {
  size: number          // geometry scale
  maskStrength: number  // 0-1
  filterColor: string   // hex
  enabled: boolean
}

export interface ParticleParams {
  emissionRate: number  // particles per second
  size: number          // particle size
  gravity: number       // gravity strength
  color: string         // hex
  maxCount: number      // max alive particles
}

export interface CompositeParams {
  bloomStrength: number // 0-2
  filterColor: string   // hex
  maskStrength: number  // 0-1
}

export interface Preset {
  id: string
  name: string
  timestamp: number
  params: Omit<ChronoMorphState, 'presets' | 'savePreset' | 'applyPreset' | 'deletePreset' | 'isPlaying' | 'currentTime' | 'duration' | 'videoSrc' | 'setPlaying' | 'setCurrentTime' | 'setDuration' | 'setVideoSrc' | 'set'>
}

// ─── Built-in Presets ────────────────────────────────────────────────────────

const BUILTIN_PRESETS: Preset[] = [
  {
    id: 'preset-cyber-ghost',
    name: 'Cyber Ghost',
    timestamp: 0,
    params: {
      videoAlpha: 0.3,
      audioBassGain: 1.5,
      afterimage: { fade: 0.85, sensitivity: 0.6, color: '#00fff2' },
      skeleton: { color: '#ff00e5', gridDensity: 12, linkDistance: 0.4, enabled: true },
      ascii: { enabled: true, density: 48, color: '#00fff2' },
      geometry: { size: 1.2, maskStrength: 0.7, filterColor: '#8b5cf6', enabled: true },
      particle: { emissionRate: 200, size: 2.5, gravity: -0.3, color: '#00fff2', maxCount: 5000 },
      composite: { bloomStrength: 1.2, filterColor: '#0a0a2e', maskStrength: 0.5 },
      quality: 'high',
    },
  },
  {
    id: 'preset-neon-pulse',
    name: 'Neon Pulse',
    timestamp: 0,
    params: {
      videoAlpha: 0.6,
      audioBassGain: 1.8,
      afterimage: { fade: 0.7, sensitivity: 0.4, color: '#ff00e5' },
      skeleton: { color: '#00fff2', gridDensity: 8, linkDistance: 0.6, enabled: true },
      ascii: { enabled: false, density: 32, color: '#ffffff' },
      geometry: { size: 0.8, maskStrength: 0.4, filterColor: '#ff00e5', enabled: false },
      particle: { emissionRate: 400, size: 1.8, gravity: 0.5, color: '#ff00e5', maxCount: 8000 },
      composite: { bloomStrength: 1.6, filterColor: '#1a0020', maskStrength: 0.3 },
      quality: 'medium',
    },
  },
]

// ─── State Interface ─────────────────────────────────────────────────────────

export interface ChronoMorphState {
  // Global
  videoAlpha: number
  audioBassGain: number
  quality: QualityLevel

  // Sub-modules
  afterimage: AfterimageParams
  skeleton: SkeletonParams
  ascii: AsciiParams
  geometry: GeometryParams
  particle: ParticleParams
  composite: CompositeParams

  // Playback
  isPlaying: boolean
  currentTime: number
  duration: number
  videoSrc: string

  // Presets
  presets: Preset[]

  // Actions
  setPlaying: (v: boolean) => void
  setCurrentTime: (t: number) => void
  setDuration: (d: number) => void
  setVideoSrc: (src: string) => void
  savePreset: (name: string) => void
  applyPreset: (id: string) => void
  deletePreset: (id: string) => void
  set: (partial: Partial<ChronoMorphState>) => void
}

// ─── Default Values ──────────────────────────────────────────────────────────

const DEFAULTS = {
  videoAlpha: 0.8,
  audioBassGain: 1.0,
  quality: 'medium' as QualityLevel,

  afterimage: {
    fade: 0.55,
    sensitivity: 0.4,
    color: '#00fff2',
  } as AfterimageParams,

  skeleton: {
    color: '#ff00e5',
    gridDensity: 10,
    linkDistance: 0.5,
    enabled: true,
  } as SkeletonParams,

  ascii: {
    enabled: false,
    density: 40,
    color: '#00fff2',
  } as AsciiParams,

  geometry: {
    size: 1.0,
    maskStrength: 0.5,
    filterColor: '#8b5cf6',
    enabled: false,
  } as GeometryParams,

  particle: {
    emissionRate: 150,
    size: 2.0,
    gravity: 0.2,
    color: '#00fff2',
    maxCount: 5000,
  } as ParticleParams,

  composite: {
    bloomStrength: 0.5,
    filterColor: '#0a0a1a',
    maskStrength: 0.4,
  } as CompositeParams,
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useStore = create<ChronoMorphState>((setState, getState) => ({
  ...DEFAULTS,

  // Playback state
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  videoSrc: '/samples/test-dance.mp4',

  // Presets
  presets: [...BUILTIN_PRESETS],

  // Actions
  setPlaying: (v) => setState({ isPlaying: v }),
  setCurrentTime: (t) => setState({ currentTime: t }),
  setDuration: (d) => setState({ duration: d }),
  setVideoSrc: (src) => setState({ videoSrc: src }),

  savePreset: (name: string) => {
    const state = getState()
    const preset: Preset = {
      id: `preset-${Date.now()}`,
      name,
      timestamp: Date.now(),
      params: {
        videoAlpha: state.videoAlpha,
        audioBassGain: state.audioBassGain,
        afterimage: { ...state.afterimage },
        skeleton: { ...state.skeleton },
        ascii: { ...state.ascii },
        geometry: { ...state.geometry },
        particle: { ...state.particle },
        composite: { ...state.composite },
        quality: state.quality,
      },
    }
    setState((s) => ({ presets: [...s.presets, preset] }))
  },

  applyPreset: (id: string) => {
    const state = getState()
    const preset = state.presets.find((p) => p.id === id)
    if (!preset) return
    setState({ ...preset.params })
  },

  deletePreset: (id: string) => {
    setState((s) => ({
      presets: s.presets.filter((p) => p.id !== id || p.timestamp === 0),
    }))
  },

  set: (partial) => setState(partial),
}))
