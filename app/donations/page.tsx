import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donations - Sultanpur Al-Falah Islamic Center',
  description: 'Support Sultanpur Al-Falah Islamic Center and our community through secure online donations',
}

interface DonationCategory {
  id: string
  name: string
  description: string
  target: number
  raised: number
  urgency: 'high' | 'medium' | 'low'
}

const donationCategories: DonationCategory[] = [
  {
    id: 'general',
    name: 'General Fund',
    description: 'Support daily operations, utilities, and maintenance of our masjid facilities.',
    target: 50000,
    raised: 32500,
    urgency: 'medium'
  },
  {
    id: 'education',
    name: 'Islamic Education',
    description: 'Fund Quran classes, Islamic studies programs, and educational materials for all ages.',
    target: 25000,
    raised: 18750,
    urgency: 'high'
  },
  {
    id: 'community',
    name: 'Community Services',
    description: 'Support food banks, family assistance programs, and community outreach initiatives.',
    target: 15000,
    raised: 8200,
    urgency: 'high'
  },
  {
    id: 'building',
    name: 'Building Expansion',
    description: 'Help us expand our facilities to accommodate our growing community.',
    target: 100000,
    raised: 45000,
    urgency: 'low'
  }
]

const getProgressPercentage = (raised: number, target: number) => {
  return Math.min((raised / target) * 100, 100)
}

const getUrgencyColor = (urgency: string) => {
  const colors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-green-600 bg-green-50'
  }
  return colors[urgency as keyof typeof colors] || 'text-gray-600 bg-gray-50'
}

export default function DonationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Support Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous donations help us serve the community, maintain our facilities, and spread Islamic knowledge.
          </p>
          <div className="mt-6">
            <span className="text-sm text-gray-500">
              &quot;The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes&quot; - Quran 2:261
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {donationCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(category.urgency)}`}>
                  {category.urgency.toUpperCase()} PRIORITY
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-700">
                    ${category.raised.toLocaleString()} / ${category.target.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage(category.raised, category.target)}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-primary-600 font-medium">
                    {getProgressPercentage(category.raised, category.target).toFixed(1)}% Complete
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Donate Now
                </button>
                <button className="px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Donation
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  className="p-4 border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 rounded-lg text-center transition-colors"
                >
                  <div className="text-lg font-bold text-gray-800">${amount}</div>
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="number"
                placeholder="Custom amount"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Select Category</option>
                {donationCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors">
              Proceed to Payment
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure payment processing • Tax-deductible receipts provided
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🤲</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Zakat</h3>
              <p className="text-gray-600 text-sm">
                Calculate and pay your annual Zakat obligation through our secure platform.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sadaqah</h3>
              <p className="text-gray-600 text-sm">
                Give voluntary charity to earn rewards and help those in need.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Waqf</h3>
              <p className="text-gray-600 text-sm">
                Contribute to our endowment fund for long-term community benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
