// import { contact_layout } from '../assets/imges'
import { motion } from 'framer-motion'
import '../css/contact.css'
const Contact = () => {
  return (
    <>
      <div className='contact__section'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          viewport={{ once: true}}
        >
          Contact me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true}}
        >{`I’m open to fresh opportunities in web development. Whether you’re offering a role, or have a project to collaborate on, I’d be happy to connect!`}</motion.p>
        <motion.div className='contact__content'>
          <motion.div className='left__content'>
            <motion.form
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
              viewport={{ once: true}}
              action='https://formspree.io/f/mnnvjnbl'
              method='post'
            >
              <motion.textarea name='' id='' rows='2'></motion.textarea>
              <motion.textarea name='' id='' rows='8'></motion.textarea>
              <motion.button
                type='submit'
                onClick={e => {
                  e.preventDefault()
                  alert(
                    'Thank you for your message! I will get back to you soon.'
                  )
                  // clear the form fields
                  e.target.form.reset()
                }}
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.div className='right__content'>
            <motion.div className='info'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                viewport={{ once: true}}
                className='mypic'
              >
                {/* <img src={mypic} alt='mypic' /> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
                viewport={{ once: true}}
                className='contact__info'
              >
                <p>hurairaabbasi647@gmail.com</p>
                <p>+92 344 7714619</p>
                <p>Rawalpindi, Pakistan</p>
              </motion.div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
                viewport={{ once: true}}
            className='contact__buttons'>
              <motion.a
                href='mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you.'
                target='_blank'
              >
                Email
              </motion.a>
              <motion.a href='https://wa.me/923167714957' target='_blank'>
                WhatsApp
              </motion.a>
              <motion.a
                href='https://linkedin.com/in/huraira-arshad-abbasi/'
                target='_blank'
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact
