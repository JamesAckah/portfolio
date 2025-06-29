import Navbar from "@/components/navbar-fixed"
import Hero from "@/components/hero"
import About from "@/components/about"
import JourneyTabs from "@/components/journey-tabs"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ElevatorPitchYouTube from "@/components/elevator-pitch-youtube"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Hero />
          <About />
          <ElevatorPitchYouTube />
          <JourneyTabs />
          <Skills />
          <Projects />
          <Testimonials />
          <BlogPreview />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
