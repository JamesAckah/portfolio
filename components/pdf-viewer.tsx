"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Download, FileText, Printer, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function PDFViewer() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handlePrint = () => {
    window.print()
    toast({
      title: "CV Opened",
      description: "The CV has been opened in a new tab for printing.",
    })
  }

  const handleDownload = () => {
    try {
      // Use a more reliable approach to download the CV
      window.print()

      toast({
        title: "CV Opened",
        description: "The CV has been opened in a new tab. You can print or save it from there.",
      })
    } catch (error) {
      console.error("Error opening CV:", error)
      toast({
        title: "Error Opening CV",
        description: "Please try again or contact me directly for my CV.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Button variant="outline" className="flex items-center gap-2" onClick={() => setOpen(true)}>
        <FileText size={16} className="mr-2" />
        View CV
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
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
                Save/Print as PDF
              </Button>
              <DialogClose asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setOpen(false)}>
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
                  <h1 className="text-3xl font-bold text-gray-800">JAMES ACKAH-BLAY</h1>
                  <h2 className="text-xl text-gray-600 mt-1">System Administrator | DevOps Engineer | IT Support</h2>
                  <div className="mt-3 text-sm text-gray-600 space-y-1">
                    <div>Address: P. O. Box 20, Axim - Ghana</div>
                    <div>Mobile: +233542947685 || Email: jamesblay80@gmail.com</div>
                    <div>
                      LinkedIn: <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.linkedin.com/in/</a>
                    </div>
                    <div>
                      Github: <a href="https://github.com/JamesAckah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/JamesAckah</a>
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
                    <h4 className="font-bold text-gray-800">Kolonos BV</h4>
                    <span className="text-gray-600 text-sm">Jan 2022 – Present</span>
                  </div>
                  <p className="font-semibold text-gray-700">System Administrator</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Reduced system downtime by 65% through preventive maintenance.</li>
                    <li>Implemented backup solution that recovered critical data after a power surge incident.</li>
                    <li>Trained 12 teachers on basic IT troubleshooting, reducing support tickets by 30%</li>
                    <li>Set up a computer lab with 25 workstations within limited budget constraints</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">Exlearn Technologies, Remote</h4>
                    <span className="text-gray-600 text-sm">Oct 2024 – Dec 2024</span>
                  </div>
                  <p className="font-semibold text-gray-700">DevOps Intern</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Reduced deployment time by 75% through automation</li>
                    <li>Created infrastructure as code templates now used across the organisation</li>
                    <li>Implemented monitoring that identified and prevented 3 major outages</li>
                    <li>Documented the entire DevOps process for future team members</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">Charlotte Dolphyne Technical Institute, Takoradi</h4>
                    <span className="text-gray-600 text-sm">Apr 2023 – Sept 2023</span>
                  </div>
                  <p className="font-semibold text-gray-700">Instructor</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>
                      Taught Web Design and C++ Programming to over 80 students aged 16–20, achieving a 92% course
                      completion rate.
                    </li>
                    <li>
                      Developed and delivered 20+ hands-on lessons, increasing student engagement and practical
                      understanding by 35%, based on feedback and performance assessments.
                    </li>
                    <li>
                      Configured and maintained 30+ classroom computers and network devices, reducing technical
                      disruptions by over 40% during class hours.
                    </li>
                    <li>
                      Evaluated 80+ assignments and 15 final projects, providing detailed feedback that helped 75% of
                      students improve their scores by at least one grade level.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">TECHNICAL SKILLS</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>DevOps Tools: Jenkins, Maven, and Terraform</li>
                    <li>Cloud Platforms: AWS (EC2, S3, IAM, CloudFormation)</li>
                    <li>Programming/Scripting: Python, Bash</li>
                    <li>Infrastructure as Code (IaC): Terraform</li>
                    <li>CI/CD Pipelines: Jenkins, GitHub Actions</li>
                    <li>Operating Systems: Linux, Windows, Mac OS</li>
                    <li>Networking: LAN/WAN, VPN, DNS, DHCP</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">CERTIFICATIONS</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>AWS Certified Cloud Practitioner (Amalitech)</li>
                    <li>IBM Certificate in Cloud Computing</li>
                    <li>Google Certificate in IT Support</li>
                    <li>Google Data Analytics Professional Certificate</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3 mt-6">SOFT SKILLS</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Strong Communication and Collaboration</li>
                    <li>Problem-solving and Critical Thinking</li>
                    <li>Teamwork and Leadership</li>
                    <li>Attention to Detail and Analytical Thinking</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">TOOLS & TECHNOLOGIES</h3>
                  <p className="text-gray-700">Git | Jenkins | Maven | Terraform | AWS | SonarQube</p>
                  <br />
                  <br />
                  <h3>REFERENCES ARE KINDLY AVAILABLE ON REQUEST</h3>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3">LANGUAGES</h3>
                  <p className="text-gray-700">English (Fluent)</p>

                  <h3 className="text-lg font-bold text-gray-800 border-b pb-1 mb-3 mt-6">INTERESTS</h3>
                  <p className="text-gray-700">
                    Cloud Infrastructure | DevOps Automation | Continuous Learning | Problem-Solving
                  </p>
                
                </div>
             
              </div>
             
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
