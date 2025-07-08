// Mobile UX Configuration and Utilities
// Best practices implementation for mosque website

export const MOBILE_CONFIG = {
  // Touch target specifications
  TOUCH_TARGET: {
    MIN_SIZE: 44, // iOS minimum
    RECOMMENDED_SIZE: 48, // Android recommendation
    SPACING: 8, // Minimum spacing between targets
  },

  // Typography scales for mobile
  FONT_SIZES: {
    mobile: {
      xs: '12px',
      sm: '14px', 
      base: '16px', // Prevents iOS zoom
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    desktop: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px', 
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    }
  },

  // Breakpoints aligned with Tailwind
  BREAKPOINTS: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },

  // Performance budgets
  PERFORMANCE: {
    FIRST_CONTENTFUL_PAINT: 1.5, // seconds
    LARGEST_CONTENTFUL_PAINT: 2.5, // seconds
    FIRST_INPUT_DELAY: 100, // milliseconds
    CUMULATIVE_LAYOUT_SHIFT: 0.1,
    BUNDLE_SIZE_LIMIT: 250, // KB
  },

  // Islamic/cultural considerations
  ISLAMIC_UX: {
    RTL_LANGUAGES: ['ar', 'ur', 'fa'],
    PRAYER_TIMES_UPDATE_INTERVAL: 60000, // 1 minute
    RAMADAN_THEME_MONTHS: [9], // Hijri months
    DEFAULT_FONT_ARABIC: 'Amiri',
    DEFAULT_FONT_BENGALI: 'SolaimanLipi',
  },

  // Bangladesh-specific optimizations
  BANGLADESH_UX: {
    PREFERRED_PAYMENT_METHODS: ['bkash', 'nagad', 'rocket'],
    NETWORK_CONDITIONS: '3G', // Average connection
    COMMON_SCREEN_SIZES: [360, 375, 414], // Common mobile widths
    LANGUAGE_PRIORITY: ['bn', 'en', 'ar'],
  }
}

// Mobile detection utilities
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < MOBILE_CONFIG.BREAKPOINTS.md
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  const width = window.innerWidth
  return width >= MOBILE_CONFIG.BREAKPOINTS.md && width < MOBILE_CONFIG.BREAKPOINTS.lg
}

export const getTouchTargetSize = (priority: 'high' | 'medium' | 'low' = 'medium') => {
  const sizes = {
    high: MOBILE_CONFIG.TOUCH_TARGET.RECOMMENDED_SIZE + 8, // 56px for critical actions
    medium: MOBILE_CONFIG.TOUCH_TARGET.RECOMMENDED_SIZE, // 48px for normal actions  
    low: MOBILE_CONFIG.TOUCH_TARGET.MIN_SIZE, // 44px for secondary actions
  }
  return sizes[priority]
}

// Haptic feedback simulation
export const triggerHapticFeedback = (type: 'light' | 'medium' | 'heavy' = 'light') => {
  if ('vibrate' in navigator) {
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [30],
    }
    navigator.vibrate(patterns[type])
  }
}

// Network-aware loading
export const getOptimalImageQuality = () => {
  if (typeof navigator === 'undefined') return 'high'
  
  const connection = (navigator as any).connection
  if (!connection) return 'medium'
  
  const effectiveType = connection.effectiveType
  const qualityMap = {
    'slow-2g': 'low',
    '2g': 'low', 
    '3g': 'medium',
    '4g': 'high',
  }
  
  return qualityMap[effectiveType as keyof typeof qualityMap] || 'medium'
}

// Safe area utilities for iOS
export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined') return { top: 0, right: 0, bottom: 0, left: 0 }
  
  const style = getComputedStyle(document.documentElement)
  return {
    top: parseInt(style.getPropertyValue('env(safe-area-inset-top)')) || 0,
    right: parseInt(style.getPropertyValue('env(safe-area-inset-right)')) || 0,
    bottom: parseInt(style.getPropertyValue('env(safe-area-inset-bottom)')) || 0,
    left: parseInt(style.getPropertyValue('env(safe-area-inset-left)')) || 0,
  }
}

// Form optimization utilities
export const optimizeFormForMobile = (inputElement: HTMLInputElement) => {
  // Prevent zoom on iOS
  inputElement.style.fontSize = '16px'
  
  // Add appropriate input modes
  const inputModeMap = {
    email: 'email',
    tel: 'tel',
    number: 'numeric',
    url: 'url',
  }
  
  const inputMode = inputModeMap[inputElement.type as keyof typeof inputModeMap]
  if (inputMode) {
    inputElement.setAttribute('inputmode', inputMode)
  }
}

// Animation utilities for mobile
export const MOBILE_ANIMATIONS = {
  // Reduced motion for better performance
  slideIn: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2 }
  },
  
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  
  scaleOnTap: {
    whileTap: { scale: 0.98 },
    transition: { duration: 0.1 }
  }
}

// Emergency contact utilities
export const EMERGENCY_CONTACTS = {
  imam: '+8801706776711',
  mosque: '+8801706776711', 
  emergency: '999', // Bangladesh emergency number
}

export const makeEmergencyCall = (type: keyof typeof EMERGENCY_CONTACTS) => {
  const number = EMERGENCY_CONTACTS[type]
  window.location.href = `tel:${number}`
}

// Prayer time utilities
export const formatPrayerTime = (time: string, is24Hour: boolean = false) => {
  if (!time) return ''
  
  const [hour, minute] = time.split(':').map(Number)
  
  if (is24Hour) {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  }
  
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  
  return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`
}

// Currency formatting for Bangladesh
export const formatCurrency = (amount: number, currency: 'BDT' | 'USD' = 'USD') => {
  const formatters = {
    BDT: new Intl.NumberFormat('bn-BD', { 
      style: 'currency', 
      currency: 'BDT',
      minimumFractionDigits: 0
    }),
    USD: new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0
    })
  }
  
  return formatters[currency].format(amount)
}
