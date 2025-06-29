import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assuming bootstrap-icons is installed via pnpm or npm

// Load Inter font with a subset to avoid loading issues
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "James Ackah-Blay | IT Support Specialist & DevOps Engineer",
  description: "Portfolio of James Ackah-Blay, IT Support Specialist and DevOps Engineer",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon.icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
