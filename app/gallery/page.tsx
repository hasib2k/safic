'use client'

import { useState } from 'react'

interface GalleryItem {
  id: number
  title: string
  description: string
  category: string
  date: string
  imageUrl: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Eid ul-Fitr Celebration 2025',
    description: 'Our community came together to celebrate Eid with prayers, food, and festivities.',
    category: 'Eid',
    date: '2025-04-21',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Main Prayer Hall',
    description: 'Beautiful interior of our main prayer hall during Friday congregational prayer.',
    category: 'Construction',
    date: '2025-03-15',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Quran Competition Winners',
    description: 'Young participants receiving awards at our annual Quran memorization competition.',
    category: 'Children',
    date: '2025-06-10',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Community Iftar',
    description: 'Monthly community iftar bringing families together during Ramadan.',
    category: 'Ramadan',
    date: '2025-03-28',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Youth Islamic Studies Class',
    description: 'Students engaged in learning Arabic and Islamic studies in our education center.',
    category: 'Children',
    date: '2025-05-15',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 6,
    title: 'Charity Food Drive',
    description: 'Volunteers organizing donations for our monthly food bank distribution.',
    category: 'Community',
    date: '2025-06-20',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 7,
    title: 'Ramadan Night Prayer',
    description: 'Tarawih prayers during the blessed month of Ramadan with full congregation.',
    category: 'Ramadan',
    date: '2025-03-20',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 8,
    title: 'Islamic Architecture Details',
    description: 'Beautiful calligraphy and geometric patterns adorning our masjid walls.',
    category: 'Construction',
    date: '2025-02-10',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 9,
    title: 'Eid ul-Adha Community Feast',
    description: 'Community gathering for Eid ul-Adha with shared meals and celebration.',
    category: 'Eid',
    date: '2025-06-28',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 10,
    title: 'Children Reading Corner',
    description: 'Young children enjoying Islamic books in our dedicated reading area.',
    category: 'Children',
    date: '2025-05-25',
    imageUrl: '/api/placeholder/400/300'
  }
]

const categories = ['All', 'Construction', 'Ramadan', 'Eid', 'Children', 'Community']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // Filter gallery items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 mobile-text-scale">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text-scale leading-relaxed">
            Explore moments from our community life, celebrations, educational programs, and beautiful masjid facilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mobile-button px-3 md:px-4 py-2 md:py-3 border rounded-lg font-medium transition-colors text-sm md:text-base active:scale-95 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white hover:bg-primary-50 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-gray-600 mobile-text-scale">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group mobile-card"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <div className="text-3xl md:text-4xl mb-2">📷</div>
                    <p className="text-xs md:text-sm mobile-text-scale">Image Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-2 md:top-4 right-2 md:right-4">
                  <span className="bg-white bg-opacity-90 text-primary-700 px-2 py-1 rounded-full text-xs font-medium mobile-text-scale">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 mobile-text-scale">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 mobile-text-scale">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 mobile-text-scale">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a 
                    href={`/gallery/${item.id}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium mobile-touch-target mobile-text-scale"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mobile-card">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mobile-text-scale">
              Share Your Photos
            </h2>
            <p className="text-gray-600 mb-4 mobile-text-scale">
              Have photos from our events? We&apos;d love to feature them in our gallery. 
              Share your memories with the community!
            </p>
            <a 
              href="/contact"
              className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95"
            >
              Submit Photos
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mobile-card">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mobile-text-scale">
              Event Photography
            </h2>
            <p className="text-gray-600 mb-4 mobile-text-scale">
              Interested in becoming our volunteer photographer? Help us capture 
              and preserve our community&apos;s precious moments.
            </p>
            <a 
              href="/contact"
              className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
