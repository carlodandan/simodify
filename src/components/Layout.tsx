import React from 'react'
import NavBar from './NavBar'
import type { Theme } from '../App'

interface LayoutProps {
  children: React.ReactNode
  activeSection: string
  setActiveSection: (section: string) => void
  theme: Theme
  toggleTheme: () => void
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeSection, 
  setActiveSection, 
  theme, 
  toggleTheme 
}) => {
  return (
    <div className="min-h-screen bg-custom-white dark:bg-custom-dark transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <NavBar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  )
}

export default Layout