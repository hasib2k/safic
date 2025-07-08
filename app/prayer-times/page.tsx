import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prayer Times - Sultanpur Al-Falah Islamic Center',
  description: 'Daily prayer times for Dhaka, Bangladesh (GMT+6) - Sultanpur Al-Falah Islamic Center',
}

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
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-enhanced">
          <h1 className="hero-title">Prayer Times</h1>
          <p className="hero-subtitle">
            Daily prayer schedules for Sultanpur Al-Falah Islamic Center, Dhaka
          </p>
          <div className="mt-6">
            <p className="font-arabic text-lg opacity-90">
              "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
            </p>
            <p className="text-sm mt-2 opacity-80">
              "Indeed, prayer has been decreed upon the believers a decree of specified times" - Quran 4:103
            </p>
          </div>
        </div>
      </section>

      {/* Today's Prayer Times */}
      <section className="py-12 bg-white">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Today&apos;s Prayer Times</h2>
            <p className="section-subtitle">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} - Dhaka Time (GMT+6)
            </p>
          </div>

          <div className="prayer-grid max-w-5xl mx-auto">
            {prayerTimes.map((prayer, index) => (
              <div key={prayer.name} className="card-spiritual text-center">
                <div className="font-arabic text-3xl text-primary-600 mb-3">{prayer.arabic}</div>
                <div className="font-heading text-xl font-semibold text-gray-800 mb-2">{prayer.name}</div>
                <div className="text-lg font-bold text-primary-700 mb-1">{prayer.time}</div>
                <div className="text-sm text-gray-600">
                  Jamaah: <span className="font-semibold">{prayer.jamaahTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 islamic-pattern">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Weekly Prayer Schedule</h2>
            <p className="section-subtitle">
              Complete weekly prayer times for planning your worship schedule
            </p>
          </div>

          <div className="card-spiritual max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-primary-200">
                  <th className="py-4 px-3 text-left font-heading font-semibold text-gray-800">Day</th>
                  <th className="py-4 px-3 text-center font-heading font-semibold text-gray-800">
                    <div className="font-arabic text-lg mb-1">الفجر</div>
                    <div className="text-sm">Fajr</div>
                  </th>
                  <th className="py-4 px-3 text-center font-heading font-semibold text-gray-800">
                    <div className="font-arabic text-lg mb-1">الظهر</div>
                    <div className="text-sm">Dhuhr</div>
                  </th>
                  <th className="py-4 px-3 text-center font-heading font-semibold text-gray-800">
                    <div className="font-arabic text-lg mb-1">العصر</div>
                    <div className="text-sm">Asr</div>
                  </th>
                  <th className="py-4 px-3 text-center font-heading font-semibold text-gray-800">
                    <div className="font-arabic text-lg mb-1">المغرب</div>
                    <div className="text-sm">Maghrib</div>
                  </th>
                  <th className="py-4 px-3 text-center font-heading font-semibold text-gray-800">
                    <div className="font-arabic text-lg mb-1">العشاء</div>
                    <div className="text-sm">Isha</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(weeklySchedule).map(([day, times]) => (
                  <tr key={day} className="border-b border-gray-200">
                    <td className="py-4 px-3 font-semibold text-primary-700">{day}</td>
                    <td className="py-4 px-3 text-center font-semibold">{times.fajr}</td>
                    <td className="py-4 px-3 text-center font-semibold">{times.dhuhr}</td>
                    <td className="py-4 px-3 text-center font-semibold">{times.asr}</td>
                    <td className="py-4 px-3 text-center font-semibold">{times.maghrib}</td>
                    <td className="py-4 px-3 text-center font-semibold">{times.isha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary">
              📥 Download PDF Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Friday Prayer */}
      <section className="py-12 bg-white">
        <div className="container-enhanced">
          <div className="max-w-4xl mx-auto">
            <div className="card-spiritual text-center bg-gradient-to-r from-primary-50 to-emerald-50 border-primary-200">
              <h3 className="font-heading text-2xl font-semibold text-primary-800 mb-4">
                Friday Prayer (Jummah)
              </h3>
              <div className="font-arabic text-3xl text-primary-600 mb-4">
                صلاة الجمعة
              </div>
              <div className="text-xl font-bold text-primary-700 mb-2">
                Khutbah begins at 12:30 PM
              </div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Please arrive early for Friday prayers. The khutbah (sermon) begins promptly at 12:30 PM, 
                followed by congregational prayer. All male Muslims are encouraged to attend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 islamic-pattern">
        <div className="container-enhanced">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card-spiritual">
              <h3 className="font-heading text-xl font-semibold text-primary-700 mb-4">Prayer Guidelines</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span>Please arrive 10-15 minutes before Jamaah time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span>Wudu (ablution) facilities are available on-site</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span>Prayer mats are provided for all worshippers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span>Separate prayer areas for men and women</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span>Mobile phones should be silenced during prayer</span>
                </li>
              </ul>
            </div>

            <div className="card-spiritual">
              <h3 className="font-heading text-xl font-semibold text-primary-700 mb-4">Location & Contact</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-semibold mb-1">📍 Address</div>
                  <div>Sultanpur, Keraniganj<br/>Dhaka 1310, Bangladesh</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">📞 Phone</div>
                  <div>
                    <a href="tel:+8801706776711" className="text-primary-600 font-semibold">
                      +8801706776711
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">✉️ Email</div>
                  <div>
                    <a href="mailto:info.safic@gmail.com" className="text-primary-600 font-semibold">
                      info.safic@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">🌐 Website</div>
                  <div>
                    <a href="https://safic.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold">
                      safic.org
                    </a>
                  </div>
                </div>
                <div className="text-sm text-primary-600 font-semibold">
                  All times are in Dhaka Time (GMT+6)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
