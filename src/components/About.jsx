import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react'

const About = () => {
  const skills = {
    'Frontend Development': [
      'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'
    ],
    'Backend Development': [
      'Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL', 'PostgreSQL'
    ],
    'Tools & Technologies': [
      'Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'Redis', 'Jest', 'Webpack'
    ],
    'Design & UX': [
      'Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Principles', 'Accessibility'
    ]
  }

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL. Led a team of 3 developers and improved application performance by 40%.'
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc.',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and implemented modern design systems. Collaborated with designers to create intuitive user experiences.'
    },
    {
      title: 'Web Developer Intern',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Assisted in developing client websites and learned industry best practices. Worked with HTML, CSS, JavaScript, and various CMS platforms.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2019 - 2023',
      description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering.'
    }
  ]

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or sharing knowledge with the developer community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1"
          >
            <motion.div variants={itemVariants} className="card p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-700">Name:</span>
                  <span className="ml-2 text-gray-600">Hriday Demashetti</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-gray-600">your.email@example.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2 text-gray-600">City, Country</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Experience:</span>
                  <span className="ml-2 text-gray-600">3+ Years</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Languages:</span>
                  <span className="ml-2 text-gray-600">English (Native), Spanish (Intermediate)</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Code className="text-primary-600" size={20} />
                  <span className="text-gray-600">Open Source Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-primary-600" size={20} />
                  <span className="text-gray-600">Web Technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-primary-600" size={20} />
                  <span className="text-gray-600">Mobile Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="text-primary-600" size={20} />
                  <span className="text-gray-600">Cloud Architecture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-8"
          >
            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="card p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      {category === 'Frontend Development' && <Globe className="text-primary-600 mr-2" size={20} />}
                      {category === 'Backend Development' && <Server className="text-primary-600 mr-2" size={20} />}
                      {category === 'Tools & Technologies' && <Zap className="text-primary-600 mr-2" size={20} />}
                      {category === 'Design & UX' && <Code className="text-primary-600 mr-2" size={20} />}
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span key={skill} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                      <span className="text-sm text-primary-600 font-medium">{job.period}</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                      <span className="text-sm text-primary-600 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
