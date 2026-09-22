interface ToggleProps {
  label: string
  checked: boolean
  accent?: string
  onChange: (v: boolean) => void
}

export function Toggle({ label, checked, accent = '#00fff2', onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between w-full select-none group"
    >
      <span className="font-mono text-[10px] uppercase tracking-wider text-cyber-muted group-hover:text-cyber-text transition-colors">
        {label}
      </span>
      <span
        className="relative w-9 h-4 rounded-full transition-colors duration-200 border"
        style={{
          backgroundColor: checked ? `${accent}33` : '#1e1e2e',
          borderColor: checked ? accent : '#1e1e2e',
          boxShadow: checked ? `0 0 6px ${accent}66` : 'none',
        }}
      >
        <span
          className="absolute top-0.5 w-3 h-3 rounded-full transition-all duration-200"
          style={{
            left: checked ? '18px' : '2px',
            backgroundColor: checked ? accent : '#64748b',
          }}
        />
      </span>
    </button>
  )
}
