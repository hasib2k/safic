'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Phone, Clock, MapPin } from 'lucide-react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect(() => {
    const updateDateTime = () => {
      // Create a date object for Dhaka timezone (GMT+6)
      const now = new Date()
      
      // Convert to Dhaka time (Asia/Dhaka timezone)
      const dhakaTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dhaka"}))
      
      const timeString = dhakaTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      
      // Format date for Dhaka timezone
      const dateString = dhakaTime.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      
      setCurrentTime(timeString)
      setCurrentDate(dateString)
    }

    // Update immediately
    updateDateTime()
    
    // Update every second
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const todaysPrayerTimes = [
    { name: 'Fajr', time: '5:30 AM', arabic: 'الفجر' },
    { name: 'Dhuhr', time: '12:45 PM', arabic: 'الظهر' },
    { name: 'Asr', time: '4:15 PM', arabic: 'العصر' },
    { name: 'Maghrib', time: '7:20 PM', arabic: 'المغرب' },
    { name: 'Isha', time: '8:45 PM', arabic: 'العشاء' },
  ]

  return (
    <div className="safe-area-inset-bottom">
      {/* Hero Section */}
      <section className="hero-section islamic-pattern safe-area-inset">
        <div className="container-mobile mobile-padding">
          <h1 className="hero-title text-mobile-2xl md:text-4xl lg:text-5xl">
            Sultanpur Al-Falah Islamic Center
          </h1>
          <p className="hero-subtitle text-mobile-lg md:text-xl leading-relaxed">
            A place of worship, community, and spiritual growth serving the Muslim community in Dhaka, Bangladesh. 
            Join us in our journey of faith and service to Allah (SWT).
          </p>
          <div className="mt-6 md:mt-8">
            <p className="text-lg md:text-xl opacity-90 font-arabic">
              "وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا"
            </p>
            <p className="text-sm mt-2 opacity-80">
              "And who is better in speech than one who invites to Allah" - Quran 41:33
            </p>
          </div>
          
          {/* Mobile Quick Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link 
              href="/donations"
              className="btn-mobile bg-secondary-600 hover:bg-secondary-700 text-white text-center haptic-light flex items-center justify-center space-x-2"
            >
              <Heart size={20} />
              <span>Donate Now</span>
            </Link>
            <a 
              href="tel:+8801706776711"
              className="btn-mobile bg-green-600 hover:bg-green-700 text-white text-center haptic-light flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Mosque</span>
            </a>
          </div>
        </div>
      </section>

      {/* Today's Prayer Times */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-mobile mobile-padding">
          <div className="section-header">
            <h2 className="section-title text-mobile-xl md:text-2xl lg:text-3xl">Today&apos;s Prayer Times</h2>
            <div className="text-center mb-6">
              <div className="card-mobile bg-primary-50 border border-primary-200 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock size={20} className="text-primary-600" />
                  <span className="text-sm text-gray-600">Current Time</span>
                </div>
                <div className="text-xl md:text-2xl font-bold text-primary-800 mb-1">{currentTime}</div>
                <div className="text-sm text-gray-600">{currentDate}</div>
                <div className="text-xs text-gray-500 mt-1 flex items-center justify-center space-x-1">
                  <MapPin size={12} />
                  <span>Dhaka, Bangladesh (GMT+6)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-optimized prayer times grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
            {todaysPrayerTimes.map((prayer, index) => (
              <div key={prayer.name} className="card-mobile text-center min-h-[120px] flex flex-col justify-center touch-target">
                <div className="font-arabic text-xl md:text-2xl mb-2 text-primary-600">{prayer.arabic}</div>
                <div className="font-semibold text-sm md:text-lg mb-1">{prayer.name}</div>
                <div className="text-lg md:text-xl font-bold text-gray-800">{prayer.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <Link 
              href="/prayer-times" 
              className="btn-mobile bg-primary-600 hover:bg-primary-700 text-white inline-flex items-center space-x-2 haptic-light"
            >
              <Clock size={18} />
              <span>View Full Schedule</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 islamic-pattern">
        <div className="container-mobile mobile-padding">
          <div className="section-header">
            <h2 className="section-title text-mobile-xl md:text-2xl lg:text-3xl">Our Services</h2>
            <p className="section-subtitle text-mobile-lg md:text-xl">
              Comprehensive Islamic services for our community&apos;s spiritual and social needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="card-mobile text-center">
              <div className="text-3xl md:text-4xl mb-4 text-primary-600 font-arabic">مسجد</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-gray-800">Daily Prayers</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Five daily congregational prayers with experienced Imams leading our community in worship.
              </p>
            </div>

            <div className="card-mobile text-center">
              <div className="text-3xl md:text-4xl mb-4 text-primary-600 font-arabic">تعليم</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-gray-800">Islamic Education</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Quran classes, Arabic language learning, and Islamic studies for all ages and levels.
              </p>
            </div>

            <div className="card-mobile text-center">
              <div className="text-3xl md:text-4xl mb-4 text-primary-600 font-arabic">مجتمع</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-gray-800">Community Events</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Regular community gatherings, Islamic celebrations, and interfaith dialogue programs.
              </p>
            </div>

            <div className="card-mobile text-center">
              <div className="text-3xl md:text-4xl mb-4 text-primary-600 font-arabic">نكاح</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-gray-800">Marriage Services</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Islamic wedding ceremonies and pre-marital counseling following Islamic traditions.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">زكاة</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Zakat & Charity</h3>
              <p className="text-gray-600 leading-relaxed">
                Zakat calculation services and community charity programs supporting those in need.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">أسرة</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Family Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Family counseling, youth mentorship, and support services for community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-12 bg-white">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Quick Access</h2>
            <p className="section-subtitle">
              Essential links for our community members and visitors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/dashboard" className="card-spiritual text-center block no-underline">
              <div className="text-3xl mb-3 font-arabic">لوحة</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">Islamic Dashboard</h3>
              <p className="text-gray-600 text-sm">Prayer times, Qibla, calendar, and tasbeeh tools</p>
            </a>

            <Link href="/events" className="card-mobile text-center block no-underline haptic-light">
              <div className="text-2xl md:text-3xl mb-3 font-arabic text-primary-600">أحداث</div>
              <h3 className="font-heading font-semibold text-base md:text-lg mb-2 text-gray-800">Upcoming Events</h3>
              <p className="text-gray-600 text-sm">View our latest programs and community activities</p>
            </Link>

            <Link href="/donations" className="card-mobile text-center block no-underline haptic-light">
              <div className="text-2xl md:text-3xl mb-3 font-arabic text-secondary-600">تبرع</div>
              <h3 className="font-heading font-semibold text-base md:text-lg mb-2 text-gray-800">Donate</h3>
              <p className="text-gray-600 text-sm">Support our masjid and community programs</p>
            </Link>

            <Link href="/gallery" className="card-mobile text-center block no-underline haptic-light">
              <div className="text-2xl md:text-3xl mb-3 font-arabic text-primary-600">معرض</div>
              <h3 className="font-heading font-semibold text-base md:text-lg mb-2 text-gray-800">Gallery</h3>
              <p className="text-gray-600 text-sm">Explore photos from our community events</p>
            </Link>

            <Link href="/contact" className="card-mobile text-center block no-underline haptic-light">
              <div className="text-2xl md:text-3xl mb-3 font-arabic text-primary-600">اتصال</div>
              <h3 className="font-heading font-semibold text-base md:text-lg mb-2 text-gray-800">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our staff and leadership</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
