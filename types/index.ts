// Core types for the Masjid Portfolio Website

export interface PrayerTimes {
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
  jummah: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  category: 'educational' | 'community' | 'charity' | 'religious'
  imageUrl?: string
  registrationRequired: boolean
  maxAttendees?: number
  currentAttendees?: number
}

export interface EventLocation {
  name: string
  address: string
  coordinates?: { lat: number; lng: number }
  virtualLink?: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  priority: 'low' | 'medium' | 'high'
  date: Date
  expiryDate?: Date
  category: 'general' | 'prayer' | 'event' | 'emergency'
}

export interface DonationCause {
  id: string
  title: string
  description: string
  targetAmount: number
  currentAmount: number
  category: 'general' | 'building' | 'zakat' | 'sadaqah' | 'emergency'
  imageUrl?: string
  endDate?: Date
  isActive: boolean
}

export interface GalleryImage {
  id: string
  url: string
  title: string
  description?: string
  category: 'mosque' | 'events' | 'community' | 'education'
  date: Date
  tags: string[]
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  officeHours: {
    weekdays: string
    weekends: string
  }
  emergencyContact?: string
}

export interface Leadership {
  id: string
  name: string
  title: string
  bio: string
  imageUrl?: string
  email?: string
  phone?: string
  languages: string[]
}

// Navigation and layout types
export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

export interface MobileMenuState {
  isOpen: boolean
  activeSection?: string
}

// Context types
export interface AppContextType {
  prayerTimes: PrayerTimes | null
  announcements: string[]
  isLoading: boolean
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'donation' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  href?: string
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface PrayerTimeCardProps {
  prayer: string
  time: string
  isNext?: boolean
  timeUntil?: string
}

export interface QuickAccessPanelProps {
  prayerTimes: PrayerTimes | null
  announcements: string[]
  className?: string
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  category: 'general' | 'imam' | 'events' | 'donations' | 'feedback'
}

export interface DonationFormData {
  amount: number
  customAmount?: number
  causeId: string
  frequency: 'once' | 'monthly' | 'quarterly' | 'annually'
  donorInfo: {
    name: string
    email: string
    phone?: string
    address?: string
  }
  paymentMethod: 'card' | 'bank' | 'paypal'
  isAnonymous: boolean
}

export interface EventRegistrationData {
  eventId: string
  attendeeInfo: {
    name: string
    email: string
    phone: string
    emergencyContact?: string
  }
  attendeeCount: number
  specialRequirements?: string
  transportationNeeded?: boolean
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Utility types
export type Theme = 'light' | 'dark'
export type Language = 'en' | 'ar' | 'ur'
export type DeviceType = 'mobile' | 'tablet' | 'desktop'

// Prayer time calculation types
export interface PrayerTimeSettings {
  latitude: number
  longitude: number
  timezone: string
  calculationMethod: 'ISNA' | 'MWL' | 'EGYPT' | 'MAKKAH' | 'KARACHI' | 'TEHRAN'
  asrMethod: 'STANDARD' | 'HANAFI'
  adjustments: {
    fajr: number
    dhuhr: number
    asr: number
    maghrib: number
    isha: number
  }
}

export interface PrayerTimeResponse {
  date: string
  times: PrayerTimes
  qibla: number
  sunrise: string
  sunset: string
}

// Error handling types
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: any
}

// Analytics types
export interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

export interface PageViewData {
  page: string
  timestamp: Date
  userAgent: string
  referrer?: string
}

// Enhanced types for comprehensive masjid website

// Live streaming types
export interface LiveStream {
  id: string
  title: string
  description: string
  streamUrl: string
  isLive: boolean
  scheduledStart: Date
  actualStart?: Date
  viewerCount: number
  duration?: number
  category: 'khutbah' | 'lecture' | 'prayer' | 'event'
  thumbnail?: string
  chatEnabled: boolean
  recordingAvailable: boolean
}

// Zakat calculator types
export interface ZakatCalculation {
  id: string
  userId?: string
  assets: {
    cash: number
    gold: { grams: number; pricePerGram: number }
    silver: { grams: number; pricePerGram: number }
    business: { inventory: number; receivables: number }
    investments: { stocks: number; bonds: number; property: number }
  }
  deductions: {
    debts: number
    loans: number
  }
  totalAssets: number
  nisabThreshold: number
  zakatDue: number
  calculatedAt: Date
}

// Blog and content types
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: {
    name: string
    title: string
    avatar?: string
  }
  publishedAt: Date
  updatedAt: Date
  category: 'quran' | 'hadith' | 'fiqh' | 'history' | 'community' | 'youth' | 'women' | 'convert'
  tags: string[]
  featured: boolean
  imageUrl?: string
  readingTime: number
  language: 'en' | 'ar' | 'ur' | 'bn'
  status: 'draft' | 'published' | 'archived'
}

// Volunteer management types
export interface VolunteerApplication {
  id: string
  personalInfo: {
    name: string
    email: string
    phone: string
    age: number
    address: string
    emergencyContact: {
      name: string
      phone: string
      relationship: string
    }
  }
  skills: string[]
  availability: {
    weekdays: boolean
    weekends: boolean
    preferredTimes: string[]
    hoursPerWeek: number
  }
  interests: VolunteerCategory[]
  experience: string
  backgroundCheckConsent: boolean
  references: Array<{
    name: string
    phone: string
    relationship: string
  }>
  applicationDate: Date
  status: 'pending' | 'approved' | 'rejected' | 'training'
  notes?: string
}

export type VolunteerCategory = 'teaching' | 'service' | 'admin' | 'maintenance' | 'events' | 'childcare'

// Enhanced event types
export interface EventWithRegistration {
  id: string
  title: string
  description: string
  date: Date
  time: string
  category: 'educational' | 'community' | 'charity' | 'religious'
  imageUrl?: string
  registrationRequired: boolean
  maxAttendees?: number
  currentAttendees?: number
  registrationForm: {
    fields: RegistrationField[]
    deadline: Date
    confirmationMessage: string
  }
  capacity: {
    total: number
    registered: number
    waitlist: number
  }
  pricing: {
    isFree: boolean
    amount?: number
    currency: string
    paymentRequired: boolean
  }
  location: EventLocation
}

export interface RegistrationField {
  id: string
  type: 'text' | 'email' | 'phone' | 'select' | 'checkbox' | 'textarea'
  label: string
  required: boolean
  options?: string[]
  validation?: {
    pattern?: string
    minLength?: number
    maxLength?: number
  }
}

// Multi-language support
export interface Translation {
  [key: string]: string | Translation
}

export interface LanguageConfig {
  code: 'en' | 'ar' | 'ur' | 'bn' | 'tr' | 'fr'
  name: string
  nativeName: string
  flag: string
  direction: 'ltr' | 'rtl'
  translations: Translation
}

// Ramadan countdown types
export interface RamadanCountdown {
  year: number
  expectedStartDate: Date
  confirmed: boolean
  moonSightingLocation: string
  daysRemaining: number
  preparations: Array<{
    title: string
    description: string
    link: string
    completed: boolean
  }>
}

// Enhanced prayer times with additional features
export interface EnhancedPrayerTimes extends PrayerTimes {
  location: {
    city: string
    country: string
    latitude: number
    longitude: number
    timezone: string
  }
  qiblaDirection: number
  sunrise: string
  sunset: string
  calculationMethod: string
  adjustments: {
    fajr: number
    dhuhr: number
    asr: number
    maghrib: number
    isha: number
  }
  specialTimings?: {
    ramadan?: PrayerTimes
    winterAdjustment?: PrayerTimes
  }
}

// Notification system
export interface Notification {
  id: string
  type: 'prayer' | 'event' | 'announcement' | 'emergency'
  title: string
  message: string
  scheduled: Date
  sent: boolean
  recipients: string[]
  priority: 'low' | 'medium' | 'high' | 'urgent'
}

// User preferences
export interface UserPreferences {
  userId: string
  language: string
  notifications: {
    prayer: boolean
    events: boolean
    announcements: boolean
    newsletter: boolean
  }
  prayerReminders: {
    enabled: boolean
    minutesBefore: number
    selectedPrayers: string[]
  }
  theme: 'light' | 'dark' | 'auto'
  accessibility: {
    highContrast: boolean
    largeText: boolean
    reduceMotion: boolean
  }
}
