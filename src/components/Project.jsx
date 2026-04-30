// import { project_layout } from '../assets/imges'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { DHub } from '../assets/imges'
import { MHCover, MH1, MH2, MH3, MH4, MH5 } from '../assets/imges'
import { PSCover, PS1, PS2, PS3, PS4, PS5, PS6, PS7 } from '../assets/imges'
import { TodoCover, TS1, TS2 } from '../assets/imges'
import ProjectDetails from './ProjectDetails'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import '../css/project.css'
// import { Link } from 'react-router-dom'

const projects = [
  {
    id: '01',
    name: 'full-stack agency platform',
    technologies: 'Next.js, Express.js, MongoDB Atlas, Cloudinary, REST APIs',
    description:
      'Developed a full-stack agency platform using MongoDB, Express, React, and Node.js, enabling users to explore services, submit leads, and book appointments. Implemented secure JWT-based authentication and built an admin dashboard to manage blogs, services, and customer interactions. Deployed the frontend and backend on cloud platforms with proper API integration and CORS handling.',
    images: [DHub],
    github: 'https://github.com/Huraira-Arshad-Abbasi/DevelopersHub-Corporation-Agency-platform',
    live: 'https://developers-hub-corporation-agency-p.vercel.app/'
  },
  {
    id: '02',
    name: 'PakStats – Pakistan Indicator Dashboard',
    technologies: 'React, Vite, World Bank API',
    description:
      'Built an interactive data visualization website using React that showcases Pakistan’s key economic indicators such as poverty, trade, inflation, and education. Integrated World Bank Open Data API for live statistics, designed reusable components for charts, and implemented a clean, user-friendly interface to make complex data understandable for the general public.',
    images: [PSCover, PS1, PS2, PS3, PS4, PS5, PS6, PS7],
    github: 'https://github.com/Huraira-Arshad-Abbasi/PakStats',
    live: 'https://pak-stats.vercel.app/'
  },
  {
    id: '03',
    name: 'TodoSync - Task Management Web App',
    technologies: 'React, Node.js, Express, MongoDB, and Mongoose.',
    description:
      'A full-stack todo management app with user authentication. Each user can securely add, view, edit, and delete their own todos. Integrated React Router for dynamic routing and Axios for client-server communication. Todos are filtered by user email and fetched from MongoDB via RESTful API endpoints. Currently source code is available on GitHub and will be deployed live soon.',
    images: [TodoCover, TS1, TS2],
    github: 'https://github.com/Huraira-Arshad-Abbasi/Todo-Sync',
    live: 'https://todo-sync-jet.vercel.app/'
  },
  {
    id: '04',
    name: 'MediaHub – Multimedia Search & Download Platform',
    technologies: 'React, Vite, Axios, Pexels API',
    description:
      'MediaHub is a modern frontend project where users can search, explore, and download high-quality images and videos. Built using React and Vite, this app integrates with the Unsplash and Pexels APIs to fetch media content dynamically. It features a responsive layout, hover controls on videos, and a clean 3-column grid for media display. A search feature allows users to filter results by keyword and type. Currently hosted on GitHub and optimized for future deployment on Vercel.',
    images: [MHCover, MH1, MH2, MH3, MH4, MH5],
    github: 'https://github.com/Huraira-Arshad-Abbasi/Media-Hub',
    live: 'https://media-hub-huraira-project.vercel.app/'
  },
  {
    id: '05',
    name: 'Website Clones & UI Practice Projects',
    technologies: 'HTML, CSS, JavaScript',
    description:
      'Created several frontend clones of websites as part of self-learning and UI development practice. These projects helped strengthen my skills in layout design, responsiveness, and understanding modern web structure. Though not yet uploaded to GitHub, they reflect hands-on experience with real-world UI patterns and component-based design.',
    images: [],
    github: 'https://github.com/Huraira-Arshad-Abbasi',
    live: 'https://github.com/Huraira-Arshad-Abbasi'
  }
]

export default function Project () {
  const [expandFlag, setExpandFlag] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <>
      <div className='project__section'>
        {/* <img src={project_layout} alt="" /> */}
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='Porject__Card'
          >
            <h3>{project.id}</h3>
            <div className='card_container'>
              <div className='content'>
                <div className='heading'>
                  <h2>{project.name}</h2>
                  <p>({project.technologies})</p>
                </div>
                <div className='description'>
                  <p>{project.description}</p>
                  <button
                    onClick={() => {
                      setExpandFlag(!expandFlag), setSelectedProject(project)
                    }}
                  >
                    see details
                  </button>
                </div>
              </div>
              <div className='images'>
                <Swiper
                  modules={[ Pagination]}
                  pagination={{ clickable: true }}
                  
                  loop
                >
                  {project.images.map(img => (
                    <SwiperSlide key={img}>
                      <img src={img} loading='lazy' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        ))}

        {expandFlag && (
          <div>
            <ProjectDetails
              setExpandFlag={setExpandFlag}
              project={selectedProject}
            />
          </div>
        )}

        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='Porject__Card'
        >
          <h3>01</h3>
          <Link
            // target='_blank'
            to='/project'
          >
            <div className='content'>
              <div className='heading'>
                <h2>PakStats – Pakistan Indicator Dashboard</h2>
                <p>(React, Vite, World Bank API)</p>
              </div>
              <div className='description'>
                <p>
                  Built an interactive data visualization website using React
                  that showcases Pakistan’s key economic indicators such as
                  poverty, trade, inflation, and education. Integrated World
                  Bank Open Data API for live statistics, designed reusable
                  components for charts, and implemented a clean, user-friendly
                  interface to make complex data understandable for the general
                  public.
                </p>
              </div>
            </div>
            <div className='images'></div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='Porject__Card'
        >
          <h3>02</h3>
          <Link target='_blank' to='https://todo-sync-jet.vercel.app/'>
            <div className='heading'>
              <h2>TodoSync - Task Management Web App</h2>
              <p>(React, Node.js, Express, MongoDB, and Mongoose.)</p>
            </div>
            <div className='description'>
              <p>
                A full-stack todo management app with user authentication. Each
                user can securely add, view, edit, and delete their own todos.
                Integrated React Router for dynamic routing and Axios for
                client-server communication. Todos are filtered by user email
                and fetched from MongoDB via RESTful API endpoints. Currently
                source code is available on GitHub and will be deployed live
                soon.
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='Porject__Card'
        >
          <h3>03</h3>
          <Link
            target='_blank'
            to='https://media-hub-huraira-project.vercel.app/'
          >
            <div className='heading'>
              <h2>MediaHub – Multimedia Search & Download Platform</h2>
              <p>(React, Vite, Axios, Pexels API)</p>
            </div>
            <div className='description'>
              <p>
                MediaHub is a modern frontend project where users can search,  explore, and download high-quality images and videos. Built
                using React and Vite, this app integrates with the Unsplash and
                Pexels APIs to fetch media content dynamically. It features a
                responsive layout, hover controls on videos, and a clean
                3-column grid for media display. A search feature allows users
                to filter results by keyword and type. Currently hosted on
                GitHub and optimized for future deployment on Vercel.
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='Porject__Card'
        >
          <h3>04</h3>
          <Link target='_blank' to='https://github.com/Huraira-Arshad-Abbasi'>
            <div className='heading'>
              <h2>Website Clones & UI Practice Projects</h2>
              <p>(HTML, CSS, JavaScript)</p>
            </div>
            <div className='description'>
              <p>
                Created several frontend clones of websites as part of
                self-learning and UI development practice. These projects helped
                strengthen my skills in layout design, responsiveness, and
                understanding modern web structure. Though not yet uploaded to
                GitHub, they reflect hands-on experience with real-world UI
                patterns and component-based design.
              </p>
            </div>
          </Link>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='upcoming__projects'
        >
          <h2>More Projects Coming Soon...</h2>
        </motion.div>
      </div>
    </>
  )
}
