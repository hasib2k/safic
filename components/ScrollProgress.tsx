import { useEffect, useState } from 'react'

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.pageYOffset
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight > 0) {
        const progress = (currentScroll / scrollHeight) * 100
        setScrollProgress(Math.min(progress, 100))
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-progress fixed top-0 left-0 h-1 z-50 transition-transform duration-150 ease-out"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ 
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-gold) 100%)'
      }}
    />
  )
}

export default ScrollProgress
