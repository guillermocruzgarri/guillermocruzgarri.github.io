
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.contact.deleteMany()
  await prisma.project.deleteMany()
  await prisma.blogPost.deleteMany()

  // Seed Blog Posts
  const blogPosts = [
    {
      title: 'The Future of Business Intelligence: Trends and Predictions for 2024',
      slug: 'future-business-intelligence-2024',
      excerpt: 'Exploring emerging trends in business intelligence, from AI-powered analytics to self-service BI platforms that are reshaping how organizations make data-driven decisions.',
      content: 'In the rapidly evolving landscape of business intelligence, organizations are witnessing unprecedented changes in how data is collected, processed, and transformed into actionable insights...',
      category: 'BA',
      tags: ['Business Intelligence', 'AI', 'Analytics', 'Data-Driven Decisions'],
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/012/076/073/non_2x/female-operations-manager-holds-meeting-presentation-for-a-team-of-economists-asian-woman-uses-digital-whiteboard-with-growth-analysis-charts-statistics-and-data-people-work-in-business-office-photo.jpg',
      published: true,
      featured: true,
      readTime: 7
    },
    {
      title: 'Advanced Financial Modeling Techniques for Investment Analysis',
      slug: 'advanced-financial-modeling-investment-analysis',
      excerpt: 'Deep dive into sophisticated financial modeling approaches including Monte Carlo simulations, scenario analysis, and risk assessment methodologies for better investment decisions.',
      content: 'Financial modeling has evolved beyond traditional spreadsheet analysis into sophisticated frameworks that incorporate advanced statistical methods and risk assessment techniques...',
      category: 'FDA',
      tags: ['Financial Modeling', 'Investment Analysis', 'Monte Carlo', 'Risk Assessment'],
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/070/629/395/non_2x/financial-analyst-reviewing-data-charts-and-graphs-on-laptop-for-business-strategy-in-office-photo.jpeg',
      published: true,
      featured: true,
      readTime: 12
    },
    {
      title: 'Streamlining Business Process Analysis with Agile Methodologies',
      slug: 'business-process-analysis-agile-methodologies',
      excerpt: 'How to integrate agile principles into business analysis workflows to improve stakeholder engagement, reduce time-to-market, and enhance project outcomes.',
      content: 'The integration of agile methodologies with traditional business analysis practices has created new opportunities for more efficient and collaborative project delivery...',
      category: 'BA',
      tags: ['Agile', 'Business Process', 'Stakeholder Management', 'Project Management'],
      imageUrl: 'https://cdn.autonomous.ai/production/ecm/240425/Dual-Monitor-Setup-Ideas-Boost-Productivity-Efficiency1.webp',
      published: true,
      featured: false,
      readTime: 9
    },
    {
      title: 'Risk Management in Financial Portfolio Optimization',
      slug: 'risk-management-portfolio-optimization',
      excerpt: 'Comprehensive guide to implementing robust risk management strategies in portfolio construction, including diversification techniques and hedge strategies.',
      content: 'Effective risk management is the cornerstone of successful portfolio optimization, requiring a deep understanding of correlation patterns, volatility measures, and hedging instruments...',
      category: 'FDA',
      tags: ['Risk Management', 'Portfolio Optimization', 'Diversification', 'Hedge Strategies'],
      imageUrl: 'https://marketplace.canva.com/EAE9xrxOUfk/2/0/1600w/canva-modern-promotion-business-agency-blog-banner-XxOFEMvyEC8.jpg',
      published: true,
      featured: false,
      readTime: 15
    }
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post
    })
  }

  // Seed Projects
  const projects = [
    {
      title: 'Digital Transformation Initiative',
      description: 'Led a comprehensive analysis of legacy systems and processes, resulting in a roadmap that reduced processing time by 45% and increased customer satisfaction scores by 30%.',
      longDescription: 'This project involved a complete overhaul of business processes for a Fortune 500 company, including stakeholder interviews, current state analysis, future state design, and implementation roadmap development.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/012/076/073/non_2x/female-operations-manager-holds-meeting-presentation-for-a-team-of-economists-asian-woman-uses-digital-whiteboard-with-growth-analysis-charts-statistics-and-data-people-work-in-business-office-photo.jpg',
      technologies: ['Process Mapping', 'JIRA', 'SQL', 'Power BI'],
      category: 'BA',
      featured: true,
      order: 1
    },
    {
      title: 'Investment Portfolio Optimization',
      description: 'Developed a sophisticated financial model to optimize asset allocation, resulting in 12% improvement in risk-adjusted returns for a $100M portfolio.',
      longDescription: 'Created advanced financial models using Monte Carlo simulation and modern portfolio theory to optimize asset allocation for a large institutional investor.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/070/629/395/non_2x/financial-analyst-reviewing-data-charts-and-graphs-on-laptop-for-business-strategy-in-office-photo.jpeg',
      technologies: ['Python', 'R', 'Excel VBA', 'Monte Carlo Simulation'],
      category: 'FDA',
      featured: true,
      order: 2
    },
    {
      title: 'Automated Financial Reporting System',
      description: 'Designed and implemented an automated reporting system that reduced manual reporting time by 80% while improving data accuracy and consistency.',
      longDescription: 'Built a comprehensive reporting automation system that connects multiple data sources and generates standardized financial reports automatically.',
      imageUrl: 'https://cdn.autonomous.ai/production/ecm/240425/Dual-Monitor-Setup-Ideas-Boost-Productivity-Efficiency1.webp',
      technologies: ['SQL', 'Power BI', 'Python', 'ETL Processes'],
      category: 'FDA',
      featured: true,
      order: 3
    },
    {
      title: 'Customer Journey Optimization',
      description: 'Analyzed customer touchpoints and redesigned the customer onboarding process, resulting in 25% reduction in onboarding time and 40% improvement in customer retention.',
      longDescription: 'Comprehensive analysis of customer journey mapping, identifying pain points and opportunities for improvement in the customer experience.',
      imageUrl: 'https://marketplace.canva.com/EAE9xrxOUfk/2/0/1600w/canva-modern-promotion-business-agency-blog-banner-XxOFEMvyEC8.jpg',
      technologies: ['User Story Mapping', 'Process Analysis', 'Tableau', 'A/B Testing'],
      category: 'BA',
      featured: true,
      order: 4
    }
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
