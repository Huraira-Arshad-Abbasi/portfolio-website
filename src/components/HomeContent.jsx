import Expertise from './Expertise'
import Services from './Services'
import Project from './Project'
import '../css/home.css'

import { motion } from 'framer-motion'
import { ArrowDownToLine, Mail, GraduationCap, MapPin } from 'lucide-react'
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
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className='hero__name' variants={fadeUp}>
            Huraira<br />
            <span className='hero__name--accent'>Arshad</span>
          </motion.h1>

          <motion.p className='hero__role' variants={fadeUp}>
            Full Stack Developer — MERN Stack
          </motion.p>

          <motion.p className='hero__bio' variants={fadeUp}>
            Skilled in building dynamic, user-friendly web applications with
            HTML, CSS, JavaScript, and modern frameworks. I deliver clean,
            efficient, and scalable code — from pixel-perfect interfaces to
            robust back-end APIs.
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
      <Project/>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className='contact-cta' id='contact-section'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='contact-cta__inner'
        >
          <h2>Let&apos;s build something<br /><em>amazing</em> together.</h2>
          <p>Open to freelance projects, collaborations, and full-time roles.</p>
          <Link to='/Contact' className='btn btn--primary btn--lg'>
            Get in touch
            <Mail size={16} />
          </Link>
        </motion.div>
      </section>

    </main>
  )
}