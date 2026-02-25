import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectsProps {
  id: string
}

const portfolioData = [
  {
    id: "desktop",
    categoryName: "Desktop App",
    categoryDescription: "Robust cross-platform desktop applications built for productivity.",
    projects: [
      { id: "dkt1", title: "Admin Pro", description: "A comprehensive administrative desktop solution.", link: "https://github.com/carlodandan/admin-pro" },
      { id: "dkt2", title: "Cendrive", description: "A secure and efficient desktop application for census-style database.", link: "https://github.com/carlodandan/cendrive" }
    ]
  },
  {
    id: "app",
    categoryName: "App",
    categoryDescription: "Mobile-first experiences designed for on-the-go usability.",
    projects: [
      { id: "a1", title: "TODOIt", description: "The mobile-optimized version of the TODOIt task manager.", link: "https://todoit.pages.dev/" }
    ]
  },
  {
    id: "design",
    categoryName: "Design (Funnels & Web)",
    categoryDescription: "High-converting sales funnels, modern web applications, and beautiful website designs.",
    projects: [
      { id: "dsgn1", title: "The Golden Fur - Main", description: "Primary landing page and sales funnel design.", link: "https://thegoldenfur-swm.systeme.io/" },
      { id: "dsgn2", title: "The Golden Fur - Booking", description: "Appointment scheduling interface design.", link: "https://thegoldenfur-swm.systeme.io/appointment-swm" },
      { id: "dsgn3", title: "The Golden Fur - Success", description: "Thank you and confirmation page design.", link: "https://thegoldenfur-swm.systeme.io/thank-you" },
      { id: "w1", title: "MRPH", description: "A responsive web application built for Civil Service Examination.", link: "https://mrph.pages.dev/" },
      { id: "w2", title: "Aniyume", description: "An interactive web platform streaming latest anime release.", link: "https://aniyume.qzz.io/" },
      { id: "w3", title: "Artkat", description: "A creative web showcase for this specific digital artists.", link: "https://artkat.pages.dev/" },
      { id: "w4", title: "TODOIt", description: "A clean and functional task management web application.", link: "https://todoit.pages.dev/" }
    ]
  },
  {
    id: "art",
    categoryName: "Art",
    categoryDescription: "Digital Illustration, Character Design, and Concept Art.",
    projects: [
      { id: "art1", title: "Instagram Gallery", description: "A curated collection of my digital artwork and illustrations.", link: "https://www.instagram.com/_carlodeeart/" },
      { id: "art2", title: "TikTok Process Videos", description: "Speedpaints, tutorials, and behind-the-scenes art processes.", link: "https://www.tiktok.com/@_artgalleryofcarlodee" }
    ]
  }
]

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const activeCategoryData = portfolioData.find(cat => cat.id === selectedCategory)

  return (
    <section id={id} className="min-h-screen py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8" />

          <AnimatePresence>
            {selectedCategory && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Categories
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="relative">
          <AnimatePresence mode='wait'>
            {selectedCategory === null ? (
              // CATEGORY VIEW
              <motion.div
                key="categories-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {portfolioData.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className="group cursor-pointer h-full"
                  >
                    <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center items-center text-center">
                      <h3 className="text-2xl font-light mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {category.categoryName}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {category.categoryDescription}
                      </p>
                      <div className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                        View Projects
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // PROJECTS VIEW
              <motion.div
                key="projects-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {activeCategoryData?.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-sm hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                            {activeCategoryData.categoryName}
                          </span>
                        </div>
                        <h3 className="text-xl font-light mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects