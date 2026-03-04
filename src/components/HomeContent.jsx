import {
  html,
  css,
  js,
  bootstrap,
  taiwind,
  react,
  ex,
  mongodb,
  nodeJs,
  cv
} from '../assets/imges'
import '../css/home.css'
import Project from './Project'
import Contact from './Contact'

import { motion } from 'framer-motion'

// 🔹 Container for staggered children (skills/icons)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// 🔹 Animation for each child (skill icons)
const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }

  // dragConstraints={{ top: -5, bottom: 5, left: -5, right: 5 }}
}

export default function HomeContent () {
  return (
    <>
      <main>
        {/* 🔹 Section 1: Hero Section */}
        <div className='section__1'>
          <motion.div
            className='img'
            drag
            dragConstraints={{ top: -10, bottom: 10, left: -50, right: 10 }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 3, ease: 'easeIn' }}
            viewport={{ once: true }}
          >
            {/* <img src={mypic} alt="Huraira Arshad" /> */}
          </motion.div>

          <div className='content'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Hi!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span>I{"'"}am </span>Huraira Arshad
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
            >
              Full Stack Developer (MERN Stack)
            </motion.h2>
            <a href={cv} download>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                viewport={{ once: true }}
              >
                Download CV
              </motion.button>
            </a>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
            >
              Full Stack Developer skilled in creating dynamic, user-friendly
              websites and applications using HTML, CSS, JavaScript, and modern
              frameworks. With expertise in both front-end and back-end
              technologies, I deliver clean, efficient, and scalable code,
              ensuring engaging user experiences and robust solutions tailored
              to client needs. Let{"'"}s build something amazing together!
            </motion.p>
          </div>
        </div>

        <div className='break__line'></div>

        {/* 🔹 Section 2: Skills */}
        <div className='skill__section'>
          <h2>My Expertise</h2>
          <motion.div
            className='img__content'
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { src: html, label: 'HTML' },
              { src: css, label: 'CSS' },
              { src: js, label: 'JavaScript' },
              { src: bootstrap, label: 'Bootstrap' },
              { src: taiwind, label: 'Tailwind CSS' },
              { src: react, label: 'React' },
              { src: ex, label: 'Express' },
              { src: mongodb, label: 'MongoDB' },
              { src: nodeJs, label: 'Node.js' }
            ].map((skill, index) => (
              <motion.div key={index} className='skill__item' variants={item}>
                <motion.img
                  drag
                  dragConstraints={{
                    top: -2,
                    bottom: 2,
                    left: -2,
                    right: 2
                  }}
                  src={skill.src}
                  alt={skill.label}
                />
                <p>{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='break__line'></div>

        {/* 🔹 Section 3: Education */}
        <div name='Education' className='education__section'>
          <h2>Education</h2>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{  y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='education__content'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className='degree'
            >
              <i></i>
              <h3>BS - Software Engineering</h3>
              <div className='details'>
                <h4>(Virtual University of Pakistan)</h4>
                <p>2023 - Present</p>
                <ul>
                  <li>Completed 5 semester</li>
                  <li>CGPA: 3.85/4</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
              className='degree'
            >
              <i></i>
              <h3>FSC Pre-Engineering</h3>
              <div className='details'>
                <h4>(Read Foundation College, Aliot, Murree)</h4>
                <p>2020 - 2022</p>
                <ul>
                  <li>Marks: 666/1100</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className='degree'
            >
              <i></i>
              <h3>Matriculation</h3>
              <div className='details'>
                <h4>(Government School, Potha Shreef, Murree)</h4>
                <p>2018 - 2020</p>
                <ul>
                  <li>Marks: 875/1100</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className='break__line'></div>
        <Project />
        <div className='break__line'></div>

        {/* 🔹 Section 4: Contact */}
        <Contact />
      </main>
    </>
  )
}
