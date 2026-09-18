import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import '../css/contact-cta.css'

export default function ContactCTA() {
  return (
    <motion.div
      className='contact-cta'
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
    >
      <h3 className='contact-cta__title'>Have a project in mind?</h3>
      <p className='contact-cta__text'>
        From landing pages to enterprise-scale platforms — I can build it for
        you. Tell me what you&apos;re working on and let&apos;s turn the idea into a
        real product.
      </p>
      <Link to='/Contact' className='contact-cta__btn'>
        Let&apos;s talk
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  )
}