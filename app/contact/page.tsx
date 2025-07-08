import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Sultanpur Al-Falah Islamic Center',
  description: 'Get in touch with Sultanpur Al-Falah Islamic Center community and leadership in Dhaka',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

const contactInfo = {
  address: {
    street: 'Sultanpur, Keraniganj',
    city: 'Dhaka',
    state: 'Dhaka Division',
    zipCode: '1310'
  },
  phone: '+8801706776711',
  email: 'info.safic@gmail.com',
  website: 'https://safic.org',
  emergencyPhone: '+8801706776711',
  timeZone: 'GMT+6 (Dhaka)',
  hours: {
    daily: 'Open from Fajr to Isha (Dhaka Time)',
    office: 'Saturday - Thursday: 9:00 AM - 5:00 PM',
    friday: 'Friday Prayer: 12:30 PM (Dhaka Time)'
  }
}

const staff = [
  {
    name: 'Imam Abdullah Rahman',
    title: 'Head Imam',
    email: 'imam@safic.org',
    phone: '+8801706776712',
    availability: 'Available after Maghrib prayer daily'
  },
  {
    name: 'Sheikh Ahmed Hassan',
    title: 'Assistant Imam & Education Director',
    email: 'education@safic.org',
    phone: '+8801706776713',
    availability: 'Saturday - Wednesday: 6:00 PM - 8:00 PM'
  },
  {
    name: 'Sister Fatima Ali',
    title: 'Women\'s Programs Coordinator',
    email: 'women@safic.org',
    phone: '+8801706776714',
    availability: 'Sunday & Tuesday: 10:00 AM - 2:00 PM'
  },
  {
    name: 'Brother Omar Khan',
    title: 'Youth Director',
    email: 'youth@safic.org',
    phone: '+8801706776715',
    availability: 'Weekends: 2:00 PM - 6:00 PM'
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 mobile-text-scale">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text-scale leading-relaxed">
            We&apos;re here to serve our community. Reach out to us for any questions, support, or to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-primary-600 mobile-card">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center mobile-text-scale">
                <span className="font-arabic text-3xl md:text-4xl block mb-2 text-primary-600">اتصل بنا</span>
                Get In Touch
              </h2>
              <p className="text-gray-600 text-center mb-6 md:mb-8 mobile-text-scale">
                Connect with our community and leadership team
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4 md:p-6 border-l-4 border-primary-500 mobile-card">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-primary-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 mobile-icon">
                      <span className="font-arabic text-base md:text-lg font-bold">عنوان</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 mobile-text-scale">Address</h3>
                      <p className="text-gray-700 leading-relaxed mobile-text-scale">
                        {contactInfo.address.street}<br/>
                        {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 border-l-4 border-blue-500 mobile-card">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-blue-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 mobile-icon">
                      <span className="font-arabic text-base md:text-lg font-bold">هاتف</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 mobile-text-scale">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 font-semibold text-base md:text-lg block mb-1 transition-colors mobile-touch-target mobile-text-scale">
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-red-600 font-medium mobile-text-scale">
                        Emergency: <a href={`tel:${contactInfo.emergencyPhone}`} className="underline hover:text-red-700 transition-colors mobile-touch-target">{contactInfo.emergencyPhone}</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 md:p-6 border-l-4 border-green-500 mobile-card">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-green-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 mobile-icon">
                      <span className="font-arabic text-base md:text-lg font-bold">إيميل</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 mobile-text-scale">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-green-600 hover:text-green-700 font-semibold text-base md:text-lg transition-colors mobile-touch-target mobile-text-scale">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 md:p-6 border-l-4 border-purple-500 mobile-card">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-purple-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 mobile-icon">
                      <span className="font-arabic text-base md:text-lg font-bold">موقع</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 mobile-text-scale">Website</h3>
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-semibold text-base md:text-lg transition-colors mobile-touch-target mobile-text-scale">
                        safic.org
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 md:p-6 border-l-4 border-orange-500 mobile-card">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-orange-600 text-white p-2 md:p-3 rounded-full flex-shrink-0 mobile-icon">
                      <span className="font-arabic text-base md:text-lg font-bold">وقت</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-3 mobile-text-scale">Hours & Timezone</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700 font-medium mobile-text-scale">{contactInfo.hours.daily}</p>
                        <p className="text-gray-700 mobile-text-scale">{contactInfo.hours.office}</p>
                        <p className="text-gray-700 mobile-text-scale">{contactInfo.hours.friday}</p>
                        <div className="bg-orange-200 rounded-lg p-2 md:p-3 mt-3">
                          <p className="text-orange-800 font-bold text-center mobile-text-scale">{contactInfo.timeZone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center space-x-2 active:scale-95"
                >
                  <span className="font-arabic">اتصل</span>
                  <span>Call Now</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="mobile-button bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center space-x-2 active:scale-95"
                >
                  <span className="font-arabic">أرسل</span>
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mobile-card">
              <h3 className="text-xl font-bold text-gray-800 mb-4 mobile-text-scale">Location</h3>
              <div className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center">
                <p className="text-gray-500 mobile-text-scale">Interactive Map Coming Soon</p>
              </div>
              <div className="mt-4 text-center">
                <button className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form & Staff */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mobile-card">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 mobile-text-scale">
                Send us a Message
              </h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    aria-label="First Name"
                    className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                    required
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  aria-label="Phone Number"
                  className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                />
                
                <select 
                  className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base bg-white"
                  aria-label="Subject"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Times</option>
                  <option value="events">Events & Programs</option>
                  <option value="donations">Donations</option>
                  <option value="education">Educational Programs</option>
                  <option value="marriage">Marriage Services</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  aria-label="Your Message"
                  className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical text-base"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="mobile-button w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-medium transition-colors active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Staff Directory */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-blue-600 mobile-card">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center mobile-text-scale">
                <span className="font-arabic text-3xl md:text-4xl block mb-2 text-blue-600">موظفونا</span>
                Contact Our Staff
              </h2>
              <p className="text-gray-600 text-center mb-6 md:mb-8 mobile-text-scale">
                Reach out to our dedicated team members for specialized assistance
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {staff.map((member, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow mobile-card">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-3 md:p-4 rounded-full flex-shrink-0 self-center sm:self-start mobile-icon">
                        <span className="font-arabic text-base md:text-lg font-bold">
                          {index === 0 ? 'إمام' : index === 1 ? 'شيخ' : index === 2 ? 'أخت' : 'أخ'}
                        </span>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 mobile-text-scale">{member.name}</h3>
                        <p className="text-primary-600 font-semibold text-base md:text-lg mb-4 mobile-text-scale">{member.title}</p>
                        
                        <div className="grid grid-cols-1 gap-3 md:gap-4">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white rounded-lg p-3 border-l-4 border-green-500">
                            <div className="bg-green-600 text-white p-2 rounded-full self-center sm:self-start mobile-icon">
                              <span className="font-arabic text-sm font-bold">إيميل</span>
                            </div>
                            <div className="text-center sm:text-left">
                              <a href={`mailto:${member.email}`} className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors block mobile-touch-target mobile-text-scale">
                                {member.email}
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white rounded-lg p-3 border-l-4 border-blue-500">
                            <div className="bg-blue-600 text-white p-2 rounded-full self-center sm:self-start mobile-icon">
                              <span className="font-arabic text-sm font-bold">هاتف</span>
                            </div>
                            <div className="text-center sm:text-left">
                              <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors block mobile-touch-target mobile-text-scale">
                                {member.phone}
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white rounded-lg p-3 border-l-4 border-orange-500">
                            <div className="bg-orange-600 text-white p-2 rounded-full self-center sm:self-start mobile-icon">
                              <span className="font-arabic text-sm font-bold">وقت</span>
                            </div>
                            <div className="text-center sm:text-left">
                              <p className="text-orange-700 font-medium text-sm mobile-text-scale">{member.availability}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:space-x-3">
                          <a 
                            href={`mailto:${member.email}`}
                            className="mobile-button bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-1 active:scale-95"
                          >
                            <span className="font-arabic">أرسل</span>
                            <span>Email</span>
                          </a>
                          <a 
                            href={`tel:${member.phone}`}
                            className="mobile-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-1 active:scale-95"
                          >
                            <span className="font-arabic">اتصل</span>
                            <span>Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 text-center mobile-card">
            <h3 className="text-lg md:text-xl font-bold text-red-800 mb-2 mobile-text-scale">Emergency Contact</h3>
            <p className="text-red-700 mobile-text-scale">
              For urgent spiritual care or emergencies outside office hours, please call:{' '}
              <a href={`tel:${contactInfo.emergencyPhone}`} className="font-bold underline mobile-touch-target">
                {contactInfo.emergencyPhone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
