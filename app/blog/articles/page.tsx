import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Articles - Sultanpur Al-Falah Islamic Center',
  description: 'Complete collection of Islamic articles, scholarly writings, and community insights from Sultanpur Al-Falah Islamic Center',
}

export const viewport: Viewport = {
  themeColor: '#1B5E20',
}

interface DetailedBlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
  tags: string[]
}

const detailedBlogPosts: DetailedBlogPost[] = [
  {
    id: 1,
    title: "The Importance of Community in Islam",
    excerpt: "Exploring how the Islamic concept of Ummah strengthens our bonds and spiritual growth.",
    content: `Islam places tremendous emphasis on the concept of community, known as the Ummah. This divine bond that connects Muslims worldwide transcends geographical boundaries, ethnic differences, and social status. The Prophet Muhammad (peace be upon him) beautifully illustrated this concept when he said, "The believers in their mutual kindness, compassion, and sympathy are just one body; if a limb suffers, the whole body responds to it with wakefulness and fever."

    In our modern world, the importance of community has never been more relevant. As Muslims living in diverse societies, we often face challenges that can only be overcome through collective support and shared values. The mosque serves as the central hub where this community spirit flourishes, providing not just a place of worship, but a center for education, social support, and spiritual development.

    At Sultanpur Al-Falah Islamic Center, we have witnessed firsthand how community involvement transforms lives. From our weekly study circles that deepen understanding of Islamic principles, to our charity drives that support those in need, every initiative strengthens the bonds between community members while fulfilling our religious obligations.

    The beauty of Islamic community lies in its inclusivity and mutual support. When new families join our community, they are welcomed with open arms and integrated into the fabric of our collective spiritual journey. This sense of belonging is crucial for maintaining Islamic identity, especially for young Muslims who are navigating between their faith and contemporary society.`,
    date: "2024-03-15",
    author: "Imam Abdullah Rahman",
    category: "Community",
    readTime: "8 min read",
    tags: ["Community", "Ummah", "Brotherhood", "Islamic Values"]
  },
  {
    id: 2,
    title: "Preparing for Ramadan: A Spiritual Journey",
    excerpt: "Guidelines and tips for making the most of the blessed month of Ramadan.",
    content: `Ramadan, the ninth month of the Islamic lunar calendar, is a time of intense spiritual reflection, self-improvement, and heightened devotion and worship. As we approach this blessed month, it's essential to prepare both physically and spiritually to maximize the benefits of this sacred time.

    Spiritual preparation begins with sincere intention (niyyah). The Prophet Muhammad (peace be upon him) said, "Actions are according to intentions, and everyone will get what was intended." Setting clear spiritual goals for Ramadan helps focus our efforts and ensures we don't merely go through the motions of fasting and prayer.

    Physical preparation is equally important. Gradually adjusting our eating patterns in the weeks leading up to Ramadan can help our bodies adapt more easily to the fasting schedule. This includes eating lighter meals, avoiding excessive caffeine, and establishing a regular sleep pattern that accommodates the pre-dawn meal (suhur) and night prayers (tarawih).

    The spiritual dimensions of Ramadan extend far beyond abstaining from food and drink. It's a time for increased Quran recitation, remembrance of Allah (dhikr), and charitable giving (zakat and sadaqah). Many Muslims aim to complete the entire Quran during Ramadan, either through personal reading or by attending the nightly tarawih prayers at the mosque.

    Community involvement during Ramadan enhances the spiritual experience. Sharing iftar meals with family and friends, participating in communal prayers, and engaging in collective charitable activities all contribute to the sense of unity and brotherhood that Ramadan fosters.`,
    date: "2024-03-10",
    author: "Sheikh Ahmed Hassan",
    category: "Spirituality",
    readTime: "10 min read",
    tags: ["Ramadan", "Fasting", "Spiritual Growth", "Worship"]
  },
  {
    id: 3,
    title: "Youth Programs: Building the Next Generation",
    excerpt: "How our youth programs are shaping young Muslims in our community.",
    content: `The youth of today are the leaders of tomorrow, and investing in their Islamic education and character development is one of our most crucial responsibilities as a community. At Sultanpur Al-Falah Islamic Center, our comprehensive youth programs are designed to nurture confident, knowledgeable, and spiritually grounded young Muslims.

    Our approach to youth development recognizes the unique challenges facing young Muslims in contemporary society. Balancing Islamic values with modern life requires careful guidance and support. Through our programs, we aim to equip our youth with the knowledge, skills, and confidence they need to navigate these challenges while maintaining their Islamic identity.

    The foundation of our youth programs is Quran and Arabic education. Starting from early childhood, we offer structured classes that teach proper recitation, memorization, and understanding of the Quran. Our qualified teachers use engaging methods that make learning enjoyable while instilling a deep love for Allah's words.

    Beyond religious education, we recognize the importance of developing leadership skills and social responsibility. Our youth leadership council provides opportunities for young people to organize events, lead discussions, and take on meaningful responsibilities within the community. These experiences build confidence and prepare them for future leadership roles.

    Sports and recreational activities are integral to our youth programs. Following the prophetic tradition that emphasizes physical fitness and healthy competition, we organize regular sports events, outdoor activities, and team-building exercises. These activities not only promote physical health but also teach important values like teamwork, perseverance, and fair play.`,
    date: "2024-03-05",
    author: "Sister Fatima Al-Zahra",
    category: "Education",
    readTime: "7 min read",
    tags: ["Youth", "Education", "Leadership", "Character Development"]
  },
  {
    id: 4,
    title: "The Art of Islamic Calligraphy: Beauty in Divine Words",
    excerpt: "Discovering the spiritual and artistic significance of Islamic calligraphy in mosque decoration and personal devotion.",
    content: `Islamic calligraphy, known as 'Khatt' in Arabic, represents one of the most revered art forms in Islamic culture. More than mere decoration, calligraphy transforms the sacred words of the Quran and prophetic traditions into visual expressions of divine beauty and spiritual meaning.

    The history of Islamic calligraphy spans over fourteen centuries, evolving from the simple Kufic script used in early Quranic manuscripts to the elaborate styles we see today. Each script style carries its own character and purpose: the geometric precision of Kufic, the flowing elegance of Naskh, the majestic presence of Thuluth, and the intricate beauty of Diwani.

    In mosque architecture, calligraphy serves both decorative and educational purposes. The verses inscribed on mosque walls, domes, and mihrab areas are carefully selected for their spiritual significance and their ability to inspire contemplation and remembrance of Allah. At Sultanpur Al-Falah Islamic Center, our calligraphic displays feature verses about community, worship, and divine mercy, reinforcing the mosque's role as a spiritual sanctuary.

    The practice of calligraphy itself is considered a form of worship. Many calligraphers begin their work with ritual purification and recite the verses they are writing, creating a meditative experience that deepens their connection to the divine message. This spiritual dimension distinguishes Islamic calligraphy from purely secular art forms.

    For community members interested in learning this sacred art, we offer calligraphy workshops that teach both the technical skills and spiritual aspects of the practice. Students learn to appreciate the balance between artistic expression and religious devotion that characterizes true Islamic calligraphy.`,
    date: "2024-02-28",
    author: "Ustadh Omar Farouk",
    category: "Arts & Culture",
    readTime: "9 min read",
    tags: ["Calligraphy", "Islamic Art", "Spirituality", "Culture"]
  },
  {
    id: 5,
    title: "Women in Islam: Honoring the Mothers of the Believers",
    excerpt: "Exploring the elevated status of women in Islam through the examples of the Mothers of the Believers and prominent female figures in Islamic history.",
    content: `Islam granted women rights and recognition that were revolutionary for their time and remain progressive today. The Quran and the example of Prophet Muhammad (peace be upon him) established a framework that honors women as equal partners in faith, valuable members of society, and essential contributors to the Muslim community.

    The wives of Prophet Muhammad (peace be upon him), known as the Mothers of the Believers (Ummahatul Mu'mineen), serve as perfect examples of women's roles in Islam. Khadijah (may Allah be pleased with her), the Prophet's first wife, was a successful businesswoman who supported him both financially and emotionally during the early years of his prophetic mission. Her strength, independence, and unwavering faith demonstrate Islam's respect for women's economic and spiritual autonomy.

    Aisha (may Allah be pleased with her), another wife of the Prophet, became one of the most knowledgeable scholars of her time. She transmitted thousands of hadiths and was consulted by the companions on matters of Islamic jurisprudence. Her example shows that Islam not only permits but encourages women's intellectual and religious development.

    In our contemporary context, Muslim women continue to excel in various fields while maintaining their Islamic values. At Sultanpur Al-Falah Islamic Center, our women's programs focus on religious education, professional development, and community service. We offer Quran study circles, parenting workshops, and skill-building sessions that empower women to fulfill their roles as mothers, professionals, and community leaders.

    The Islamic concept of hijab, often misunderstood in modern discourse, represents dignity, modesty, and spiritual focus rather than oppression. Our community supports women in their personal choices regarding Islamic dress while emphasizing the inner qualities of piety, knowledge, and good character that truly define a Muslim woman.`,
    date: "2024-02-20",
    author: "Dr. Zeinab Mahmoud",
    category: "Women & Family",
    readTime: "11 min read",
    tags: ["Women in Islam", "Mothers of Believers", "Gender Equality", "Islamic History"]
  },
  {
    id: 6,
    title: "The Science of Islamic Prayer: Physical and Spiritual Benefits",
    excerpt: "Understanding how the five daily prayers benefit both our physical health and spiritual well-being through scientific and Islamic perspectives.",
    content: `The Islamic prayer (Salah) is not merely a ritual obligation but a comprehensive system that benefits the human being physically, mentally, and spiritually. Modern scientific research has begun to uncover the remarkable health benefits of the prayer movements and timing, confirming what Muslims have practiced for over fourteen centuries.

    The physical movements of Islamic prayer constitute a form of light exercise that engages multiple muscle groups. The standing position (qiyam) improves posture and strengthens the legs and back. The bowing position (ruku) stretches the spine and improves flexibility. The prostration (sujud) increases blood circulation to the brain and provides a gentle stretch for the back and neck muscles.

    Scientific studies have shown that the regular practice of prayer movements can help reduce back pain, improve joint flexibility, and enhance overall physical fitness. The rhythm of Islamic prayer, performed five times daily, also helps regulate the body's circadian rhythm, potentially improving sleep quality and overall health.

    From a spiritual perspective, the five daily prayers serve as constant reminders of our relationship with Allah and our purpose in life. Each prayer time is strategically positioned throughout the day: Fajr awakens us with remembrance of Allah, Dhuhr provides a midday spiritual break, Asr offers afternoon reflection, Maghrib marks the transition to evening with gratitude, and Isha concludes the day with surrender to Allah.

    The psychological benefits of regular prayer include reduced stress, increased mindfulness, and improved emotional regulation. The act of turning away from worldly concerns five times daily to focus on worship provides natural stress relief and mental clarity.

    At our mosque, we encourage community members to maintain regular prayer attendance not just for the spiritual rewards but also for the physical and mental health benefits. Our prayer halls are designed to accommodate worshippers of all ages and abilities, ensuring that everyone can participate in this fundamental pillar of Islam.`,
    date: "2024-02-15",
    author: "Dr. Amjad Al-Rashid",
    category: "Health & Wellness",
    readTime: "12 min read",
    tags: ["Prayer", "Health Benefits", "Science", "Spirituality"]
  }
]

const categories = ["All", "Community", "Spirituality", "Education", "Arts & Culture", "Women & Family", "Health & Wellness"]

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            <span className="font-arabic text-5xl block mb-2">مقالات إسلامية</span>
            Islamic Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deeper into Islamic knowledge with our comprehensive collection of articles covering 
            spirituality, community life, education, and contemporary Islamic perspectives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg font-medium text-gray-700 hover:text-primary-700 transition-colors text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {detailedBlogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="prose prose-gray max-w-none mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {post.content.substring(0, 300)}...
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Read Full Article
                    </button>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <button className="hover:text-primary-600 transition-colors">
                        <span className="text-sm">Share</span>
                      </button>
                      <button className="hover:text-primary-600 transition-colors">
                        <span className="text-sm">Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            <span className="font-arabic text-3xl block mb-2">ابق على اطلاع</span>
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive our latest articles and community updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            ← Back to Blog Overview
          </a>
        </div>
      </div>
    </main>
  )
}
