"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Download, Printer, X } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

interface CVDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CVDialog({ open, onOpenChange }: CVDialogProps) {
  const { toast } = useToast()

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    try {
      // Create a direct link to the CV file in the public folder
      const link = document.createElement("a")
      link.href = "/James_cv_Remote.pdf"
      link.download = "James_cv_Remote.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Download Started",
        description: "Your download has started successfully.",
      })
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden border-none shadow-lg">
        <DialogHeader className="p-4 flex flex-row items-center justify-between sticky top-0 bg-background z-10 border-b">
          <DialogTitle>James Ackah-Blay - CV</DialogTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <DialogClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto h-full p-6">
          <div className="bg-white text-black p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6 border-b pb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                <Image
                  src="/profile4.png"
                  alt="James Ackah-Blay"
                  width={128}
                  height={128}
                  className="object-cover"
                />
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
              <p className="text-gray-700 mt-2">
                I'm passionate about using cloud technologies to optimise business processes and improve deployment
                efficiency. I'm actively seeking DevOps and IT Support Specialist roles where I can grow within a
                collaborative engineering team and contribute to building secure, scalable solutions, ideally in
                dynamic, cloud-first environments.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">WORK EXPERIENCE</h3>

              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">ExLearn Technologies – DevOps Intern (Remote)</h4>
                  <span className="text-gray-600 text-sm">October – December 2024</span>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>
                    Designed and implemented CI/CD pipelines to automate build, test, and deployment processes,
                    ensuring rapid and consistent application delivery.
                  </li>
                  <li>
                    Optimized Linux-based servers, improving system performance through effective process management.
                  </li>
                  <li>
                    Implemented load balancers and network optimizations to improve application scalability and
                    reliability.
                  </li>
                  <li>
                    Gained hands-on experience with Terraform for Infrastructure as Code (IaC) and AWS resource
                    management.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">
                    Charlotte Dolphyne Technical Institute – Instructor (Industrial Attachment)
                  </h4>
                  <span className="text-gray-600 text-sm">April – September 2023</span>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>
                    Taught Web Design and C++ programming, simplifying technical concepts for students aged 16–20.
                  </li>
                  <li>Designed hands-on lesson plans, promoting deep learning and student engagement.</li>
                  <li>Configured classroom network environments and provided IT support for smooth operations.</li>
                  <li>Provided constructive feedback on assignments and projects within strict timelines.</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">Kolonos BV – System Administrator</h4>
                  <span className="text-gray-600 text-sm">2022 – Present</span>
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>
                    Configured and optimized network systems, improving connectivity and reducing latency by 15%.
                  </li>
                  <li>Managed data backup and recovery systems, ensuring high availability and data integrity.</li>
                  <li>
                    Installed, configured, and maintained hardware and software systems for seamless operations.
                  </li>
                  <li>
                    Provided technical support while monitoring system performance to maintain uptime and efficiency.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">EDUCATION</h3>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800">
                  Ghana Communication Technology University – Accra, Ghana
                </h4>
                <span className="text-gray-600 text-sm">September 2019 – October 2023</span>
              </div>
              <p className="text-gray-700">BSc. Information Technology</p>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800">Institute of Commercial Management (ICM-UK)</h4>
                <span className="text-gray-600 text-sm">September 2009 – November 2012</span>
              </div>
              <p className="text-gray-700">Advanced Diploma in Accounting and Finance</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  )
}
