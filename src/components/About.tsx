import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/carloDandan.jpg'

interface AboutProps {
  id: string
}

const About: React.FC<AboutProps> = ({ id }) => {
  const skills = [
    "React & TypeScript",
    "Node.js",
    "UI/UX Design",
    "Cloud Architecture",
    "Performance Optimization",
    "Agile Development"
  ]

  return (
    <section id={id} className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
            About
          </h2>
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl aspect-square max-w-sm mx-auto overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-4 text-gray-900 dark:text-white">
                  Passionate about creating digital experiences that matter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With years of experience in modern web technologies, I specialize in
                  building scalable, performant applications that provide exceptional
                  user experiences. I believe in clean code, thoughtful design, and
                  continuous learning.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-4 text-gray-900 dark:text-white">
                  Skills & Expertise
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About