import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const AgricultureFood = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🌾 Agriculture & Food Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Cultivate Trust with Cinematic Agriculture Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services nurture agricultural growth: From farm-to-table narratives to sustainable practice showcases, we connect consumers with quality food sources in Kenya's vital agricultural sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Harvest Success
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Agriculture Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Agriculture & Food Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Consumer Trust</h3>
              <p className="text-gray-300">Building confidence in food safety, quality, and authenticity in an era of increasing health consciousness and transparency demands.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Farm-to-Table Connection</h3>
              <p className="text-gray-300">Bridging the gap between rural producers and urban consumers, showcasing the journey and people behind food production.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Sustainable Practices</h3>
              <p className="text-gray-300">Communicating environmental responsibility and sustainable farming methods to eco-conscious consumers and stakeholders.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Product Differentiation</h3>
              <p className="text-gray-300">Standing out in competitive markets with unique value propositions, quality standards, and brand storytelling.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Market Access</h3>
              <p className="text-gray-300">Connecting smallholder farmers with larger markets and premium buyers through compelling product presentations.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Technology Adoption</h3>
              <p className="text-gray-300">Demonstrating modern farming techniques and technology benefits to traditional farming communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Agriculture Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From organic farms to food processing companies, we create video content that builds consumer trust, showcases quality, and drives market access across Kenya's agricultural value chain.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Agriculture</h3>
              <p className="text-gray-300 mb-6">Farm-to-table visual stories that showcase product quality, freshness, and authenticity, driving consumer preference and premium positioning.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Organic produce and premium food launches</li>
                    <li>• Seasonal harvest and fresh product campaigns</li>
                    <li>• Food processing and packaging showcases</li>
                    <li>• Agricultural equipment and technology demos</li>
                    <li>• Export quality and certification highlights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 80% increase in premium product sales</li>
                    <li>• Enhanced consumer trust and loyalty</li>
                    <li>• Better retail placement and visibility</li>
                    <li>• Improved export market penetration</li>
                    <li>• Stronger brand premium positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Farmers, agricultural workers, and food producers in their daily routines, building authentic connections and showcasing dedication to quality.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Farmer expertise and traditional knowledge</li>
                    <li>• Sustainable farming practice showcases</li>
                    <li>• Food processing and quality control</li>
                    <li>• Agricultural innovation and modern techniques</li>
                    <li>• Community farming and cooperative activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% improvement in consumer trust</li>
                    <li>• Enhanced farmer pride and recognition</li>
                    <li>• Better understanding of farming challenges</li>
                    <li>• Increased support for local agriculture</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Agricultural transformation stories and farming heritage narratives that inspire confidence and showcase generational dedication to quality.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family farm legacy and heritage stories</li>
                    <li>• Agricultural innovation and transformation</li>
                    <li>• Cooperative success and community impact</li>
                    <li>• Sustainable farming journey and evolution</li>
                    <li>• Food security and community resilience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in brand authenticity perception</li>
                    <li>• Enhanced premium positioning and value</li>
                    <li>• Stronger consumer emotional connection</li>
                    <li>• Improved stakeholder and investor confidence</li>
                    <li>• Greater media coverage and recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following farming seasons, crop cycles, or food production processes, educating consumers while building transparency and trust.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Seasonal farming cycles and crop growth</li>
                    <li>• Food processing from raw to finished product</li>
                    <li>• Sustainable farming practice implementation</li>
                    <li>• Agricultural challenge solutions and innovation</li>
                    <li>• Community farming project development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 180% increase in consumer engagement</li>
                    <li>• Educational value for urban consumers</li>
                    <li>• Ongoing content series for marketing</li>
                    <li>• Enhanced transparency and trust</li>
                    <li>• Community building and advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Farming competitions, recipe contests, and agricultural innovation challenges that engage communities while showcasing product quality.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Cooking competitions with farm ingredients</li>
                    <li>• Best farmer and innovation contests</li>
                    <li>• Sustainable farming practice challenges</li>
                    <li>• Recipe development and food creation</li>
                    <li>• Agricultural photography and storytelling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 220% increase in community participation</li>
                    <li>• User-generated content and testimonials</li>
                    <li>• Enhanced product trial and adoption</li>
                    <li>• Viral marketing through competition</li>
                    <li>• Farmer network building and support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of successful agricultural businesses, showcasing operations, quality control, and industry expertise for transparency and education.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Farm operations and business management</li>
                    <li>• Food processing facility operations</li>
                    <li>• Agricultural supply chain transparency</li>
                    <li>• Quality control and certification processes</li>
                    <li>• Cooperative governance and decision-making</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and accountability</li>
                    <li>• Educational value for farming community</li>
                    <li>• Improved consumer confidence and trust</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and best practice promotion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Agriculture & Food Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Organic Farm Cooperative</h3>
              <p className="text-gray-300 mb-4">A smallholder farmers' cooperative increased premium market access by 300% through our farm-to-table video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Limited market access and premium positioning<br/>
                <strong>Solution:</strong> Day-in-life videos + Mini-movies<br/>
                <strong>Result:</strong> 300% premium market growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Food Processing Company</h3>
              <p className="text-gray-300 mb-4">A local food processor gained export certification and increased international sales by 250% with our quality showcase videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Export market entry and quality perception<br/>
                <strong>Solution:</strong> Reality shows + Cinematic ads<br/>
                <strong>Result:</strong> Export certification, 250% growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Sustainable Agriculture Initiative</h3>
              <p className="text-gray-300 mb-4">An environmental NGO mobilized 500+ farmers to adopt sustainable practices through our educational competition series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Farmer education and practice adoption<br/>
                <strong>Solution:</strong> Competitions + Educational series<br/>
                <strong>Result:</strong> 500+ farmers engaged, practice change
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Agriculture & Food Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">88%</div>
              <p className="text-gray-300">of consumers want to know more about the source of their food</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">6x</div>
              <p className="text-gray-300">higher engagement rates for farm-to-table video content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">75%</div>
              <p className="text-gray-300">of premium food buyers prefer brands with transparent practices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">90%</div>
              <p className="text-gray-300">of agricultural videos are shared on social media platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Harvest Your Agricultural Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan agricultural brands using cinematic videos to build trust, access premium markets, and create sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Cultivate Your Strategy
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore All Services
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Free strategy consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>24-hour quote turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgricultureFood 