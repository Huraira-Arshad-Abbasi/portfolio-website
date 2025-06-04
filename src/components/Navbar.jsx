import '../css/Navbar.css'
// import React from 'react';
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
 const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.style.boxShadow = "0 0 15px 0px #0f0f12";
      } else {
        navRef.current.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav ref={navRef}>
        <div className='logo'>
          <Link to='/'>
            Huraira <span>Arshad</span>
          </Link>
        </div>
        <div className='nav__links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Project'>Projects</Link>
            </li>
            {/* <li><Link to="/Reviews">Reviews</Link></li> */}
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
