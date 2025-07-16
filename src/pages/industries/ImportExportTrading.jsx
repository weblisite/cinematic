import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const ImportExportTrading = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🚢 Import/Export & Trading Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Connect Global Markets with Cinematic Trading Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services expand trading networks: From logistics showcases to international partnerships, we create content that builds trust and attracts new trading relationships in Kenya's dynamic import/export sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Expand Your Trade
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Trading Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Import/Export & Trading Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trust & Credibility</h3>
              <p className="text-gray-300">Building confidence with international partners who haven't met face-to-face, showcasing business legitimacy and professional operations.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Partnership Development</h3>
              <p className="text-gray-300">Attracting new trading partners and buyers by demonstrating operational capacity, product quality, and reliable service delivery.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Market Penetration</h3>
              <p className="text-gray-300">Entering new international markets and reaching potential buyers who need to understand product origin, quality, and supply capabilities.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Logistics Transparency</h3>
              <p className="text-gray-300">Demonstrating shipping capabilities, supply chain efficiency, and logistics reliability to build partner confidence.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Quality Assurance</h3>
              <p className="text-gray-300">Proving product standards, compliance with international regulations, and consistent quality control across shipments.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cultural Communication</h3>
              <p className="text-gray-300">Bridging cultural gaps and communication barriers to build strong international business relationships and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Trading Businesses
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From commodity exporters to international trading companies, we create video content that builds trust, showcases capabilities, and attracts global partnerships across Kenya's import/export sector.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Trading</h3>
              <p className="text-gray-300 mb-6">Professional business showcases and capability demonstrations that highlight operations, quality, and international reach, attracting new trading partners.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• International trading capability showcases</li>
                    <li>• Product quality and origin demonstrations</li>
                    <li>• Logistics and shipping operation highlights</li>
                    <li>• Trade show and exhibition presentations</li>
                    <li>• Export market penetration campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in international inquiries</li>
                    <li>• Enhanced professional credibility</li>
                    <li>• Better partner confidence and trust</li>
                    <li>• Improved market entry success</li>
                    <li>• Stronger global business presence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Trading professionals, logistics coordinators, and quality control teams in action, showcasing expertise and dedication to reliable international trade.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Trading floor operations and market analysis</li>
                    <li>• Logistics coordination and shipping management</li>
                    <li>• Quality control and product inspection</li>
                    <li>• International communication and negotiations</li>
                    <li>• Supply chain management and coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% improvement in partner trust</li>
                    <li>• Enhanced operational transparency</li>
                    <li>• Better understanding of business processes</li>
                    <li>• Increased partnership opportunities</li>
                    <li>• Authentic professional testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Trading company growth stories and international expansion narratives that showcase vision, reliability, and commitment to global partnerships.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Company founding and international expansion</li>
                    <li>• Partnership success and relationship stories</li>
                    <li>• Market development and entry achievements</li>
                    <li>• Innovation in trading and logistics solutions</li>
                    <li>• Cultural bridge-building and international cooperation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in business credibility</li>
                    <li>• Enhanced emotional partner connection</li>
                    <li>• Stronger international relationship building</li>
                    <li>• Improved market positioning and reputation</li>
                    <li>• Greater industry recognition and trust</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following international trading deals, shipping journeys, or market development processes, creating engaging content that educates while building trust.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• International deal negotiation and completion</li>
                    <li>• Shipping and logistics journey documentation</li>
                    <li>• Market entry and development processes</li>
                    <li>• Quality assurance and compliance procedures</li>
                    <li>• Cross-cultural business relationship building</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 180% increase in business transparency</li>
                    <li>• Educational content for trading partners</li>
                    <li>• Ongoing content series for relationship building</li>
                    <li>• Enhanced operational credibility</li>
                    <li>• Community building and industry networking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Trading challenges, logistics optimization contests, and international business competitions that engage the trading community while showcasing expertise.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• International trading strategy competitions</li>
                    <li>• Logistics optimization and efficiency challenges</li>
                    <li>• Market analysis and forecasting contests</li>
                    <li>• Cross-cultural business communication challenges</li>
                    <li>• Innovation in trading technology and processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 250% increase in industry engagement</li>
                    <li>• Enhanced trading community participation</li>
                    <li>• Expertise showcase and thought leadership</li>
                    <li>• Network building and partnership development</li>
                    <li>• Innovation promotion and adoption</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of trading businesses, market operations, and international partnerships, showcasing professionalism and commitment to excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Trading company operations and management</li>
                    <li>• International market research and analysis</li>
                    <li>• Partnership development and relationship building</li>
                    <li>• Risk management and compliance procedures</li>
                    <li>• Trading industry insights and best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and accountability</li>
                    <li>• Educational value for trading community</li>
                    <li>• Improved partner confidence and trust</li>
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
            Import/Export & Trading Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Coffee Export Company</h3>
              <p className="text-gray-300 mb-4">A specialty coffee exporter increased international buyers by 350% through our origin story series and quality demonstration videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> International market penetration and quality trust<br/>
                <strong>Solution:</strong> Origin stories + Quality demonstrations<br/>
                <strong>Result:</strong> 350% international buyer growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trading Partnership Firm</h3>
              <p className="text-gray-300 mb-4">An international trading company improved partner trust by 220% with our operational transparency series and partnership success stories.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Partner trust and operational transparency<br/>
                <strong>Solution:</strong> Reality shows + Partnership stories<br/>
                <strong>Result:</strong> 220% partner trust improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Import Distribution Network</h3>
              <p className="text-gray-300 mb-4">A regional distributor expanded market reach by 280% through our logistics showcase and market development documentary series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Market expansion and logistics credibility<br/>
                <strong>Solution:</strong> Logistics showcases + Market development<br/>
                <strong>Result:</strong> 280% market reach expansion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Import/Export & Trading Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">91%</div>
              <p className="text-gray-300">of international buyers research suppliers through video content before partnerships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">6x</div>
              <p className="text-gray-300">higher trust rates for trading companies with operational transparency videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">83%</div>
              <p className="text-gray-300">of trading partnerships begin with video-based credibility assessment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">95%</div>
              <p className="text-gray-300">of trading videos are shared within international business networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Connect Global Markets?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan trading companies using cinematic videos to build international trust, showcase capabilities, and create global partnerships that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Expand Your Trading Network
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

export default ImportExportTrading 