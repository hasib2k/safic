import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - Sultanpur Al-Falah Islamic Center',
  description: 'Upcoming events, Islamic programs, and community gatherings at Sultanpur Al-Falah Islamic Center',
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
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for Islamic education, community building, and spiritual growth through our diverse programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>📅 {event.time}</span>
                      <span>📍 {event.location}</span>
                      {event.isRecurring && <span>🔄 Recurring</span>}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
              
              <div className="mt-4 flex justify-end">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates about upcoming events and programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
