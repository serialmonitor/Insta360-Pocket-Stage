interface ColorPickerProps {
  label: string
  value: string
  onChange: (v: string) => void
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <label className="flex items-center justify-between gap-2 select-none">
      <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] text-cyber-text tabular-nums">{value}</span>
        <div
          className="relative w-6 h-6 rounded border border-cyber-border overflow-hidden"
          style={{ boxShadow: `0 0 6px ${value}66` }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: value }} />
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </label>
  )
}
