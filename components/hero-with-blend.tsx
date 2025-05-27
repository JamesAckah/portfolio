"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import CVDownloadButton from "./cv-download-button"
import { motion } from "framer-motion"

export default function HeroWithBlend() {
  const [typedText, setTypedText] = useState("")
  const fullText = "DevOps Engineer & IT Support Specialist"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background with blend */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background z-10"></div>
        <div className="absolute inset-0 bg-[url('/tech-background.png')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium text-primary">👋 Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                James <span className="text-primary">Ackah-Blay</span>
                <span className="text-primary">.</span>
              </h1>
              <div className="h-8">
                <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-300">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-sm bg-primary/20 text-primary border-primary/30">
                  IT Support
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/20 text-primary border-primary/30">
                  DevOps
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/20 text-primary border-primary/30">
                  Cloud Solutions
                </Badge>
                <Badge variant="secondary" className="text-sm bg-primary/20 text-primary border-primary/30">
                  Infrastructure Management
                </Badge>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-300 text-lg"
            >
              Building reliable infrastructure and automating workflows to simplify technology. Passionate about
              continuous learning, improving operational reliability, and making technology work better for teams and
              clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 text-sm text-gray-400"
            >
              <div className="flex items-center gap-1">
                <Mail size={16} className="text-primary" />
                <a href="mailto:jamesblay80@gmail.com" className="hover:text-primary transition-colors">
                  jamesblay80@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} className="text-primary" />
                <span>+233 542947685</span>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin size={16} className="text-primary" />
                <a
                  href="https://linkedin.com/in/james-ackah-blay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-1">
                <i className="bi bi-medium"></i>
                <a
                  href="https://medium.com/@jamesblay80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Medium
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-primary" />
                <span>Ghana (Remote Available)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <CVDownloadButton />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 ring-4 ring-primary/10">
              <Image src="/profile4.png" alt="James Ackah-Blay" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
