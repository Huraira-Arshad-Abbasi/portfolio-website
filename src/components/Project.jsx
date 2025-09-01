// import { project_layout } from '../assets/imges'
import {  motion } from 'framer-motion'

import '../css/project.css'
import { Link } from 'react-router-dom'
export default function Project () {
  return (
    <>
      <div className='project__section'>
        {/* <img src={project_layout} alt="" /> */}
        <h2>My Projects</h2>
        <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}} className='Porject__Card'>
          <h3>01</h3>
          <Link
            target='_blank'
            to='https://todo-sync-jet.vercel.app/'
          >
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
        <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , delay: 0.2}}
            viewport={{ once: true}} className='Porject__Card'>
          <h3>02</h3>
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
                MediaHub is a modern frontend project where users can search, explore, and download high-quality images and videos. Built using React and Vite, this app integrates with the Unsplash and Pexels APIs to fetch media content dynamically. It features a responsive layout, hover controls on videos, and a clean 3-column grid for media display. A search feature allows users to filter results by keyword and type. Currently hosted on GitHub and optimized for future deployment on Vercel.
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , delay: 0.4}}
            viewport={{ once: true}} className='Porject__Card'>
          <h3>03</h3>
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
        </motion.div>
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, delay: 0.5}}
            viewport={{ once: true }} className="upcoming__projects">
          <h2>More Projects Coming Soon...</h2>
        </motion.div>
      </div>
    </>
  )
}
