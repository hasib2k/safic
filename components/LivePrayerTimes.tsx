'use client'

import { useState, useEffect, useMemo } from 'react'

interface PrayerTime {
  name: string
  time: string
  arabic: string
  passed: boolean
  current: boolean
}

export default function LivePrayerTimes() {
  const [currentTime, setCurrentTime] = useState('')
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([])

  const basePrayerTimes = useMemo(() => [
    { name: 'Fajr', time: '5:30', arabic: 'الفجر' },
    { name: 'Dhuhr', time: '12:45', arabic: 'الظهر' },
    { name: 'Asr', time: '16:15', arabic: 'العصر' },
    { name: 'Maghrib', time: '19:20', arabic: 'المغرب' },
    { name: 'Isha', time: '20:45', arabic: 'العشاء' },
  ], [])

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentTimeInMinutes = currentHour * 60 + currentMinute

      // Format current time
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Dhaka'
      }))

      // Calculate prayer status
      const updatedPrayerTimes = basePrayerTimes.map((prayer, index) => {
        const [hour, minute] = prayer.time.split(':').map(Number)
        const prayerTimeInMinutes = hour * 60 + minute

        const passed = currentTimeInMinutes > prayerTimeInMinutes
        
        // Find current prayer (next upcoming)
        let current = false
        if (!passed) {
          // Check if this is the next prayer
          const previousPrayersPassed = basePrayerTimes.slice(0, index).every((p) => {
            const [h, m] = p.time.split(':').map(Number)
            return currentTimeInMinutes > (h * 60 + m)
          })
          current = previousPrayersPassed
        }

        return {
          ...prayer,
          time: new Date(`2000-01-01T${prayer.time}:00`).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
          passed,
          current
        }
      })

      setPrayerTimes(updatedPrayerTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [basePrayerTimes])

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-heading font-semibold text-gray-800">Live Prayer Times</h3>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Current Time:</span> {currentTime}
        </div>
      </div>

      <div className="space-y-3">
        {prayerTimes.map((prayer) => (
          <div 
            key={prayer.name}
            className={`flex justify-between items-center p-3 rounded-lg border ${
              prayer.current 
                ? 'bg-green-50 border-green-200 shadow-sm' 
                : prayer.passed 
                ? 'bg-gray-50 border-gray-200 opacity-60' 
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-arabic text-lg text-gray-700">{prayer.arabic}</span>
              <span className={`font-medium ${prayer.current ? 'text-green-700' : 'text-gray-800'}`}>
                {prayer.name}
              </span>
              {prayer.current && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Next Prayer
                </span>
              )}
            </div>
            <div className={`font-semibold ${prayer.current ? 'text-green-700' : 'text-gray-700'}`}>
              {prayer.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Times shown in Dhaka timezone (GMT+6) • Updates every minute
        </p>
      </div>
    </div>
  )
}
