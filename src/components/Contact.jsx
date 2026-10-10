import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageCircle } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import ContactRows from './ContactRows'
import '../css/contact.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const contactLinks = [
  {
    label: 'Email',
    href:  'mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you.',
    icon:  Mail,
  },
  {
    label: 'WhatsApp',
    href:  'https://wa.me/+923167714957',
    icon:  MessageCircle,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/huraira-arshad-abbasi/',
    icon:  FaLinkedin,
  },
]

export default function Contact() {
  const [status, setStatus]   = useState('idle')   // idle | sending | sent | error
  const [fallback, setFallback] = useState(null)   // pre-built direct links

  const guideDirect = (subject, message) => {
    setFallback({
      mailto:   `mailto:hurairaabbasi647@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      whatsapp: `https://wa.me/+923167714957?text=${encodeURIComponent(message)}`,
      linkedin: 'https://linkedin.com/in/huraira-arshad-abbasi/',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form    = e.target
    const data    = new FormData(form)
    const subject = data.get('subject') || ''
    const message = data.get('message') || ''

    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mnnvjnbl', {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        setFallback(null)
        form.reset()
      } else {
        setStatus('error')
        guideDirect(subject, message)
      }
    } catch {
      setStatus('error')
      guideDirect(subject, message)
    }
  }

  return (
    <section className='contact'>

      {/* Header */}
      <motion.div
        className='section-header'
        initial='hidden'
        whileInView='visible'
        variants={stagger}
        viewport={{ once: true }}
      >
        <motion.span className='section-label' variants={fadeUp}>
          <Mail size={14} /> Get in touch
        </motion.span>
        <motion.h2 variants={fadeUp}>Let&apos;s talk</motion.h2>
        <motion.p className='contact__tagline' variants={fadeUp}>
          Have an opportunity or a project in mind? Send me a message and
          I&apos;ll get back to you.
        </motion.p>
      </motion.div>

      {/* Content grid */}
      <div className='contact__body'>

        {/* ── Left: Form ── */}
        <motion.div
          className='contact__form-wrap'
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {status === 'sent' ? (
            <div className='contact__success'>
              <Send size={28} strokeWidth={1.5} />
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
              <button
                className='contact__submit'
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              className='contact__form'
              onSubmit={handleSubmit}
            >
              <div className='contact__field'>
                <label htmlFor='subject'>subject</label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='What is this about?'
                  required
                />
              </div>

              <div className='contact__field'>
                <label htmlFor='message'>message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  placeholder='Tell me about your project or opportunity...'
                  required
                />
              </div>

              <button
                type='submit'
                className='contact__submit'
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send message
                    <Send size={14} strokeWidth={2} />
                  </>
                )}
              </button>

              {status === 'error' && fallback && (
                <div className='contact__fallback'>
                  <p className='contact__error'>
                    The form didn&apos;t go through. No worries — reach me
                    directly, it&apos;s usually quicker anyway:
                  </p>
                  <div className='contact__fallback-links'>
                    <a className='contact__fallback-btn' href={fallback.mailto}>
                      <Mail size={15} />
                      Email me
                    </a>
                    <a
                      className='contact__fallback-btn'
                      href={fallback.whatsapp}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </a>
                    <a
                      className='contact__fallback-btn'
                      href={fallback.linkedin}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaLinkedin size={15} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              )}
            </form>
          )}
        </motion.div>

        {/* ── Right: Direct channels ── */}
        <motion.div
          className='contact__info-wrap'
          initial='hidden'
          whileInView='visible'
          variants={stagger}
          viewport={{ once: true }}
        >
          <motion.h3 className='contact__info-title' variants={fadeUp}>
            Reach me directly
          </motion.h3>

          <motion.div variants={fadeUp}>
            <ContactRows />
          </motion.div>

          <motion.div className='contact__socials' variants={fadeUp}>
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                className='contact__social-btn'
              >
                <Icon size={15} strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
