"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer } from "lucide-react"
import Image from "next/image"

export default function CVPage() {
  const router = useRouter()

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Create a direct link to download the CV as a PDF
    const link = document.createElement("a")
    link.href = window.location.href
    link.download = "James_cv_Remote.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Button variant="outline" onClick={() => router.push("/")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print CV
            </Button>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Save as PDF
            </Button>
          </div>
        </div>

        <div className="bg-white text-black p-8 max-w-4xl mx-auto shadow-lg print:shadow-none">
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
              DevOps Engineer and System Administrator with hands-on experience in AWS, Windows, Linux, and Python. I
              have a solid understanding of CI/CD pipelines, infrastructure automation, and cloud-native deployments,
              backed by a background as a System Administrator.
            </p>
            <p className="text-gray-700 mt-2">
              I'm passionate about using cloud technologies to optimise business processes and improve deployment
              efficiency. I'm actively seeking DevOps and IT Support Specialist roles where I can grow within a
              collaborative engineering team and contribute to building secure, scalable solutions, ideally in dynamic,
              cloud-first environments.
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
                  Designed and implemented CI/CD pipelines to automate build, test, and deployment processes, ensuring
                  rapid and consistent application delivery.
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
                <li>Taught Web Design and C++ programming, simplifying technical concepts for students aged 16–20.</li>
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
                <li>Configured and optimized network systems, improving connectivity and reducing latency by 15%.</li>
                <li>Managed data backup and recovery systems, ensuring high availability and data integrity.</li>
                <li>Installed, configured, and maintained hardware and software systems for seamless operations.</li>
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
                <h4 className="font-bold text-gray-800">Ghana Communication Technology University – Accra, Ghana</h4>
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
    </div>
  )
}
