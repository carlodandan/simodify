import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import IconButton from './IconButton'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../App'

interface NavBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  theme: Theme
  toggleTheme: () => void
}

const NavBar: React.FC<NavBarProps> = ({ 
  activeSection, 
  setActiveSection, 
  theme, 
  toggleTheme 
}) => {
  const location = useLocation()
  
  const navItems = [
    { id: 'home', icon: 'Home', label: 'Home', path: '/' },
    { id: 'projects', icon: 'Projects', label: 'Projects', path: '/projects' },
    { id: 'about', icon: 'About', label: 'About', path: '/about' },
    { id: 'contact', icon: 'Mail', label: 'Contact', path: '/contact' },
  ]

  // Update active section based on current route
  React.useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home'
    setActiveSection(currentPath)
  }, [location.pathname, setActiveSection])

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.5
      }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="relative flex items-center gap-2 p-2 bg-custom-white/80 dark:bg-custom-dark/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setActiveSection(item.id)}
          >
            <IconButton
              icon={item.icon}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={() => {}} // Empty function since navigation is handled by Link
            />
          </Link>
        ))}
        <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1" />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </motion.nav>
  )
}

export default NavBar