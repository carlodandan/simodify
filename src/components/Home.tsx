import React from 'react'
import { motion } from 'framer-motion'

interface HomeProps {
  id: string
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light mb-6 text-gray-900 dark:text-white"
        >
          Carlo Dandan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed text-balance">
            Crafting digital experiences
            <br />
            with precision and elegance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}

export default Home