import {html, css, js, bootstrap, taiwind, react, ex, mongodb, nodeJs} from '../assets/imges';
// import mypic from '../assets/myPic.jpg'
import '../css/home.css'
import Project from './Project'
import Contact from './Contact';

export default function HomeContent() {
    return (
        <>
            <main>
                <div className="section__1">
                    <div className="img">
                    {/* <img src={mypic} alt="Huraira Arshad" /> */}
                    </div>
                    <div className="content">
                        <h3>Asalaam-u-Alaikum!</h3>
                        <h1><span>I{"'"}am </span>Huraira Arshad</h1>
                        <h2>Software develpor</h2>
                        <p>Hello! I{"'"}m a passionate Web Developer skilled in creating dynamic, user-friendly websites and applications using HTML, CSS, JavaScript, and modern frameworks. With expertise in both front-end and back-end technologies, I deliver clean, efficient, and scalable code, ensuring engaging user experiences and robust solutions tailored to client needs. Let{"'"}s build something amazing together!</p>
                    </div>
                </div>
                <div className="break__line"></div>
                <div className="skill__section">
                    <h2>My Skills</h2>
                    <div className="img__content">
                        <div className="">
                            <img src={html} alt="html" />
                            <p>Html</p>
                        </div>
                        <div className="">
                            <img src={css} alt="css" />
                            <p>CSS</p>
                        </div>
                        <div className="">
                            <img src={js} alt="bootstrap" />
                            <p>JavaScript</p>
                        </div>
                        <div className="">
                            <img src={bootstrap} alt="tailwind" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="">
                            <img src={taiwind} alt="js" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="">
                            <img src={react} alt="react" />
                            <p>React</p>
                        </div>
                        <div className="">
                            <img src={ex} alt="express" />
                            <p>Express</p>
                        </div>
                        <div className="">
                            <img src={mongodb} alt="mongodb" />
                            <p>Mongo DB</p>
                        </div>
                        <div className="">
                            <img src={nodeJs} alt="node js" />
                            <p>Node Js</p>
                        </div>
                    </div>
                </div>
                <div className="break__line"></div>
                <div className="education__section">
                    <h2>Education</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur sit voluptatibus maxime, velit adipisci laudantium architecto dicta consequuntur illum rem veritatis numquam similique. Ducimus dolorem illo repellat iusto quam!</p>
                </div>
                <div className="break__line"></div>
                < Project/>
                <div className="break__line"></div>
                < Contact/>
                <div className="break__line"></div>
            </main>
        </>
    )
}
