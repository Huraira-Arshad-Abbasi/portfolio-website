// import { project_layout } from '../assets/imges'
import '../css/project.css'
import { Link } from 'react-router-dom'
export default function Project () {
  return (
    <>
      <div className='project__section'>
        {/* <img src={project_layout} alt="" /> */}
        <h2>My Projects</h2>
        <div className='Porject__Card'>
          <h3>01</h3>
          <Link
            target='_blank'
            to='https://github.com/Huraira-Arshad-Abbasi/Todo-Sync'
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
        </div>
        <div className='Porject__Card'>
          <h3>02</h3>
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
        </div>
      </div>
    </>
  )
}
