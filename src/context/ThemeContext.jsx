import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const THEMES = ['light', 'dark', 'dev']

const THEME_KEY    = 'portfolio-theme'
const ONBOARD_KEY  = 'portfolio-onboarded'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Persist preference across sessions
    const stored = localStorage.getItem(THEME_KEY)
    if (stored && THEMES.includes(stored)) return stored
    // Respect OS preference on first visit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // True once the visitor has picked (or skipped) a theme via the picker
  const [onboarded, setOnboarded] = useState(() =>
    localStorage.getItem(ONBOARD_KEY) === '1'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  // Dev/QA helper: visiting ?reset-onboarding replays the picker once
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (!params.has('reset-onboarding')) return
    localStorage.removeItem(ONBOARD_KEY)
    setOnboarded(false)
    window.history.replaceState({}, '', window.location.pathname)
  }, [])

  // Cycle light → dark → dev → light
  const toggleTheme = () => setTheme(t => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length])

  // First-visit picker: set the theme and never show the picker again
  const pickTheme = (t) => {
    if (THEMES.includes(t)) setTheme(t)
    localStorage.setItem(ONBOARD_KEY, '1')
    setOnboarded(true)
  }

  // Allow skipping the picker without forcing a theme
  const skipTheme = () => {
    localStorage.setItem(ONBOARD_KEY, '1')
    setOnboarded(true)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, onboarded, pickTheme, skipTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}