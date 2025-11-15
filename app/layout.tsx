import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'TaskFlow - Find Trusted Help for Every Task',
  description: 'Connect with skilled taskers for home services, moving, cleaning, and more. Get help done right.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
