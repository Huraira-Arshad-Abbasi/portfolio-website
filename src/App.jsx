import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import HomeContent from './components/HomeContent'
import About from './components/About'
import Project from './components/Project'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

// ✅ Defined OUTSIDE component — stable reference, never recreated on render
const router = createBrowserRouter([
  {
    element: <Layout />,   // shared shell: Scroll + Navbar + AnimatePresence + Footer
    children: [
      { index: true,          element: <HomeContent /> },
      { path: '/About',       element: <About /> },
      { path: '/Project',     element: <Project /> },
      { path: '/Reviews',     element: <Reviews /> },
      { path: '/Contact',     element: <Contact /> },
      { path: '*',            element: <NotFound /> },   // 404 fallback
    ]
  }
])

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}