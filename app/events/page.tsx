import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Events - Sultanpur Al-Falah Islamic Center',
  description: 'Upcoming events, Islamic programs, and community gatherings at Sultanpur Al-Falah Islamic Center',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: 'religious' | 'educational' | 'community' | 'fundraising'
  isRecurring?: boolean
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Friday Khutbah: The Importance of Gratitude",
    description: "Join us for this week's Friday sermon focusing on the concept of gratitude in Islam and how it transforms our daily lives.",
    date: "2025-07-11",
    time: "12:30 PM",
    location: "Main Prayer Hall",
    category: "religious"
  },
  {
    id: 2,
    title: "Quran Study Circle",
    description: "Weekly study circle focusing on Surah Al-Mulk. All levels welcome, with Arabic and English explanations.",
    date: "2025-07-12",
    time: "7:00 PM",
    location: "Education Center",
    category: "educational",
    isRecurring: true
  },
  {
    id: 3,
    title: "Community Iftar Preparation Workshop",
    description: "Learn how to prepare traditional iftar dishes from different cultures. Family-friendly event.",
    date: "2025-07-15",
    time: "6:00 PM",
    location: "Community Kitchen",
    category: "community"
  },
  {
    id: 4,
    title: "Youth Islamic Quiz Competition",
    description: "Monthly quiz competition for ages 12-18 covering Islamic history, Quran, and current events.",
    date: "2025-07-18",
    time: "4:00 PM",
    location: "Youth Center",
    category: "educational"
  },
  {
    id: 5,
    title: "Charity Drive for Local Food Bank",
    description: "Monthly food collection drive to support our local community. Bring non-perishable items.",
    date: "2025-07-20",
    time: "10:00 AM - 2:00 PM",
    location: "Masjid Entrance",
    category: "fundraising",
    isRecurring: true
  }
]

const getCategoryColor = (category: string) => {
  const colors = {
    religious: 'bg-green-100 text-green-800',
    educational: 'bg-blue-100 text-blue-800',
    community: 'bg-purple-100 text-purple-800',
    fundraising: 'bg-orange-100 text-orange-800'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 mobile-text-scale">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text-scale leading-relaxed">
            Join us for Islamic education, community building, and spiritual growth through our diverse programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 mobile-card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 md:mb-0">
                  <div className="text-center sm:text-left mb-3 sm:mb-0">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 mobile-text-scale">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-500 mobile-text-scale">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 mobile-text-scale">
                      {event.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 space-y-1 sm:space-y-0 mobile-text-scale">
                      <span className="flex items-center justify-center sm:justify-start space-x-1">
                        <span>📅</span>
                        <span>{event.time}</span>
                      </span>
                      <span className="flex items-center justify-center sm:justify-start space-x-1">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </span>
                      {event.isRecurring && (
                        <span className="flex items-center justify-center sm:justify-start space-x-1">
                          <span>🔄</span>
                          <span>Recurring</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <span className={`px-3 py-2 rounded-full text-sm font-medium ${getCategoryColor(event.category)} mobile-text-scale`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4 mobile-text-scale text-center sm:text-left">
                {event.description}
              </p>
              
              <div className="flex justify-center md:justify-end">
                <a 
                  href={`/events/${event.id}`}
                  className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors active:scale-95"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action - Add to Calendar */}
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 md:p-6 text-center mobile-card">
            <h3 className="text-lg md:text-xl font-bold text-primary-800 mb-2 mobile-text-scale">Never Miss an Event</h3>
            <p className="text-primary-700 mb-4 mobile-text-scale">
              Subscribe to our calendar to stay updated with all upcoming events and programs.
            </p>
            <button className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
