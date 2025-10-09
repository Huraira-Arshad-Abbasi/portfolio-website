import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'
import About from './components/About'
import Project from './components/Project'
import Reviews from './components/Reviews'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Scroll from './components/Scroll'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion } from 'framer-motion'
function App () {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Scroll />
          <Navbar />
          <HomeContent />
          <Footer />
        </>
      )
    },
    {
      path: '/About',
      element: (
        <>
          <Scroll />
          <Navbar />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: '/Project',
      element: (
        <>
          <Scroll />
          <Navbar />
          <Project />
          <Footer />
        </>
      )
    },
    {
      path: '/Reviews',
      element: (
        <>
          <Scroll />
          <Navbar />
          <Reviews />
          <Footer />
        </>
      )
    },
    {
      path: '/Contact',
      element: (
        <>
          <Scroll />
          <Navbar />
          <Contact />
          <Footer />
        </>
      )
    }
  ])

  return (
    <motion.div style={{ position: 'relative', overflowX: 'hidden' }}>
      <motion.div
      className='pointer'
      animate={{ x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{
        width: 20,
        height: 20,
        border: '1px solid var(--secondary)',
        borderRadius: "50%",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none", // prevent blocking clicks
        zIndex: 9999,
      }}
      />
        
        <RouterProvider router={router} />
      
    </motion.div>
  )
}

export default App
