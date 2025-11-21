import React from 'react'
import { motion } from 'framer-motion'

interface ProjectsProps {
  id: string
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with seamless user experience",
      category: "Web App"
    },
    {
      id: 2,
      title: "Health & Fitness Tracker",
      description: "Comprehensive fitness tracking with AI-powered insights",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Design System",
      description: "Scalable design system for enterprise applications",
      category: "Design"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization and business intelligence",
      category: "Web App"
    }
  ]

  return (
    <section id={id} className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-light mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects