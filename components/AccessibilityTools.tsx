'use client'

import { useState, useEffect } from 'react'

export default function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedFontSize = localStorage.getItem('fontSize')
    const savedHighContrast = localStorage.getItem('highContrast')
    
    if (savedFontSize) setFontSize(parseInt(savedFontSize))
    if (savedHighContrast === 'true') setHighContrast(true)
  }, [])

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`
    localStorage.setItem('fontSize', fontSize.toString())
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
    localStorage.setItem('highContrast', highContrast.toString())
  }, [highContrast])

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(prev => prev + 2)
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(prev => prev - 2)
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
        aria-label="Accessibility Tools"
        title="Accessibility Tools"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Accessibility Tools</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Controls */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size ({fontSize}px)
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm font-medium"
                  disabled={fontSize <= 12}
                >
                  A-
                </button>
                <button
                  onClick={resetFontSize}
                  className="bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded text-sm font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={increaseFontSize}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm font-medium"
                  disabled={fontSize >= 24}
                >
                  A+
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">High Contrast</span>
              </label>
            </div>

            {/* Quick Actions */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <button
                  onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.title))}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded text-sm"
                >
                  🔊 Read Page Title
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded text-sm"
                >
                  ⬆️ Go to Top
                </button>
                <button
                  onClick={() => document.querySelector('main')?.focus()}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded text-sm"
                >
                  🎯 Skip to Main Content
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* High Contrast Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        .high-contrast * {
          text-shadow: none !important;
          box-shadow: none !important;
        }
        .high-contrast a {
          text-decoration: underline !important;
        }
      `}</style>
    </>
  )
}
