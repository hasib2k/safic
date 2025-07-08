import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Building Expansion Project - Sultanpur Al-Falah Islamic Center',
  description: 'Join our building expansion project to serve more worshippers and enhance our community facilities',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

export default function BuildingExpansionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
