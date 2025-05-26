"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// In production, you would use an environment variable
const resend = new Resend("re_123456789") // Replace with your actual Resend API key

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // For development/demo purposes, log the form data
    console.log("Contact form submission:", data)

    // In a real implementation, you would send an email using Resend or another email service
    // Uncomment this code when you have a valid Resend API key
    /*
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@yourdomain.com>",
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
    });

    if (error) {
      throw new Error(error.message);
    }
    */

    // For now, simulate a successful email send
    // In production, remove this and use the actual email sending code above
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send an email notification to yourself
    // This is a fallback method using mailto link that will open in the user's email client
    // It's not ideal but can work as a temporary solution
    const mailtoLink = `mailto:jamesblay80@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${data.subject}`,
    )}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`

    // In a browser environment, this would open the email client
    // But since this is a server action, we'll just log it
    console.log("Mailto link for manual sending:", mailtoLink)

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
    // For development/demo purposes, log the subscription
    console.log("Newsletter subscription:", data)

    // In a real implementation, you would add the email to your newsletter service
    // For example, using Mailchimp, ConvertKit, etc.

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Failed to subscribe to newsletter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe",
    }
  }
}
