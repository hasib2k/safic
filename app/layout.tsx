import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Header'
import Footer from '@/components/Footer'
import AccessibilityTools from '@/components/AccessibilityTools'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sultanpur Al-Falah Islamic Center',
  description: 'Sultanpur Al-Falah Islamic Center - A place of worship, community, and spiritual growth serving the Muslim community in Dhaka',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SAFIC Mosque',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1B5E20',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} safe-area-inset`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content" className="safe-area-inset-bottom">{children}</main>
        <Footer />
        <AccessibilityTools />
        <FloatingActions />
      </body>
    </html>
  )
}
