import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Sultanpur Al-Falah Islamic Center',
  description: 'Learn about Sultanpur Al-Falah Islamic Center, our mission, and our community in Dhaka',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

export default function AboutPage() {
  return (
    <div className="safe-area-inset-bottom">
      {/* Hero Section */}
      <section className="hero-section islamic-pattern safe-area-inset">
        <div className="container-mobile mobile-padding">
          <h1 className="hero-title text-mobile-2xl md:text-4xl lg:text-5xl">
            About Sultanpur Al-Falah Islamic Center
          </h1>
          <p className="hero-subtitle text-mobile-lg md:text-xl leading-relaxed">
            Discover our history, mission, and the community that makes Sultanpur Al-Falah Islamic Center a spiritual home in Dhaka.
          </p>
          <div className="mt-6 md:mt-8">
            <p className="text-lg md:text-xl opacity-90 font-arabic">
              "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ"
            </p>
            <p className="text-sm mt-2 opacity-80">
              "And I did not create the jinn and mankind except to worship Me" - Quran 51:56
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-mobile mobile-padding">
          <div className="section-header text-center">
            <h2 className="section-title text-center">Our Mission</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-spiritual mobile-card text-center">
              <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mobile-text-scale">
                  Sultanpur Al-Falah Islamic Center serves as a beacon of faith, knowledge, and community service 
                  in Dhaka, Bangladesh. We are dedicated to providing a welcoming space for worship, Islamic education, 
                  and spiritual growth for Muslims and anyone seeking to learn about Islam.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mobile-text-scale">
                  Through our various programs and services, we strive to strengthen the bonds of brotherhood 
                  and sisterhood while contributing positively to our broader community in Dhaka and beyond.
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 text-primary-600 font-arabic">قيم</div>
                  <h3 className="text-2xl font-heading font-semibold text-primary-800 mobile-text-scale">Our Values</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 mobile-text-scale">Faith and Devotion to Allah (SWT)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 mobile-text-scale">Community Unity and Brotherhood</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 mobile-text-scale">Knowledge and Continuous Learning</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 mobile-text-scale">Service to Humanity</span>
                  </div>
                  <div className="flex items-center justify-center md:col-span-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 mobile-text-scale">Respect and Inclusivity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 islamic-pattern">
        <div className="container-mobile mobile-padding">
          <div className="section-header text-center">
            <h2 className="section-title text-center">Our History</h2>
            <p className="section-subtitle text-center">
              A journey of faith, growth, and community service spanning over two decades
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-spiritual mobile-card">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 text-primary-600 font-arabic">تاريخ</div>
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-gray-600 leading-relaxed text-lg mobile-text-scale">
                  Established in 2000, Sultanpur Al-Falah Islamic Center began as a small gathering of Muslim families 
                  in Rangpur seeking a place to worship and build community. Over the years, we have grown from a modest 
                  rented space to a beautiful, purpose-built facility that serves hundreds of families across Rangpur.
                </p>
                <p className="text-gray-600 leading-relaxed mobile-text-scale">
                  Our journey has been marked by the dedication of countless volunteers, the generosity 
                  of our community, and the guidance of Allah (SWT). Today, we stand as a testament to 
                  what can be achieved when a community comes together with a shared vision of serving Islam in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container-mobile mobile-padding">
          <div className="section-header text-center">
            <h2 className="section-title text-center">Our Impact</h2>
            <p className="section-subtitle text-center">
              Growing together in faith and service to our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-spiritual mobile-card text-center hover-lift">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">٢٥</div>
              <div className="text-4xl font-bold text-primary-800 mb-2">25+</div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2 mobile-text-scale">Years of Service</h3>
              <p className="text-gray-600 mobile-text-scale">Serving our community with dedication and faith</p>
            </div>
            
            <div className="card-spiritual mobile-card text-center hover-lift">
              <div className="text-4xl mb-4 text-primary-600 font-arabic">٥٠٠</div>
              <div className="text-4xl font-bold text-primary-800 mb-2">500+</div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2 mobile-text-scale">Families</h3>
              <p className="text-gray-600 mobile-text-scale">Active members of our growing community</p>
            </div>
            
            <div className="card-spiritual mobile-card text-center hover-lift">
              <div className="text-3xl md:text-4xl mb-4 text-primary-600 font-arabic">١٥</div>
              <div className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">15+</div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-800 mb-2 mobile-text-scale">Programs</h3>
              <p className="text-gray-600 text-sm md:text-base mobile-text-scale">Educational and community service initiatives</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
