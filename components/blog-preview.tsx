import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPreview() {
  const blogPosts = [
    {
      title: "Setting Up a CI/CD Pipeline with GitHub Actions",
      description: "Learn how to automate your deployment process using GitHub Actions with this step-by-step guide.",
      date: "May 10, 2024",
      readTime: "8 min read",
      tags: ["DevOps", "CI/CD", "GitHub"],
    },
    {
      title: "AWS S3 vs EC2 for Website Hosting",
      description: "Compare the pros and cons of using S3 static hosting versus EC2 instances for your web projects.",
      date: "April 22, 2024",
      readTime: "6 min read",
      tags: ["AWS", "Hosting", "Cloud"],
    },
    {
      title: "Terraform Best Practices for Beginners",
      description: "Essential tips for those getting started with Infrastructure as Code using Terraform.",
      date: "March 15, 2024",
      readTime: "10 min read",
      tags: ["Terraform", "IaC", "DevOps"],
    },
  ]

  return (
    <section className="py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-xs">
                  Read more
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" asChild>
            <a href="https://devopsbyjames.dalijaytechhub.online" target="_blank" rel="noopener noreferrer">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
