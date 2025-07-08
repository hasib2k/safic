import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features & Services - Sultanpur Al-Falah Islamic Center',
  description: 'Explore our comprehensive range of services, facilities, and Islamic programs at Sultanpur Al-Falah Islamic Center',
}

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  category: 'worship' | 'education' | 'community' | 'services'
  available: boolean
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Live Prayer Times',
    description: 'Real-time prayer schedules updated daily with accurate timings for your location.',
    icon: '🕐',
    category: 'worship',
    available: true
  },
  {
    id: 2,
    title: 'Online Quran Classes',
    description: 'Interactive Quran recitation and memorization classes for all ages and skill levels.',
    icon: '📖',
    category: 'education',
    available: true
  },
  {
    id: 3,
    title: 'Zakat Calculator',
    description: 'Calculate your annual Zakat obligation with our comprehensive Islamic calculator.',
    icon: '🧮',
    category: 'services',
    available: true
  },
  {
    id: 4,
    title: 'Event Management',
    description: 'Complete event planning for Islamic celebrations, weddings, and community gatherings.',
    icon: '🎉',
    category: 'community',
    available: true
  },
  {
    id: 5,
    title: 'Islamic Library',
    description: 'Extensive collection of Islamic books, audio lectures, and digital resources.',
    icon: '📚',
    category: 'education',
    available: true
  },
  {
    id: 6,
    title: 'Marriage Services',
    description: 'Islamic marriage ceremonies, counseling, and family guidance services.',
    icon: '💍',
    category: 'services',
    available: true
  },
  {
    id: 7,
    title: 'Youth Programs',
    description: 'Engaging activities and Islamic education programs specifically designed for youth.',
    icon: '👨‍👩‍👧‍👦',
    category: 'community',
    available: true
  },
  {
    id: 8,
    title: 'Funeral Services',
    description: 'Complete Islamic funeral services including washing, prayer, and burial arrangements.',
    icon: '🤲',
    category: 'services',
    available: true
  },
  {
    id: 9,
    title: 'Arabic Language Classes',
    description: 'Learn classical and modern Arabic with certified instructors.',
    icon: '🔤',
    category: 'education',
    available: true
  },
  {
    id: 10,
    title: 'Community Kitchen',
    description: 'Prepare and serve meals for community events and those in need.',
    icon: '🍽️',
    category: 'community',
    available: true
  },
  {
    id: 11,
    title: 'Live Streaming',
    description: 'Watch live prayers, lectures, and events from anywhere in the world.',
    icon: '📺',
    category: 'worship',
    available: false
  },
  {
    id: 12,
    title: 'Islamic Counseling',
    description: 'Professional counseling services based on Islamic principles and guidance.',
    icon: '💬',
    category: 'services',
    available: false
  }
]

const categoryColors = {
  worship: 'bg-green-100 text-green-800 border-green-200',
  education: 'bg-blue-100 text-blue-800 border-blue-200',
  community: 'bg-purple-100 text-purple-800 border-purple-200',
  services: 'bg-orange-100 text-orange-800 border-orange-200'
}

const categoryNames = {
  worship: 'Worship',
  education: 'Education',
  community: 'Community',
  services: 'Services'
}

export default function FeaturesPage() {
  const availableFeatures = features.filter(f => f.available)
  const comingSoonFeatures = features.filter(f => !f.available)

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Features & Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of Islamic services, educational programs, and community features designed to serve our ummah.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {Object.entries(categoryNames).map(([key, name]) => {
            const count = availableFeatures.filter(f => f.category === key).length
            return (
              <div key={key} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">{count}</div>
                <div className="text-sm text-gray-600">{name} Features</div>
              </div>
            )
          })}
        </div>

        {/* Available Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {availableFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[feature.category]}`}>
                    {categoryNames[feature.category]}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                    Learn More
                  </button>
                  <button className="px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors text-sm">
                    Try Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        {comingSoonFeatures.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {comingSoonFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg shadow-lg p-6 opacity-75 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{feature.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[feature.category]}`}>
                      {categoryNames[feature.category]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Programs */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Special Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ramadan Programs
                </h3>
                <p className="text-gray-600 mb-4">
                  Special Ramadan activities including community iftars, Tarawih prayers, 
                  and spiritual development programs throughout the holy month.
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Islamic Studies Certification
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Islamic studies program leading to certification 
                  in various Islamic sciences including Quran, Hadith, and Fiqh.
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 max-w-2xl mx-auto text-white">
            <h2 className="text-2xl font-bold mb-4">
              Need a Custom Service?
            </h2>
            <p className="mb-6">
              Have specific needs or suggestions for new features? We&apos;re always looking 
              to better serve our community. Get in touch with us!
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
