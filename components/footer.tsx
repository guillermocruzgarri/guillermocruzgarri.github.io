
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, BarChart3, TrendingUp, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import guillermoData from '@/lib/cv-data'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' }
  ]

  const expertise = [
    { name: 'Business Analysis', icon: BarChart3 },
    { name: 'Financial Modeling', icon: TrendingUp },
    { name: 'Process Optimization', icon: BarChart3 },
    { name: 'Data Visualization', icon: TrendingUp }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Guillermo Eduardo Cruz Garri
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Industrial Civil Engineer with 15+ years of experience in Business Analysis and 
                Financial Data Analysis, transforming complex business requirements into actionable insights 
                across education, mining, food, and construction sectors.
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-col space-y-3">
                <a 
                  href={`mailto:${guillermoData.personalInfo.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail size={18} />
                  <span>{guillermoData.personalInfo.email}</span>
                </a>
                <a 
                  href={`tel:${guillermoData.personalInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone size={18} />
                  <span>{guillermoData.personalInfo.phone}</span>
                </a>
                <a 
                  href={guillermoData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Expertise</h4>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item.name} className="flex items-center space-x-2">
                  <item.icon size={16} className="text-blue-400" />
                  <span className="text-gray-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Guillermo Eduardo Cruz Garri. All rights reserved.
            </div>

            {/* CV Download Links */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/BA-CV-Guillermo-Cruz.pdf', '_blank')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400"
              >
                <BarChart3 size={14} className="mr-2" />
                BA CV
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/FDA-CV-Guillermo-Cruz.pdf', '_blank')}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-indigo-400 hover:text-indigo-400"
              >
                <TrendingUp size={14} className="mr-2" />
                FDA CV
              </Button>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
