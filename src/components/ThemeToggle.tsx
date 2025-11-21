import React from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import type { Theme } from '../App'

interface ThemeToggleProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const handleClick = () => {
    toggleTheme()
  }

  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.2 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FiMoon className="text-gray-600 dark:text-gray-400" size={20} />
        ) : (
          <FiSun className="text-gray-600 dark:text-gray-400" size={20} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle