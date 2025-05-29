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
      title: "Serverless Contact Form with Terraform and GitHub Actions",
      role: "DevOps Engineer",
      description:
        "Implemented a fully automated serverless contact form using AWS Lambda, API Gateway, and SES, with infrastructure as code using Terraform and continuous deployment through GitHub Actions.",
      tech: ["AWS Lambda", "API Gateway", "SES", "Terraform", "GitHub Actions", "Node.js"],
      liveLink: null,
      githubLink: "https://github.com/JamesAckah/DevOpsProjects/tree/main/DEVOPS-PROJECT-11",
      achievements: [
        "Automated infrastructure provisioning using Terraform",
        "Implemented continuous deployment with GitHub Actions",
        "Set up secure email handling with AWS SES",
        "Created serverless architecture reducing operational overhead",
      ],
      challenge:
        "Creating a secure and scalable contact form solution that requires minimal maintenance and zero server management.",
      solution:
        "Implemented a serverless architecture using AWS Lambda and API Gateway, with infrastructure as code for easy replication and maintenance.",
    },
    {
      title: "Authentication & Deployment with AWS Amplify & Cognito",
      role: "DevOps Engineer",
      description:
        "Implemented secure user authentication for web applications using AWS Amplify and Amazon Cognito, providing scalable authentication management and streamlined deployment processes.",
      tech: ["AWS Amplify", "Amazon Cognito", "S3", "CloudShell", "IAM", "OAuth"],
      liveLink: null,
      githubLink: "https://github.com/JamesAckah/DevOpsProjects/tree/main/DEVOPS-PROJECT-11",
      achievements: [
        "Implemented secure user authentication with Cognito",
        "Set up automated deployment pipeline with Amplify",
        "Configured self-service account recovery",
        "Integrated OAuth and SAML protocols",
      ],
      challenge:
        "Creating a secure and scalable authentication system that supports multiple protocols while maintaining ease of use.",
      solution:
        "Leveraged AWS Amplify for deployment and Amazon Cognito for authentication, implementing best practices for security and user management.",
    },
    {
      title: "Deploying a WordPress Application Using AWS CodeDeploy",
      role: "DevOps Engineer",
      description:
        "Implemented a fully automated deployment pipeline for a WordPress application using AWS CodeDeploy, ensuring zero-downtime deployments and automated rollbacks.",
      tech: ["AWS CodeDeploy", "EC2", "S3", "IAM", "CloudShell", "WordPress"],
      liveLink: "http://ec2-34-239-115-14.compute-1.amazonaws.com/WordPress",
      githubLink: "https://github.com/JamesAckah/DevOpsProjects/tree/main/DEVOPS-PROJECT-11",
      achievements: [
        "Implemented automated deployment pipeline reducing deployment time by 80%",
        "Achieved zero-downtime deployments using CodeDeploy's deployment strategies",
        "Set up automated rollback mechanisms for failed deployments",
        "Implemented security best practices with IAM roles and security groups",
      ],
      challenge:
        "Setting up a robust deployment pipeline that ensures zero-downtime deployments while maintaining security and scalability.",
      solution:
        "Implemented AWS CodeDeploy with custom deployment scripts, automated testing, and rollback mechanisms, while following AWS best practices for security and scalability.",
    },
    {
      title: "Deploying Java Web Applications on Tomcat using Maven and AWS Infrastructure",
      role: "DevOps Engineer",
      description:
        "Designed and implemented a comprehensive deployment solution for Java web applications using Maven, Tomcat, and AWS infrastructure, ensuring high availability and scalability.",
      tech: ["AWS", "EC2", "Maven", "Tomcat", "Java", "VPC", "Security Groups"],
      liveLink: "http://ec2-34-239-115-14.compute-1.amazonaws.com:8080",
      githubLink: "https://github.com/JamesAckah/DevOpsProjects/tree/main/DEVOPS-PROJECT-11",
      achievements: [
        "Set up automated build and deployment pipeline using Maven",
        "Configured high-availability Tomcat server on AWS EC2",
        "Implemented secure VPC architecture with proper security groups",
        "Automated deployment process reducing manual intervention by 90%",
      ],
      challenge:
        "Creating a secure and scalable infrastructure for Java web applications while ensuring automated deployments and high availability.",
      solution:
        "Implemented a custom VPC architecture with proper security groups, automated Maven builds, and Tomcat server configuration with deployment automation scripts.",
    },
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
      title: "High Availability Disaster Recovery on AWS",
      role: "DevOps Engineer",
      description:
        "Designed and implemented a high availability and disaster recovery solution on AWS, ensuring business continuity and meeting strict uptime and recovery objectives.",
      tech: ["AWS", "Serverless", "S3", "Route 53", "Lambda", "CloudFront"],
      liveLink: null,
      githubLink: "https://github.com/JamesAckah/DevOpsProjects/tree/main/DEVOPS-PROJECT-11",
      achievements: [
        "Met 99.99% uptime target for a critical e-commerce platform",
        "Achieved 15 minutes Recovery Time Objective (RTO)",
        "Achieved 5 minutes Recovery Point Objective (RPO)",
      ],
      challenge:
        "Meeting stringent uptime and recovery objectives for a critical e-commerce platform with zero downtime tolerance.",
      solution:
        "Implemented a multi-region architecture leveraging AWS serverless services (S3, Route 53, Lambda, CloudFront), automated backups, and defined failover procedures.",
      caseStudy: {
        title: "Case Study: Acme Corporation's High Availability Needs",
        requirements: [
          "Uptime Target: 99.99%",
          "Recovery Time Objective (RTO): 15 minutes",
          "Recovery Point Objective (RPO): 5 minutes",
        ],
      },
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
