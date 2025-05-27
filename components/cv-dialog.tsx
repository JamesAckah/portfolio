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
        <Button variant="outline">Download CV</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download CV</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <Button asChild>
            <a href="/James_cv_Remote.pdf" download>
              Download PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
