'use client'

import { Metadata } from 'next'

// Note: Client components cannot export metadata directly
// Metadata should be in a separate metadata file or parent layout

interface PrayerTime {
  name: string
  time: string
  arabic: string
}


interface PrayerTime {
  name: string
  time: string
  arabic: string
  jamaahTime?: string
}

interface WeeklyPrayerSchedule {
  [key: string]: {
    fajr: string
    dhuhr: string
    asr: string
    maghrib: string
    isha: string
  }
}

const prayerTimes: PrayerTime[] = [
  { name: 'Fajr', time: '5:30 AM', arabic: 'الفجر', jamaahTime: '5:45 AM' },
  { name: 'Dhuhr', time: '12:45 PM', arabic: 'الظهر', jamaahTime: '1:00 PM' },
  { name: 'Asr', time: '4:15 PM', arabic: 'العصر', jamaahTime: '4:30 PM' },
  { name: 'Maghrib', time: '7:20 PM', arabic: 'المغرب', jamaahTime: '7:25 PM' },
  { name: 'Isha', time: '8:45 PM', arabic: 'العشاء', jamaahTime: '9:00 PM' },
]

const weeklySchedule: WeeklyPrayerSchedule = {
  'Saturday': { fajr: '5:30', dhuhr: '12:45', asr: '4:15', maghrib: '7:20', isha: '8:45' },
  'Sunday': { fajr: '5:31', dhuhr: '12:45', asr: '4:16', maghrib: '7:21', isha: '8:46' },
  'Monday': { fajr: '5:32', dhuhr: '12:46', asr: '4:17', maghrib: '7:22', isha: '8:47' },
  'Tuesday': { fajr: '5:33', dhuhr: '12:46', asr: '4:18', maghrib: '7:23', isha: '8:48' },
  'Wednesday': { fajr: '5:34', dhuhr: '12:47', asr: '4:19', maghrib: '7:24', isha: '8:49' },
  'Thursday': { fajr: '5:35', dhuhr: '12:47', asr: '4:20', maghrib: '7:25', isha: '8:50' },
  'Friday': { fajr: '5:36', dhuhr: '12:48', asr: '4:21', maghrib: '7:26', isha: '8:51' },
}

export default function PrayerTimesPage() {
  const handleNotifications = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        alert('Prayer notifications enabled! You will receive daily prayer time reminders.')
      } else {
        alert('Please enable notifications in your browser settings to receive prayer time reminders.')
      }
    } else {
      alert('Your browser does not support notifications. Please contact us for alternative reminder options.')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 mobile-text-scale">Prayer Times</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-6 mobile-text-scale opacity-90">
            Daily prayer schedules for Sultanpur Al-Falah Islamic Center, Dhaka
          </p>
          <div className="text-center">
            <p className="font-arabic text-lg md:text-xl opacity-90 mb-2 mobile-text-scale">
              "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
            </p>
            <p className="text-sm md:text-base opacity-80 mobile-text-scale">
              "Indeed, prayer has been decreed upon the believers a decree of specified times" - Quran 4:103
            </p>
          </div>
        </div>
      </section>

      {/* Today's Prayer Times */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 mobile-text-scale">Today&apos;s Prayer Times</h2>
            <p className="text-gray-600 mobile-text-scale">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} - Dhaka Time (GMT+6)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            {prayerTimes.map((prayer, index) => (
              <div key={prayer.name} className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center border-t-4 border-primary-500 mobile-card">
                <div className="font-arabic text-2xl md:text-3xl text-primary-600 mb-3 mobile-text-scale">{prayer.arabic}</div>
                <div className="text-lg md:text-xl font-semibold text-gray-800 mb-2 mobile-text-scale">{prayer.name}</div>
                <div className="text-base md:text-lg font-bold text-primary-700 mb-1 mobile-text-scale">{prayer.time}</div>
                <div className="text-sm text-gray-600 mobile-text-scale">
                  Jamaah: <span className="font-semibold">{prayer.jamaahTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 mobile-text-scale">Weekly Prayer Schedule</h2>
            <p className="text-gray-600 mobile-text-scale">
              Complete weekly prayer times for planning your worship schedule
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-6xl mx-auto mobile-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="py-3 md:py-4 px-2 md:px-3 text-left font-semibold text-gray-800 mobile-text-scale">Day</th>
                    <th className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-gray-800">
                      <div className="font-arabic text-base md:text-lg mb-1 mobile-text-scale">الفجر</div>
                      <div className="text-xs md:text-sm mobile-text-scale">Fajr</div>
                    </th>
                    <th className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-gray-800">
                      <div className="font-arabic text-base md:text-lg mb-1 mobile-text-scale">الظهر</div>
                      <div className="text-xs md:text-sm mobile-text-scale">Dhuhr</div>
                    </th>
                    <th className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-gray-800">
                      <div className="font-arabic text-base md:text-lg mb-1 mobile-text-scale">العصر</div>
                      <div className="text-xs md:text-sm mobile-text-scale">Asr</div>
                    </th>
                    <th className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-gray-800">
                      <div className="font-arabic text-base md:text-lg mb-1 mobile-text-scale">المغرب</div>
                      <div className="text-xs md:text-sm mobile-text-scale">Maghrib</div>
                    </th>
                    <th className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-gray-800">
                      <div className="font-arabic text-base md:text-lg mb-1 mobile-text-scale">العشاء</div>
                      <div className="text-xs md:text-sm mobile-text-scale">Isha</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(weeklySchedule).map(([day, times]) => (
                    <tr key={day} className="border-b border-gray-200">
                      <td className="py-3 md:py-4 px-2 md:px-3 font-semibold text-primary-700 mobile-text-scale">{day}</td>
                      <td className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-sm md:text-base mobile-text-scale">{times.fajr}</td>
                      <td className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-sm md:text-base mobile-text-scale">{times.dhuhr}</td>
                      <td className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-sm md:text-base mobile-text-scale">{times.asr}</td>
                      <td className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-sm md:text-base mobile-text-scale">{times.maghrib}</td>
                      <td className="py-3 md:py-4 px-2 md:px-3 text-center font-semibold text-sm md:text-base mobile-text-scale">{times.isha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-6 md:mt-8">
              <button className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95">
                📥 Download PDF Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Friday Prayer */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-emerald-50 border border-primary-200 rounded-lg shadow-lg p-6 md:p-8 text-center mobile-card">
              <h3 className="text-xl md:text-2xl font-semibold text-primary-800 mb-4 mobile-text-scale">
                Friday Prayer (Jummah)
              </h3>
              <div className="font-arabic text-2xl md:text-3xl text-primary-600 mb-4 mobile-text-scale">
                صلاة الجمعة
              </div>
              <div className="text-lg md:text-xl font-bold text-primary-700 mb-2 mobile-text-scale">
                Khutbah begins at 12:30 PM
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto mobile-text-scale">
                Please arrive early for Friday prayers. The khutbah (sermon) begins promptly at 12:30 PM, 
                followed by congregational prayer. All male Muslims are encouraged to attend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mobile-card">
              <h3 className="text-lg md:text-xl font-semibold text-primary-700 mb-4 mobile-text-scale">Prayer Guidelines</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1 text-sm md:text-base">•</span>
                  <span className="mobile-text-scale">Please arrive 10-15 minutes before Jamaah time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1 text-sm md:text-base">•</span>
                  <span className="mobile-text-scale">Wudu (ablution) facilities are available on-site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1 text-sm md:text-base">•</span>
                  <span className="mobile-text-scale">Prayer mats are provided for all worshippers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1 text-sm md:text-base">•</span>
                  <span className="mobile-text-scale">Separate prayer areas for men and women</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1 text-sm md:text-base">•</span>
                  <span className="mobile-text-scale">Mobile phones should be silenced during prayer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mobile-card">
              <h3 className="text-lg md:text-xl font-semibold text-primary-700 mb-4 mobile-text-scale">Location & Contact</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-semibold mb-1 mobile-text-scale">📍 Address</div>
                  <div className="mobile-text-scale">Sultanpur, Keraniganj<br/>Dhaka 1310, Bangladesh</div>
                </div>
                <div>
                  <div className="font-semibold mb-1 mobile-text-scale">📞 Phone</div>
                  <div>
                    <a href="tel:+8801706776711" className="text-primary-600 font-semibold mobile-touch-target mobile-text-scale">
                      +8801706776711
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 mobile-text-scale">✉️ Email</div>
                  <div>
                    <a href="mailto:info.safic@gmail.com" className="text-primary-600 font-semibold mobile-touch-target mobile-text-scale">
                      info.safic@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 mobile-text-scale">🌐 Website</div>
                  <div>
                    <a href="https://safic.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold mobile-touch-target mobile-text-scale">
                      safic.org
                    </a>
                  </div>
                </div>
                <div className="text-sm text-primary-600 font-semibold mobile-text-scale">
                  All times are in Dhaka Time (GMT+6)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 md:p-6 text-center mobile-card">
              <h3 className="text-lg md:text-xl font-bold text-primary-800 mb-2 mobile-text-scale">Prayer Notifications</h3>
              <p className="text-primary-700 mb-4 mobile-text-scale">
                Get daily prayer time reminders and updates sent directly to your device.
              </p>
              <button 
                className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95"
                onClick={handleNotifications}
              >
                Enable Notifications
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
