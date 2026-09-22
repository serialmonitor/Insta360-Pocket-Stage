/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0f',
          surface: '#12121a',
          border: '#1e1e2e',
          cyan: '#00fff2',
          magenta: '#ff00e5',
          purple: '#8b5cf6',
          amber: '#f59e0b',
          text: '#e2e8f0',
          muted: '#64748b',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00fff2, 0 0 40px #00fff233',
        'neon-magenta': '0 0 10px #ff00e5, 0 0 40px #ff00e533',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
