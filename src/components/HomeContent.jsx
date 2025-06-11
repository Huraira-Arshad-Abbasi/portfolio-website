import {
    html,
    css,
    js,
    bootstrap,
    taiwind,
    react,
    ex,
    mongodb,
    nodeJs,    // edu
} from '../assets/imges'
// import mypic from '../assets/myPic.jpg'
import '../css/home.css'
// import Project from './Project'
import Contact from './Contact'

export default function HomeContent() {
    return (
        <>
            <main>
                <div className='section__1'>
                    <div className='img'>
                        {/* <img src={mypic} alt="Huraira Arshad" /> */}
                    </div>
                    <div className='content'>
                        <h3>Asalaam-u-Alaikum!</h3>
                        <h1>
                            <span>I{"'"}am </span>Huraira Arshad
                        </h1>
                        <h2>Website Develpor</h2>
                        <p>
                            I{"'"}m a passionate Web Developer skilled in creating
                            dynamic, user-friendly websites and applications using HTML, CSS,
                            JavaScript, and modern frameworks. With expertise in both
                            front-end and back-end technologies, I deliver clean, efficient,
                            and scalable code, ensuring engaging user experiences and robust
                            solutions tailored to client needs. Let{"'"}s build something
                            amazing together!
                        </p>
                    </div>
                </div>

                <div className='break__line'></div>
                <div className='skill__section'>
                    <h2>My Expertise</h2>
                    <div className='img__content'>
                        <div className=''>
                            <img src={html} alt='html' />
                            <p>Html</p>
                        </div>
                        <div className=''>
                            <img src={css} alt='css' />
                            <p>CSS</p>
                        </div>
                        <div className=''>
                            <img src={js} alt='bootstrap' />
                            <p>JavaScript</p>
                        </div>
                        <div className=''>
                            <img src={bootstrap} alt='tailwind' />
                            <p>Bootstrap</p>
                        </div>
                        <div className=''>
                            <img src={taiwind} alt='js' />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className=''>
                            <img src={react} alt='react' />
                            <p>React</p>
                        </div>
                        <div className=''>
                            <img src={ex} alt='express' />
                            <p>Express</p>
                        </div>
                        <div className=''>
                            <img src={mongodb} alt='mongodb' />
                            <p>Mongo DB</p>
                        </div>
                        <div className=''>
                            <img src={nodeJs} alt='node js' />
                            <p>Node Js</p>
                        </div>
                    </div>
                </div>
                <div className='break__line'></div>

                <div className='education__section'>
                    <h2>Education</h2>
                    <div className='education__content'>
                        <div className='degree'>
                            <h3>Bacheler in Software Engineering</h3>
                            <div className='details'>
                                <h4>(Virtual University of Pakistan)</h4>
                                <p>2023 - *2027*</p>
                            </div>
                            <ul>
                                <li>Completed 3 semester</li>
                                <li>CGPA: 3.93/4</li>
                            </ul>
                        </div>
                        <div className='degree'>
                            <h3>Higher Secondary Education (FSC Pre-Engineering)</h3>
                            <div className='details'>
                                <h4>(Read Foundation College, Aliot, Murree)</h4>
                                <p>2021 - 2022</p>
                            </div>
                            <ul>
                                <li>Marks: 666/1100</li>
                            </ul>
                        </div>
                        <div className='degree'>
                            <h3>Secondary Education (Matriculation)</h3>
                            <div className='details'>
                                <h4>(Government School, Potha Shreef, Murree)</h4>
                                <p>2019 - 2020</p>
                            </div>
                            <ul>
                                <li>Marks: 875/1100</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='break__line'></div>
                {/* <Project />
                <div className='break__line'></div> */}
                <Contact />
                {/* <div className='break__line'></div> */}
            </main>
        </>
    )
}
