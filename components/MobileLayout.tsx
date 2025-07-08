'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { MOBILE_CONFIG } from '../utils/mobileConfig'

interface MobileLayoutProps {
  children: ReactNode
  className?: string
  showSafeArea?: boolean
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  children, 
  className = '',
  showSafeArea = true 
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Add mobile viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta')
      viewport.name = 'viewport'
      viewport.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes'
      document.head.appendChild(viewport)
    }
    
    // Add theme color for mobile browsers
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta')
      themeColor.name = 'theme-color'
      themeColor.content = '#1B5E20'
      document.head.appendChild(themeColor)
    }
  }, [])

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div 
      className={`
        ${className}
        ${showSafeArea ? 'safe-area-inset safe-area-inset-bottom' : ''}
        min-h-screen
        relative
      `}
    >
      {children}
    </div>
  )
}

interface TouchButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  priority?: 'high' | 'medium' | 'low'
  className?: string
  disabled?: boolean
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  priority = 'medium',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'btn-mobile touch-target haptic-light transition-all duration-200 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50'
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
      style={{
        minHeight: `${MOBILE_CONFIG.TOUCH_TARGET.RECOMMENDED_SIZE}px`,
      }}
    >
      {children}
    </button>
  )
}

interface MobileInputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  required?: boolean
  autoComplete?: string
}

export const MobileInput: React.FC<MobileInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  autoComplete
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      required={required}
      autoComplete={autoComplete}
      className={`
        input-mobile
        w-full
        ${className}
      `}
      style={{
        fontSize: '16px', // Prevents zoom on iOS
        minHeight: `${MOBILE_CONFIG.TOUCH_TARGET.RECOMMENDED_SIZE}px`
      }}
    />
  )
}

interface MobileCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  elevated?: boolean
}

export const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className = '',
  onClick,
  elevated = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white 
        rounded-xl 
        p-4 
        ${elevated ? 'shadow-lg' : 'shadow-sm'}
        ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface MobileModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

export const MobileModal: React.FC<MobileModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className = ''
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`modal-mobile bg-white w-full max-w-md ${className}`}>
        {title && (
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <TouchButton
              variant="outline"
              size="sm"
              onClick={onClose}
              className="!p-2 !min-h-10 !min-w-10"
            >
              ✕
            </TouchButton>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

interface FloatingActionButtonProps {
  onClick: () => void
  icon: ReactNode
  className?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon,
  className = '',
  position = 'bottom-right'
}) => {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  }

  return (
    <button
      onClick={onClick}
      className={`
        fab-donate
        ${positionClasses[position]}
        ${className}
      `}
    >
      {icon}
    </button>
  )
}

export default MobileLayout
