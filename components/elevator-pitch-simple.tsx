"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function ElevatorPitchSimple() {
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleError = () => {
      setVideoError(true)
      console.error("Video failed to load")
    }

    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <section id="elevator-pitch" className="py-20 relative overflow-hidden">
      {/* Background with blend */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/90 to-background z-10"></div>
        <div className="absolute inset-0 bg-[url('/tech-background.png')] bg-cover bg-center opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">
            Elevator <span className="text-primary">Pitch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Watch my elevator pitch to learn more about my skills, experience, and how I can help your organization with
            IT support and DevOps solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Video container */}
          <div className="aspect-video bg-black relative">
            {videoError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <div className="text-center p-4">
                  <p className="text-white mb-2">Video could not be loaded</p>
                  <p className="text-gray-400 text-sm">Please check back later or contact me for more information</p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/video-placeholder.png"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/elevator-pitch.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            Want to learn more about my approach to IT support and DevOps? Let's connect and discuss how I can help your
            organization.
          </p>
          <motion.div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
