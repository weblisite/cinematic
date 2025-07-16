import React from 'react'
import { Link } from 'react-router-dom'
import CinematicBrandCard from '../components/CinematicBrandCard'

const ContentHub = () => {
  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Cinematic Video Ads That Convert",
      excerpt: "Discover how cinematic video advertising is revolutionizing business marketing in Kenya and why your company needs to embrace this powerful storytelling approach.",
      category: "Video Marketing",
      readTime: "8 min read",
      date: "December 15, 2024",
      slug: "cinematic-video-ads-guide",
      tags: ["Cinematic Video Ads", "Marketing", "Business Growth"]
    },
    {
      id: 2,
      title: "Day-in-Life Videos: The Secret to Authentic Business Storytelling",
      excerpt: "Learn how day-in-life videos build trust, showcase expertise, and humanize your brand through authentic storytelling that resonates with your audience.",
      category: "Content Strategy",
      readTime: "7 min read",
      date: "December 12, 2024",
      slug: "day-in-life-videos-storytelling",
      tags: ["Day-in-Life Videos", "Storytelling", "Brand Building"]
    },
    {
      id: 3,
      title: "Business Mini-Movies: Transforming Your Brand Story into Cinema",
      excerpt: "Explore how business mini-movies create emotional connections with your audience and position your company as an industry leader through compelling narratives.",
      category: "Brand Storytelling",
      readTime: "9 min read",
      date: "December 10, 2024",
      slug: "business-mini-movies-guide",
      tags: ["Business Mini-Movies", "Brand Story", "Documentary"]
    },
    {
      id: 4,
      title: "Branded Reality Shows: The Future of Entertainment Marketing",
      excerpt: "Understand how branded reality shows create powerful brand associations while entertaining audiences, driving engagement and building lasting customer relationships.",
      category: "Entertainment Marketing",
      readTime: "6 min read",
      date: "December 8, 2024",
      slug: "branded-reality-shows-marketing",
      tags: ["Branded Reality Shows", "Entertainment", "Brand Integration"]
    },
    {
      id: 5,
      title: "Branded Competitions: Making Your Product Essential to Success",
      excerpt: "Discover how branded competitions naturally integrate your products into compelling narratives, creating desire and demonstrating value through entertainment.",
      category: "Competition Marketing",
      readTime: "7 min read",
      date: "December 5, 2024",
      slug: "branded-competitions-strategy",
      tags: ["Branded Competitions", "Product Marketing", "Engagement"]
    },
    {
      id: 6,
      title: "Business Reality Shows: Positioning Your Company as Industry Authority",
      excerpt: "Learn how business reality shows showcase your company culture, attract top talent, and establish your organization as a thought leader in your industry.",
      category: "Corporate Branding",
      readTime: "8 min read",
      date: "December 3, 2024",
      slug: "business-reality-shows-authority",
      tags: ["Business Reality Shows", "Corporate Culture", "Industry Leadership"]
    }
  ]

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Industry insights, expert guides, and comprehensive resources about cinematic video production for businesses in Kenya.
          </p>
          <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-lg text-gray-300">
              <strong className="text-cinematic-gold">Expert Knowledge:</strong> Learn from Kenya's premier cinematic video production agency
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Latest Articles & Guides
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-cinematic-gray rounded-lg overflow-hidden glow-gold hover:glow-gold-intense transition-all duration-300">
                <div className="relative">
                  <CinematicBrandCard 
                    category={article.category}
                    className="w-full h-48"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-cinematic-gold mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="bg-cinematic-black text-cinematic-gold px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/content-hub/${article.slug}`}
                    className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get exclusive content, behind-the-scenes insights, and expert tips delivered to your inbox every month.
          </p>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">
              Cinematic Insights Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Monthly industry insights, case studies, and exclusive content about cinematic video production in Kenya.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-cinematic-black text-white border border-cinematic-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-cinematic-gold"
              />
              <button className="bg-cinematic-gold text-cinematic-black px-8 py-3 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Business Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            After reading our insights, take the next step and discover how our cinematic video production services can elevate your business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/services"
              className="inline-block bg-cinematic-gold text-cinematic-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinematic-gold/80 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/portfolio"
              className="inline-block border-2 border-cinematic-gold text-cinematic-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentHub 