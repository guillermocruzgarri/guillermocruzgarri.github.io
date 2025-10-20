
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  Users, 
  FileText,
  PieChart,
  Code
} from 'lucide-react'
import guillermoData from '@/lib/cv-data'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Business Analysis',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      skills: guillermoData.skills.businessAnalysis
    },
    {
      title: 'Financial Analysis',
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600',
      skills: guillermoData.skills.financialAnalysis
    },
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      skills: guillermoData.skills.technical
    },
    {
      title: 'Soft Skills',
      icon: Brain,
      color: 'from-green-500 to-green-600',
      skills: guillermoData.skills.soft
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core <span className="text-blue-600">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning business analysis, financial modeling, 
            and data-driven decision making with modern tools and methodologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Database, title: 'Data Analysis', desc: 'SQL, Python, R' },
            { icon: PieChart, title: 'Visualization', desc: 'Power BI, Tableau' },
            { icon: FileText, title: 'Documentation', desc: 'Requirements, Reports' },
            { icon: Users, title: 'Leadership', desc: 'Team Management' }
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="text-white" size={20} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
