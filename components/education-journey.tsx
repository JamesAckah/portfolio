"use client"
import { useState } from "react"

export default function EducationJourney() {
  const [active, setActive] = useState<number>(0)

  const timelineItems = [
    {
      year: "2019-2023",
      title: "Ghana Communication Technology University",
      description:
        "Earned a BSc. in Information Technology in Accra, Ghana, focusing on core IT principles, programming, and systems administration.",
    },
    {
      year: "2009-2012",
      title: "Institute of Commercial Management (ICM-UK)",
      description:
        "Completed an Advanced Diploma in Accounting and Finance, building a strong foundation in financial principles and business management.",
    },
    {
      year: "2024",
      title: "Google Data Analytics Certificate",
      description:
        "Mastered data analysis techniques, including data preparation, visualization, and using tools to derive actionable insights.",
    },
    {
      year: "2023",
      title: "AWS Certified Cloud Practitioner",
      description:
        "Achieved certification validating understanding of AWS cloud concepts, services, security, architecture, and pricing models.",
    },
    {
      year: "2023",
      title: "IBM Certificate in Cloud Computing",
      description:
        "Developed expertise in cloud technologies, deployment models, and IBM cloud services through this specialized certification.",
    },
    {
      year: "2021",
      title: "Google IT Support Certificate",
      description:
        "Gained comprehensive knowledge in IT fundamentals, networking, operating systems, system administration, and security.",
    },
  ]

  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Educational Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              My academic background and continuous learning through professional certifications that have shaped my
              technical expertise.
            </p>
          </div>

          <div className="relative mt-10">
            {/* Timeline line */}
            <div className="absolute top-0 left-[15px] sm:left-1/2 w-0.5 h-full bg-primary/30 -translate-x-1/2 z-0 rounded-full" />

            {/* Timeline items */}
            <div className="relative z-10">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`mb-8 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className="sm:w-1/2 flex items-center justify-center sm:justify-end sm:pr-8">
                    <div
                      onClick={() => setActive(index)}
                      className={`
                        cursor-pointer rounded-lg p-6 w-full
                        transition-all duration-300 ease-in-out
                        ${
                          active === index
                            ? "bg-[#FFF8F2] border-l-4 sm:border-l-0 sm:border-r-4 border-primary dark:bg-[#2A1A0A]"
                            : "bg-card hover:bg-card/80"
                        }
                        ${index % 2 === 0 ? "sm:text-right sm:border-r-0 sm:border-l-4" : ""}
                      `}
                    >
                      <h3 className={`text-xl font-bold ${active === index ? "text-gray-800 dark:text-gray-100" : ""}`}>
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">{item.year}</p>
                      <p
                        className={`mt-2 ${active === index ? "text-gray-600 dark:text-gray-300" : "text-muted-foreground"}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:w-9 justify-center my-4 sm:my-0">
                    <div
                      className={`w-5 h-5 rounded-full border-4 ${
                        active === index ? "bg-primary border-background" : "bg-primary/30 border-background"
                      }`}
                    />
                  </div>

                  <div className="sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
