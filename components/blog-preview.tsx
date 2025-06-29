import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPreview() {
  const blogPosts = [
    {
      title: "Empowering Authentication & Deployment with AWS Amplify & Cognito",
      description: "Learn how to implement secure user authentication using AWS Amplify and Amazon Cognito for your web applications.",
      date: "June 25, 2024",
      readTime: "10 min read",
      tags: ["AWS", "Amplify", "Cognito", "Authentication", "DevOps", "Security"],
      link: "https://medium.com/@jamesblay80/empowering-authentication-deployment-with-aws-amplify-cognito-bd5b5c41ffbb?source=user_profile_page---------1-------------52d4aca5137e----------------------",
    },
    {
      title: "How to create an SNS alert",
      description: "A step-by-step guide on setting up Amazon SNS for creating alerts and notifications.",
      date: "June 20, 2024",
      readTime: "7 min read",
      tags: ["AWS", "SNS", "Monitoring", "Alerting", "Cloud"],
      link: "https://medium.com/@jamesblay80/how-to-create-an-sns-alert-2fbbe427a2d2?source=user_profile_page---------2-------------52d4aca5137e----------------------",
    },
    {
      title: "How to automate backup from EC2 to S3 bucket",
      description: "Learn how to automate the process of backing up your EC2 instances to an S3 bucket for disaster recovery.",
      date: "June 15, 2024",
      readTime: "12 min read",
      tags: ["AWS", "EC2", "S3", "Backup", "Automation", "Disaster Recovery"],
      link: "https://medium.com/@jamesblay80/how-to-automate-backup-from-ec2-to-s3-bucket-6d86edd27b30?source=user_profile_page---------0-------------52d4aca5137e----------------------",
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
                <Button variant="ghost" size="sm" className="text-xs" asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read more
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline" asChild>
            <a href="https://medium.com/@jamesblay80" target="_blank" rel="noopener noreferrer">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
