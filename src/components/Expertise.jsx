import {
  html,
  css,
  js,
  bootstrap,
  taiwind,
  react,
  ex,
  mongodb,
  nodeJs
} from '../assets/imges'
import '../css/expertise.css'

import {motion} from 'framer-motion'
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

const Expertise = () => {
  return (
    <div>
      <div className='skill__section'>
          <h2>My Expertise</h2>
          <div className="discription">
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true}}>
              <h3>1. Frontend Development</h3>
              <p><span> Technologies:</span> HTML, CSS, JavaScript, React</p>
              <label htmlFor="list"> What I can do:</label>
              <ul name="list">
                <li>Build responsive and accessible web interfaces using HTML5 and CSS3</li>
                <li>Develop interactive user interfaces using modern JavaScript (ES6+)</li>
                <li>Create single-page applications (SPA) using React</li>
                <li>Manage component-based architecture and reusable UI components</li>
                <li>Handle form inputs, state management, and dynamic rendering in React</li>
                <li>Integrate frontend with backend APIs</li>
              </ul>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true}}>
              <h3>2. Backend Development</h3>
              <p><span> Technologies:</span> Node.js, Express.js</p>
              <label htmlFor="list"> What I can do:</label>
              <ul name="list">
                <li>Build RESTful APIs using Node.js and Express</li>
                <li>Implement authentication and authorization using JWT</li>
                <li>Create structured backend routes and controllers</li>
                <li>Handle server-side validation and error handling</li>
                <li>Connect backend services with databases</li>
              </ul>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,ease: 'easeOut' }}
            viewport={{ once: true}}>
              <h3>3. Database Management</h3>
              <p><span> Technologies:</span> MongoDB, Mongoose</p>
              <label htmlFor="list"> What I can do:</label>
              <ul name="list">
                <li>Design and manage NoSQL databases</li>
                <li>Create schemas and models using Mongoose</li>
                <li>Perform CRUD operations (Create, Read, Update, Delete)</li>
                <li>Optimize database queries for better performance</li>
                <li>Build user-based data systems (e.g., each user accessing their own data)</li>
              </ul>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true}}>
              <h3>4. Full Stack Development</h3>
              <p><span> Technologies:</span> MERN Stack</p>
              <label htmlFor="list"> What I can do:</label>
              <ul name="list">
                <li>Develop full-stack web applications using MongoDB, Express, React, Node</li>
                <li>Implement user authentication systems</li>
                <li>Build applications with frontend–backend integration</li>
                <li>Handle complete application workflow from UI to database</li>
              </ul>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true}}>
              <h3>5. Tools & Development Environment</h3>
              <p><span> Technologies:</span> Git, GitHub, VS Code, Vite</p>
              <label htmlFor="list"> What I can do:</label>
              <ul name="list">
                <li>Version control using Git and GitHub</li>
                <li>Manage project workflows and repositories</li>
                <li>Build fast frontend applications using Vite</li>
                <li>Debug and maintain structured development environments</li>
              </ul>
            </motion.div>
          </div>
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
    </div>
  )
}

export default Expertise
