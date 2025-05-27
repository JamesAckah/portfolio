"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CVDownloadButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View CV</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>James Ackah-Blay - CV</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <iframe 
            src="/James_cv_Remote.pdf" 
            className="w-full h-[70vh] border-0"
            title="CV Preview"
          />
          <div className="flex justify-center">
            <Button asChild>
              <a href="/James_cv_Remote.pdf" download>
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
