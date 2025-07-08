import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prayer Times - Sultanpur Al-Falah Islamic Center',
  description: 'Daily prayer times for Dhaka, Bangladesh (GMT+6) - Sultanpur Al-Falah Islamic Center',
}

export default function PrayerTimesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
