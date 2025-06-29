"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// Make sure to set RESEND_API_KEY in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured. Please contact me directly at jamesblay80@gmail.com",
      }
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@yourdomain.com>", // Update this with your verified domain
      to: ["jamesblay80@gmail.com"],
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: data.email, // This allows you to reply directly to the sender
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(error.message)
    }

    console.log("Contact email sent successfully:", emailData)
    return { success: true }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

type SubscribeData = {
  email: string
}

export async function subscribeToNewsletter(data: SubscribeData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Newsletter service is not configured. Please try again later.",
      }
    }

    // Send welcome email to the subscriber
    const { data: emailData, error } = await resend.emails.send({
      from: "James Ackah-Blay <james@yourdomain.com>", // Update this with your verified domain
      to: [data.email],
      subject: "Welcome to My Newsletter!",
      text: `
        Hi there!
        
        Thank you for subscribing to my newsletter! I'm excited to share insights about DevOps, cloud infrastructure, and IT best practices with you.
        
        You'll receive updates about:
        • Cloud infrastructure tips and tricks
        • DevOps best practices
        • AWS tutorials and guides
        • IT support insights
        • New projects and case studies
        
        Best regards,
        James Ackah-Blay
        DevOps Engineer & IT Support Specialist
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Welcome to My Newsletter! 🚀</h2>
          
          <p>Hi there!</p>
          
          <p>Thank you for subscribing to my newsletter! I'm excited to share insights about DevOps, cloud infrastructure, and IT best practices with you.</p>
          
          <h3 style="color: #666;">You'll receive updates about:</h3>
          <ul>
            <li>Cloud infrastructure tips and tricks</li>
            <li>DevOps best practices</li>
            <li>AWS tutorials and guides</li>
            <li>IT support insights</li>
            <li>New projects and case studies</li>
          </ul>
          
          <p>Stay tuned for valuable content coming your way!</p>
          
          <p>Best regards,<br>
          <strong>James Ackah-Blay</strong><br>
          DevOps Engineer & IT Support Specialist</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error(error.message)
    }

    // Also send a notification to yourself about the new subscriber
    await resend.emails.send({
      from: "Newsletter System <noreply@yourdomain.com>", // Update this with your verified domain
      to: ["jamesblay80@gmail.com"],
      subject: "New Newsletter Subscriber",
      text: `
        New newsletter subscriber: ${data.email}
        
        Total subscribers: [You can track this in your email service dashboard]
      `,
      html: `
        <h3>New Newsletter Subscriber</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      `,
    })

    console.log("Newsletter subscription processed successfully:", emailData)
    return { success: true }
  } catch (error) {
    console.error("Failed to subscribe to newsletter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe",
    }
  }
}
