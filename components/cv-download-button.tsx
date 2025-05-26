"use client"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function CVDownloadButton() {
  const { toast } = useToast()

  const handleDownload = () => {
    try {
      toast({
        title: "CV Action",
        description: "Opening CV in a new tab.",
      })

      // Open CV in a new tab
      window.open("/James CV_Remote.pdf", "_blank")
    } catch (error) {
      console.error("CV action error:", error)
      toast({
        title: "Action Failed",
        description: "Could not open CV. Please try again or contact me directly.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex gap-2">
      <Button variant="ghost" className="flex items-center gap-2" onClick={handleDownload}>
        <Download size={16} className="mr-2" />
        Download CV
      </Button>
      <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload}>
        <FileText size={16} className="mr-2" />
        View CV
      </Button>
    </div>
  )
}
