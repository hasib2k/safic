import LivePrayerTimes from '../../components/LivePrayerTimes'
import QiblaFinder from '../../components/QiblaFinder'
import IslamicCalendar from '../../components/IslamicCalendar'
import DigitalTasbeeh from '../../components/DigitalTasbeeh'

export const metadata = {
  title: 'Islamic Dashboard - Sultanpur Al-Falah Islamic Center',
  description: 'Live prayer times, Qibla direction, Islamic calendar, and digital tasbeeh counter for daily Islamic practices.',
  keywords: 'prayer times, qibla direction, islamic calendar, tasbeeh counter, dhikr, islamic tools',
  openGraph: {
    title: 'Islamic Dashboard - Sultanpur Al-Falah Islamic Center',
    description: 'Live prayer times, Qibla direction, Islamic calendar, and digital tasbeeh counter.',
    type: 'website',
  }
}

export default function IslamicDashboardPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container-enhanced">
          <div className="section-header">
            <h1 className="section-title">Islamic Dashboard</h1>
            <p className="section-subtitle">
              Essential Islamic tools and information for your daily spiritual practices
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12 islamic-pattern">
        <div className="container-enhanced">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Live Prayer Times */}
            <div className="space-y-8">
              <LivePrayerTimes />
              
              {/* Qibla Finder */}
              <QiblaFinder />
            </div>

            {/* Islamic Calendar and Tasbeeh */}
            <div className="space-y-8">
              <IslamicCalendar />
              
              {/* Digital Tasbeeh Counter */}
              <DigitalTasbeeh />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Reminders */}
      <section className="py-12 bg-green-50">
        <div className="container-enhanced">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="section-title">Daily Islamic Reminders</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-3">Morning Dhikr</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ayat al-Kursi</span>
                    <span className="text-gray-500">1x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surah Al-Ikhlas</span>
                    <span className="text-gray-500">3x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surah Al-Falaq</span>
                    <span className="text-gray-500">3x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surah An-Nas</span>
                    <span className="text-gray-500">3x</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-3">Evening Dhikr</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ayat al-Kursi</span>
                    <span className="text-gray-500">1x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last 2 verses of Surah Al-Baqarah</span>
                    <span className="text-gray-500">1x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Astaghfirullah</span>
                    <span className="text-gray-500">100x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Durood Sharif</span>
                    <span className="text-gray-500">10x</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                "And remember your Lord much and glorify Him in the evening and the morning." - Quran 3:41
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
