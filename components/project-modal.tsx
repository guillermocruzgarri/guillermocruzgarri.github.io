
'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, X } from 'lucide-react'
import Image from 'next/image'

interface Project {
  name: string
  description: string
  technologies: string[]
  type: 'BA' | 'FDA'
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center justify-between">
            {project.name}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={project.type === 'BA' 
                ? 'https://static.vecteezy.com/system/resources/previews/012/076/073/non_2x/female-operations-manager-holds-meeting-presentation-for-a-team-of-economists-asian-woman-uses-digital-whiteboard-with-growth-analysis-charts-statistics-and-data-people-work-in-business-office-photo.jpg'
                : 'https://static.vecteezy.com/system/resources/previews/070/629/395/non_2x/financial-analyst-reviewing-data-charts-and-graphs-on-laptop-for-business-strategy-in-office-photo.jpeg'
              }
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Badge className={`mb-4 ${
              project.type === 'BA' 
                ? 'bg-blue-600 text-white' 
                : 'bg-indigo-600 text-white'
            }`}>
              {project.type === 'BA' ? 'Business Analysis' : 'Financial Analysis'}
            </Badge>
            
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-lg font-semibold mb-3">Key Results & Impact</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Achieved measurable improvements in operational efficiency</li>
              <li>Reduced processing time and increased accuracy</li>
              <li>Enhanced stakeholder satisfaction and user adoption</li>
              <li>Delivered quantifiable business value and ROI</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button className="flex items-center space-x-2">
                <ExternalLink size={16} />
                <span>View Live Demo</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Download Case Study</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal
