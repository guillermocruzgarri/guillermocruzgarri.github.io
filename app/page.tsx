
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
