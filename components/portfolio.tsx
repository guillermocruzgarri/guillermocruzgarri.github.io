
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, BarChart3, TrendingUp, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import guillermoData from '@/lib/cv-data'
import ProjectModal from './project-modal'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectDetails = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  const getProjectImage = (index: number) => {
    const images = [
      'https://static.vecteezy.com/system/resources/previews/012/076/073/non_2x/female-operations-manager-holds-meeting-presentation-for-a-team-of-economists-asian-woman-uses-digital-whiteboard-with-growth-analysis-charts-statistics-and-data-people-work-in-business-office-photo.jpg',
      'https://static.vecteezy.com/system/resources/previews/070/629/395/non_2x/financial-analyst-reviewing-data-charts-and-graphs-on-laptop-for-business-strategy-in-office-photo.jpeg',
      'https://cdn.autonomous.ai/production/ecm/240425/Dual-Monitor-Setup-Ideas-Boost-Productivity-Efficiency1.webp',
      'https://marketplace.canva.com/EAE9xrxOUfk/2/0/1600w/canva-modern-promotion-business-agency-blog-banner-XxOFEMvyEC8.jpg'
    ]
    return images[index % images.length]
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful projects demonstrating expertise in business analysis, 
            financial modeling, and data-driven solutions that deliver measurable results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {guillermoData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={getProjectImage(index)}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      project.type === 'BA' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-indigo-600 text-white'
                    } flex items-center space-x-1`}
                  >
                    {project.type === 'BA' ? <BarChart3 size={14} /> : <TrendingUp size={14} />}
                    <span>{project.type === 'BA' ? 'Business Analysis' : 'Financial Analysis'}</span>
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button 
                    variant="outline"
                    onClick={() => openProjectDetails(project)}
                    className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Briefcase size={16} />
                    <span>View Details</span>
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => openProjectDetails(project)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={16} />
                    <span>Case Study</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '45%', label: 'Process Improvement', desc: 'Average efficiency gain' },
            { value: '$100M+', label: 'Value Delivered', desc: 'Through strategic analysis' },
            { value: '80%', label: 'Automation Rate', desc: 'In reporting systems' },
            { value: '25%', label: 'Cost Reduction', desc: 'Through optimization' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Discuss Your Next Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to transform your business challenges into strategic opportunities 
              with data-driven insights and proven analytical expertise.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Portfolio
