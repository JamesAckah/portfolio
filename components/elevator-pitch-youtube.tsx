"use client"
import { useState } from "react"
import VideoTranscript from "./video-transcript"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ElevatorPitchYouTube() {
  const [showIframe, setShowIframe] = useState(false)
  const [errorLoading, setErrorLoading] = useState(false)

  // YouTube video ID
  const videoId = "Oy6S0iTZx54"

  // Function to handle clicking the watch button
  const handleWatchClick = () => {
    try {
      setShowIframe(true)
    } catch (error) {
      console.error("Error loading video:", error)
      setErrorLoading(true)
    }
  }

  // Function to open YouTube in a new tab
  const openYouTube = () => {
    try {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
    } catch (error) {
      console.error("Error opening YouTube:", error)
    }
  }

  return (
    <section id="elevator-pitch" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/90 to-background z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Elevator <span className="text-primary">Pitch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Watch this guide on crafting the perfect elevator pitch for job interviews. Learn how to effectively
            introduce yourself and make a strong first impression.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {/* Video container */}
          <div className="aspect-video bg-black relative">
            {errorLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black p-4">
                <p className="text-white text-center">Unable to load video. Please try the YouTube link below.</p>
              </div>
            ) : !showIframe ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="relative z-10 flex flex-col items-center p-4">
                  <h3 className="text-white text-xl font-semibold mb-4 text-center">
                    Elevator Pitch for Job Seekers: How to Answer "Tell Me About Yourself"
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button onClick={handleWatchClick} className="bg-primary hover:bg-primary/90">
                      Watch Video Here
                    </Button>
                    <Button
                      variant="outline"
                      onClick={openYouTube}
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      Open on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title="Elevator Pitch Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        <VideoTranscript />

        <div className="text-center mt-8">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Want to learn more about my approach to IT support and DevOps? Let's connect and discuss how I can help your
            organization.
          </p>
          <div className="mt-4">
            <a href="#contact" className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
