"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronRight, Github, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "School IT Support & Infrastructure",
      role: "System Administrator",
      description:
        "Managed day-to-day IT operations for a Junior High School in Ghana. Installed and maintained computer labs, resolved hardware/software issues, configured networks, and ensured data security through regular backups.",
      tech: ["LAN", "Microsoft 365", "Windows OS", "Basic Cybersecurity"],
      liveLink: null,
      githubLink: null,
      achievements: [
        "Reduced system downtime by 65% through preventive maintenance",
        "Implemented backup solution that recovered critical data after power surge incident",
        "Trained 12 teachers on basic IT troubleshooting, reducing support tickets by 30%",
        "Set up computer lab with 25 workstations within limited budget constraints",
      ],
      challenge:
        "Working with limited budget and aging hardware while ensuring a reliable learning environment for students.",
      solution:
        "Implemented open-source solutions, refurbished older computers, and created a sustainable maintenance schedule.",
    },
    {
      title: "CI/CD Pipeline & AWS Deployment",
      role: "DevOps Intern @ ExLearn Technologies (Remote)",
      description:
        "Built automated pipelines using GitHub Actions and Jenkins to streamline deployments. Managed EC2 instances and used Terraform to provision infrastructure on AWS.",
      tech: ["AWS", "Jenkins", "GitHub Actions", "Terraform", "Python"],
      liveLink: null,
      githubLink: "#",
      achievements: [
        "Reduced deployment time by 75% through automation",
        "Created infrastructure as code templates now used across the organization",
        "Implemented monitoring that identified and prevented 3 major outages",
        "Documented entire DevOps process for future team members",
      ],
      challenge: "Learning multiple new technologies simultaneously while delivering business value as an intern.",
      solution:
        "Created a structured learning plan focused on immediate project needs, paired with experienced team members, and built incrementally.",
    },
    {
      title: "Website Deployment for Dalijay Tech Hub",
      role: "Web Developer & DevOps Support",
      description:
        "Deployed a WordPress site hosted on AWS EC2. Configured Route 53, enabled SSL, and handled domain integration. Ensured uptime, performance, and backups.",
      tech: ["WordPress", "EC2", "Route 53", "MariaDB", "SSL"],
      liveLink: "https://dalijaytechhub.online",
      githubLink: "#",
      achievements: [
        "Achieved 99.9% uptime since deployment",
        "Implemented CDN that improved page load times by 40%",
        "Set up automated backups that saved site data after accidental deletion",
        "Optimized site performance resulting in improved SEO rankings",
      ],
      challenge: "Creating a high-performance WordPress site that could handle traffic spikes while keeping costs low.",
      solution: "Implemented caching, CDN integration, and an optimized EC2 instance with auto-scaling capabilities.",
    },
    {
      title: "Technical Article Writing & Personal Site Hosting",
      role: "Technical Writer & Publisher",
      description:
        "Wrote and published DevOps and cloud computing articles on a personal portfolio website hosted on S3. Demonstrated ability to explain technical topics clearly.",
      tech: ["HTML", "CSS", "AWS S3", "Markdown"],
      liveLink: "https://devopsbyjames.dalijaytechhub.online",
      githubLink: "#",
      achievements: [
        "Published 15+ articles on DevOps best practices",
        "Grew readership to 500+ monthly visitors",
        "Articles have been referenced in online DevOps communities",
        "Implemented serverless hosting that reduced hosting costs by 60%",
      ],
      challenge: "Creating engaging technical content while maintaining a cost-effective personal site.",
      solution:
        "Leveraged AWS S3 static hosting with CloudFront for an almost zero-maintenance, highly available site.",
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="font-medium text-primary">{project.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => setSelectedProject(index)}>
                      <span>Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] h-[90vh]">
                    {selectedProject !== null && (
                      <>
                        <DialogHeader className="px-6 py-4">
                          <DialogTitle>{projects[selectedProject].title}</DialogTitle>
                          <DialogDescription>{projects[selectedProject].role}</DialogDescription>
                          <DialogClose asChild>
                            <Button variant="ghost" size="sm" className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Close</span>
                            </Button>
                          </DialogClose>
                        </DialogHeader>

                        <div className="space-y-4 mt-4 px-6 py-4 overflow-y-auto">
                          <div>
                            <h4 className="text-sm font-semibold">Project Objective</h4>
                            <p className="text-sm mt-1">{projects[selectedProject].description}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold">Your Role</h4>
                            <p className="text-sm mt-1">{projects[selectedProject].role}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold">Challenges Faced</h4>
                            <p className="text-sm mt-1">{projects[selectedProject].challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold">Solutions Implemented</h4>
                            <p className="text-sm mt-1">{projects[selectedProject].solution}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold">Outcomes</h4>
                            <ul className="mt-2 space-y-2">
                              {projects[selectedProject].achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-2">
                            <h4 className="text-sm font-semibold">Technologies Used</h4>
                            {projects[selectedProject].tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>

                {project.liveLink && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </Button>
                )}

                {project.githubLink && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      GitHub <Github size={14} />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
