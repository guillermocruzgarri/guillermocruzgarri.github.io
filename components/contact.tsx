
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Download, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import guillermoData from '@/lib/cv-data'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: guillermoData.personalInfo.email,
      action: () => window.open(`mailto:${guillermoData.personalInfo.email}`, '_blank')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: guillermoData.personalInfo.phone,
      action: () => window.open(`tel:${guillermoData.personalInfo.phone}`, '_blank')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: guillermoData.personalInfo.location,
      action: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/guillermo-cruz-garri',
      action: () => window.open(guillermoData.personalInfo.linkedin, '_blank')
    }
  ]

  const services = [
    {
      title: 'Business Analysis Consulting',
      description: 'Requirements gathering, process optimization, and digital transformation strategy',
      icon: '📊'
    },
    {
      title: 'Financial Data Analysis',
      description: 'Financial modeling, investment analysis, and risk assessment services',
      icon: '📈'
    },
    {
      title: 'Data Visualization & BI',
      description: 'Dashboard creation, reporting automation, and business intelligence solutions',
      icon: '📋'
    },
    {
      title: 'Strategic Consulting',
      description: 'Business strategy development and performance optimization consulting',
      icon: '🎯'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business challenges into strategic opportunities? 
            Let's discuss how my expertise in business analysis and financial data can drive your success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors ${
                    contact.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={contact.action ?? undefined}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg">
                    <contact.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-gray-900 font-semibold">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CV Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Download className="text-blue-600 mr-2" size={20} />
                Download CV
              </h4>
              <p className="text-gray-600 mb-4">
                Get detailed information about my experience, skills, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Button
                  onClick={() => window.open('/BA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Download size={16} />
                  <span>Business Analyst CV</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open('/FDA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="flex items-center space-x-2 border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <Download size={16} />
                  <span>Financial Analyst CV</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Services Offered</h3>
            
            <div className="space-y-6 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-green-50 p-6 rounded-xl border border-green-200"
            >
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="text-green-600" size={20} />
                <h4 className="text-lg font-bold text-gray-900">Availability</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Currently available for new projects and consulting opportunities. 
                Both full-time positions and freelance engagements considered.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 font-medium">Available for immediate start</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need business process optimization, financial analysis, or strategic consulting, 
              I'm here to help turn your vision into measurable results.
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
              onClick={() => window.open(`mailto:${guillermoData.personalInfo.email}?subject=Project%20Inquiry`, '_blank')}
            >
              <Mail size={20} className="mr-2" />
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
