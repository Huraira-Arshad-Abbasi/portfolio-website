import { Link } from 'react-router-dom'
import { CodeIcon, ComputerIcon, Mail } from 'lucide-react'
import '../css/footer.css'

const year = new Date().getFullYear()

const externalLinks = [
  {
    label: 'GitHub',
    href:  'https://github.com/Huraira-Arshad-Abbasi',
    icon:  CodeIcon,
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/huraira-arshad-7b41ab2a0',
    icon:  ComputerIcon,
  },
  {
    label: 'Email',
    href:  'mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you.',
    icon:  Mail,
  },
]

const internalLinks = [
  { label: 'Home',     to: '/'        },
  { label: 'Projects', to: '/Project' },
  { label: 'Contact',  to: '/Contact' },
]

export default function Footer() {
  return (
    <footer className='footer'>

      {/* Left — brand + copyright */}
      <div className='footer__brand'>
        <Link to='/' className='footer__logo'>
          H<span>A</span>
        </Link>
        <p className='footer__copy'>
          © {year} Huraira Arshad. All rights reserved.
        </p>
      </div>

      {/* Center — internal nav */}
      <nav className='footer__nav' aria-label='Footer navigation'>
        <ul>
          {internalLinks.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className='footer__nav-link'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right — social icons */}
      <div className='footer__socials'>
        {externalLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noreferrer'
            className='footer__social'
            aria-label={label}
          >
            <Icon size={16} strokeWidth={1.75} />
          </a>
        ))}
      </div>

    </footer>
  )
}