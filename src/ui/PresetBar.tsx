import { useState } from 'react'
import { useStore } from '../state/store'

export function PresetBar() {
  const presets = useStore((s) => s.presets)
  const savePreset = useStore((s) => s.savePreset)
  const applyPreset = useStore((s) => s.applyPreset)
  const deletePreset = useStore((s) => s.deletePreset)
  const [name, setName] = useState('')

  const handleSave = () => {
    const n = name.trim()
    if (!n) return
    savePreset(n)
    setName('')
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-1.5">
        <input
          type="text"
          value={name}
          placeholder="preset name…"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="flex-1 min-w-0 bg-cyber-bg border border-cyber-border rounded px-2 py-1 font-mono text-[10px] text-cyber-text placeholder:text-cyber-muted focus:outline-none focus:border-cyber-cyan"
        />
        <button
          type="button"
          onClick={handleSave}
          className="px-2 py-1 rounded border border-cyber-cyan/60 font-mono text-[10px] uppercase tracking-wider text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
        >
          Save
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {presets.map((p) => (
          <div
            key={p.id}
            className="group flex items-center gap-1 rounded border border-cyber-border bg-cyber-bg/60 pl-2 pr-1 py-0.5 hover:border-cyber-magenta/60 transition-colors"
          >
            <button
              type="button"
              onClick={() => applyPreset(p.id)}
              className="font-mono text-[10px] text-cyber-text hover:text-cyber-magenta transition-colors"
            >
              {p.name}
            </button>
            {p.timestamp !== 0 && (
              <button
                type="button"
                onClick={() => deletePreset(p.id)}
                className="font-mono text-[10px] text-cyber-muted hover:text-cyber-magenta leading-none"
                title="delete"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
