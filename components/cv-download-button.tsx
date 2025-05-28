"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import CVDialog from "./cv-dialog"

export default function CVDownloadButton() {
  const { toast } = useToast()

  const handleDownload = () => {
    try {
      toast({
        title: "CV Action",
        description: "Opening CV in a new tab.",
      })

      // Open CV in a new tab with correct URL
      window.open("/James_cv_Remote.pdf", "_blank")
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
    <Button variant="ghost" className="flex items-center gap-2" onClick={handleDownload}>
      <Download size={16} className="mr-2" />
      Download CV
    </Button>
  )
}
