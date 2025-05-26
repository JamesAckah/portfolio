"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function VideoTranscript() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <Button
        variant="outline"
        className="w-full flex items-center justify-between bg-black/30 border-primary/30 text-gray-200 hover:bg-black/40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>View Key Points from the Video</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="p-6 mt-2 bg-black/30 border border-primary/20 rounded-md text-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-primary">How to Answer "Tell Me About Yourself"</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-white">Step 1: Start with your present</h4>
              <p>
                Begin with your current role and responsibilities. Mention your title, what you do, and a key
                achievement or skill that's relevant to the job you're interviewing for.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white">Step 2: Briefly touch on your past</h4>
              <p>
                Highlight relevant past experiences that demonstrate your qualifications. Focus on achievements and
                skills that relate to the position you're applying for.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white">Step 3: Connect to your future</h4>
              <p>
                Explain why you're interested in this role and how it aligns with your career goals. Show enthusiasm for
                the opportunity and how your skills make you a great fit.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-medium text-white">Key Tips:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Keep your answer concise (1-2 minutes)</li>
                <li>Tailor your response to the specific job</li>
                <li>Practice but don't memorize word-for-word</li>
                <li>Focus on professional information, not personal details</li>
                <li>End with enthusiasm about the current opportunity</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
