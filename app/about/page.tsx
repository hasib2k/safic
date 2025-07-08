import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Sultanpur Al-Falah Islamic Center',
  description: 'Learn about Sultanpur Al-Falah Islamic Center, our mission, and our community in Dhaka',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Sultanpur Al-Falah Islamic Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our history, mission, and the community that makes Sultanpur Al-Falah Islamic Center a spiritual home in Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sultanpur Al-Falah Islamic Center serves as a beacon of faith, knowledge, and community service 
              in Dhaka, Bangladesh. We are dedicated to providing a welcoming space for worship, Islamic education, 
              and spiritual growth for Muslims and anyone seeking to learn about Islam.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Through our various programs and services, we strive to strengthen the bonds of brotherhood 
              and sisterhood while contributing positively to our broader community in Dhaka and beyond.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                <span>Faith and Devotion to Allah (SWT)</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                <span>Community Unity and Brotherhood</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                <span>Knowledge and Continuous Learning</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                <span>Service to Humanity</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-600 mr-3">•</span>
                <span>Respect and Inclusivity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Established in 1995, Sultanpur Al-Falah Islamic Center began as a small gathering of Muslim families 
              in Dhaka seeking a place to worship and build community. Over the years, we have grown from a modest 
              rented space to a beautiful, purpose-built facility that serves hundreds of families across Dhaka.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our journey has been marked by the dedication of countless volunteers, the generosity 
              of our community, and the guidance of Allah (SWT). Today, we stand as a testament to 
              what can be achieved when a community comes together with a shared vision of serving Islam in Bangladesh.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-700">25+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Years of Service</h3>
            <p className="text-gray-600">Serving our community with dedication and faith</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-700">500+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Families</h3>
            <p className="text-gray-600">Active members of our growing community</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-700">15+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Programs</h3>
            <p className="text-gray-600">Educational and community service initiatives</p>
          </div>
        </div>
      </div>
    </main>
  )
}
