import { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/contact-rows.css'

// Single source of truth for Huraira's contact channels
const rows = [
  { label: 'email',    value: 'hurairaabbasi647@gmail.com',           href: 'mailto:hurairaabbasi647@gmail.com' },
  { label: 'phone',    value: '+92 316 7714 957',                      href: 'tel:+923167714957' },
  { label: 'linkedin', value: 'linkedin.com/in/huraira-arshad-abbasi', href: 'https://linkedin.com/in/huraira-arshad-abbasi/' },
  { label: 'github',   value: 'github.com/Huraira-Arshad-Abbasi',      href: 'https://github.com/Huraira-Arshad-Abbasi' },
]

function ContactRows({ className = '' }) {
  const [copied, setCopied] = useState('')

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Clipboard API unavailable — the value stays selectable
    }
    setCopied(value)
    window.setTimeout(() => {
      setCopied(current => (current === value ? '' : current))
    }, 1500)
  }

  return (
    <ul className={`contact-rows ${className}`.trim()}>
      {rows.map(({ label, value, href }) => {
        const external = href.startsWith('http')
        return (
          <li key={label} className='contact-rows__row'>
            <span className='contact-rows__label'>{label}</span>
            <a
              className='contact-rows__value'
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {value}
            </a>
            <button
              type='button'
              className='contact-rows__copy'
              onClick={() => handleCopy(value)}
              aria-label={`Copy ${label}`}
            >
              {copied === value ? 'copied' : 'copy'}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

ContactRows.propTypes = {
  className: PropTypes.string,
}

export default ContactRows
