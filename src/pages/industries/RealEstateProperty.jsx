import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const RealEstateProperty = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏠 Real Estate & Property Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Sell Properties Faster with Cinematic Real Estate Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services accelerate property sales: From luxury property showcases to agent success stories, we help sell properties faster and build reputations in Kenya's competitive real estate market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Sell Properties Faster
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Property Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Real Estate & Property Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Property Visualization</h3>
              <p className="text-gray-300">Helping potential buyers envision themselves in properties through immersive virtual tours and lifestyle showcases.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Agent Credibility</h3>
              <p className="text-gray-300">Building trust and reputation for real estate agents through success stories, client testimonials, and professional expertise showcases.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Market Differentiation</h3>
              <p className="text-gray-300">Standing out in competitive property markets with unique property features, location benefits, and value propositions.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Emotional Connection</h3>
              <p className="text-gray-300">Creating emotional bonds between buyers and properties through lifestyle integration and dream home visualization.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Remote Viewing</h3>
              <p className="text-gray-300">Enabling remote property viewing for international buyers and busy professionals who can't visit properties in person.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Luxury Positioning</h3>
              <p className="text-gray-300">Showcasing luxury properties and premium developments with sophisticated marketing that attracts high-end buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Real Estate Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From luxury developers to real estate agents, we create video content that sells properties faster, builds agent reputations, and drives real estate success across Kenya's property market.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Real Estate</h3>
              <p className="text-gray-300 mb-6">Stunning property showcases and luxury lifestyle campaigns that drive inquiries, showings, and faster property sales with premium positioning.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Luxury property launches and developments</li>
                    <li>• Virtual property tours and walkthroughs</li>
                    <li>• Real estate agent personal branding</li>
                    <li>• Neighborhood and location showcases</li>
                    <li>• Investment property opportunity highlights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in property inquiries</li>
                    <li>• Enhanced luxury positioning and value perception</li>
                    <li>• Better remote buyer engagement</li>
                    <li>• Improved showing conversion rates</li>
                    <li>• Stronger emotional property connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real estate agents, property managers, and homeowners in their professional routines, showcasing expertise and dedication to client success.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Real estate agent expertise and daily work</li>
                    <li>• Property management and maintenance excellence</li>
                    <li>• Client consultation and service excellence</li>
                    <li>• Market research and property analysis</li>
                    <li>• Home staging and preparation processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in client trust and confidence</li>
                    <li>• Enhanced agent credibility and expertise</li>
                    <li>• Better understanding of service value</li>
                    <li>• Increased referral rates and recommendations</li>
                    <li>• Authentic professional testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Real estate success stories and agency growth narratives that showcase achievement, expertise, and commitment to client satisfaction and dreams.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Real estate agency founding and growth stories</li>
                    <li>• Client dream home and investment success</li>
                    <li>• Agent career achievement and recognition</li>
                    <li>• Community development and impact projects</li>
                    <li>• Property development and transformation stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in agency credibility and trust</li>
                    <li>• Enhanced emotional client connection</li>
                    <li>• Stronger agent reputation and positioning</li>
                    <li>• Improved client loyalty and advocacy</li>
                    <li>• Greater real estate industry recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following property searches, home renovations, or real estate transactions, creating engaging content that educates while building industry authority.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Home buying and selling journey documentaries</li>
                    <li>• Property renovation and development projects</li>
                    <li>• Real estate market analysis and trends</li>
                    <li>• First-time buyer education and guidance</li>
                    <li>• Investment property development journeys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 180% increase in real estate education engagement</li>
                    <li>• Educational content for property buyers</li>
                    <li>• Ongoing content series for authority building</li>
                    <li>• Enhanced industry expertise and credibility</li>
                    <li>• Community building and client retention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Home design contests, property photography competitions, and real estate knowledge challenges that engage communities while showcasing properties.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Property photography and staging competitions</li>
                    <li>• Home design and interior decoration contests</li>
                    <li>• Real estate knowledge and expertise challenges</li>
                    <li>• Community beautification and improvement projects</li>
                    <li>• Investment strategy and market analysis contests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 250% increase in community engagement</li>
                    <li>• Enhanced property presentation and marketing</li>
                    <li>• User-generated content and property showcases</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Real estate community building and networking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of real estate businesses, agency operations, and property development, showcasing professionalism and industry expertise.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Real estate agency operations and management</li>
                    <li>• Property development and construction oversight</li>
                    <li>• Client service excellence and satisfaction</li>
                    <li>• Market analysis and investment strategy</li>
                    <li>• Real estate industry insights and best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and professional credibility</li>
                    <li>• Educational value for real estate community</li>
                    <li>• Improved client confidence and trust</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and expertise demonstration</li>
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
            Real Estate & Property Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Luxury Property Developer</h3>
              <p className="text-gray-300 mb-4">A high-end developer increased property sales by 350% through our luxury showcase series and lifestyle integration videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Luxury positioning and buyer attraction<br/>
                <strong>Solution:</strong> Luxury showcases + Lifestyle videos<br/>
                <strong>Result:</strong> 350% property sales increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Real Estate Agent</h3>
              <p className="text-gray-300 mb-4">A top-performing agent built market authority and increased listings by 280% with our expertise showcase and success story series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Market authority and listing acquisition<br/>
                <strong>Solution:</strong> Expertise showcases + Success stories<br/>
                <strong>Result:</strong> 280% listing increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Property Management Company</h3>
              <p className="text-gray-300 mb-4">A property management firm improved client retention by 200% through our service excellence reality show and client testimonial competitions.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Client retention and service credibility<br/>
                <strong>Solution:</strong> Service showcases + Client competitions<br/>
                <strong>Result:</strong> 200% client retention improvement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Real Estate & Property Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">92%</div>
              <p className="text-gray-300">of property buyers watch virtual tours and property videos before viewing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">8x</div>
              <p className="text-gray-300">higher inquiry rates for properties with professional video marketing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">76%</div>
              <p className="text-gray-300">of real estate videos are shared within social networks and family circles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">95%</div>
              <p className="text-gray-300">of luxury property buyers expect high-quality video presentations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Sell Properties Faster?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan real estate professionals using cinematic videos to showcase properties, build reputations, and create dream home experiences that drive sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Accelerate Property Sales
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

export default RealEstateProperty 