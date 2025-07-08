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
    description: 'Accurate prayer times based on Dhaka location with Qibla direction and Islamic calendar integration.',
    icon: '🕐',
    category: 'worship',
    available: true
  },
  {
    id: 2,
    title: 'Daily Islamic Reminders',
    description: 'Receive daily Quran verses, Hadith, and Islamic quotes to strengthen your faith throughout the day.',
    icon: '📿',
    category: 'worship',
    available: true
  },
  {
    id: 3,
    title: 'Zakat Calculator',
    description: 'Calculate your annual Zakat obligation with our comprehensive Islamic calculator following traditional methods.',
    icon: '💰',
    category: 'services',
    available: true
  },
  {
    id: 4,
    title: 'Quran Study Portal',
    description: 'Access Quran with Bengali and English translations, audio recitations, and study notes.',
    icon: '📖',
    category: 'education',
    available: true
  },
  {
    id: 5,
    title: 'Event Registration',
    description: 'Register for community events, educational programs, and special Islamic celebrations.',
    icon: '📅',
    category: 'community',
    available: true
  },
  {
    id: 6,
    title: 'Donation Portal',
    description: 'Secure online donations supporting mosque operations, community programs, and charity initiatives.',
    icon: '💰',
    category: 'services',
    available: true
  },
  {
    id: 7,
    title: 'Islamic Education Classes',
    description: 'Enroll in Arabic language, Quran memorization, and Islamic studies programs for all ages.',
    icon: '🎓',
    category: 'education',
    available: true
  },
  {
    id: 8,
    title: 'Community Directory',
    description: 'Connect with fellow community members, find Islamic services, and build relationships.',
    icon: '👥',
    category: 'community',
    available: true
  },
  {
    id: 9,
    title: 'Islamic Marriage Services',
    description: 'Get guidance on Islamic marriage procedures, counseling, and community matchmaking services.',
    icon: '💒',
    category: 'services',
    available: false
  },
  {
    id: 10,
    title: 'Halal Business Directory',
    description: 'Discover local halal restaurants, Islamic services, and Muslim-owned businesses in Dhaka.',
    icon: '🏪',
    category: 'community',
    available: false
  },
  {
    id: 11,
    title: 'Islamic Library Access',
    description: 'Digital access to Islamic books, research papers, and educational resources in multiple languages.',
    icon: '📚',
    category: 'education',
    available: false
  },
  {
    id: 12,
    title: 'Mobile App',
    description: 'Download our mobile app for prayer notifications, live streaming, and community updates.',
    icon: '📱',
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
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 mobile-text-scale">
            Features & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text-scale leading-relaxed">
            Discover our comprehensive range of Islamic services, educational programs, and community features designed to serve our ummah.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 max-w-4xl mx-auto">
          {Object.entries(categoryNames).map(([key, name]) => {
            const count = availableFeatures.filter(f => f.category === key).length
            return (
              <div key={key} className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center mobile-card">
                <div className="text-xl md:text-2xl font-bold text-primary-600 mb-1 mobile-text-scale">{count}</div>
                <div className="text-xs md:text-sm text-gray-600 mobile-text-scale">{name} Features</div>
              </div>
            )
          })}
        </div>

        {/* Available Features */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center mobile-text-scale">
            Available Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {availableFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 mobile-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl md:text-3xl">{feature.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[feature.category]} mobile-text-scale`}>
                    {categoryNames[feature.category]}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 mobile-text-scale">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base mobile-text-scale">
                  {feature.description}
                </p>
                
                <div className="flex space-x-2">
                  {feature.title === 'Zakat Calculator' ? (
                    <a 
                      href="/zakat-calculator" 
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Calculate Now
                    </a>
                  ) : feature.title === 'Live Prayer Times' ? (
                    <a 
                      href="/prayer-times" 
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      View Times
                    </a>
                  ) : feature.title === 'Donation Portal' ? (
                    <a 
                      href="/donations" 
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Donate Now
                    </a>
                  ) : feature.title === 'Event Registration' ? (
                    <a 
                      href="/events" 
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      View Events
                    </a>
                  ) : feature.title === 'Quran Study Portal' ? (
                    <a 
                      href="/contact"
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Contact for Access
                    </a>
                  ) : feature.title === 'Islamic Education Classes' ? (
                    <a 
                      href="/contact"
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Enroll Now
                    </a>
                  ) : feature.title === 'Community Directory' ? (
                    <a 
                      href="/contact"
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Join Directory
                    </a>
                  ) : feature.title === 'Daily Islamic Reminders' ? (
                    <a 
                      href="/contact"
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Subscribe
                    </a>
                  ) : (
                    <a 
                      href="/contact"
                      className="mobile-button flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm text-center active:scale-95"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        {comingSoonFeatures.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center mobile-text-scale">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {comingSoonFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white rounded-lg shadow-lg p-4 md:p-6 opacity-75 relative overflow-hidden mobile-card"
                >
                  <div className="absolute top-2 md:top-4 right-2 md:right-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mobile-text-scale">
                      Coming Soon
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4 space-x-3">
                    <div className="text-2xl md:text-3xl">{feature.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${categoryColors[feature.category]} mobile-text-scale`}>
                      {categoryNames[feature.category]}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 mobile-text-scale">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mobile-text-scale">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact for Custom Features */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 md:p-6 text-center mobile-card">
            <h3 className="text-lg md:text-xl font-bold text-primary-800 mb-2 mobile-text-scale">Need Something Specific?</h3>
            <p className="text-primary-700 mb-4 mobile-text-scale">
              Have suggestions for new features or need custom Islamic services? We'd love to hear from you!
            </p>
            <a 
              href="/contact"
              className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
