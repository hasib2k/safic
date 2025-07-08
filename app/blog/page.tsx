import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Sultanpur Al-Falah Islamic Center',
  description: 'Islamic articles, community updates, and spiritual guidance from Sultanpur Al-Falah Islamic Center',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Importance of Community in Islam",
    excerpt: "Exploring how the Islamic concept of Ummah strengthens our bonds and spiritual growth, fostering unity among believers in Bangladesh.",
    date: "2024-03-15",
    author: "Imam Abdullah Rahman",
    category: "Community"
  },
  {
    id: 2,
    title: "Preparing for Ramadan: A Spiritual Journey",
    excerpt: "Guidelines and tips for making the most of the blessed month of Ramadan, including daily practices and community engagement.",
    date: "2024-03-10",
    author: "Sheikh Ahmed Hassan",
    category: "Spirituality"
  },
  {
    id: 3,
    title: "Youth Programs: Building the Next Generation",
    excerpt: "How our youth programs are shaping young Muslims in our community through Islamic education and character development.",
    date: "2024-03-05",
    author: "Sister Fatima Ali",
    category: "Education"
  },
  {
    id: 4,
    title: "Islamic Finance in Bangladesh: A Modern Approach",
    excerpt: "Understanding Islamic banking principles and their application in modern Bangladesh's financial landscape.",
    date: "2024-02-28",
    author: "Brother Omar Khan",
    category: "Finance"
  },
  {
    id: 5,
    title: "Women's Role in Islamic Community Building",
    excerpt: "Celebrating the contributions of Muslim women in strengthening our community through education and social work.",
    date: "2024-02-20",
    author: "Sister Fatima Ali",
    category: "Community"
  },
  {
    id: 6,
    title: "The Art of Islamic Calligraphy",
    excerpt: "Discovering the beauty and spiritual significance of Arabic calligraphy in Islamic culture and worship.",
    date: "2024-02-15",
    author: "Ustadh Mahmud Hassan",
    category: "Culture"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 mobile-text-scale">
            Blog & Articles
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mobile-text-scale leading-relaxed">
            Stay connected with our community through Islamic insights, updates, and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mobile-card"
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mobile-text-scale self-start">
                    {post.category}
                  </span>
                  <time className="text-gray-500 text-sm mobile-text-scale">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 hover:text-primary-700 transition-colors mobile-text-scale">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base mobile-text-scale leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <span className="text-sm text-gray-500 mobile-text-scale">
                    By {post.author}
                  </span>
                  <a 
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors mobile-touch-target mobile-text-scale self-start sm:self-auto"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="/blog/articles" 
            className="mobile-button inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors active:scale-95"
          >
            Load More Articles
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 md:p-6 text-center mobile-card">
            <h3 className="text-lg md:text-xl font-bold text-primary-800 mb-2 mobile-text-scale">Stay Updated</h3>
            <p className="text-primary-700 mb-4 mobile-text-scale">
              Subscribe to our newsletter for weekly Islamic content and community updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter subscription"
                className="mobile-input flex-1 px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-base"
                required
              />
              <button 
                type="submit"
                className="mobile-button bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors active:scale-95"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
