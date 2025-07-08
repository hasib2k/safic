import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Sultanpur Al-Falah Islamic Center',
  description: 'View photos and moments from our mosque community, events, and Islamic programs at Sultanpur Al-Falah Islamic Center',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
