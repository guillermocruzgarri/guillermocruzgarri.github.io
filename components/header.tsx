
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-blue-600">
            Guillermo Cruz
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 transition-colors font-medium`}
            >
            {item}
            </button>
            ))}
            </nav>

          {/* CV Download Buttons */}
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/BA-CV-Guillermo-Cruz.pdf', '_blank')}
              className="flex items-center space-x-2"
            >
              <FileText size={16} />
              <span>BA CV</span>
            </Button>
            <Button
              variant="outline" 
              size="sm"
              onClick={() => window.open('/FDA-CV-Guillermo-Cruz.pdf', '_blank')}
              className="flex items-center space-x-2"
            >
              <Download size={16} />
              <span>FDA CV</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <nav className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('/BA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="flex items-center space-x-2 flex-1"
                >
                  <FileText size={16} />
                  <span>BA CV</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm" 
                  onClick={() => window.open('/FDA-CV-Guillermo-Cruz.pdf', '_blank')}
                  className="flex items-center space-x-2 flex-1"
                >
                  <Download size={16} />
                  <span>FDA CV</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
