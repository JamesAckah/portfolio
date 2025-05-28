"use client"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function CVDownloadButton() {
  const { toast } = useToast()
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDownload = () => {
    try {
      toast({
        title: "CV Download",
        description: "Opening CV in a new tab. You can save it from there.",
      })

      // Open CV in a new tab instead of trying to download directly
      window.open("/cv", "_blank")
    } catch (error) {
      console.error("Download error:", error)
      toast({
        title: "Download Failed",
        description: "Please try again or contact me directly for my CV.",
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
      <Button variant="outline" className="flex items-center gap-2" onClick={() => setDialogOpen(true)}>
        <FileText size={16} className="mr-2" />
        View CV
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-4 flex flex-row items-center justify-between sticky top-0 bg-background z-10 border-b">
            <DialogTitle>James Ackah-Blay - CV</DialogTitle>
            <DialogClose />
          </DialogHeader>

          <div className="overflow-y-auto h-full p-6">
            <div className="bg-white text-black p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-6 border-b pb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                    JA
                  </div>
                </div>
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold text-gray-800">James Ackah-Blay</h1>
                  <h2 className="text-xl text-gray-600 mt-1">System Administrator | DevOps Engineer | IT Support</h2>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                    <div>+233 542947685</div>
                    <div>
                      <a href="mailto:jamesblay80@gmail.com" className="text-blue-600 hover:underline">
                        jamesblay80@gmail.com
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://linkedin.com/in/jamesackahblay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/jamesackahblay
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://devopsbyjames.dalijaytechhub.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        devopsbyjames.dalijaytechhub.online
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">PROFESSIONAL SUMMARY</h3>
                <p className="text-gray-700">
                  DevOps Engineer and System Administrator with hands-on experience in AWS, Windows, Linux, and Python.
                  I have a solid understanding of CI/CD pipelines, infrastructure automation, and cloud-native
                  deployments, backed by a background as a System Administrator.
                </p>
              </div>

              {/* Add a "See full CV" button instead of loading all content */}
              <div className="mt-8 text-center">
                <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Full CV
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
