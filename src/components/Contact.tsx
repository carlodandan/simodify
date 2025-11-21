import React from 'react'
import { motion } from 'framer-motion'
import IconButton from './IconButton'

interface ContactProps {
  id: string
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@simodify.com'
  }

  return (
    <section id={id} className="min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8">
            Let's create something amazing together. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEmailClick}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-light text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Say Hello 👋
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4">
            <IconButton
              icon="Github"
              label="GitHub"
              onClick={() => window.open('https://github.com/simodify', '_blank')}
              size="lg"
            />
            <IconButton
              icon="Facebook"
              label="Facebook"
              onClick={() => window.open('https://web.facebook.com/simodify', '_blank')}
              size="lg"
            />
            <IconButton
              icon="FaXTwitter"
              label="FaXTwitter"
              onClick={() => window.open('https://twitter.com/simodify', '_blank')}
              size="lg"
            />
            <IconButton
              icon="Tiktok"
              label="Tiktok"
              onClick={() => window.open('https://tiktok.com/simodify', '_blank')}
              size="lg"
            />
            <IconButton
              icon="Instagram"
              label="Instagram"
              onClick={() => window.open('https://instagram.com/simodify', '_blank')}
              size="lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact