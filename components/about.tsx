
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, TrendingUp, Award, Users, Target, Lightbulb } from 'lucide-react'
import guillermoData from '@/lib/cv-data'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: BarChart3, label: 'Years Experience', value: '15+', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Cost Savings Achieved', value: '€100K+', color: 'text-indigo-500' },
    { icon: Award, label: 'Efficiency Improvement', value: '99%', color: 'text-purple-500' },
    { icon: Users, label: 'Industries', value: '4+', color: 'text-green-500' }
  ]

  const highlights = [
    {
      icon: Target,
      title: 'Business Intelligence & Analytics',
      description: 'Expert in KPI development, BI reporting & visualization, ERP integration, and performance monitoring. Led successful SAP B1 implementations and digital integrations across global organizations.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Data Analysis',
      description: 'Specialized in financial modeling, budgeting & forecasting, and P&L analysis. Managed multi-million dollar budgets and delivered quantifiable cost savings of over €100K through data-driven solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Process Automation & Efficiency',
      description: 'Achieved 99% time reduction in month-end closing and 85% efficiency gain in payment processing through advanced Excel automation and ERP optimization.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Dual-Expertise Professional
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {guillermoData.personalInfo.bio}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-gray-700"><strong>Languages:</strong> Spanish (Native), English (B2)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span className="text-gray-700"><strong>Location:</strong> Malta - Zebbug</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-gray-700"><strong>Specialization:</strong> Business Intelligence & Financial Data Analysis</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className={`${stat.color} mb-3`} size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <highlight.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h4>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
