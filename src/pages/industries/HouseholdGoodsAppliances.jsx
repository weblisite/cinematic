import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const HouseholdGoodsAppliances = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏠 Household Goods & Appliances Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Transform Homes with Cinematic Appliance Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services enhance household brands: From product demonstrations to family lifestyle integration, we create content that drives purchases and builds brand loyalty for appliances and household goods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Transform Your Brand
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Household Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Household Goods & Appliances Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Product Demonstration</h3>
              <p className="text-gray-300">Showing appliance functionality, ease of use, and practical benefits in real household settings to build purchase confidence.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Family Integration</h3>
              <p className="text-gray-300">Demonstrating how household goods enhance family life, daily routines, and home comfort across different family situations.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Value Justification</h3>
              <p className="text-gray-300">Proving return on investment for significant household purchases through efficiency, convenience, and long-term benefits.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Technology Adoption</h3>
              <p className="text-gray-300">Simplifying advanced features and smart home integration to help consumers embrace modern appliance technology.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trust & Reliability</h3>
              <p className="text-gray-300">Building confidence in product durability, after-sales service, and brand reputation for long-term household investments.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Purchase Decision</h3>
              <p className="text-gray-300">Influencing significant household investment decisions through compelling demonstrations and real-world usage scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Household Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From appliance manufacturers to household goods retailers, we create video content that demonstrates value, builds trust, and drives sales across Kenya's household products market.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Household Goods</h3>
              <p className="text-gray-300 mb-6">Compelling appliance showcases and home lifestyle campaigns that highlight functionality, convenience, and family benefits, driving showroom visits and sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• New appliance launches and feature highlights</li>
                    <li>• Kitchen appliance functionality demonstrations</li>
                    <li>• Smart home technology integration showcases</li>
                    <li>• Energy efficiency and cost savings features</li>
                    <li>• Seasonal promotions and special offers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 80% increase in showroom inquiries</li>
                    <li>• Enhanced product understanding and confidence</li>
                    <li>• Better feature appreciation and value perception</li>
                    <li>• Improved purchase conversion rates</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real families integrating household goods into daily routines, cooking, cleaning, and home management, building authentic lifestyle connection.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family cooking and kitchen appliance usage</li>
                    <li>• Household cleaning and maintenance routines</li>
                    <li>• Home entertainment and appliance integration</li>
                    <li>• Energy-saving practices and efficiency</li>
                    <li>• Multi-generational household usage scenarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in purchase consideration</li>
                    <li>• Enhanced customer confidence and trust</li>
                    <li>• Better understanding of product benefits</li>
                    <li>• Increased household adoption rates</li>
                    <li>• Authentic testimonial and social proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Brand heritage stories and innovation journeys that showcase quality, reliability, and commitment to enhancing family life and home comfort.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Brand founding and quality commitment stories</li>
                    <li>• Product innovation and technology development</li>
                    <li>• Manufacturing excellence and quality control</li>
                    <li>• Customer satisfaction and family impact narratives</li>
                    <li>• Sustainability and environmental responsibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand trust and reliability</li>
                    <li>• Enhanced quality perception and value</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Improved customer loyalty and advocacy</li>
                    <li>• Greater retail partner confidence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following home improvement projects, appliance installations, or household management scenarios, creating engaging educational content.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Home renovation and appliance upgrade projects</li>
                    <li>• Smart home transformation documentaries</li>
                    <li>• Energy efficiency makeover challenges</li>
                    <li>• Family cooking and kitchen optimization</li>
                    <li>• Household organization and efficiency improvements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in home improvement engagement</li>
                    <li>• Educational content for household management</li>
                    <li>• Ongoing content series for brand building</li>
                    <li>• Enhanced product credibility and demonstration</li>
                    <li>• Community building and customer retention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Cooking contests, home improvement challenges, and efficiency competitions that engage households while showcasing appliance capabilities.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Cooking competitions and recipe challenges</li>
                    <li>• Home organization and efficiency contests</li>
                    <li>• Energy-saving and sustainability challenges</li>
                    <li>• Creative appliance usage and innovation</li>
                    <li>• Family bonding and household activity contests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in household engagement</li>
                    <li>• User-generated content and authentic testimonials</li>
                    <li>• Enhanced product trial and adoption</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Household community building and loyalty</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of appliance businesses, manufacturing processes, and customer service, showcasing quality control and commitment to excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Manufacturing processes and quality control</li>
                    <li>• Customer service and after-sales support</li>
                    <li>• Product development and innovation labs</li>
                    <li>• Installation and maintenance services</li>
                    <li>• Industry insights and technology trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and trust building</li>
                    <li>• Educational value for household consumers</li>
                    <li>• Improved customer confidence and loyalty</li>
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
            Household Goods & Appliances Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Kitchen Appliance Retailer</h3>
              <p className="text-gray-300 mb-4">A major appliance retailer increased sales by 280% through our cooking demonstration series and family lifestyle showcases.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Product demonstration and purchase confidence<br/>
                <strong>Solution:</strong> Cooking shows + Day-in-life videos<br/>
                <strong>Result:</strong> 280% sales increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Smart Home Solutions</h3>
              <p className="text-gray-300 mb-4">A technology company improved smart appliance adoption by 200% with our home automation reality show and integration competitions.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Technology adoption and feature understanding<br/>
                <strong>Solution:</strong> Reality shows + Integration competitions<br/>
                <strong>Result:</strong> 200% smart home adoption
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Home Appliance Manufacturer</h3>
              <p className="text-gray-300 mb-4">A regional manufacturer built brand trust and increased market share by 180% through our quality showcase and family impact mini-movies.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Brand trust and market differentiation<br/>
                <strong>Solution:</strong> Quality showcases + Family stories<br/>
                <strong>Result:</strong> 180% market share growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Household Goods & Appliances Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">88%</div>
              <p className="text-gray-300">of household buyers watch appliance demonstration videos before purchasing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">5x</div>
              <p className="text-gray-300">higher conversion rates for appliances with lifestyle integration videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">79%</div>
              <p className="text-gray-300">of families prefer video demonstrations over instruction manuals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">91%</div>
              <p className="text-gray-300">of household appliance videos are watched by multiple family members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Household Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan household brands using cinematic videos to demonstrate value, build trust, and create compelling reasons for families to choose your products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Transform Your Strategy
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

export default HouseholdGoodsAppliances 