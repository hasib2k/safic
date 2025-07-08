import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Donate - Sultanpur Al-Falah Islamic Center',
  description: 'Support Sultanpur Al-Falah Islamic Center through your generous donations. Help us serve the Muslim community in Dhaka',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

export default function DonationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
