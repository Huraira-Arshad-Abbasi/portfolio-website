import { createContext, useContext, useEffect, useState } from 'react'

export const THEMES = ['light', 'dark', 'dev']

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Persist preference across sessions
    const stored = localStorage.getItem('portfolio-theme')
    if (stored && THEMES.includes(stored)) return stored
    // Respect OS preference on first visit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Cycle light → dark → dev → light
  const toggleTheme = () => setTheme(t => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}