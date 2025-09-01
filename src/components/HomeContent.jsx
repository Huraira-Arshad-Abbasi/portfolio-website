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
} from "../assets/imges";
import "../css/home.css";
import Contact from "./Contact";
import { motion } from "framer-motion";


// 🔹 Container for staggered children (skills/icons)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// 🔹 Animation for each child (skill icons)
const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
   
  },
  
  // dragConstraints={{ top: -5, bottom: 5, left: -5, right: 5 }}
};

export default function HomeContent() {


  return (
    <>
      <main>
        {/* 🔹 Section 1: Hero Section */}
        <div className="section__1">
          <motion.div
            className="img"
            drag
            dragConstraints={{ top: -10, bottom: 10, left: -50, right: 10 }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 3, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            {/* <img src={mypic} alt="Huraira Arshad" /> */}
          </motion.div>

          <div className="content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Asalaam-u-Alaikum!
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: .5, delay: .5 }}
              viewport={{ once: true }}
            >
              <span>I{"'"}am </span>Huraira Arshad
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
            >
              Website Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 1, delay: 2.5 }}
              viewport={{ once: true }}
            >
              I{"'"}m a passionate Web Developer skilled in creating dynamic,
              user-friendly websites and applications using HTML, CSS,
              JavaScript, and modern frameworks. With expertise in both
              front-end and back-end technologies, I deliver clean, efficient,
              and scalable code, ensuring engaging user experiences and robust
              solutions tailored to client needs. Let{"'"}s build something
              amazing together!
            </motion.p>
          </div>
        </div>

        <div className="break__line"></div>

        {/* 🔹 Section 2: Skills */}
        <div className="skill__section">
          <h2>My Expertise</h2>
          <motion.div
            className="img__content"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[ 
              { src: html, label: "HTML" },
              { src: css, label: "CSS" },
              { src: js, label: "JavaScript" },
              { src: bootstrap, label: "Bootstrap" },
              { src: taiwind, label: "Tailwind CSS" },
              { src: react, label: "React" },
              { src: ex, label: "Express" },
              { src: mongodb, label: "MongoDB" },
              { src: nodeJs, label: "Node.js" }
            ].map((skill, index) => (
              <motion.div
              
              key={index} className="skill__item" variants={item}>
                <img src={skill.src} alt={skill.label} />
                <p>{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="break__line"></div>

        {/* 🔹 Section 3: Education */}
        <div className="education__section">
          <h2>Education</h2>
          <motion.div
            className="education__content"
            
          >
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
             className="degree">
              <h3>Bachelor in Software Engineering</h3>
              <div className="details">
                <h4>(Virtual University of Pakistan)</h4>
                <p>2023 - *2027*</p>
              </div>
              <ul>
                <li>Completed 3 semester</li>
                <li>CGPA: 3.93/4</li>
              </ul>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
             className="degree">
              <h3>Higher Secondary Education (FSC Pre-Engineering)</h3>
              <div className="details">
                <h4>(Read Foundation College, Aliot, Murree)</h4>
                <p>2021 - 2022</p>
              </div>
              <ul>
                <li>Marks: 666/1100</li>
              </ul>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true}}
             className="degree">
              <h3>Secondary Education (Matriculation)</h3>
              <div className="details">
                <h4>(Government School, Potha Shreef, Murree)</h4>
                <p>2019 - 2020</p>
              </div>
              <ul>
                <li>Marks: 875/1100</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <div className="break__line"></div>

        {/* 🔹 Section 4: Contact */}
        <Contact />
      </main>
    </>
  );
}
