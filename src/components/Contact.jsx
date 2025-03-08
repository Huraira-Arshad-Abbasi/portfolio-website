// import { contact_layout } from '../assets/imges'
import '../css/contact.css'
const Contact = () => {
  return (
    <>
      {/* <div className='contact__section'>
        <h2>Contact</h2>
                the is the contact page
                <a href="mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you.">Email me</a>
        <img src={contact_layout} alt='contact' />
      </div> */}
      <div className='contact__section'>
        <h2>Contact me</h2>
        <p>{`I'm open to internship opportunities and fresh roles in web development. Whether you have a project, job opportunity, or just want to connect, feel free to reach out!`}</p>
        <div className='contact__content'>
          <div className='left__content'>
            <form action='' method='post'>
              <textarea name="" id="" rows="2" ></textarea>
              <textarea name="" id=""  rows="8"></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='right__content'>
            <div className='info'>
              <div className='mypic'>
                {/* <img src={mypic} alt='mypic' /> */}
              </div>
              <div className='contact__info'>
                <p>hurairaabbasi647@gmail.com</p>
                <p>+92 316 7714957</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
            <div className='contact__buttons'>
            <a href="mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you." target='_blank'>Email me</a >
                <a href="https://wa.me/923167714957" target="_blank">WhatsApp me</a>
                <a href="https://linkedin.com/in/huraira-arshad-abbasi/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
