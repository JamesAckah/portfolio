"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin, MapPin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import CVDownloadButton from "./cv-download-button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "System Administrator | DevOps Engineer | IT Support"
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="py-20 md:py-28 min-h-[90vh] flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">James Ackah-Blay</h1>
            {/* Fixed height for mobile with text wrapping */}
            <div className="min-h-[4rem] md:h-8">
              <h2 className="text-xl md:text-2xl font-medium tracking-wide text-primary break-words">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="text-sm">
                IT Support
              </Badge>
              <Badge variant="secondary" className="text-sm">
                DevOps
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Cloud Solutions
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Infrastructure Management
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground text-lg">
            Passionate about building reliable infrastructure and automating workflows to streamline operations and simplify technology. Committed to continuous learning, enhancing system reliability, and delivering solutions that improve efficiency for medium and small businesses and individual clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <a href="mailto:jamesblay80@gmail.com" className="hover:text-primary transition-colors">
                jamesblay80@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>+233 542947685</span>
            </div>
            <div className="flex items-center gap-1 rounded hover:ring-2 hover:ring-primary hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-200">
              <Linkedin size={16} />
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
              <MapPin size={16} />
              <span>Ghana (Remote/Hybrid Available)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild>
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/JamesAckah" target="_blank" rel="noopener noreferrer">
                GitHub
                <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <CVDownloadButton />
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
            {!imageError ? (
              <div className="w-full h-full relative">
                <Image
                  src="/profile4.png"
                  alt="James Ackah-Blay"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                  quality={100}
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
                JA
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
