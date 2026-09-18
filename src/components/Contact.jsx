import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
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

const contactInfo = [
  { icon: Mail,    text: 'hurairaabbasi647@gmail.com' },
  { icon: Phone,   text: '+92 316 7714 957'           },
  { icon: MapPin,  text: 'Rawalpindi, Pakistan'       },
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
        <motion.h2 variants={fadeUp}>Contact Me</motion.h2>
        <motion.p className='contact__tagline' variants={fadeUp}>
          Open to new opportunities in web development — whether it&apos;s a
          role, a project, or a collaboration. I&apos;d love to connect.
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
                className='pcard-btn'
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
                <label htmlFor='subject'>Subject</label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='What is this about?'
                  required
                />
              </div>

              <div className='contact__field'>
                <label htmlFor='message'>Message</label>
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

        {/* ── Right: Info ── */}
        <motion.div
          className='contact__info-wrap'
          initial='hidden'
          whileInView='visible'
          variants={stagger}
          viewport={{ once: true }}
        >
          {/* Info rows */}
          <div className='contact__info-list'>
            {contactInfo.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                className='contact__info-row'
                variants={fadeUp}
              >
                <span className='contact__info-icon'>
                  <Icon size={15} strokeWidth={1.75} />
                </span>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
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