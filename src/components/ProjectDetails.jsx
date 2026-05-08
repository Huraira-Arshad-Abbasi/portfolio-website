import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { X, Code, ExternalLink } from 'lucide-react'
import '../css/projectDetails.css'

export default function ProjectDetails({ project, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className='pd-backdrop'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Modal */}
      <motion.div
        className='pd-modal'
        role='dialog'
        aria-modal='true'
        aria-label={project.name}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1    }}
        exit={{    opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Close button */}
        <button
          className='pd-close'
          onClick={onClose}
          aria-label='Close'
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {/* Image strip */}
        {project.images.length > 0 && (
          <div className='pd-images'>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                loading='lazy'
                alt={`${project.name} screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className='pd-content'>

          <div className='pd-heading'>
            <h2>{project.name}</h2>
            <div className='pd-links'>
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='pd-btn pd-btn--outline'
              >
                <Code size={14} strokeWidth={2} />
                Source code
              </a>
              <a
                href={project.live}
                target='_blank'
                rel='noreferrer'
                className='pd-btn pd-btn--primary'
              >
                <ExternalLink size={14} strokeWidth={2} />
                Live preview
              </a>
            </div>
          </div>

          <p className='pd-tech'>{project.technologies}</p>
          <p className='pd-desc'>{project.description}</p>

        </div>
      </motion.div>
    </>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}