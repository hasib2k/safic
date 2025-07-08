'use client'

import Link from 'next/link'
import { Heart, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start space-y-3">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-in slide-in-from-bottom duration-200">
          {/* Call Mosque */}
          <a
            href="tel:+8801706776711"
            className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 haptic-light"
            onClick={() => setIsExpanded(false)}
          >
            <Phone size={20} />
            <span className="text-sm font-medium">Call Mosque</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801706776711"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 haptic-light"
            onClick={() => setIsExpanded(false)}
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

          {/* Donate */}
          <Link
            href="/donations"
            className="flex items-center space-x-3 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 haptic-light"
            onClick={() => setIsExpanded(false)}
          >
            <Heart size={20} />
            <span className="text-sm font-medium">Donate</span>
          </Link>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 haptic-light ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label="Quick actions"
      >
        {isExpanded ? (
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white transform rotate-45 absolute"></div>
            <div className="w-4 h-0.5 bg-white transform -rotate-45 absolute"></div>
          </div>
        ) : (
          <Heart size={24} className="animate-pulse" />
        )}
      </button>
    </div>
  )
}
