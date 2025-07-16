import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const FashionBeauty = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                👗 Fashion & Beauty Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Style Success with Cinematic Fashion Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services elevate fashion brands: From runway showcases to beauty transformations, we create content that inspires style choices and drives brand loyalty in Kenya's vibrant fashion and beauty market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Style Your Brand
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Fashion Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Fashion & Beauty Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trend Relevance</h3>
              <p className="text-gray-300">Staying current with rapidly changing fashion trends, seasonal collections, and evolving style preferences in dynamic markets.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in saturated fashion markets with unique style positioning, brand personality, and compelling visual storytelling.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Style Inspiration</h3>
              <p className="text-gray-300">Creating aspirational content that inspires fashion choices, builds style confidence, and drives purchase decisions.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Seasonal Marketing</h3>
              <p className="text-gray-300">Adapting marketing strategies for seasonal collections, fashion weeks, and changing style preferences throughout the year.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Online Presence</h3>
              <p className="text-gray-300">Building strong digital fashion presence through engaging content that translates style appeal across social media platforms.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Customer Loyalty</h3>
              <p className="text-gray-300">Building lasting relationships with fashion-conscious customers through authentic brand experiences and consistent style quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Fashion & Beauty Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From haute couture designers to street fashion retailers, we create video content that drives style inspiration, builds brand loyalty, and accelerates fashion business growth across Kenya's creative fashion industry.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Fashion</h3>
              <p className="text-gray-300 mb-6">High-fashion promotional campaigns showcasing collections, runway shows, and lifestyle aesthetics that elevate brand positioning and drive sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Seasonal collection launches and fashion shows</li>
                    <li>• Designer collaboration and limited edition campaigns</li>
                    <li>• Luxury fashion positioning and brand elevation</li>
                    <li>• Fashion week showcases and runway presentations</li>
                    <li>• Style trend introduction and market education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand desirability</li>
                    <li>• Enhanced luxury positioning and premium pricing</li>
                    <li>• Better retail placement and distribution</li>
                    <li>• Improved social media viral potential</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Fashion enthusiasts, designers, and style influencers integrating fashion into daily life, work, and special occasions with authentic style inspiration.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Daily fashion styling and outfit coordination</li>
                    <li>• Designer creative process and inspiration</li>
                    <li>• Fashion lifestyle integration and confidence</li>
                    <li>• Special occasion styling and preparation</li>
                    <li>• Fashion career and industry insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in style inspiration</li>
                    <li>• Enhanced customer confidence and styling</li>
                    <li>• Better product usage and styling ideas</li>
                    <li>• Increased repeat purchase behavior</li>
                    <li>• Authentic lifestyle testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Fashion brand heritage stories and designer journeys that showcase creativity, craftsmanship, and commitment to style excellence and innovation.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Fashion brand founding and design philosophy</li>
                    <li>• Designer journey and creative evolution</li>
                    <li>• Craftsmanship and production excellence stories</li>
                    <li>• Fashion impact and cultural influence narratives</li>
                    <li>• Sustainability and ethical fashion initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in brand authenticity perception</li>
                    <li>• Enhanced emotional brand connection</li>
                    <li>• Stronger customer loyalty and advocacy</li>
                    <li>• Improved premium positioning and value</li>
                    <li>• Greater fashion media coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following fashion challenges, style transformations, or design competitions, creating engaging content that educates while entertaining fashion audiences.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Fashion makeover and style transformation series</li>
                    <li>• Design competitions and creative challenges</li>
                    <li>• Fashion week behind-the-scenes content</li>
                    <li>• Style education and fashion technique tutorials</li>
                    <li>• Fashion career development and mentorship</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in fashion community engagement</li>
                    <li>• Educational content for style-conscious audience</li>
                    <li>• Ongoing content series for brand building</li>
                    <li>• Enhanced fashion authority and expertise</li>
                    <li>• Community building and audience retention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Style challenges, design contests, and fashion competitions that engage fashion communities while showcasing brand creativity and style innovation.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Style challenge competitions and contests</li>
                    <li>• Fashion design and creativity challenges</li>
                    <li>• User-generated fashion content campaigns</li>
                    <li>• Styling competitions and fashion shows</li>
                    <li>• Fashion photography and creative contests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in brand engagement</li>
                    <li>• User-generated content and style testimonials</li>
                    <li>• Enhanced community participation and loyalty</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Fashion trend creation and influence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of fashion businesses, design studios, and fashion retailers, showcasing creativity, quality control, and industry expertise.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Fashion design studio operations</li>
                    <li>• Fashion retail business and customer service</li>
                    <li>• Fashion production and quality control</li>
                    <li>• Fashion buying and trend forecasting</li>
                    <li>• Fashion industry insights and business practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and brand trust</li>
                    <li>• Educational value for fashion community</li>
                    <li>• Improved professional credibility</li>
                    <li>• Fashion industry thought leadership</li>
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
            Fashion & Beauty Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Local Fashion Designer</h3>
              <p className="text-gray-300 mb-4">An emerging designer increased sales by 350% through our runway showcase series and behind-the-scenes design process videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Brand recognition and market penetration<br/>
                <strong>Solution:</strong> Mini-movies + Reality shows<br/>
                <strong>Result:</strong> 350% sales growth, runway success
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Fashion Retail Chain</h3>
              <p className="text-gray-300 mb-4">A fashion retailer built style authority and increased customer loyalty by 180% with our style competition and education series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Customer engagement and style authority<br/>
                <strong>Solution:</strong> Competitions + Educational content<br/>
                <strong>Result:</strong> 180% loyalty improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Beauty & Fashion Boutique</h3>
              <p className="text-gray-300 mb-4">A luxury boutique attracted high-end clientele and increased average transaction value by 250% through our lifestyle showcase videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Luxury positioning and high-end clientele<br/>
                <strong>Solution:</strong> Lifestyle showcases + Day-in-life videos<br/>
                <strong>Result:</strong> 250% transaction value increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Fashion & Beauty Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">89%</div>
              <p className="text-gray-300">of fashion buyers watch style videos before making purchase decisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">7x</div>
              <p className="text-gray-300">higher engagement rates for fashion lifestyle content vs. static images</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">82%</div>
              <p className="text-gray-300">of fashion videos are shared across social media platforms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">95%</div>
              <p className="text-gray-300">of fashion brands use video content for style inspiration and education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Style Your Fashion Brand Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan fashion brands using cinematic videos to inspire style choices, build brand loyalty, and create fashion movements that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Style Your Strategy
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

export default FashionBeauty 