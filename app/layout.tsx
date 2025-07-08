import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Header'
import Footer from '@/components/Footer'
import AccessibilityTools from '@/components/AccessibilityTools'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sultanpur Al-Falah Islamic Center',
  description: 'Sultanpur Al-Falah Islamic Center - A place of worship, community, and spiritual growth serving the Muslim community in Dhaka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <AccessibilityTools />
      </body>
    </html>
  )
}
