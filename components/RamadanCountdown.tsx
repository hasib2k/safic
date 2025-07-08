import { useState, useEffect } from 'react'
import { Calendar, Clock, Moon, Star } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const RamadanCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isRamadan, setIsRamadan] = useState(false)
  const [ramadanStartDate, setRamadanStartDate] = useState<Date>(new Date())

  useEffect(() => {
    // Calculate next Ramadan date (approximate - should be updated based on moon sighting)
    const currentYear = new Date().getFullYear()
    const currentDate = new Date()
    
    // Ramadan 2024 starts approximately March 10, 2024
    // Ramadan 2025 starts approximately February 28, 2025
    let nextRamadan = new Date(currentYear, 2, 10) // March 10th as default
    
    // If current date is past this year's Ramadan, calculate next year's
    if (currentDate > nextRamadan) {
      nextRamadan = new Date(currentYear + 1, 1, 28) // February 28th next year
    }
    
    setRamadanStartDate(nextRamadan)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const ramadanTime = nextRamadan.getTime()
      const difference = ramadanTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsRamadan(false)
      } else {
        // Check if we're currently in Ramadan (30 days after start)
        const ramadanEnd = new Date(nextRamadan.getTime() + (30 * 24 * 60 * 60 * 1000))
        if (now < ramadanEnd.getTime()) {
          setIsRamadan(true)
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white rounded-lg p-4 text-center shadow-md border border-emerald-100">
      <div className="text-3xl font-bold text-emerald-600 mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm text-slate-600 uppercase tracking-wide">{label}</div>
    </div>
  )

  if (isRamadan) {
    return (
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Moon className="w-32 h-32" />
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Ramadan Mubarak!</h2>
          <p className="text-emerald-100 mb-6">
            May this blessed month bring peace, prosperity, and spiritual growth to you and your family.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">5:30 AM</div>
              <div className="text-sm opacity-90">Suhur Ends</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">6:45 PM</div>
              <div className="text-sm opacity-90">Iftar Time</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-xl p-8 border border-emerald-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <Moon className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Ramadan Countdown</h2>
        <p className="text-slate-600 mb-2">
          {ramadanStartDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <p className="text-sm text-slate-500">
          *Date may vary based on moon sighting
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <TimeCard value={timeLeft.days} label="Days" />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="bg-white rounded-lg p-6 border border-emerald-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
          Prepare for Ramadan
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-slate-700">Spiritual Preparation</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Increase daily prayers and dhikr</li>
              <li>• Read Quran regularly</li>
              <li>• Practice fasting on Mondays & Thursdays</li>
              <li>• Seek forgiveness and make du'a</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-slate-700">Community Activities</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Join our pre-Ramadan seminar</li>
              <li>• Sign up for iftar hosting</li>
              <li>• Volunteer for Tarawih prayers</li>
              <li>• Participate in charity drives</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm">
            Join Preparation Classes
          </button>
          <button className="border border-emerald-600 text-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-50 transition-colors text-sm">
            Download Ramadan Guide
          </button>
        </div>
      </div>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-amber-800 mb-1">Important Note</h4>
            <p className="text-sm text-amber-700">
              The exact date of Ramadan depends on the sighting of the new moon and may vary by location. 
              Please check with your local Islamic authority for confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RamadanCountdown
