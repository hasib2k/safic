'use client'

import { useState, useEffect } from 'react'

interface IslamicDate {
  day: number
  month: string
  year: number
  monthNumber: number
}

export default function IslamicCalendar() {
  const [islamicDate, setIslamicDate] = useState<IslamicDate | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState<Array<{name: string, date: string, description: string}>>([])

  const islamicMonths = [
    'Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani',
    'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'ban',
    'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
  ]

  const islamicEvents = [
    { name: 'Day of Ashura', month: 1, day: 10, description: 'Day of remembrance and fasting' },
    { name: 'Mawlid an-Nabi', month: 3, day: 12, description: 'Birth of Prophet Muhammad (SAW)' },
    { name: 'Isra and Mi\'raj', month: 7, day: 27, description: 'Night Journey of the Prophet' },
    { name: 'Laylat al-Bara\'at', month: 8, day: 15, description: 'Night of Forgiveness' },
    { name: 'First Day of Ramadan', month: 9, day: 1, description: 'Beginning of the holy month' },
    { name: 'Laylat al-Qadr', month: 9, day: 27, description: 'Night of Power (estimated)' },
    { name: 'Eid al-Fitr', month: 10, day: 1, description: 'Festival of Breaking the Fast' },
    { name: 'Day of Arafah', month: 12, day: 9, description: 'Day of Hajj pilgrimage' },
    { name: 'Eid al-Adha', month: 12, day: 10, description: 'Festival of Sacrifice' }
  ]

  // Simple Hijri date calculation (approximation)
  const calculateIslamicDate = () => {
    const today = new Date()
    
    // Hijri epoch: July 16, 622 CE
    const hijriEpoch = new Date(622, 6, 16)
    const diffTime = today.getTime() - hijriEpoch.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    // Average Islamic year is about 354.37 days
    const islamicYear = Math.floor(diffDays / 354.37) + 1
    const dayOfYear = diffDays % 354
    
    // Calculate month and day (simplified)
    let month = 1
    let day = dayOfYear
    
    // Average days per Islamic month (29.53)
    const avgDaysPerMonth = 29.53
    
    while (day > avgDaysPerMonth) {
      day -= avgDaysPerMonth
      month++
      if (month > 12) {
        month = 1
      }
    }
    
    return {
      day: Math.ceil(day),
      month: islamicMonths[month - 1],
      year: Math.floor(islamicYear),
      monthNumber: month
    }
  }

  const getUpcomingEvents = (currentMonth: number, currentDay: number, currentYear: number) => {
    const upcoming = islamicEvents
      .map(event => {
        let eventYear = currentYear
        
        // If event has passed this year, show next year's date
        if (event.month < currentMonth || (event.month === currentMonth && event.day <= currentDay)) {
          eventYear = currentYear + 1
        }
        
        return {
          ...event,
          date: `${event.day} ${islamicMonths[event.month - 1]} ${eventYear} AH`,
          sortKey: event.month * 100 + event.day
        }
      })
      .sort((a, b) => {
        // Sort by current year events first, then next year
        if (a.sortKey < (currentMonth * 100 + currentDay) && b.sortKey >= (currentMonth * 100 + currentDay)) return 1
        if (a.sortKey >= (currentMonth * 100 + currentDay) && b.sortKey < (currentMonth * 100 + currentDay)) return -1
        return a.sortKey - b.sortKey
      })
      .slice(0, 3) // Show next 3 events

    return upcoming
  }

  useEffect(() => {
    const date = calculateIslamicDate()
    setIslamicDate(date)
    
    if (date) {
      const events = getUpcomingEvents(date.monthNumber, date.day, date.year)
      setUpcomingEvents(events)
    }
  }, [])

  if (!islamicDate) return null

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-6 text-center">
        Islamic Calendar
      </h3>

      {/* Current Islamic Date */}
      <div className="text-center mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-sm text-green-700 mb-1">Today&apos;s Islamic Date</div>
          <div className="text-2xl font-bold text-green-800 font-arabic">
            {islamicDate.day} {islamicDate.month} {islamicDate.year} AH
          </div>
          <div className="text-sm text-green-600 mt-1">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Islamic Events */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h4>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={event.name} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-800">{event.name}</div>
                  <div className="text-sm text-gray-600">{event.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">{event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>• Dates are approximate calculations</p>
        <p>• Actual dates may vary based on moon sighting</p>
        <p>• AH = Anno Hegirae (Islamic calendar)</p>
      </div>
    </div>
  )
}
