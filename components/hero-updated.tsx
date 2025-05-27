"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface HeroProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isMenuOpen?: boolean;
}

export default function Hero({ open, onOpenChange, isMenuOpen }: HeroProps) {
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
    <section className={`py-20 md:py-28 min-h-[90vh] flex items-center ${isMenuOpen ? 'pt-40' : ''}`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">James Ackah-Blay</h1>
            <div className="h-8">
              <h2 className="text-xl md:text-2xl font-medium tracking-wide text-muted-foreground">
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
            Building reliable infrastructure and automating workflows to simplify technology. Passionate about
            continuous learning, improving operational reliability, and making technology work better for teams and
            clients.
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
            <div className="flex items-center gap-1">
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
              <MapPin size={16} />
              <span>Ghana (Remote Available)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild className="w-full sm:w-auto">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href="#projects">View Projects</a>
            </Button>
            <Dialog open={open} onOpenChange={onOpenChange}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">Download CV</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Download CV</DialogTitle>
                  <DialogDescription>
                    Choose your preferred format to download my CV
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Button asChild className="w-full">
                    <a href="/James_cv_Remote.pdf" download>
                      Download PDF Version
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/James_cv_Remote.docx" download>
                      Download Word Version
                    </a>
                  </Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => onOpenChange?.(false)}>
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/profile4.png" alt="James Ackah-Blay" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
