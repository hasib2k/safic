'use client'

import { useState, useEffect } from 'react'

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
    <>
      {/* Hero Section */}
      <section className="hero-section islamic-pattern">
        <div className="container-enhanced">
          <h1 className="hero-title">
            Sultanpur Al-Falah Islamic Center
          </h1>
          <p className="hero-subtitle">
            A place of worship, community, and spiritual growth serving the Muslim community in Dhaka, Bangladesh. 
            Join us in our journey of faith and service to Allah (SWT).
          </p>
          <div className="mt-8">
            <p className="text-lg opacity-90 font-arabic">
              "وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا"
            </p>
            <p className="text-sm mt-2 opacity-80">
              "And who is better in speech than one who invites to Allah" - Quran 41:33
            </p>
          </div>
        </div>
      </section>

      {/* Today's Prayer Times */}
      <section className="py-12 bg-white">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Today&apos;s Prayer Times</h2>
            <div className="text-center mb-4">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="text-2xl font-bold text-primary-800 mb-1">{currentTime}</div>
                <div className="text-sm text-gray-600">{currentDate} - Dhaka Time (GMT+6)</div>
              </div>
            </div>
          </div>

          <div className="prayer-grid max-w-4xl mx-auto">
            {todaysPrayerTimes.map((prayer, index) => (
              <div key={prayer.name} className="card-prayer">
                <div className="font-arabic text-2xl mb-2">{prayer.arabic}</div>
                <div className="font-semibold text-lg mb-1">{prayer.name}</div>
                <div className="text-xl font-bold">{prayer.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/prayer-times" className="btn-primary">
              View Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 islamic-pattern">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive Islamic services for our community&apos;s spiritual and social needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">مسجد</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Daily Prayers</h3>
              <p className="text-gray-600 leading-relaxed">
                Five daily congregational prayers with experienced Imams leading our community in worship.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">تعليم</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Islamic Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Quran classes, Arabic language learning, and Islamic studies for all ages and levels.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">مجتمع</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Community Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular community gatherings, Islamic celebrations, and interfaith dialogue programs.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">نكاح</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">Marriage Services</h3>
              <p className="text-gray-600 leading-relaxed">
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

            <a href="/events" className="card-spiritual text-center block no-underline">
              <div className="text-3xl mb-3 font-arabic">أحداث</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">Upcoming Events</h3>
              <p className="text-gray-600 text-sm">View our latest programs and community activities</p>
            </a>

            <a href="/donations" className="card-spiritual text-center block no-underline">
              <div className="text-3xl mb-3 font-arabic">تبرع</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">Donate</h3>
              <p className="text-gray-600 text-sm">Support our masjid and community programs</p>
            </a>

            <a href="/gallery" className="card-spiritual text-center block no-underline">
              <div className="text-3xl mb-3 font-arabic">معرض</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">Gallery</h3>
              <p className="text-gray-600 text-sm">Explore photos from our community events</p>
            </a>

            <a href="/contact" className="card-spiritual text-center block no-underline">
              <div className="text-3xl mb-3 font-arabic">اتصال</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our staff and leadership</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
