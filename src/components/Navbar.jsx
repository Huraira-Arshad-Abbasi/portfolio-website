import '../css/Navbar.css'
// import React from 'react';
import { Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                <Link to="/">Huraira <span>Arshad</span></Link>
                </div>
                <div className="nav__links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Project">Projects</Link></li>
                        <li><Link to="/Reviews">Reviews</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
