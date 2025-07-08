import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Zakat Calculator - Sultanpur Al-Falah Islamic Center',
  description: 'Calculate your annual Zakat obligation with our comprehensive Islamic calculator. Get accurate Zakat calculations based on current Nisab values.',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

export default function ZakatCalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
