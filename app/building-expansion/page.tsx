'use client'

import Link from 'next/link'
import { ArrowLeft, MapPin, Users, Calendar, DollarSign } from 'lucide-react'

export default function BuildingExpansionPage() {
  const projectDetails = {
    totalCost: 200000,
    raised: 75000,
    timeline: "18-24 months",
    capacity: "500+ worshippers",
    startDate: "Q3 2025"
  }

  const features = [
    {
      title: "Main Prayer Hall Expansion",
      description: "Double the capacity with modern acoustics and climate control",
      cost: 80000
    },
    {
      title: "Women's Prayer Area",
      description: "Dedicated space with separate entrance and facilities",
      cost: 35000
    },
    {
      title: "Islamic Education Center",
      description: "Classrooms for Quran studies and Islamic education programs",
      cost: 25000
    },
    {
      title: "Community Hall",
      description: "Multi-purpose space for events, lectures, and gatherings",
      cost: 30000
    },
    {
      title: "Accessibility Features",
      description: "Wheelchair access, ramps, and facilities for disabled community members",
      cost: 15000
    },
    {
      title: "Modern Facilities",
      description: "Updated restrooms, wudu areas, and storage spaces",
      cost: 15000
    }
  ]

  const getProgressPercentage = () => {
    return Math.min((projectDetails.raised / projectDetails.totalCost) * 100, 100)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/donations" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Donations
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Building Expansion Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Join us in creating a larger, more accessible sacred space that will serve our growing Muslim community for generations to come.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Progress and Stats */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Progress</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Funds Raised</span>
                <span className="text-sm font-medium text-gray-700">
                  ${projectDetails.raised.toLocaleString()} / ${projectDetails.totalCost.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                ></div>
              </div>
              <div className="text-right mt-2">
                <span className="text-lg text-primary-600 font-bold">
                  {getProgressPercentage().toFixed(1)}% Complete
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{projectDetails.capacity}</div>
                <div className="text-sm text-gray-600">New Capacity</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-800">{projectDetails.timeline}</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Project Start:</strong> {projectDetails.startDate}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> Current Masjid Site - Expansion to Adjacent Property
              </p>
            </div>
          </div>

          {/* Mosque Design Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Architectural Vision</h2>
            
            {/* Placeholder for mosque image/design */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🕌</div>
                <p className="text-primary-700 font-medium">Architectural Rendering</p>
                <p className="text-sm text-primary-600">Coming Soon</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Modern Islamic Architecture with Traditional Elements</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Barrier-Free Design for All Community Members</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Energy-Efficient and Sustainable Construction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We're Building</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary-600">
                    ${feature.cost.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">Estimated Cost</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Community Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Challenges</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Overcrowding during Friday prayers and special occasions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Limited space for women's prayer area</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Insufficient facilities for Islamic education programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Lack of accessibility for elderly and disabled members</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Future Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Accommodate 500+ worshippers comfortably</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Dedicated spaces for all community members</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Enhanced Islamic education and community programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Full accessibility and modern amenities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Be Part of This Legacy</h2>
          <p className="text-xl mb-6 opacity-90">
            Your donation today will benefit countless Muslims for generations to come
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donations"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Donate Now
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Share This Project
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
