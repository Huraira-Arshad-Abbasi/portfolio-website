import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const scrollPositions = {}

export default function Scroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Restore saved position or go to top
    const saved = scrollPositions[pathname]
    window.scrollTo(0, saved ?? 0)

    // Throttle: only write every 200ms
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollPositions[pathname] = window.scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}