import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Sultanpur Al-Falah Islamic Center',
  description: 'Get in touch with Sultanpur Al-Falah Islamic Center community and leadership in Dhaka',
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
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to serve our community. Reach out to us for any questions, support, or to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      {contactInfo.address.street}<br/>
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700 underline">
                      {contactInfo.phone}
                    </a>
                    <p className="text-sm text-red-600">
                      Emergency: <a href={`tel:${contactInfo.emergencyPhone}`} className="underline">{contactInfo.emergencyPhone}</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700 underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">🌐</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Website</h3>
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                      safic.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours & Timezone</h3>
                    <p className="text-gray-600">{contactInfo.hours.daily}</p>
                    <p className="text-gray-600">{contactInfo.hours.office}</p>
                    <p className="text-gray-600">{contactInfo.hours.friday}</p>
                    <p className="text-sm text-primary-600 font-medium">{contactInfo.timeZone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form & Staff */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Prayer Times</option>
                  <option>Events & Programs</option>
                  <option>Donations</option>
                  <option>Educational Programs</option>
                  <option>Marriage Services</option>
                  <option>Other</option>
                </select>
                
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Staff Directory */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Our Staff
              </h2>
              
              <div className="space-y-4">
                {staff.map((member, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-primary-600 text-sm">{member.title}</p>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <p>📧 <a href={`mailto:${member.email}`} className="text-primary-600 hover:text-primary-700 underline">{member.email}</a></p>
                      <p>📞 <a href={`tel:${member.phone}`} className="text-primary-600 hover:text-primary-700 underline">{member.phone}</a></p>
                      <p>🕐 {member.availability}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Contact</h3>
            <p className="text-red-700">
              For urgent spiritual care or emergencies outside office hours, please call:{' '}
              <a href={`tel:${contactInfo.emergencyPhone}`} className="font-bold underline">
                {contactInfo.emergencyPhone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
