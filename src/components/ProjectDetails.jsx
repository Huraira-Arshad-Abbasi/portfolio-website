// import React from 'react'
import PropTypes from 'prop-types'
import '../css/projectDetails.css'
// import { cover } from '../assets/imges'

export default function ProjectDetails ({ setExpandFlag, project }) {
  return (
    <div className='details_container'>
      <div className='images'>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.name} screenshot ${index + 1}`} />
        ))}
      </div>
      <div className='content'>
        <div className='heading'>
          <h2>{project.name}</h2>
          <div className='links'>
            {/* three links will button will be here */}
            <button disabled>Readme.md</button>
            <button >GitHub</button>
            <button>Live Preview</button>
          </div>
        </div>
        <div className='description'>
          <p>{project.technologies}</p>
          <p>{project.description}</p>
        </div>
      </div>

      <button type='button' onClick={() => setExpandFlag(false)}>
        X
      </button>
    </div>
  )
}
ProjectDetails.propTypes = {
  setExpandFlag: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
}
