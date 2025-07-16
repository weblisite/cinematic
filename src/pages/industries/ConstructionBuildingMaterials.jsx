import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const ConstructionBuildingMaterials = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏗️ Construction & Building Materials Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Build Trust with Cinematic Construction Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services strengthen construction marketing: From project showcases to material quality demonstrations, we create content that builds contractor trust and drives sales in Kenya's booming construction sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Build Your Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Construction Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Construction Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Quality Assurance</h3>
              <p className="text-gray-300">Demonstrating material quality, durability standards, and construction excellence to build contractor and client confidence.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Professional Credibility</h3>
              <p className="text-gray-300">Establishing expertise and reliability in competitive construction markets where trust and reputation are paramount.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Project Complexity</h3>
              <p className="text-gray-300">Simplifying complex construction processes and technical specifications for diverse stakeholder understanding.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Safety Standards</h3>
              <p className="text-gray-300">Showcasing commitment to safety protocols, worker protection, and industry best practices in construction operations.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Client Trust</h3>
              <p className="text-gray-300">Building confidence through transparent processes, quality demonstrations, and proven track records of successful projects.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Market Differentiation</h3>
              <p className="text-gray-300">Standing out in competitive construction markets through unique value propositions and superior service demonstrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Construction Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From cement manufacturers to construction companies, we create video content that builds trust, showcases quality, and drives business growth across Kenya's construction industry.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Construction</h3>
              <p className="text-gray-300 mb-6">Powerful project showcases and material demonstrations that highlight quality, durability, and construction excellence, driving contractor preference and sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Building material quality and durability showcases</li>
                    <li>• Construction project completion celebrations</li>
                    <li>• Equipment and machinery demonstrations</li>
                    <li>• Infrastructure development showcases</li>
                    <li>• Safety protocol and compliance highlights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 75% increase in contractor inquiries</li>
                    <li>• Enhanced quality perception and trust</li>
                    <li>• Better supplier relationships and partnerships</li>
                    <li>• Improved project win rates</li>
                    <li>• Stronger competitive positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Construction workers, engineers, and project managers in action, showcasing expertise, dedication, and commitment to quality construction.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Skilled craftsman expertise and techniques</li>
                    <li>• Project management and coordination</li>
                    <li>• Quality control and inspection processes</li>
                    <li>• Safety protocol implementation</li>
                    <li>• Team collaboration and project delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 80% improvement in workforce pride</li>
                    <li>• Enhanced professional credibility</li>
                    <li>• Better talent recruitment and retention</li>
                    <li>• Increased client confidence in team</li>
                    <li>• Stronger employer branding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Construction company growth stories and project transformation narratives that showcase capability, innovation, and commitment to excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Company founding and growth stories</li>
                    <li>• Major project completion documentaries</li>
                    <li>• Innovation and technology adoption stories</li>
                    <li>• Community impact and development projects</li>
                    <li>• Sustainability and environmental initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand credibility</li>
                    <li>• Enhanced emotional brand connection</li>
                    <li>• Stronger stakeholder confidence</li>
                    <li>• Improved project bidding success</li>
                    <li>• Greater industry recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following construction projects from foundation to completion, showcasing processes, challenges, and solutions while educating stakeholders.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Major construction project progress</li>
                    <li>• Building technique demonstrations</li>
                    <li>• Material testing and quality assurance</li>
                    <li>• Problem-solving and engineering solutions</li>
                    <li>• Infrastructure development documentaries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in stakeholder engagement</li>
                    <li>• Educational content for industry</li>
                    <li>• Enhanced transparency and trust</li>
                    <li>• Ongoing marketing content series</li>
                    <li>• Community building and awareness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Construction skill competitions, innovation challenges, and building contests that showcase expertise while engaging the construction community.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Skilled trades competitions and showcases</li>
                    <li>• Innovation and design challenges</li>
                    <li>• Safety awareness competitions</li>
                    <li>• Student construction and engineering contests</li>
                    <li>• Sustainable building practice challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in industry engagement</li>
                    <li>• Enhanced skill development and training</li>
                    <li>• Talent pipeline development</li>
                    <li>• Community building and networking</li>
                    <li>• Innovation promotion and adoption</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of successful construction businesses, showcasing operations, quality control, and industry leadership for transparency and education.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Construction company operations</li>
                    <li>• Project management and coordination</li>
                    <li>• Quality control and inspection processes</li>
                    <li>• Supply chain and vendor management</li>
                    <li>• Industry insights and best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and accountability</li>
                    <li>• Educational value for construction industry</li>
                    <li>• Improved client confidence and trust</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and mentorship</li>
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
            Construction & Building Materials Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cement Manufacturer</h3>
              <p className="text-gray-300 mb-4">A leading cement company increased contractor preference by 180% through our quality demonstration and reality show series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Quality perception and contractor trust<br/>
                <strong>Solution:</strong> Reality shows + Material demonstrations<br/>
                <strong>Result:</strong> 180% contractor preference increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Construction Company</h3>
              <p className="text-gray-300 mb-4">A regional construction firm improved project win rates by 120% with our capability showcase and mini-movie series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Project bidding and credibility<br/>
                <strong>Solution:</strong> Mini-movies + Project showcases<br/>
                <strong>Result:</strong> 120% project win rate improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Building Materials Supplier</h3>
              <p className="text-gray-300 mb-4">A materials distributor expanded market reach by 200% through our educational competition series and expertise showcases.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Market expansion and brand awareness<br/>
                <strong>Solution:</strong> Competitions + Educational content<br/>
                <strong>Result:</strong> 200% market reach expansion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Construction Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">89%</div>
              <p className="text-gray-300">of contractors prefer video demonstrations over technical specifications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">4x</div>
              <p className="text-gray-300">higher engagement rates for construction project videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">76%</div>
              <p className="text-gray-300">of clients want to see construction process transparency</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">85%</div>
              <p className="text-gray-300">of construction videos are viewed for quality assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Build Your Construction Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan construction companies using cinematic videos to showcase quality, build trust, and drive business growth in the construction sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Build Your Strategy
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

export default ConstructionBuildingMaterials 