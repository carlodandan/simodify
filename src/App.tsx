import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export type Theme = 'light' | 'dark'

// Component to handle section activation based on route
function RouteHandler({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const location = useLocation()
  
  useEffect(() => {
    // Extract section from pathname and remove leading slash
    const section = location.pathname.substring(1) || 'home'
    setActiveSection(section)
  }, [location, setActiveSection])
  
  return null
}

function App() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    // Remove both classes first
    root.classList.remove('light', 'dark')
    // Add the current theme class
    root.classList.add(theme)
    
    // Force a reflow to ensure the class change is processed
    void root.offsetHeight
    
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Router>
      <RouteHandler setActiveSection={setActiveSection} />
      <Layout 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        <Routes>
          <Route path="/" element={<Home id="home" />} />
          <Route path="/home" element={<Home id="home" />} />
          <Route path="/projects" element={<Projects id="projects" />} />
          <Route path="/about" element={<About id="about" />} />
          <Route path="/contact" element={<Contact id="contact" />} />
          {/* Optional: Add a catch-all route for 404 */}
          <Route path="*" element={<Home id="home" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App