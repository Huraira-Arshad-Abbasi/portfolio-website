import { Link} from "react-router-dom";
import '../css/footer.css'
export default function Footer() {
  return (
    <div>
      <footer>
        <a href="mailto:hurairaabbasi647@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you.">Hurairaabbasi647@gmail.com</a >
        <div className="footer__links">
          <ul>
            <li><Link target="_blank" to="https://github.com/Huraira-Arshad-Abbasi">GitHUb</Link></li>
            <li><Link to="/Project">Projects</Link></li>
            <li><Link target="_blank" to="https://www.linkedin.com/in/huraira-arshad-7b41ab2a0">linkedIn</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
