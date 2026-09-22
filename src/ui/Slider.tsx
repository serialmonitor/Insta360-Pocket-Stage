interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  accent?: string
  onChange: (v: number) => void
}

export function Slider({ label, value, min, max, step = 0.01, accent = '#00fff2', onChange }: SliderProps) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0
  return (
    <label className="block select-none">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted">{label}</span>
        <span className="font-mono text-[10px] text-cyber-text tabular-nums">
          {Number.isInteger(step) ? value.toFixed(0) : value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="chrono-slider w-full"
        style={{
          background: `linear-gradient(to right, ${accent} 0%, ${accent} ${pct}%, #1e1e2e ${pct}%, #1e1e2e 100%)`,
        }}
      />
    </label>
  )
}
