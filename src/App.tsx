import { useEffect, useRef, useState } from 'react'
import { Renderer } from './core/Renderer'
import { ControlPanel } from './ui/ControlPanel'

const DEFAULT_ASPECT = 480 / 852

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const [ready, setReady] = useState(false)
  const [aspect, setAspect] = useState(DEFAULT_ASPECT)

  useEffect(() => {
    if (!containerRef.current) return
    const renderer = new Renderer(containerRef.current)
    rendererRef.current = renderer
    renderer.init()
    setReady(true)

    const video = renderer.getVideoElement()
    const onMeta = () => {
      if (video && video.videoWidth > 0) {
        setAspect(video.videoWidth / video.videoHeight)
        requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
      }
    }
    video?.addEventListener('loadedmetadata', onMeta)
    if (video && video.videoWidth > 0) onMeta()

    return () => {
      video?.removeEventListener('loadedmetadata', onMeta)
      renderer.dispose()
      rendererRef.current = null
    }
  }, [])

  const portrait = aspect < 1

  return (
    <div className="relative w-full h-full bg-cyber-bg overflow-hidden flex items-center justify-center">
      {/* WebGL stage — constrained to the video aspect ratio, centered */}
      <div
        ref={containerRef}
        className="max-w-full max-h-full"
        style={{
          aspectRatio: String(aspect),
          width: portrait ? 'auto' : '100%',
          height: portrait ? '100%' : 'auto',
        }}
      />
      {ready && <ControlPanel rendererRef={rendererRef} />}
    </div>
  )
}

export default App
