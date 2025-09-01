// import React from 'react' ;
import {motion} from 'framer-motion';
import '../css/about.css';

export default function About() {
  return (
    <section className="about">
      <motion.div
      initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration:.5}}
                viewport={{ once: true}}
      className="about-container">
        <motion.h2
        initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true}}
        className="about-heading">About Me</motion.h2>
        <motion.p initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2}}
                viewport={{ once: true}}>
          Hello! I{"'"}m a passionate <strong>Web Developer</strong> with a knack for creating dynamic, user-friendly websites and web applications. With a strong foundation in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, complemented by expertise in modern frameworks like <strong>React</strong>, I bring ideas to life with clean, efficient, and scalable code.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4}}
                viewport={{ once: true}}>
          Over the years, I{"'"}ve honed my skills through diverse projects, ranging from small business websites to large-scale applications. My keen eye for design and usability ensures that every project not only functions flawlessly but also delivers an engaging and intuitive user experience.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: .6}}
                viewport={{ once: true}}>
          In addition to my front-end skills, I have solid experience with back-end technologies such as <strong>Node.js</strong>, <strong>Express</strong>, and databases like <strong>MongoDB</strong>. This full-stack capability allows me to build robust and comprehensive solutions, tailored to meet unique client needs.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8}}
                viewport={{ once: true}}>
          I thrive in collaborative environments, working seamlessly with designers, product managers, and other developers. My approach is client-focused, and I{"'"}m committed to maintaining open communication, meeting deadlines, and exceeding expectations.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1}}
                viewport={{ once: true}}>
          Constantly staying updated with the latest industry trends and best practices, I am dedicated to continuous learning and growth in the ever-evolving field of web development. Whether you need a simple landing page, a complex web application, or ongoing support and maintenance, <strong>I{"'"}m here to help bring your vision to life.</strong>
        </motion.p>
      </motion.div>
    </section>
  );
}

