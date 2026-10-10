import Expertise from './Expertise'
import Services from './Services'
import Project from './Project'
import ContactRows from './ContactRows'
import '../css/home.css'

import { motion } from 'framer-motion'
import { ArrowDownToLine, Mail, GraduationCap, MapPin, Code2 } from 'lucide-react'
import { cv, myPic } from '../assets/imges'
import { Link } from 'react-router-dom'

// Animation variants — defined once, reused
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  }
}

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const education = [
  {
    degree:     'BS — Software Engineering',
    school:     'Virtual University of Pakistan',
    period:     '2023 — Present',
    highlights: ['Completed 6 semesters', 'CGPA: 3.88 / 4.0'],
  },
  {
    degree:     'FSC Pre-Engineering',
    school:     'Read Foundation College, Aliot, Murree',
    period:     '2020 — 2022',
    highlights: ['Marks: 666 / 1100'],
  },
  {
    degree:     'Matriculation',
    school:     'Government School, Potha Shreef, Murree',
    period:     '2018 — 2020',
    highlights: ['Marks: 875 / 1100'],
  },
]

export default function HomeContent () {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className='home'>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className='hero'>
        <motion.div
          className='hero__text'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
        >
          <motion.p className='hero__greeting' variants={fadeUp}>
            <Code2 size={14} strokeWidth={1.75} />
            Full Stack Developer
          </motion.p>

          <motion.h1 className='hero__name' variants={fadeUp}>
            Turning your ideas into
            <br />
            <span className='hero__name--accent'>working solutions.</span>
          </motion.h1>

          <motion.p className='hero__role' variants={fadeUp}>
            Share your requirement — I&apos;ll handle everything else.
          </motion.p>

          <motion.p className='hero__bio' variants={fadeUp}>
            From a rough idea to a deployed product — I design, build, and ship
            full-stack web applications end to end. Fast, clean, and
            production-ready. Just tell me what you need, and I&apos;ll take it
            from there.
          </motion.p>

          <motion.div className='hero__actions' variants={fadeUp}>
            <a href={cv} download className='btn btn--primary'>
              <ArrowDownToLine size={15} strokeWidth={2} />
              Download CV
            </a>
            <button className='btn btn--outline' onClick={scrollToContact}>
              <Mail size={15} strokeWidth={2} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* my picture on right side */}
        <div className='hero__image-wrap'>
          <div className='hero__image'>
            <img src={myPic} alt="Huraira Arshad's portrait" />
          </div>
        </div>
      </section>

      <div className='divider' />

      {/* ── Skills ───────────────────────────────────────── */}
      <Expertise />

      <div className='divider' />

      {/* ── Education ────────────────────────────────────── */}
      <section className='education'>
        <motion.div
          className='section-header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className='section-label'>
            <GraduationCap size={14} /> Background
          </span>
          <h2>Education</h2>
        </motion.div>

        <div className='education__timeline'>
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              className='edu-card'
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className='edu-card__dot' />
              <div className='edu-card__body'>
                <h3 className='edu-card__degree'>{item.degree}</h3>
                <div className='edu-card__meta'>
                  <span className='edu-card__school'>
                    <MapPin size={12} /> {item.school}
                  </span>
                  <span className='edu-card__period'>{item.period}</span>
                </div>
                <ul className='edu-card__highlights'>
                  {item.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className='divider' />

      {/* ── Services ─────────────────────────────────────── */}
      <Services />

      <div className='divider' />

    {/* ── Project ────────────────────────────────────── */}
      <Project showContactCTA={false} />

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className='lets-talk' id='contact-section'>
        <motion.div
          className='lets-talk__card'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='lets-talk__intro'>
            <span className='lets-talk__label'>Get in touch</span>
            <h2 className='lets-talk__title'>Let&apos;s talk</h2>
            <p className='lets-talk__text'>
              Have an opportunity or a project in mind? Send me a message and
              I&apos;ll get back to you.
            </p>
            <Link to='/Contact' className='btn btn--primary btn--lg'>
              Send a message
              <Mail size={16} />
            </Link>
          </div>

          <ContactRows className='lets-talk__rows' />
        </motion.div>
      </section>

    </main>
  )
}