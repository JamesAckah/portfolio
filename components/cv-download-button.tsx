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
    // This component no longer renders a button or dialog directly, as the hero section handles it.
    // Its functionality (opening the PDF in a new tab) can potentially be integrated elsewhere if needed, or this component can be removed if unused.
    null
  )
}
