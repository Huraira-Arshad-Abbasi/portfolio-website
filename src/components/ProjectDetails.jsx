// import React from 'react'
import PropTypes from 'prop-types'
import '../css/projectDetails.css'
// import { cover } from '../assets/imges'

export default function ProjectDetails ({ setExpandFlag, project }) {
  return (
    <div className='details_container'>
      <div className='images'>
        {project.images.map((image, index) => (
          <img key={index} loading='lazy' src={image} alt={`${project.name} screenshot ${index + 1}`} />
        ))}
      </div>
      <div className='content'>
        <div className='heading'>
          <h2>{project.name}</h2>
          <div className='links'>
            {/* <button disabled>Readme.md</button> */}
            <button onClick={() => window.open(project.github, '_blank')}>GitHub</button>
            <button onClick={() => window.open(project.live, '_blank')}>Live Preview</button>
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
