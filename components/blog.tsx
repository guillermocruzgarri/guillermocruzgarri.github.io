
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight, BarChart3, TrendingUp, Lightbulb, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { toast } from '@/components/ui/use-toast'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates on the latest insights.",
      })
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail('')
    }
  }

  const handleReadMore = (postTitle: string) => {
    toast({
      title: "Article opening...",
      description: `Opening "${postTitle}" - this feature will be available soon!`,
    })
  }

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Business Intelligence: Trends and Predictions for 2024',
      excerpt: 'Exploring emerging trends in business intelligence, from AI-powered analytics to self-service BI platforms that are reshaping how organizations make data-driven decisions.',
      category: 'BA',
      readTime: 7,
      date: '2024-01-15',
      featured: true,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/012/076/073/non_2x/female-operations-manager-holds-meeting-presentation-for-a-team-of-economists-asian-woman-uses-digital-whiteboard-with-growth-analysis-charts-statistics-and-data-people-work-in-business-office-photo.jpg'
    },
    {
      id: 2,
      title: 'Advanced Financial Modeling Techniques for Investment Analysis',
      excerpt: 'Deep dive into sophisticated financial modeling approaches including Monte Carlo simulations, scenario analysis, and risk assessment methodologies for better investment decisions.',
      category: 'FDA',
      readTime: 12,
      date: '2024-01-08',
      featured: true,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/070/629/395/non_2x/financial-analyst-reviewing-data-charts-and-graphs-on-laptop-for-business-strategy-in-office-photo.jpeg'
    },
    {
      id: 3,
      title: 'Streamlining Business Process Analysis with Agile Methodologies',
      excerpt: 'How to integrate agile principles into business analysis workflows to improve stakeholder engagement, reduce time-to-market, and enhance project outcomes.',
      category: 'BA',
      readTime: 9,
      date: '2024-01-02',
      featured: false,
      imageUrl: 'https://cdn.autonomous.ai/production/ecm/240425/Dual-Monitor-Setup-Ideas-Boost-Productivity-Efficiency1.webp'
    },
    {
      id: 4,
      title: 'Risk Management in Financial Portfolio Optimization',
      excerpt: 'Comprehensive guide to implementing robust risk management strategies in portfolio construction, including diversification techniques and hedge strategies.',
      category: 'FDA',
      readTime: 15,
      date: '2023-12-28',
      featured: false,
      imageUrl: 'https://marketplace.canva.com/EAE9xrxOUfk/2/0/1600w/canva-modern-promotion-business-agency-blog-banner-XxOFEMvyEC8.jpg'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & <span className="text-blue-600">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and insights on business analysis, financial modeling, 
            and data-driven strategies to help organizations thrive in a digital world.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Lightbulb className="text-blue-600 mr-3" size={24} />
            Featured Articles
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${
                        post.category === 'BA' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-indigo-600 text-white'
                      } flex items-center space-x-1`}
                    >
                      {post.category === 'BA' ? <BarChart3 size={12} /> : <TrendingUp size={12} />}
                      <span>{post.category === 'BA' ? 'Business Analysis' : 'Financial Analysis'}</span>
                    </Badge>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    onClick={() => handleReadMore(post.title)}
                    className="group/button p-0 h-auto text-blue-600 hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="text-indigo-600 mr-3" size={24} />
            Recent Articles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-indigo-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="secondary"
                    className={`${
                      post.category === 'BA' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-indigo-100 text-indigo-800'
                    }`}
                  >
                    {post.category === 'BA' ? 'Business Analysis' : 'Financial Analysis'}
                  </Badge>
                  <div className="text-sm text-gray-500">
                    {post.readTime} min read
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleReadMore(post.title)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Industry Insights</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest articles on business analysis, financial modeling, 
              and data-driven strategies directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto min-w-0"
                required
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 w-full sm:w-auto flex items-center space-x-2"
              >
                {isSubscribed ? <Check size={20} /> : null}
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
