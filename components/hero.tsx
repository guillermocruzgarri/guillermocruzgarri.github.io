
'use client'

import { motion } from 'framer-motion'
import { ArrowDown, BarChart3, TrendingUp, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gray-900">
          <Image
            src="https://thumbs.dreamstime.com/b/modern-conference-room-panoramic-city-skyline-view-ai-data-charts-glow-wall-screens-business-leaders-discuss-strategy-402573206.jpg"
            alt="Modern office background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="text-blue-400" size={24} />
                <span className="text-blue-400 font-medium">Professional Portfolio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Guillermo Eduardo
                </span>
                <br />
                <span>Cruz Garri</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl mb-6 text-gray-200">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex items-center space-x-3"
                >
                  <BarChart3 size={28} className="text-blue-400" />
                  <span>Business Analyst</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center space-x-3 mt-2"
                >
                  <TrendingUp size={28} className="text-indigo-400" />
                  <span>Financial Data Analyst</span>
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                Transforming complex business requirements into actionable insights. 
                Specialized in financial modeling, data visualization, and strategic decision support.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button 
                  size="lg"
                  onClick={() => window.open('/BA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  <Download size={20} className="mr-2" />
                  Business Analyst CV
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('/FDA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="border-white text-white hover:bg-blue-600 hover:text-gray-900 px-8 py-3 text-lg"
                >
                  <TrendingUp size={20} className="mr-2" />
                  Financial Analyst CV  
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/guillermo-cruz-photo.jpg"
                  alt="Guillermo Eduardo Cruz Garri - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-white animate-bounce hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
