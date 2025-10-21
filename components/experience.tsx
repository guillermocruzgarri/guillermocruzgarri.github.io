
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, BarChart3, TrendingUp } from 'lucide-react'
import guillermoData from '@/lib/cv-data'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering impactful solutions across diverse industries, 
            combining business analysis expertise with financial data mastery.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />

          <div className="space-y-12">
            {guillermoData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.position}</h3>
                      <div className="flex items-center space-x-2 text-blue-600 font-semibold mb-2">
                        <Building2 size={18} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 mb-4">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      job.type === 'BA' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {job.type === 'BA' ? <BarChart3 size={20} /> : <TrendingUp size={20} />}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  
                  <div className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    job.type === 'BA' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}>
                    {job.type === 'BA' ? 'Business Analysis' : 'Financial Data Analysis'}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Education & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                Education
              </h4>
              <div className="space-y-6">
                {guillermoData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-6">
                    <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                    {edu.details && <p className="text-gray-600 text-sm mt-1">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3" />
                Certifications
              </h4>
              <div className="space-y-4">
                {guillermoData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-indigo-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
