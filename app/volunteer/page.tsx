import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer Opportunities - Sultanpur Al-Falah Islamic Center',
  description: 'Join our community volunteers and help serve our ummah at Sultanpur Al-Falah Islamic Center',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

interface VolunteerOpportunity {
  id: string
  title: string
  description: string
  timeCommitment: string
  requirements: string[]
  category: 'education' | 'community' | 'administrative' | 'maintenance' | 'events'
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 'quran-teacher',
    title: 'Quran Teacher',
    description: 'Teach Quran recitation and memorization to children and adults in our Islamic education program.',
    timeCommitment: '2-3 hours per week',
    requirements: ['Strong Quran recitation skills', 'Patience with students', 'Basic teaching experience preferred'],
    category: 'education'
  },
  {
    id: 'arabic-instructor',
    title: 'Arabic Language Instructor',
    description: 'Help community members learn Arabic language for better understanding of Islamic texts.',
    timeCommitment: '3-4 hours per week',
    requirements: ['Fluency in Arabic', 'Teaching experience', 'Good communication skills'],
    category: 'education'
  },
  {
    id: 'event-coordinator',
    title: 'Event Coordinator',
    description: 'Organize and coordinate community events, Islamic celebrations, and educational programs.',
    timeCommitment: '4-6 hours per week',
    requirements: ['Organizational skills', 'Event planning experience', 'Team leadership abilities'],
    category: 'events'
  },
  {
    id: 'youth-mentor',
    title: 'Youth Mentor',
    description: 'Guide and mentor young Muslims in their spiritual journey and personal development.',
    timeCommitment: '2-3 hours per week',
    requirements: ['Good role model', 'Understanding of youth issues', 'Strong Islamic knowledge'],
    category: 'community'
  },
  {
    id: 'admin-assistant',
    title: 'Administrative Assistant',
    description: 'Support office operations, manage communications, and assist with documentation.',
    timeCommitment: '3-5 hours per week',
    requirements: ['Computer literacy', 'Organizational skills', 'Professional communication'],
    category: 'administrative'
  },
  {
    id: 'facility-maintenance',
    title: 'Facility Maintenance',
    description: 'Help maintain the cleanliness and functionality of our masjid facilities.',
    timeCommitment: '2-4 hours per week',
    requirements: ['Basic maintenance skills', 'Physical ability', 'Attention to detail'],
    category: 'maintenance'
  }
]

const getCategoryIcon = (category: string) => {
  const icons = {
    education: '📚',
    community: '🤝',
    administrative: '📋',
    maintenance: '🔧',
    events: '🎉'
  }
  return icons[category as keyof typeof icons] || '📋'
}

const getCategoryColor = (category: string) => {
  const colors = {
    education: 'bg-blue-50 border-blue-200 text-blue-800',
    community: 'bg-green-50 border-green-200 text-green-800',
    administrative: 'bg-purple-50 border-purple-200 text-purple-800',
    maintenance: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    events: 'bg-pink-50 border-pink-200 text-pink-800'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200 text-gray-800'
}

export default function VolunteerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-enhanced">
          <h1 className="hero-title">Volunteer With Us</h1>
          <p className="hero-subtitle">
            Join our dedicated team of volunteers and make a meaningful difference in our community. 
            Serve Allah (SWT) by serving His creation.
          </p>
          <div className="mt-6">
            <p className="font-arabic text-lg opacity-90">
              "وَمَنْ تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ"
            </p>
            <p className="text-sm mt-2 opacity-80">
              "And whoever volunteers good - then indeed, Allah is appreciative and knowing" - Quran 2:158
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Why Volunteer?</h2>
            <p className="section-subtitle">
              Discover the rewards of serving your community and growing spiritually through volunteer work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600">🤲</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-gray-800">Earn Allah&apos;s Pleasure</h3>
              <p className="text-gray-600 leading-relaxed">
                Serve Allah (SWT) by helping His creation and earning immense spiritual rewards through selfless service.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600">🌟</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-gray-800">Personal Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop new skills, gain valuable experience, and strengthen your character through meaningful work.
              </p>
            </div>

            <div className="card-spiritual text-center">
              <div className="text-4xl mb-4 text-primary-600">🤝</div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-gray-800">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Make a tangible difference in the lives of community members and strengthen our Islamic bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 islamic-pattern">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Volunteer Opportunities</h2>
            <p className="section-subtitle">
              Choose from various roles that match your skills, interests, and availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="card-spiritual">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{getCategoryIcon(opportunity.category)}</span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-gray-800">
                        {opportunity.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-1 ${getCategoryColor(opportunity.category)}`}>
                        {opportunity.category.charAt(0).toUpperCase() + opportunity.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="mb-4">
                  <div className="font-semibold text-gray-800 mb-2">⏰ Time Commitment</div>
                  <div className="text-gray-600">{opportunity.timeCommitment}</div>
                </div>

                <div className="mb-6">
                  <div className="font-semibold text-gray-800 mb-2">📋 Requirements</div>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full">
                  Apply for this Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container-enhanced">
          <div className="section-header">
            <h2 className="section-title">Volunteer Application</h2>
            <p className="section-subtitle">
              Fill out this form to express your interest in volunteering with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="form-spiritual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="roleInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                  Role of Interest *
                </label>
                <select id="roleInterest" name="roleInterest" className="form-input" required>
                  <option value="">Select a volunteer role</option>
                  {volunteerOpportunities.map((opportunity) => (
                    <option key={opportunity.id} value={opportunity.id}>
                      {opportunity.title}
                    </option>
                  ))}
                  <option value="other">Other (please specify in message)</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability *
                </label>
                <select id="availability" name="availability" className="form-input" required>
                  <option value="">Select your availability</option>
                  <option value="weekdays-morning">Weekdays - Morning</option>
                  <option value="weekdays-afternoon">Weekdays - Afternoon</option>
                  <option value="weekdays-evening">Weekdays - Evening</option>
                  <option value="weekends-morning">Weekends - Morning</option>
                  <option value="weekends-afternoon">Weekends - Afternoon</option>
                  <option value="weekends-evening">Weekends - Evening</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  className="form-input resize-vertical"
                  placeholder="Please describe any relevant experience, skills, or qualifications..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Why do you want to volunteer? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  className="form-input resize-vertical"
                  placeholder="Tell us about your motivation to volunteer with our community..."
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={3}
                  className="form-input resize-vertical"
                  placeholder="Any additional information you&apos;d like to share..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to undergo a background check if required for this volunteer position, 
                    and I confirm that all information provided is accurate. *
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-3">
                Submit Application
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about volunteering? Get in touch with our volunteer coordinator:
              </p>
              <div className="space-x-4">
                <a href="mailto:volunteer@safic.org" className="btn-secondary">
                  📧 Email Us
                </a>
                <a href="tel:+8801706776711" className="btn-secondary">
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Volunteers Recognition */}
      <section className="py-12 islamic-pattern">
        <div className="container-enhanced">
          <div className="card-spiritual text-center max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold text-primary-800 mb-4">
              Thank You to Our Volunteers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are grateful to our dedicated volunteers who generously give their time and skills 
              to serve our community. May Allah (SWT) reward them abundantly for their service.
            </p>
            <div className="text-center">
              <div className="inline-flex items-center bg-primary-100 rounded-full px-6 py-3">
                <span className="text-primary-800 font-semibold">
                  🌟 Currently serving: 45+ active volunteers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
