import '../css/Navbar.css'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Terminal, Menu, X } from 'lucide-react'
import { useTheme, THEMES } from '../context/ThemeContext'

const themeIcons = {
  light: Sun,
  dark:  Moon,
  dev:   Terminal,
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()       
  const [scrolled, setScrolled]   = useState(false)
  const [hidden, setHidden]       = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const lastScrollY               = useRef(0)
  const location                  = useLocation()
  const isHome                    = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      setScrolled(y > 80)
      setHidden(y > lastScrollY.current && y > 500)
      lastScrollY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navLinks = [
    { to: '/',          label: 'Home'     },
    { to: '/Services',  label: 'Services' },
    { to: '/Project',   label: 'Projects' },
    { to: '/Contact',   label: 'Contact'  },
  ]

  // On home page + not scrolled → invisible
  const invisible = isHome && !scrolled

  return (
    <div className="navbar_wrapper">    
    <motion.nav
      className={[
        'navbar',
        scrolled  ? 'navbar--scrolled' : '',
        hidden    ? 'navbar--hidden'   : '',
        invisible ? 'navbar--invisible': '',
      ].filter(Boolean).join(' ')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* Logo */}
      <NavLink to="/" className="navbar__logo">
        Hurair<span>a</span>
      </NavLink>

      {/* Desktop links */}
      <ul className="navbar__links">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                ['navbar__link', isActive ? 'navbar__link--active' : ''].filter(Boolean).join(' ')
              }
            >
              {label}
              <span className="navbar__link-underline" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="navbar__actions">
        {/* Theme select — light / dark / dev */}
        <div className="navbar__themes" role="group" aria-label="Color theme">
          {THEMES.map(t => {
            const Icon = themeIcons[t]
            return (
              <button
                key={t}
                className={['navbar__theme-btn', theme === t ? 'navbar__theme-btn--active' : ''].filter(Boolean).join(' ')}
                onClick={() => setTheme(t)}
                aria-label={`${t} theme`}
                aria-pressed={theme === t}
                title={`${t} theme`}
              >
                <Icon size={14} />
              </button>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              exit={{    rotate:  90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex' }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="navbar__drawer-links">
              {navLinks.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      ['navbar__drawer-link', isActive ? 'navbar__link--active' : ''].filter(Boolean).join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </div>
  )
}