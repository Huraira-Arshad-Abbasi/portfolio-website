import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import About from './components/About';
import Project from './components/Project';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
       path: '/',
     element: <>
     <Scroll />
    < Navbar />
    <HomeContent/>< Footer />
    </> 
  },
    {
       path: '/About',
     element:  <>
    <Scroll />< Navbar /><About/>< Footer />
    </>
  },
    {
       path: '/Project',
     element: <>
    <Scroll />< Navbar /><Project/>< Footer /> 
    </>
  },
    {
       path: '/Reviews',
     element: <>
    <Scroll />< Navbar /><Reviews />< Footer /> 
    </>
  },
    {
       path: '/Contact',
     element: <>
    <Scroll />< Navbar /><Contact/>< Footer />
    </>
  }
  ])
  
  return (
    <div  style={{ position: 'relative', overflowX: 'hidden' }}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
