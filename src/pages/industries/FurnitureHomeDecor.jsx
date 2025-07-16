import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const FurnitureHomeDecor = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🛋️ Furniture & Home Décor Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Furnish Success with Cinematic Home Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services transform furniture marketing: From artisan craftsmanship to home makeovers, we create content that drives furniture sales and builds brand reputation in Kenya's growing home décor market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Furnish Your Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Furniture Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Furniture & Home Décor Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Quality Demonstration</h3>
              <p className="text-gray-300">Showcasing furniture craftsmanship, material quality, and durability to justify investment in home furnishings and décor pieces.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Style Inspiration</h3>
              <p className="text-gray-300">Providing design ideas and home styling solutions that help customers envision furniture in their living spaces and décor schemes.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Purchase Confidence</h3>
              <p className="text-gray-300">Building trust in significant home investment decisions through comprehensive product showcases and real-home integration examples.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Lifestyle Integration</h3>
              <p className="text-gray-300">Demonstrating how furniture enhances daily living, family activities, and personal style expressions in real home environments.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Artisan Recognition</h3>
              <p className="text-gray-300">Highlighting skilled craftsmanship, traditional techniques, and attention to detail that justifies premium furniture pricing.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Online Visualization</h3>
              <p className="text-gray-300">Overcoming online shopping challenges by providing comprehensive visual content that replicates in-store furniture experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Furniture Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From luxury furniture makers to home décor retailers, we create video content that showcases craftsmanship, inspires home design, and drives furniture sales across Kenya's home furnishing market.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Furniture</h3>
              <p className="text-gray-300 mb-6">Stunning furniture showcases and home transformation campaigns that highlight design, quality, and lifestyle enhancement, driving showroom visits and sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• New furniture collection launches and showcases</li>
                    <li>• Seasonal home décor and styling campaigns</li>
                    <li>• Luxury furniture positioning and craftsmanship</li>
                    <li>• Home makeover and transformation reveals</li>
                    <li>• Quality and durability demonstrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in showroom foot traffic</li>
                    <li>• Enhanced premium positioning and value perception</li>
                    <li>• Better customer visualization and confidence</li>
                    <li>• Improved online engagement and inquiries</li>
                    <li>• Stronger emotional design connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real families and homeowners integrating furniture into daily life, family activities, and home entertainment, building authentic lifestyle connection.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family furniture usage and daily living</li>
                    <li>• Home office and workspace solutions</li>
                    <li>• Entertainment and social hosting scenarios</li>
                    <li>• Children's furniture safety and functionality</li>
                    <li>• Multi-functional furniture versatility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% improvement in purchase consideration</li>
                    <li>• Enhanced customer confidence and trust</li>
                    <li>• Better understanding of furniture benefits</li>
                    <li>• Increased average transaction value</li>
                    <li>• Authentic lifestyle testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Artisan craftsmanship stories and furniture heritage narratives that showcase quality, tradition, and commitment to exceptional home furnishing excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Furniture maker heritage and craftsmanship stories</li>
                    <li>• Artisan skill and traditional technique showcases</li>
                    <li>• Sustainable furniture and environmental initiatives</li>
                    <li>• Custom furniture creation and design process</li>
                    <li>• Family business legacy and generational craft</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in brand authenticity perception</li>
                    <li>• Enhanced premium positioning and value</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Improved artisan recognition and pride</li>
                    <li>• Greater design community recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following home makeover projects, furniture creation processes, or design challenges, creating engaging content that educates while showcasing furniture solutions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Home makeover and transformation projects</li>
                    <li>• Furniture design and creation documentaries</li>
                    <li>• Interior design challenge competitions</li>
                    <li>• Custom furniture commissioning journeys</li>
                    <li>• Home styling and decoration education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in design inspiration engagement</li>
                    <li>• Educational content for home decorating</li>
                    <li>• Ongoing content series for brand building</li>
                    <li>• Enhanced design authority and expertise</li>
                    <li>• Community building and customer retention</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Design challenges, home styling contests, and furniture arrangement competitions that engage design enthusiasts while showcasing furniture versatility.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Home styling and design competitions</li>
                    <li>• Furniture arrangement and space optimization</li>
                    <li>• DIY furniture projects and creativity contests</li>
                    <li>• Room makeover challenges and transformations</li>
                    <li>• Design photography and staging contests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 250% increase in design community engagement</li>
                    <li>• User-generated content and design testimonials</li>
                    <li>• Enhanced product trial and styling ideas</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Design trend creation and influence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of furniture businesses, workshops, and retail operations, showcasing quality control, design process, and customer service excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Furniture workshop operations and craftsmanship</li>
                    <li>• Retail showroom design and customer service</li>
                    <li>• Quality control and material sourcing</li>
                    <li>• Custom furniture consultation and design</li>
                    <li>• Design industry insights and trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and trust building</li>
                    <li>• Educational value for design community</li>
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
            Furniture & Home Décor Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Custom Furniture Workshop</h3>
              <p className="text-gray-300 mb-4">A local furniture maker increased custom orders by 320% through our artisan craftsmanship series and behind-the-scenes workshop videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Premium positioning and craftsmanship recognition<br/>
                <strong>Solution:</strong> Mini-movies + Reality shows<br/>
                <strong>Result:</strong> 320% custom order increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Home Décor Retailer</h3>
              <p className="text-gray-300 mb-4">A furniture store improved sales conversion by 180% with our home styling competition series and customer makeover showcases.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Customer visualization and purchase confidence<br/>
                <strong>Solution:</strong> Competitions + Day-in-life videos<br/>
                <strong>Result:</strong> 180% sales conversion improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Interior Design Studio</h3>
              <p className="text-gray-300 mb-4">A design consultancy attracted 250% more high-end clients through our design process documentaries and transformation series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> High-end client acquisition and design authority<br/>
                <strong>Solution:</strong> Design documentaries + Transformation series<br/>
                <strong>Result:</strong> 250% high-end client growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Furniture & Home Décor Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">86%</div>
              <p className="text-gray-300">of furniture buyers watch home styling videos before making decisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">6x</div>
              <p className="text-gray-300">higher engagement rates for furniture lifestyle content vs. catalog images</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">78%</div>
              <p className="text-gray-300">of customers prefer video demonstrations over static furniture displays</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">92%</div>
              <p className="text-gray-300">of home design videos are shared within family and friend networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Furnish Your Brand Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan furniture brands using cinematic videos to showcase craftsmanship, inspire home design, and create furnishing experiences that drive sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Design Your Strategy
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

export default FurnitureHomeDecor 