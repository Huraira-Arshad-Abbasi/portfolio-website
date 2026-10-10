import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle, Rocket, Briefcase } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import '../css/requirement-toast.css'

// First show delay, then visible time, then quiet gap between toasts.
const FIRST_DELAY_MS = 4000
const VISIBLE_MS     = 6000
const GAP_MS         = 16000

const TOASTS = [
  {
    icon: MessageCircle,
    text: "Share your requirement — I'll handle everything else.",
    cta:  "Let's talk",
  },
  {
    icon: Rocket,
    text: 'Working on an idea? I turn rough sketches into shipped products.',
    cta:  'Start a project',
  },
  {
    icon: Briefcase,
    text: "Hiring? I'm available for freelance and full-time roles.",
    cta:  'Get in touch',
  },
  {
    icon: MessageCircle,
    text: "Like what you see? Let's talk about your next project.",
    cta:  'Contact me',
  },
]

export default function RequirementToast() {
  const { onboarded } = useTheme()
  const location = useLocation()
  const canShow  = location.pathname !== '/Contact'

  const [current, setCurrent] = useState(null)
  // Runs once per page load (reset on unmount/reload).
  const doneRef  = useRef(false)
  const idxRef   = useRef(0)
  const timerRef = useRef(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const finish = useCallback(() => {
    doneRef.current = true
    clearTimer()
  }, [clearTimer])

  // User clicked a toast → they want to talk, so stop the sequence.
  const engage = useCallback(() => {
    setCurrent(null)
    finish()
  }, [finish])

  useEffect(() => {
    if (!onboarded || !canShow || doneRef.current) {
      setCurrent(null)
      return
    }

    // step(i) schedules TOASTS[i]; after VISIBLE_MS it hides and (after a
    // single GAP_MS) recurses into step(i + 1).
    const step = (i) => {
      if (i >= TOASTS.length) {
        finish()
        return
      }
      const delay = i === 0 ? FIRST_DELAY_MS : GAP_MS
      timerRef.current = setTimeout(() => {
        setCurrent(TOASTS[i])
        idxRef.current = i
        timerRef.current = setTimeout(() => {
          setCurrent(null)
          idxRef.current = i + 1
          step(i + 1)
        }, VISIBLE_MS)
      }, delay)
    }

    step(idxRef.current)
    return clearTimer
  }, [onboarded, canShow, finish, clearTimer])

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className='requirement-toast'
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='requirement-toast__top'>
            <Link to='/Contact' className='requirement-toast__link' onClick={engage}>
              <span className='requirement-toast__icon'>
                <current.icon size={17} strokeWidth={1.75} />
              </span>
              <span className='requirement-toast__content'>
                <span className='requirement-toast__text'>{current.text}</span>
                <span className='requirement-toast__cta'>
                  {current.cta}
                  <ArrowRight size={13} />
                </span>
              </span>
            </Link>

            <button
              type='button'
              className='requirement-toast__close'
              onClick={() => setCurrent(null)}
              aria-label='Dismiss notification'
            >
              &times;
            </button>
          </div>

          <motion.span
            className='requirement-toast__timer'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: VISIBLE_MS / 1000, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}