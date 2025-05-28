"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Cloud, Terminal, LineChart, Headphones, GitBranch, Workflow, Award, Calendar, MessageSquare, Brain, Search, Shuffle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("categories")

  const skillCategories = [
    {
      category: "Operating Systems",
      skills: "Linux (Ubuntu, Amazon Linux), Windows, Mac OS",
      icon: <Server className="h-6 w-6" />,
    },
    {
      category: "Cloud & DevOps Tools",
      skills: "AWS (EC2, S3, IAM), Terraform, Jenkins, GitHub Actions",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      category: "Scripting & Coding",
      skills: "Bash, Python",
      icon: <Terminal className="h-6 w-6" />,
    },
    {
      category: "Monitoring & Logging",
      skills: "CloudWatch",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      category: "IT Support Tools",
      skills: "Microsoft 365, AnyDesk, TeamViewer, VPN, DNS, DHCP",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      category: "Version Control",
      skills: "Git, GitHub",
      icon: <GitBranch className="h-6 w-6" />,
    },
    {
      category: "CI/CD Pipelines",
      skills: "Jenkins, GitHub Actions",
      icon: <Workflow className="h-6 w-6" />,
    },
  ]

  const skillLevels = [
    { name: "Linux Administration", level: 85 },
    { name: "AWS Cloud Services", level: 80 },
    { name: "Windows Server", level: 75 },
    { name: "Jenkins & CI/CD", level: 70 },
    { name: "Terraform", level: 65 },
    { name: "Python Scripting", level: 60 },
    { name: "Bash Scripting", level: 85 },
    { name: "Network Configuration", level: 75 },
    { name: "Security Practices", level: 70 },
    { name: "Docker", level: 60 },
  ]

  const certifications = [
    {
      name: "Google IT Support Certificate",
      issuer: "Google",
      date: "October 2021",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2023",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "IBM Certificate in Cloud Computing",
      issuer: "IBM",
      date: "July 2023",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      date: "January 2024",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  const qualities = [
    {
      title: "Strong Communicator",
      description:
        "Excellent at explaining technical concepts to non-technical stakeholders and collaborating with team members.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Problem Solver",
      description: "Quick to identify issues and implement effective solutions with a methodical approach.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Detail-Oriented",
      description: "Meticulous attention to detail with a focus on security, reliability, and best practices.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Adaptable",
      description:
        "Comfortable working in diverse environments, both on-site and remote, with the ability to quickly learn new technologies.",
      icon: <Shuffle className="h-6 w-6" />,
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills, Certifications & Qualities</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex w-full max-w-xl mx-auto justify-center mb-12 gap-3 flex-wrap">
              <TabsTrigger value="categories" className="px-4 py-1.5">By Category</TabsTrigger>
              <TabsTrigger value="proficiency" className="px-4 py-1.5">By Proficiency</TabsTrigger>
              <TabsTrigger value="certs-qualities" className="px-4 py-1.5">Certifications & Qualities</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((skill, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-all duration-300 hover:shadow-md border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">{skill.icon}</div>
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{skill.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.skills}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="proficiency" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {skillLevels.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</span>
                          <span className="text-sm text-primary font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certs-qualities" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4">
                   <h3 className="text-xl font-bold">Certifications</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                       {certifications.map((cert, index) => (
                           <Card key={index} className="text-center h-full transition-all duration-300 border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                               <CardHeader className="pb-2 flex flex-col items-center">
                                   <div className="text-primary mb-2">{cert.icon}</div>
                                   <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{cert.name}</CardTitle>
                               </CardHeader>
                               <CardContent>
                                   <CardDescription className="text-gray-600 dark:text-gray-300">{cert.issuer}</CardDescription>
                                   <div className="flex items-center justify-center mt-2 text-xs text-primary">
                                       <Calendar className="h-3 w-3 mr-1" />
                                       <span>{cert.date}</span>
                                   </div>
                               </CardContent>
                           </Card>
                       ))}
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl font-bold">Professional Qualities</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {qualities.map((quality, index) => (
                           <Card key={index} className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                               <CardHeader className="pb-2">
                                   <div className="flex items-center gap-2">
                                       <div className="text-primary">{quality.icon}</div>
                                       <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{quality.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent>
                                   <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                                       {quality.description}
                                   </CardDescription>
                               </CardContent>
                           </Card>
                       ))}
                   </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
