import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Sultanpur Al-Falah Islamic Center',
  description: 'Photos from our community events, celebrations, and facilities at Sultanpur Al-Falah Islamic Center',
}

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
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore moments from our community life, celebrations, educational programs, and beautiful masjid facilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg font-medium text-gray-700 hover:text-primary-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-sm">Image Placeholder</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Share Your Photos
            </h2>
            <p className="text-gray-600 mb-4">
              Have photos from our events? We&apos;d love to feature them in our gallery. 
              Share your memories with the community!
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Submit Photos
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Event Photography
            </h2>
            <p className="text-gray-600 mb-4">
              Interested in becoming our volunteer photographer? Help us capture 
              and preserve our community&apos;s precious moments.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Join Our Team
            </button>
          </div>
        </div>

        {/* Recent Highlights */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Recent Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="font-semibold text-gray-800 mb-2">Community Events</h3>
                <p className="text-gray-600 text-sm">
                  Monthly celebrations bringing our community together in faith and fellowship.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-800 mb-2">Educational Programs</h3>
                <p className="text-gray-600 text-sm">
                  Islamic education classes for all ages, from Quran memorization to Arabic studies.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-800 mb-2">Community Service</h3>
                <p className="text-gray-600 text-sm">
                  Giving back to our broader community through various charitable initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
