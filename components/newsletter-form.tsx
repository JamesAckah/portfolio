"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from "@/app/actions"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubscribing(true)

    try {
      const result = await subscribeToNewsletter({ email })

      if (result.success) {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to my newsletter.",
        })
        setEmail("")
      } else {
        throw new Error(result.error || "Failed to subscribe")
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow"
      />
      <Button onClick={handleSubscribe} disabled={isSubscribing}>
        {isSubscribing ? "Subscribing..." : "Subscribe"}
      </Button>
    </div>
  )
}
