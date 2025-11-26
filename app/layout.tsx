import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Nova Coding Club | Learn to Code Together",
  description:
    "Join our coding clubs and bootcamps. Learn programming with expert instructors and grow your tech skills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
