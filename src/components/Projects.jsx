import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/yourusername/project1',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: 'https://project2.com',
      githubUrl: 'https://github.com/yourusername/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts for multiple locations using OpenWeatherMap API.',
      image: '/api/placeholder/600/400',
      category: 'Frontend',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      liveUrl: 'https://project3.com',
      githubUrl: 'https://github.com/yourusername/project3',
      featured: false
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, user roles, and SEO optimization features.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      liveUrl: 'https://project4.com',
      githubUrl: 'https://github.com/yourusername/project4',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and interactions.',
      image: '/api/placeholder/600/400',
      category: 'Frontend',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://project5.com',
      githubUrl: 'https://github.com/yourusername/project5',
      featured: false
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway built with Node.js and Express, featuring rate limiting, authentication, and request routing.',
      image: '/api/placeholder/600/400',
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      liveUrl: 'https://project6.com',
      githubUrl: 'https://github.com/yourusername/project6',
      featured: false
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                <Filter size={16} />
                <span>{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600">P{project.id}</span>
                </div>
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center space-x-2 text-sm py-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 flex items-center justify-center space-x-2 text-sm py-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
