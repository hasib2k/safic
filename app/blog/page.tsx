import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Sultanpur Al-Falah Islamic Center',
  description: 'Islamic articles, community updates, and spiritual guidance from Sultanpur Al-Falah Islamic Center',
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
    excerpt: "Exploring how the Islamic concept of Ummah strengthens our bonds and spiritual growth.",
    date: "2024-03-15",
    author: "Imam Abdullah",
    category: "Community"
  },
  {
    id: 2,
    title: "Preparing for Ramadan: A Spiritual Journey",
    excerpt: "Guidelines and tips for making the most of the blessed month of Ramadan.",
    date: "2024-03-10",
    author: "Sheikh Ahmed",
    category: "Spirituality"
  },
  {
    id: 3,
    title: "Youth Programs: Building the Next Generation",
    excerpt: "How our youth programs are shaping young Muslims in our community.",
    date: "2024-03-05",
    author: "Sister Fatima",
    category: "Education"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay connected with our community through Islamic insights, updates, and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <time className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-primary-700 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {post.author}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  )
}
