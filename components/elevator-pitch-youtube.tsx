"use client"
import { useState, useRef, useEffect } from "react"
import VideoTranscript from "./video-transcript"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export default function ElevatorPitch() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mountedRef = useRef(true)

  // Track component mount status to prevent state updates after unmount
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Initialize video element once it's mounted
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      if (mountedRef.current) {
        setVideoLoaded(true)
        setIsVideoReady(true)
      }
    }

    const handleError = () => {
      if (mountedRef.current) {
        setVideoError(true)
        console.error("Video failed to load")
      }
    }

    // Add event listeners
    video.addEventListener("canplaythrough", handleCanPlay)
    video.addEventListener("error", handleError)

    // Preload the video
    video.load()

    // Clean up
    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay)
      video.removeEventListener("error", handleError)

      // Ensure video is paused when component unmounts
      if (video.paused === false) {
        video.pause()
      }
    }
  }, [])

  const handlePlayPause = async () => {
    const video = videoRef.current
    if (!video || !isVideoReady) return

    try {
      if (isPlaying) {
        video.pause()
        if (mountedRef.current) {
          setIsPlaying(false)
        }
      } else {
        // Make sure video is ready before playing
        if (video.readyState >= 2) {
          try {
            // Use Promise to handle play() properly
            await video.play()
            if (mountedRef.current) {
              setIsPlaying(true)
            }
          } catch (error) {
            console.error("Error playing video:", error)
            if (mountedRef.current) {
              setIsPlaying(false)
            }
          }
        } else {
          // If video is not ready, wait for it
          console.log("Video not ready yet, waiting...")
          video.addEventListener(
            "canplaythrough",
            async () => {
              if (mountedRef.current && videoRef.current) {
                try {
                  await videoRef.current.play()
                  if (mountedRef.current) {
                    setIsPlaying(true)
                  }
                } catch (error) {
                  console.error("Error playing video after waiting:", error)
                }
              }
            },
            { once: true },
          )
        }
      }
    } catch (error) {
      console.error("Error toggling video playback:", error)
    }
  }

  const handleMute = () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.muted = !video.muted
      setIsMuted(!isMuted)
    } catch (error) {
      console.error("Error toggling mute:", error)
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
            {videoError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <div className="text-center p-4">
                  <p className="text-white mb-2">Video could not be loaded</p>
                  <p className="text-gray-400 text-sm">Please check back later or contact me for more information</p>
                </div>
              </div>
            ) : (
              <>
                {/* Placeholder image while video loads */}
                <div
                  className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-500 ${
                    videoLoaded ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {/* Replace with a static placeholder if needed, or remove if not desired */}
                  {/* <div className="w-full h-full bg-[url('/video-placeholder.png')] bg-cover bg-center opacity-70"></div> */}
                </div>

                {/* Video element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/video-placeholder.png" // Optional: use a placeholder image
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls={true} // Use default controls
                  muted={true} // Start muted to avoid autoplay issues
                  playsInline
                  preload="metadata" // or "auto" or "none"
                >
                  <source src="/elevated pitch.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Optional: Custom video controls if needed, removed for now */}
                {/*
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={handlePlayPause}
                    disabled={!isVideoReady}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>

                  <div className="text-white text-sm font-medium">James Ackah-Blay - IT Support & DevOps Engineer</div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={handleMute}
                    disabled={!isVideoReady}
                  >
                    {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                  </Button>
                </div>
                */}

                {/* Optional: Play button overlay if not using default controls */}
                {/*
                {!isPlaying && (videoLoaded || isVideoReady) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-20 w-20 rounded-full bg-primary/80 hover:bg-primary text-white"
                      onClick={handlePlayPause}
                      disabled={!isVideoReady}
                    >
                      <Play className="h-10 w-10" />
                    </Button>
                  </div>
                )}
                */}
              </>
            )}
          </div>
        }

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
