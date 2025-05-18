// import { project_layout } from '../assets/imges'
import '../css/project.css'
import { Link} from "react-router-dom";
export default function Project () {
  return (
    <>
      <div className='project__section'>
        {/* <img src={project_layout} alt="" /> */}
        <h2>My Projects</h2>
        <div className='Porject__Card'>
        <Link target="_blank" to="https://github.com/Huraira-Arshad-Abbasi/TodoSync">
          <div className='heading'>
            <h2>TodoSync(Task manager app)</h2>
            <p>(React, Epress, Mongodb)</p>
          </div>
          <div className='description'>
            <p>
              I am open to internship opportunities and fresh roles in web
              development. Whether you have a project, job opportunity, or just
              want to connect, feel free to reach out!
            </p>
          </div>
          </Link>
        </div>
        <div className='Porject__Card'>
        <Link target="_blank" to="https://github.com/Huraira-Arshad-Abbasi">
          <div className='heading'>
            <h2>Media Hub(collection of images, videos and audios)</h2>
            <p>(React, Epress, Mongodb)</p>
          </div>
          <div className='description'>
            <p>
              I am open to internship opportunities and fresh roles in web
              development. Whether you have a project, job opportunity, or just
              want to connect, feel free to reach out!
            </p>
          </div>
          </Link>
        </div>
        

        
      </div>
    </>
  )
}
