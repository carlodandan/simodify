import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaRegUser,
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaTiktok,
} from 'react-icons/fa6'

import {
  FiFolder, 
  FiHome, 
  FiMail,
  FiInstagram,
} from 'react-icons/fi'

interface IconButtonProps {
  icon: string
  label: string
  isActive?: boolean
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  onClick,
  size = 'md'
}) => {
  const getIcon = () => {
    const iconProps = {
      className: `transition-colors duration-200 ${
        isActive 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
      }`,
      size: size === 'sm' ? 18 : size === 'lg' ? 24 : 20
    }

    switch (icon) {
      case 'Home':
        return <FiHome {...iconProps} />
      case 'Projects':
        return <FiFolder {...iconProps} />
      case 'About':
        return <FaRegUser {...iconProps} />
      case 'Mail':
        return <FiMail {...iconProps} />
      case 'Github':
        return <FaGithub {...iconProps} />
      case 'Facebook':
        return <FaFacebook {...iconProps} />
      case 'FaXTwitter':
        return <FaXTwitter {...iconProps} />
      case 'Tiktok':
        return <FaTiktok {...iconProps} />
      case 'Instagram':
        return <FiInstagram {...iconProps} />
      default:
        return <FiHome {...iconProps} />
    }
  }

  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.2 }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
      className={`
        relative p-3 rounded-xl transition-all duration-200
        ${isActive 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }
      `}
      aria-label={label}
    >
      {getIcon()}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 border-2 border-blue-200 dark:border-blue-800 rounded-xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

export default IconButton