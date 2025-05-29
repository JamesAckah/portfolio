"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "James quickly resolved our network issues and implemented a backup solution that saved our critical data when we experienced hardware failure. His proactive approach to IT support is exactly what we needed.",
      author: "Nathaniel Aborabora",
      role: "Vice Principal, Charlotte Dolphyne Technical Institute",
    },
    {
      quote:
        "During his internship, James showed remarkable initiative in learning new technologies and implementing them in our projects. His CI/CD pipeline improvements reduced our deployment times dramatically.",
      author: "PS",
      role: "CEO, ExLearn Technologies",
    },
    {
      quote:
        "Working with James on our web infrastructure was a great experience. He not only deployed our website efficiently but also taught us how to maintain it and improved its performance significantly.",
      author: "Lawson Dalikey-Dotsey",
      role: "Founder, Dalijay Tech Hub",
    },
    {
      quote:
        "James demonstrated exceptional growth and practical application of AWS skills during his training at Amaltech Ghana. His dedication to learning, especially highlighted in our ongoing project, is truly commendable. He quickly grasped complex concepts and is applying them effectively.",
      author: "Isaac Tandoh",
      role: "AWS Trainer, Amaltech Ghana",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-16 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="relative mt-8 h-[350px] sm:h-[250px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full transition-all duration-500 ease-in-out",
                index === activeIndex
                  ? "opacity-100 translate-x-0 z-20"
                  : index === (activeIndex + 1) % testimonials.length
                    ? "opacity-0 translate-x-full z-10"
                    : "opacity-0 -translate-x-full z-10",
              )}
            >
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-lg italic">{testimonial.quote}</p>
                </CardContent>
                <CardFooter>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-primary" : "bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
