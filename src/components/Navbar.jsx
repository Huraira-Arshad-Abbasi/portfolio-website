import '../css/Navbar.css'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom' // ✅ Changed from Link to NavLink

export default function Navbar () {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.style.boxShadow = '0 0 10px 0px var(--shadow)'
        navRef.current.style.background = 'var(--bg)'
      } else {
        navRef.current.style.boxShadow = 'none'
         navRef.current.style.background = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <nav ref={navRef}>
        <div className='logo'>
          <NavLink to='/' className='nav-link'>
            Huraira <span>Arshad</span>
          </NavLink>
        </div>
        <div className='nav__links'>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>

            
            <li>
              <NavLink to='/About' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/Project' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/Contact' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

