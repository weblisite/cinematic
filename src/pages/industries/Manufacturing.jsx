import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Settings, Shield, TrendingUp, Wrench } from 'lucide-react'

const Manufacturing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏭 Manufacturing Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Showcase Manufacturing Excellence with Cinematic Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services showcase manufacturing excellence: From production line efficiency to worker expertise, we build trust in your manufacturing capabilities across Kenya's industrial sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Manufacturing Video Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Manufacturing Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Manufacturing Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Quality Assurance Demonstration</h3>
              <p className="text-gray-300">Showcasing rigorous quality control processes and superior manufacturing standards to build customer confidence.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Settings className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Production Process Transparency</h3>
              <p className="text-gray-300">Making complex manufacturing processes visible and understandable to customers, investors, and stakeholders.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Wrench className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Worker Expertise Showcase</h3>
              <p className="text-gray-300">Highlighting skilled craftsmanship and professional expertise of manufacturing teams to build trust and attract talent.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Innovation Communication</h3>
              <p className="text-gray-300">Demonstrating technological advancement and innovation in production processes to differentiate from competitors.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Safety Standards Proof</h3>
              <p className="text-gray-300">Documenting comprehensive safety protocols and compliance standards to ensure stakeholder confidence.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Supply Chain Efficiency</h3>
              <p className="text-gray-300">Demonstrating streamlined operations and efficient supply chain management for business credibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Showcase Manufacturing Excellence
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From small-scale manufacturers to large industrial facilities, we create video content that builds trust, showcases quality, and drives business growth across Kenya's manufacturing sector.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Manufacturing</h3>
              <p className="text-gray-300 mb-6">Quality control processes and finished product superiority showcased through compelling visual storytelling that builds customer confidence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Product quality demonstrations and certifications</li>
                    <li>• Manufacturing process transparency showcases</li>
                    <li>• Industrial equipment and machinery highlights</li>
                    <li>• Safety protocol and compliance demonstrations</li>
                    <li>• Finished product superiority presentations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 75% increase in customer trust scores</li>
                    <li>• Enhanced product quality perception</li>
                    <li>• Better supplier and partner confidence</li>
                    <li>• Improved sales conversion rates</li>
                    <li>• Stronger competitive differentiation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Factory workers, engineers, and quality assurance teams at work, showcasing expertise and dedication to excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Skilled worker expertise and craftsmanship</li>
                    <li>• Quality assurance team precision and dedication</li>
                    <li>• Engineering innovation and problem-solving</li>
                    <li>• Production line efficiency and teamwork</li>
                    <li>• Safety protocol implementation and training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 60% improvement in workforce pride</li>
                    <li>• Enhanced recruitment and retention</li>
                    <li>• Better customer confidence in expertise</li>
                    <li>• Increased stakeholder trust</li>
                    <li>• Stronger employer branding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Company growth stories and innovation breakthroughs that inspire confidence and showcase manufacturing evolution.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Company founding and growth stories</li>
                    <li>• Manufacturing innovation breakthroughs</li>
                    <li>• Facility expansion and modernization</li>
                    <li>• Technology adoption success stories</li>
                    <li>• Sustainability and environmental initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand credibility</li>
                    <li>• Enhanced investor and partner confidence</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Improved employee motivation</li>
                    <li>• Greater industry recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following production teams through complex manufacturing challenges, showcasing real-world problem-solving and expertise.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Complex product development challenges</li>
                    <li>• Quality improvement initiatives</li>
                    <li>• Technology implementation processes</li>
                    <li>• Crisis management and problem-solving</li>
                    <li>• Team collaboration and innovation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in process transparency</li>
                    <li>• Educational value for industry</li>
                    <li>• Enhanced operational credibility</li>
                    <li>• Better customer understanding</li>
                    <li>• Thought leadership positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Innovation challenges and efficiency improvement contests that position your company as an industry leader.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Manufacturing innovation competitions</li>
                    <li>• Efficiency improvement challenges</li>
                    <li>• Safety excellence awards</li>
                    <li>• Quality improvement contests</li>
                    <li>• Sustainability initiative competitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in industry engagement</li>
                    <li>• Enhanced innovation reputation</li>
                    <li>• Better talent attraction</li>
                    <li>• Competitive advantage demonstration</li>
                    <li>• Industry leadership positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Factory operations, supply chain management, and production optimization showcasing operational excellence and strategic thinking.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Operations management and optimization</li>
                    <li>• Supply chain efficiency and logistics</li>
                    <li>• Production planning and scheduling</li>
                    <li>• Quality management systems</li>
                    <li>• Strategic decision-making processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced operational transparency</li>
                    <li>• Better stakeholder confidence</li>
                    <li>• Improved supplier relationships</li>
                    <li>• Manufacturing industry thought leadership</li>
                    <li>• Competitive intelligence and positioning</li>
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
            Manufacturing Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Food Processing Plant</h3>
              <p className="text-gray-300 mb-4">A Kenyan food manufacturer increased customer trust by 85% with our quality control and production process videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Consumer concerns about food safety<br/>
                <strong>Solution:</strong> Quality control showcases + Worker expertise<br/>
                <strong>Result:</strong> 85% trust increase, 40% sales growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Textile Manufacturer</h3>
              <p className="text-gray-300 mb-4">A clothing manufacturer improved international partnerships by 60% through our production transparency video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> International buyer confidence<br/>
                <strong>Solution:</strong> Process transparency + Worker skills<br/>
                <strong>Result:</strong> 60% partnership growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Metal Fabrication</h3>
              <p className="text-gray-300 mb-4">A steel fabricator attracted skilled workers with our workplace culture and expertise showcase videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Skilled worker shortage<br/>
                <strong>Solution:</strong> Day-in-life videos + Growth stories<br/>
                <strong>Result:</strong> 300% job application increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Manufacturing Video Impact Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">76%</div>
              <p className="text-gray-300">of manufacturers say video improves customer understanding of processes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">3.2x</div>
              <p className="text-gray-300">higher engagement rates for manufacturing videos vs. text content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">67%</div>
              <p className="text-gray-300">of buyers prefer video demonstrations of manufacturing capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">89%</div>
              <p className="text-gray-300">of manufacturing workers feel proud when featured in company videos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Showcase Manufacturing Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join successful Kenyan manufacturers using cinematic videos to build trust, showcase quality, and drive business growth in competitive markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Manufacturing Video Strategy
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
              <span>Quality-focused production</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Manufacturing industry expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Safety-compliant filming</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manufacturing 