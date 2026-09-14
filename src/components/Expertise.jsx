import {
  SiHtml5, SiCss, SiJavascript, SiBootstrap, SiTailwindcss, SiReact,
  SiExpress, SiMongodb, SiNodedotjs, SiPython, SiFastapi, SiPostgresql,
} from 'react-icons/si'
import '../css/expertise.css'
import { motion } from 'framer-motion'
import { Monitor, Server, Database, Layers, Wrench, Smartphone, Bot } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────────
const expertise = [
  {
    icon:   Monitor,
    title:  'Frontend Development',
    stack:  'HTML · CSS · JavaScript · React',
    skills: [
      'Responsive & accessible interfaces with HTML5 and CSS3',
      'Interactive UIs with modern JavaScript (ES6+)',
      'Single-page applications with React',
      'Component architecture and reusable UI systems',
      'State management and dynamic rendering',
    ],
  },
  {
    icon:   Server,
    title:  'Backend Development',
    stack:  'Node.js · Express.js · FastAPI',
    skills: [
      'RESTful APIs with Node.js, Express, and FastAPI',
      'Authentication and authorization with JWT',
      'Structured routes, controllers, and middleware',
      'Server-side validation and error handling',
    ],
  },
  {
    icon:   Database,
    title:  'Database Management',
    stack:  'MongoDB · Mongoose · PostgreSQL',
    skills: [
      'NoSQL and relational database design and management',
      'Schemas and models with Mongoose',
      'CRUD operations and query optimization',
      'User-scoped data architecture',
    ],
  },
  {
    icon:   Layers,
    title:  'Full Stack — MERN',
    stack:  'MongoDB · Express · React · Node',
    skills: [
      'End-to-end web applications from UI to database',
      'User authentication and session management',
      'Frontend–backend API integration',
      'Complete application workflow and deployment',
    ],
  },
  {
    icon:   Wrench,
    title:  'Dev Tools & Workflow',
    stack:  'Git · GitHub · Vite · VS Code',
    skills: [
      'Version control with Git and GitHub',
      'Fast builds and HMR with Vite',
      'Structured development environments',
      'Debugging and code quality tooling',
    ],
  },
  {
    icon:   Bot,
    title:  'AI-Assisted Development',
    stack:  'opencode · Claude · AI Coding Agents',
    skills: [
      'Shipping code faster by pairing with AI coding agents',
      'Using opencode and Claude to boost productivity',
      'Automating boilerplate and repetitive tasks',
      'Focusing more on architecture and problem-solving',
    ],
  },
  {
    icon:    Smartphone,
    title:   'Mobile Development',
    stack:   'React Native',
    skills:  [
      'Cross-platform iOS & Android apps',
      'React skills transferring to native mobile',
      'Component-based mobile UI development',
    ],
    badge:   'Learning',   // ← honest signal, distinct styling
  },
]

const techStack = [
  { Icon: SiHtml5,       label: 'HTML',       color: '#E34F26' },
  { Icon: SiCss,         label: 'CSS',        color: '#1572B6' },
  { Icon: SiJavascript,  label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiBootstrap,   label: 'Bootstrap',  color: '#7952B3' },
  { Icon: SiTailwindcss, label: 'Tailwind',   color: '#06B6D4' },
  { Icon: SiReact,       label: 'React',      color: '#61DAFB' },
  { Icon: SiExpress,     label: 'Express',    color: '#8a8a8a' },
  { Icon: SiMongodb,     label: 'MongoDB',    color: '#47A248' },
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#339933' },
  { Icon: SiPython,      label: 'Python',     color: '#3776AB' },
  { Icon: SiFastapi,     label: 'FastAPI',    color: '#009688' },
  { Icon: SiPostgresql,  label: 'PostgreSQL', color: '#4169E1' },
]

// ── Variants ────────────────────────────────────────────────────
const gridVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

const techVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
}

// ── Component ───────────────────────────────────────────────────
export default function Expertise() {
  return (
    <section className='expertise'>

      {/* Header */}
      <motion.div
        className='section-header'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className='section-label'>
          <Layers size={14} /> What I do
        </span>
        <h2>My Expertise</h2>
        <p className='expertise__subtitle'>
          Building products across the full stack — from pixel-perfect interfaces
          to scalable APIs and databases.
        </p>
      </motion.div>

      {/* Expertise cards */}
      <motion.div
        className='expertise__grid'
        variants={gridVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-80px' }}
      >
        {expertise.map((area) => {
          const Icon = area.icon
          return (
            <motion.div
              key={area.title}
              className={['expertise__card', area.badge ? 'expertise__card--learning' : ''].filter(Boolean).join(' ')}
              variants={cardVariants}
            >
              <div className='expertise__card-header'>
                <span className='expertise__icon'>
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <h3>{area.title}</h3>
                  <p className='expertise__stack'>{area.stack}</p>
                </div>
                {area.badge && (
                  <span className='expertise__badge'>{area.badge}</span>
                )}
              </div>
              <ul className='expertise__skills'>
                {area.skills.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Tech icon strip */}
      <motion.div
        className='expertise__tech'
        variants={gridVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-60px' }}
      >
        <p className='expertise__tech-label'>Technologies I work with</p>
        <div className='expertise__tech-strip'>
          {techStack.map((t) => (
            <motion.div key={t.label} className='tech-pill' variants={techVariants}>
              <t.Icon size={20} color={t.color} aria-label={t.label} />
              <span>{t.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}