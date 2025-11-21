import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export type Theme = 'light' | 'dark'

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
    
    console.log('Theme applied to DOM:', theme) // Debug log
  }, [theme])

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme)
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Layout 
      activeSection={activeSection} 
      setActiveSection={setActiveSection}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      <Home id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </Layout>
  )
}

export default App