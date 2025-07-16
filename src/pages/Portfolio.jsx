import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      client: "Watches.co.ke",
      industry: "Luxury Watch E-commerce",
      project: "Cinematic Video Ads Campaign",
      platforms: "Instagram Reels & TikTok",
      results: {
        engagement: "+275% engagement increase",
        sales: "+180% online sales boost",
        reach: "850K+ video views",
        conversion: "+45% conversion rate improvement"
      },
      description: "We created a series of cinematic video ads for Watches.co.ke that transformed how luxury watches are marketed online in Kenya. Our cinematic approach showcased the craftsmanship and elegance of luxury timepieces through dramatic lighting, close-up detail shots, and lifestyle storytelling.",
      challenge: "The challenge was to make luxury watches feel accessible and desirable to the Kenyan market while maintaining their premium positioning and appeal.",
      solution: "We developed a cinematic storytelling approach that focused on the emotional connection between timepieces and life's important moments - graduations, promotions, anniversaries. Each video told a story of achievement and success.",
      outcome: "The campaign exceeded all expectations, establishing Watches.co.ke as the premium destination for luxury timepieces in Kenya and significantly increasing their market share."
    },
    {
      id: 2,
      client: "Wholetail.co.ke",
      industry: "B2B Marketplace",
      project: "Cinematic Video Ads Series",
      platforms: "Instagram Reels & TikTok",
      results: {
        engagement: "+320% business inquiries",
        sales: "+200% platform registrations",
        reach: "1.2M+ video views",
        conversion: "+65% B2B lead conversion"
      },
      description: "For Wholetail.co.ke, we created compelling cinematic video ads that simplified complex B2B marketplace concepts into easily digestible, visually stunning content that resonated with both suppliers and buyers.",
      challenge: "B2B marketplaces typically struggle with engagement on social platforms. The challenge was making business-to-business transactions feel exciting and accessible through video content.",
      solution: "We crafted cinematic narratives showing real business owners discovering new opportunities, suppliers connecting with buyers, and the transformation of businesses through the platform. Each video focused on success stories and tangible benefits.",
      outcome: "The campaign revolutionized B2B marketing in Kenya, proving that even complex business services can be marketed effectively through cinematic storytelling on social media platforms."
    },
    {
      id: 3,
      client: "Celebrichat.com",
      industry: "Celebrity Platform",
      project: "Cinematic Video Ads Campaign",
      platforms: "Instagram Reels & TikTok",
      results: {
        engagement: "+400% user engagement",
        sales: "+250% platform downloads",
        reach: "2.1M+ video views",
        conversion: "+85% celebrity participation"
      },
      description: "We developed a cinematic video advertising strategy for Celebrichat.com that captured the excitement and exclusivity of connecting with celebrities while showcasing the platform's unique value proposition.",
      challenge: "The challenge was to communicate the novelty and excitement of celebrity interactions while building trust and credibility for a new platform in the Kenyan market.",
      solution: "Our cinematic approach used aspirational storytelling, showing fans' dreams coming true through celebrity interactions, behind-the-scenes glimpses, and the emotional impact of celebrity connections. We created a sense of exclusivity and desirability.",
      outcome: "The campaign successfully launched Celebrichat.com in Kenya, attracting both celebrities and fans to the platform, and establishing it as the premier celebrity interaction platform in East Africa."
    }
  ]

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive case studies of our cinematic video advertising success stories for Instagram Reels and TikTok campaigns.
          </p>
          <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-lg text-gray-300">
              <strong className="text-cinematic-gold">Specialized Focus:</strong> Cinematic Video Ads for Social Media Platforms
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Case Studies */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Featured Case Studies
          </h2>
          
          <div className="space-y-16">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                    <div className="flex items-center mb-4">
                      <div className="bg-cinematic-gold text-cinematic-black px-3 py-1 rounded-full text-sm font-bold mr-4">
                        Case Study #{project.id}
                      </div>
                      <span className="text-gray-400">{project.platforms}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-cinematic-gold mb-2">{project.client}</h3>
                    <p className="text-xl text-gray-300 mb-4">{project.industry}</p>
                    <p className="text-lg text-gray-400 mb-6">{project.project}</p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-cinematic-black p-4 rounded-lg">
                        <div className="text-cinematic-gold font-bold text-lg">{project.results.engagement}</div>
                        <div className="text-gray-400 text-sm">Engagement</div>
                      </div>
                      <div className="bg-cinematic-black p-4 rounded-lg">
                        <div className="text-cinematic-gold font-bold text-lg">{project.results.sales}</div>
                        <div className="text-gray-400 text-sm">Business Impact</div>
                      </div>
                      <div className="bg-cinematic-black p-4 rounded-lg">
                        <div className="text-cinematic-gold font-bold text-lg">{project.results.reach}</div>
                        <div className="text-gray-400 text-sm">Total Reach</div>
                      </div>
                      <div className="bg-cinematic-black p-4 rounded-lg">
                        <div className="text-cinematic-gold font-bold text-lg">{project.results.conversion}</div>
                        <div className="text-gray-400 text-sm">Conversion</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Analysis */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h4 className="text-xl font-bold text-cinematic-gold mb-3">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                    </div>
                    
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h4 className="text-xl font-bold text-cinematic-gold mb-3">Our Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-gray p-6 rounded-lg glow-gold">
                      <h4 className="text-xl font-bold text-cinematic-gold mb-3">The Outcome</h4>
                      <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Focus */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-8">
            Our Specialized Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            These case studies represent our specialized focus on creating cinematic video advertisements optimized for social media platforms, particularly Instagram Reels and TikTok, where engagement and impact matter most.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Instagram Reels Mastery</h3>
              <p className="text-gray-300 mb-4">
                We understand the unique requirements of Instagram Reels - the vertical format, the need for immediate visual impact, and the importance of storytelling within short durations.
              </p>
              <ul className="text-gray-400 space-y-2 text-left">
                <li>• Vertical cinematic composition</li>
                <li>• Hook creation in first 3 seconds</li>
                <li>• Visual storytelling optimization</li>
                <li>• Trend integration and timing</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">TikTok Excellence</h3>
              <p className="text-gray-300 mb-4">
                Our TikTok approach combines cinematic quality with platform-native content styles that feel authentic while maintaining professional production values.
              </p>
              <ul className="text-gray-400 space-y-2 text-left">
                <li>• Platform-native storytelling</li>
                <li>• Music and sound integration</li>
                <li>• Hashtag strategy alignment</li>
                <li>• Viral potential optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the ranks of successful Kenyan businesses that have transformed their social media presence with our cinematic video advertising approach.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link 
              to="/services/cinematic-video-ads"
              className="inline-block bg-cinematic-gold text-cinematic-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinematic-gold/80 transition-colors"
            >
              Explore Video Ads Service
            </Link>
            <a 
                href="mailto:antony@cinematic.co.ke?subject=Portfolio Inquiry - Cinematic Video Ads&body=Hi Cinematic team,%0D%0A%0D%0AI'm interested in creating cinematic video ads for my business similar to your portfolio work. Please provide me with more details.%0D%0A%0D%0AProject Details:%0D%0A- Company Name:%0D%0A- Industry:%0D%0A- Platform Focus: Instagram Reels / TikTok%0D%0A- Campaign Goals:%0D%0A- Timeline:%0D%0A%0D%0AThank you!"
              className="inline-block border-2 border-cinematic-gold text-cinematic-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-colors"
            >
              Get Your Quote
            </a>
          </div>
          
          <p className="text-gray-400">
            Contact us today to discuss how we can create a custom cinematic video advertising strategy for your business.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 