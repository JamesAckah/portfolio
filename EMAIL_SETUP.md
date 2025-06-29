# Email Setup with Resend

This portfolio uses Resend for handling contact form submissions and newsletter subscriptions.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Set Environment Variables

Create a `.env.local` file in your project root and add:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add and verify your domain
3. Update the `from` addresses in `app/actions.ts`:
   - Change `contact@yourdomain.com` to your verified domain
   - Change `james@yourdomain.com` to your verified domain
   - Change `noreply@yourdomain.com` to your verified domain

### 4. For Vercel Deployment

Add the environment variable in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add `RESEND_API_KEY` with your actual API key
4. Redeploy your project

## How It Works

### Contact Form
- When someone submits the contact form, an email is sent to `jamesblay80@gmail.com`
- The email includes the sender's name, email, subject, and message
- The `replyTo` field is set to the sender's email, so you can reply directly

### Newsletter Subscription
- When someone subscribes to the newsletter:
  1. A welcome email is sent to the subscriber
  2. A notification email is sent to you about the new subscriber
- The welcome email includes information about what they'll receive

## Testing

You can test the email functionality by:
1. Setting up the environment variables
2. Running the development server
3. Submitting the contact form or newsletter subscription
4. Checking your email inbox

## Troubleshooting

- If emails aren't sending, check that your `RESEND_API_KEY` is correct
- Make sure your domain is verified if you're using custom domains
- Check the browser console and server logs for error messages
- Resend has a free tier with 100 emails per day for testing 