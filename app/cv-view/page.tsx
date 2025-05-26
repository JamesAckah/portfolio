"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CVViewPage() {
  const router = useRouter()

  useEffect(() => {
    // Add title to the page
    document.title = "James Ackah-Blay - CV"
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 print:hidden">
        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
          <Button onClick={() => window.print()}>Print CV</Button>
        </div>
      </div>

      <div className="flex justify-center">
        <iframe src="/James_cv_Remote.pdf" className="w-full h-screen" title="James Ackah-Blay CV" />
      </div>
    </div>
  )
}
