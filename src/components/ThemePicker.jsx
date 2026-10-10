import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import '../css/theme-picker.css'

const OPTIONS = [
  { value: 'light', name: 'Light', desc: 'Bright & simple' },
  { value: 'dark',  name: 'Dark',  desc: 'Easy on the eyes' },
  { value: 'dev',   name: 'Dev',   desc: 'Neon terminal' },
]

export default function ThemePicker() {
  const { onboarded, pickTheme, skipTheme } = useTheme()
  const [picked, setPicked] = useState(null)

  // Lock body scroll while the picker is visible
  useEffect(() => {
    if (onboarded) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [onboarded])

  const choose = () => {
    if (picked) pickTheme(picked)
  }

  return (
    <AnimatePresence>
      {!onboarded && (
        <div
          className='theme-picker'
          role='dialog'
          aria-modal='true'
          aria-labelledby='theme-picker-title'
        >
          <motion.button
            type='button'
            className='theme-picker__backdrop'
            aria-label='Skip theme selection'
            onClick={skipTheme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div
            className='theme-picker__dialog'
            role='document'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Title bar */}
            <div className='theme-picker__titlebar'>
              <span className='theme-picker__title' id='theme-picker-title'>
                Choose your theme
              </span>
              <button
                type='button'
                className='theme-picker__close'
                onClick={skipTheme}
                aria-label='Close'
              >
                x
              </button>
            </div>

            {/* Body */}
            <div className='theme-picker__body'>
              <p className='theme-picker__hello'>* Welcome to my homepage!</p>
              <p className='theme-picker__intro'>
                Please select your preferred theme to continue
                <span className='theme-picker__cursor'>_</span>
              </p>

              <div className='theme-picker__options'>
                {OPTIONS.map(({ value, name, desc }) => (
                  <label
                    key={value}
                    className={`theme-picker__option${picked === value ? ' theme-picker__option--selected' : ''}`}
                  >
                    <input
                      type='radio'
                      name='theme'
                      value={value}
                      checked={picked === value}
                      onChange={() => setPicked(value)}
                    />
                    <span className='theme-picker__radio' aria-hidden='true' />
                    <span className='theme-picker__option-text'>
                      <span className='theme-picker__name'>{name}</span>
                      <span className='theme-picker__desc'>{desc}</span>
                    </span>
                  </label>
                ))}
              </div>

              <div className='theme-picker__actions'>
                <button
                  type='button'
                  className='theme-picker__btn'
                  onClick={choose}
                  disabled={!picked}
                >
                  Enter site
                </button>
                <button
                  type='button'
                  className='theme-picker__btn'
                  onClick={skipTheme}
                >
                  Skip for now
                </button>
              </div>

              <div className='theme-picker__marquee' aria-hidden='true'>
                <span>Best viewed at 800x600 -- Internet Explorer 5.0 -- updated 2003</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}