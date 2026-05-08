import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Code, ExternalLink, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

import { DHub }                                    from '../assets/imges'
import { MHCover, MH1, MH2, MH3, MH4, MH5 }       from '../assets/imges'
import { PSCover, PS1, PS2, PS3, PS4, PS5, PS6, PS7 } from '../assets/imges'
import { TodoCover, TS1, TS2 }                     from '../assets/imges'
import ProjectDetails                              from './ProjectDetails'
import '../css/project.css'

// ── Data ──────────────────────────────────────────────────────
const projects = [
  {
    id:           '01',
    name:         'Full-Stack Agency Platform',
    technologies: 'Next.js · Express.js · MongoDB Atlas · Cloudinary',
    description:
      'A full-stack agency platform enabling users to explore services, submit leads, and book appointments. Secure JWT auth, admin dashboard for blogs and services, deployed with full API integration.',
    images:  [DHub],
    github:  'https://github.com/Huraira-Arshad-Abbasi/DevelopersHub-Corporation-Agency-platform',
    live:    'https://developers-hub-corporation-agency-p.vercel.app/',
  },
  {
    id:           '02',
    name:         'PakStats — Pakistan Indicator Dashboard',
    technologies: 'React · Vite · World Bank API',
    description:
      `Interactive data visualization of Pakistan's key economic indicators — poverty, trade, inflation, and education. Live World Bank API integration with reusable chart components.`,
    images:  [PSCover, PS1, PS2, PS3, PS4, PS5, PS6, PS7],
    github:  'https://github.com/Huraira-Arshad-Abbasi/PakStats',
    live:    'https://pak-stats.vercel.app/',
  },
  {
    id:           '03',
    name:         'TodoSync — Task Management App',
    technologies: 'React · Node.js · Express · MongoDB',
    description:
      `A full-stack todo app with user authentication. Each user manages their own todos via RESTful API endpoints, React Router for routing, and Axios for client-server communication.`,
    images:  [TodoCover, TS1, TS2],
    github:  'https://github.com/Huraira-Arshad-Abbasi/Todo-Sync',
    live:    'https://todo-sync-jet.vercel.app/',
  },
  {
    id:           '04',
    name:         'MediaHub — Multimedia Search & Download',
    technologies: 'React · Vite · Axios · Pexels API',
    description:
      'Search, explore, and download high-quality images and videos. Integrates Unsplash and Pexels APIs with a responsive 3-column grid, hover video controls, and keyword filtering.',
    images:  [MHCover, MH1, MH2, MH3, MH4, MH5],
    github:  'https://github.com/Huraira-Arshad-Abbasi/Media-Hub',
    live:    'https://media-hub-huraira-project.vercel.app/',
  },
  {
    id:           '05',
    name:         'Website Clones & UI Practice',
    technologies: 'HTML · CSS · JavaScript',
    description:
      `Frontend clones of real websites built during self-learning. Strengthened skills in layout design, responsiveness, and modern UI patterns through hands-on replication.`,
    images:  [],
    github:  'https://github.com/Huraira-Arshad-Abbasi',
    live:    'https://github.com/Huraira-Arshad-Abbasi',
  },
]

// ── Variants ──────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

// ── Component ──────────────────────────────────────────────────
export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className='projects'>

      <motion.div
        className='section-header'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className='section-label'>
          <ArrowRight size={14} /> Selected work
        </span>
        <h2>My Projects</h2>
      </motion.div>

      <div className='projects__list'>
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className='project-card'
            variants={cardVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Number */}
            <span className='project-card__num' aria-hidden='true'>
              {project.id}
            </span>

            {/* Inner: alternates direction via CSS */}
            <div className={`project-card__inner ${index % 2 === 1 ? 'project-card__inner--reverse' : ''}`}>

              {/* Content */}
              <div className='project-card__content'>
                <h3 className='project-card__name'>{project.name}</h3>
                <p  className='project-card__tech'>{project.technologies}</p>
                <p  className='project-card__desc'>{project.description}</p>

                <div className='project-card__actions'>
                  <button
                    className='pcard-btn'
                    onClick={() => setSelectedProject(project)}
                  >
                    See details
                  </button>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                    className='pcard-icon-btn'
                    aria-label='GitHub'
                  >
                    <Code size={16} />
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noreferrer'
                    className='pcard-icon-btn'
                    aria-label='Live demo'
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Images */}
              <div className='project-card__media'>
                {project.images.length > 0 ? (
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={project.images.length > 1}
                    className='pcard-swiper'
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${project.name} screenshot ${i + 1}`}
                          loading='lazy'
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className='project-card__empty'>
                    <span>Screenshots coming soon</span>
                  </div>
                )}
              </div>

            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        className='projects__more'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        More projects coming soon
      </motion.p>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </section>
  )
}