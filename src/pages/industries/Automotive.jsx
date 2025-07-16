import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const Automotive = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🚗 Automotive Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Accelerate Your Automotive Brand with Cinematic Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services accelerate automotive marketing: From performance showcases to lifestyle integration, we make vehicles irresistible and build lasting brand connections in Kenya's growing automotive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Accelerate Sales
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Auto Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Automotive Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Emotional Connection</h3>
              <p className="text-gray-300">Creating emotional bonds between customers and vehicles, showcasing lifestyle and aspirational values beyond technical specs.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trust Building</h3>
              <p className="text-gray-300">Establishing reliability and safety credibility, especially for new models, brands, or dealerships in competitive markets.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Purchase Decision</h3>
              <p className="text-gray-300">Influencing major investment decisions with compelling demonstrations and real-world usage scenarios.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Lifestyle Integration</h3>
              <p className="text-gray-300">Showing how vehicles seamlessly fit into customers' daily lives, work, family, and recreational activities.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in crowded automotive markets with unique value propositions and compelling brand stories.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">After-Sales Confidence</h3>
              <p className="text-gray-300">Building long-term relationships through service excellence and maintaining customer loyalty post-purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Automotive Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From luxury car dealerships to motorcycle brands, we create video content that drives sales, builds brand loyalty, and accelerates customer acquisition across Kenya's automotive sector.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Automotive</h3>
              <p className="text-gray-300 mb-6">High-impact vehicle showcase campaigns that highlight performance, design, and lifestyle integration, driving showroom visits and sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• New model launches and reveal campaigns</li>
                    <li>• Performance and capability demonstrations</li>
                    <li>• Luxury vehicle lifestyle positioning</li>
                    <li>• Safety feature highlights and testing</li>
                    <li>• Seasonal promotions and special offers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in showroom foot traffic</li>
                    <li>• Higher emotional engagement and desire</li>
                    <li>• Enhanced brand premium positioning</li>
                    <li>• Improved test drive conversion rates</li>
                    <li>• Stronger social media viral potential</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real customers integrating vehicles into their daily routines, commutes, adventures, and family activities, building authentic connection and trust.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family vehicle lifestyle integration</li>
                    <li>• Professional commuter experiences</li>
                    <li>• Adventure and off-road capabilities</li>
                    <li>• Urban driving and parking convenience</li>
                    <li>• Long-distance travel and comfort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 70% improvement in purchase consideration</li>
                    <li>• Enhanced customer confidence and trust</li>
                    <li>• Better understanding of vehicle benefits</li>
                    <li>• Reduced buyer hesitation and anxiety</li>
                    <li>• Authentic user testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Compelling brand heritage stories and innovation journeys that showcase automotive excellence, craftsmanship, and commitment to customer satisfaction.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Dealership founding and growth stories</li>
                    <li>• Manufacturing excellence and quality control</li>
                    <li>• Customer success and transformation stories</li>
                    <li>• Brand heritage and innovation timeline</li>
                    <li>• Environmental and sustainability initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand trust scores</li>
                    <li>• Enhanced premium positioning and value</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Improved customer loyalty and retention</li>
                    <li>• Greater media coverage and PR value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following automotive enthusiasts, restoration projects, or driving challenges, showcasing vehicle capabilities and building community engagement.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Vehicle restoration and customization projects</li>
                    <li>• Driving skill challenges and competitions</li>
                    <li>• Road trip adventures and exploration</li>
                    <li>• Automotive education and maintenance</li>
                    <li>• Community events and car enthusiast gatherings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in community engagement</li>
                    <li>• Educational content for vehicle owners</li>
                    <li>• Ongoing content series for marketing</li>
                    <li>• Enhanced brand authority and expertise</li>
                    <li>• Stronger customer community building</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Driving skill competitions, design challenges, and automotive knowledge contests that engage enthusiasts while showcasing vehicle capabilities.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Driving skill competitions and rallies</li>
                    <li>• Vehicle customization design contests</li>
                    <li>• Fuel efficiency challenges</li>
                    <li>• Safety awareness driving programs</li>
                    <li>• Photography and videography contests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 250% increase in brand engagement</li>
                    <li>• User-generated content and testimonials</li>
                    <li>• Enhanced community participation</li>
                    <li>• Viral marketing through competition</li>
                    <li>• Lead generation and database building</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of successful automotive businesses, showcasing operations, customer service excellence, and industry expertise for transparency and education.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Dealership operations and customer service</li>
                    <li>• Service department excellence and expertise</li>
                    <li>• Sales process transparency and integrity</li>
                    <li>• Inventory management and vehicle sourcing</li>
                    <li>• Staff training and professional development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and trust building</li>
                    <li>• Educational value for automotive industry</li>
                    <li>• Improved customer confidence and loyalty</li>
                    <li>• Staff pride and external recognition</li>
                    <li>• Knowledge sharing and industry leadership</li>
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
            Automotive Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Luxury Car Dealership</h3>
              <p className="text-gray-300 mb-4">A high-end dealership in Nairobi increased sales by 180% through our lifestyle integration video series and branded competitions.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low foot traffic and high-end positioning<br/>
                <strong>Solution:</strong> Mini-movies + Day-in-life videos<br/>
                <strong>Result:</strong> 180% sales increase, premium positioning
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Commercial Vehicle Brand</h3>
              <p className="text-gray-300 mb-4">A truck manufacturer improved business customer acquisition by 220% with our reality show showcasing real-world performance.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Business customer trust and capability proof<br/>
                <strong>Solution:</strong> Branded reality shows + Competitions<br/>
                <strong>Result:</strong> 220% B2B customer acquisition growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Motorcycle Dealership</h3>
              <p className="text-gray-300 mb-4">A motorcycle brand built a passionate community and increased sales by 150% through our competition series and adventure content.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Community building and brand loyalty<br/>
                <strong>Solution:</strong> Adventure series + Skill competitions<br/>
                <strong>Result:</strong> 150% sales growth, strong community
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Automotive Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">92%</div>
              <p className="text-gray-300">of automotive buyers watch video content before visiting dealerships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">5x</div>
              <p className="text-gray-300">higher engagement rates for video content vs. static automotive ads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">73%</div>
              <p className="text-gray-300">of customers prefer video demonstrations over brochures</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">80%</div>
              <p className="text-gray-300">of automotive videos are watched to completion on mobile devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Accelerate Your Automotive Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan automotive brands using cinematic videos to drive sales, build loyalty, and create lasting emotional connections with customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Automotive Strategy
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

export default Automotive 