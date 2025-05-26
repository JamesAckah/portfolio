"use client"

import * as React from "react"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Journey from "./journey"
import EducationJourney from "./education-journey"

export default function JourneyTabs() {
  const [activeTab, setActiveTab] = React.useState("professional")

  return (
    <section id="journeys" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Professional & Educational Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <Tabs defaultValue="professional" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="professional">Professional Journey</TabsTrigger>
              <TabsTrigger value="education">Educational Journey</TabsTrigger>
            </TabsList>

            <TabsContent value="professional" className="mt-0">
              <Journey />
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <EducationJourney />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
