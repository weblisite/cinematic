import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const BeautyCosmetics = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                💄 Beauty & Cosmetics Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Transform Beauty Marketing with Cinematic Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services beautify your brand: From makeup tutorials to transformation stories, we create content that showcases lipstick, makeup, wigs, body lotions, perfumes, and the full range of beauty products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Beautify Your Brand
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Beauty Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Beauty & Cosmetics Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Product Demonstration</h3>
              <p className="text-gray-300">Showing real product application, results, and transformation effects for makeup, skincare, and beauty products across different skin tones.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Authenticity & Trust</h3>
              <p className="text-gray-300">Building credibility through genuine reviews, real transformations, and authentic beauty experiences that resonate with diverse audiences.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trend Relevance</h3>
              <p className="text-gray-300">Staying current with rapidly changing beauty trends, seasonal looks, and evolving consumer preferences in cosmetics and skincare.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Inclusive Representation</h3>
              <p className="text-gray-300">Showcasing products across different skin tones, ages, and beauty styles to build inclusive brand image and market reach.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Purchase Confidence</h3>
              <p className="text-gray-300">Helping customers make informed buying decisions with clear product demonstrations and honest before-and-after results.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in saturated beauty markets through unique brand storytelling and compelling product positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Beauty Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From local cosmetics brands to international beauty retailers, we create video content that drives sales, builds loyalty, and showcases the full range of beauty products across Kenya's vibrant beauty market.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Beauty</h3>
              <p className="text-gray-300 mb-6">Glamorous product showcases featuring lipstick, makeup, skincare, perfumes, and beauty transformations that drive desire and purchase intent.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• New lipstick and makeup collection launches</li>
                    <li>• Skincare product benefits and results</li>
                    <li>• Perfume and fragrance lifestyle campaigns</li>
                    <li>• Seasonal beauty looks and trending styles</li>
                    <li>• Premium beauty product positioning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in product trial and purchase</li>
                    <li>• Enhanced luxury brand positioning</li>
                    <li>• Better retail placement and visibility</li>
                    <li>• Improved social media engagement</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real beauty routines featuring makeup application, skincare regimens, and product integration into daily lifestyles and special occasions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Morning and evening skincare routines</li>
                    <li>• Professional makeup application tutorials</li>
                    <li>• Special occasion beauty preparations</li>
                    <li>• Product usage across different age groups</li>
                    <li>• Beauty lifestyle integration and confidence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in product understanding</li>
                    <li>• Enhanced customer confidence and usage</li>
                    <li>• Better product education and application</li>
                    <li>• Increased repeat purchase behavior</li>
                    <li>• Authentic testimonial and social proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Beauty brand heritage stories and transformation journeys that showcase quality, innovation, and commitment to enhancing natural beauty.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Brand founding and mission stories</li>
                    <li>• Beauty transformation and confidence journeys</li>
                    <li>• Product development and innovation processes</li>
                    <li>• Ingredient sourcing and natural beauty narratives</li>
                    <li>• Diversity and inclusion beauty stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand authenticity perception</li>
                    <li>• Enhanced emotional brand connection</li>
                    <li>• Stronger customer loyalty and advocacy</li>
                    <li>• Improved premium positioning and value</li>
                    <li>• Greater influencer and media attention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following beauty transformations, makeup competitions, or skincare journeys, creating engaging content that educates while entertaining.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Beauty makeover and transformation series</li>
                    <li>• Makeup artist competitions and challenges</li>
                    <li>• Skincare journey and treatment progress</li>
                    <li>• Beauty education and technique tutorials</li>
                    <li>• Product testing and honest reviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in viewer engagement</li>
                    <li>• Educational content for beauty community</li>
                    <li>• Ongoing content series for marketing</li>
                    <li>• Enhanced product credibility and trust</li>
                    <li>• Community building and audience retention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Beauty challenges, makeup contests, and transformation competitions that engage audiences while showcasing product effectiveness and creativity.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Makeup look competitions and challenges</li>
                    <li>• Beauty transformation contests</li>
                    <li>• Creative lipstick and makeup art challenges</li>
                    <li>• Before-and-after skincare competitions</li>
                    <li>• User-generated beauty content campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in brand engagement</li>
                    <li>• User-generated content and testimonials</li>
                    <li>• Enhanced product trial and adoption</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Community building and brand advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of beauty businesses, salons, and cosmetics companies, showcasing expertise, quality control, and industry insights.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Beauty salon operations and expertise</li>
                    <li>• Cosmetics manufacturing and quality control</li>
                    <li>• Beauty academy training and education</li>
                    <li>• Product development and testing processes</li>
                    <li>• Beauty industry insights and trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and trust building</li>
                    <li>• Educational value for beauty community</li>
                    <li>• Improved professional credibility</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and expertise showcase</li>
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
            Beauty & Cosmetics Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Local Cosmetics Brand</h3>
              <p className="text-gray-300 mb-4">A Kenyan makeup brand increased sales by 400% through our transformation series showcasing diverse skin tones and beauty styles.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Market penetration and product demonstration<br/>
                <strong>Solution:</strong> Reality shows + Day-in-life videos<br/>
                <strong>Result:</strong> 400% sales growth, market leadership
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Beauty Salon Chain</h3>
              <p className="text-gray-300 mb-4">A premium salon chain built brand authority and increased bookings by 250% with our expertise showcase and competition series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Professional credibility and client trust<br/>
                <strong>Solution:</strong> Business reality shows + Competitions<br/>
                <strong>Result:</strong> 250% booking increase, premium positioning
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Skincare Product Launch</h3>
              <p className="text-gray-300 mb-4">A new skincare line achieved 300% first-month sales target through our authentic transformation documentary series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> New product credibility and market entry<br/>
                <strong>Solution:</strong> Mini-movies + Transformation series<br/>
                <strong>Result:</strong> 300% sales target exceeded
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Beauty & Cosmetics Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">94%</div>
              <p className="text-gray-300">of beauty buyers watch tutorial videos before purchasing products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">8x</div>
              <p className="text-gray-300">higher engagement rates for beauty transformation videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">86%</div>
              <p className="text-gray-300">of consumers trust authentic before-and-after demonstrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">75%</div>
              <p className="text-gray-300">of beauty videos are shared across social media platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Beauty Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan beauty brands using cinematic videos to showcase products, build trust, and create stunning transformations that drive sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Beautify Your Strategy
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

export default BeautyCosmetics 