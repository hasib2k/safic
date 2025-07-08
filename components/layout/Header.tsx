'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Clock, Heart, Phone, Home, Users, Calendar, Camera, Sparkles, BookOpen, Mail, LucideIcon } from 'lucide-react'

interface NavigationItem {
  label: string
  href: string
  priority?: 'high' | 'medium' | 'low'
  icon: LucideIcon
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/', priority: 'high', icon: Home },
    { label: 'Dashboard', href: '/dashboard', priority: 'high', icon: Sparkles },
    { label: 'About', href: '/about', priority: 'high', icon: Users },
    { label: 'Prayer Times', href: '/prayer-times', priority: 'high', icon: Clock },
    { label: 'Events', href: '/events', priority: 'medium', icon: Calendar },
    { label: 'Gallery', href: '/gallery', priority: 'medium', icon: Camera },
    { label: 'Features', href: '/features', priority: 'medium', icon: BookOpen },
    { label: 'Blog', href: '/blog', priority: 'medium', icon: BookOpen },
    { label: 'Contact', href: '/contact', priority: 'medium', icon: Mail },
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 shadow-lg border-b border-primary-600 sticky top-0 z-50 backdrop-blur-sm">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link absolute top-0 left-6 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-b-md text-sm font-medium transform -translate-y-full focus:translate-y-0 transition-all duration-300 z-50"
      >
        Skip to main content
      </a>
      
      <div className="container-enhanced">
        <div className="flex items-center justify-between h-14 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="text-white font-bold text-sm">🕌</div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white font-playfair tracking-wide group-hover:text-primary-100 transition-colors duration-300">SAFIC</h1>
              <p className="text-xs text-primary-200 -mt-1 font-light">Sultanpur Al-Falah Islamic Center</p>
            </div>
          </Link>

          {/* All Navigation Items - Serial Layout */}
          <nav className="flex items-center space-x-1 flex-1 justify-center">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 hover:shadow-sm ${
                  isActiveLink(item.href)
                    ? 'bg-primary-600 text-white shadow-md ring-1 ring-primary-400/50'
                    : 'text-primary-100 hover:bg-primary-600/80 hover:text-white backdrop-blur-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Donate Button - Enhanced styling */}
            <Link href="/donations" className="bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white px-4 py-1.5 ml-4 rounded-md transition-all duration-300 flex items-center gap-1.5 font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 ring-1 ring-secondary-400/30">
              <Heart size={12} className="animate-pulse" />
              <span>Donate</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
