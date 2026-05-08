import { useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Scroll from './Scroll'

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: [0.45, 0, 0.55, 1] }
  }
}

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <Scroll />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}