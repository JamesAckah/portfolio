"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, BookOpen, Coffee, Code } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("professional")

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <Tabs defaultValue="professional" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6 max-w-2xl mx-auto">
              <TabsTrigger value="professional" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Professional</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <span className="hidden sm:inline">Personal</span>
              </TabsTrigger>
              <TabsTrigger value="approach" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Approach</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="professional" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    IT Support Specialist and DevOps Enthusiast with 3+ years of experience in systems administration,
                    cloud infrastructure (AWS), automation, and user support. Adept at deploying secure, scalable
                    environments and resolving technical issues efficiently.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                    My expertise spans across IT infrastructure management, cloud deployment, automation with CI/CD
                    pipelines, and providing reliable technical support to ensure smooth operations for businesses of
                    medium and small sizes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I continuously invest in my education to keep up with the rapidly evolving technology landscape.
                    Beyond my certifications from Google, AWS, and IBM, I regularly participate in workshops, webinars,
                    and online courses to deepen my knowledge and stay current with industry best practices.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                    I believe in learning by doing, which is why I frequently work on personal projects to experiment
                    with new technologies and strengthen my practical skills.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personal" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Outside of technology, I enjoy reading about history and philosophy, which helps me develop a
                    broader perspective on problem-solving. I'm also passionate about mentoring aspiring IT
                    professionals and contributing to tech communities in Ghana.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                    In my free time, I enjoy hiking, playing chess, and cooking traditional Ghanaian dishes. I believe
                    in maintaining a healthy work-life balance to sustain creativity and productivity.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="approach" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    My approach to technology is pragmatic and user-focused. I believe that infrastructure should be
                    invisible to end-users while providing reliable, secure, and scalable foundations for applications
                    and services.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                    I emphasize automation, documentation, and proactive monitoring to prevent issues before they affect
                    users. When problems do arise, I focus on quick resolution while also addressing root causes to
                    prevent recurrence.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
