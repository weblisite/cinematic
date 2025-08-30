import React from 'react'
import { Link } from 'react-router-dom'

const BrandedRealityShows = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Branded Reality Shows
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create high-production reality shows with your business brand seamlessly integrated into compelling entertainment that captivates audiences while building brand awareness.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 1,500,000</p>
            <p className="text-gray-300">Professional reality TV production</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Branded Reality Shows?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Branded reality shows are entertainment-focused productions that naturally integrate your business, products, or services into compelling reality TV content. These shows create authentic connections with audiences while subtly promoting your brand through engaging storytelling.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Inspired by global success stories, we create reality shows that entertain first and promote second, ensuring authentic viewer engagement and building long-term brand affinity through quality entertainment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">500%</div>
                  <div className="text-gray-300">Brand Awareness Boost</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">89%</div>
                  <div className="text-gray-300">Viewer Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📺</span>
                  <div>
                    <strong className="text-white">Show Concept Development</strong>
                    <p className="text-gray-400 text-sm">Custom reality show format designed around your brand</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">👥</span>
                  <div>
                    <strong className="text-white">Cast Selection & Management</strong>
                    <p className="text-gray-400 text-sm">Professional casting and participant coordination</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Multi-Camera Production</strong>
                    <p className="text-gray-400 text-sm">TV-quality filming with multiple camera angles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">✂️</span>
                  <div>
                    <strong className="text-white">Reality TV Editing</strong>
                    <p className="text-gray-400 text-sm">Professional reality show editing and pacing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🚀</span>
                  <div>
                    <strong className="text-white">Distribution Strategy</strong>
                    <p className="text-gray-400 text-sm">Multi-platform release and promotion planning</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reality Show Formats */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Reality Show Formats
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Lifestyle Shows</h3>
              <p className="text-gray-300 mb-4">
                Follow successful entrepreneurs, business leaders, or industry experts as they navigate their professional and personal lives.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Executive lifestyle documentation</li>
                <li>• Business decision-making drama</li>
                <li>• Industry networking and relationships</li>
                <li>• Work-life balance challenges</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Workplace Reality</h3>
              <p className="text-gray-300 mb-4">
                Showcase the real dynamics of your workplace, highlighting team collaboration, challenges, and achievements.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Team dynamics and relationships</li>
                <li>• Project challenges and deadlines</li>
                <li>• Professional growth stories</li>
                <li>• Company culture immersion</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Customer Journey Shows</h3>
              <p className="text-gray-300 mb-4">
                Document real customers as they experience your products or services, creating authentic testimonials through entertainment.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Customer transformation journeys</li>
                <li>• Product experience documentation</li>
                <li>• Before and after narratives</li>
                <li>• Genuine reaction capture</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Industry Insider Access</h3>
              <p className="text-gray-300 mb-4">
                Provide exclusive behind-the-scenes access to your industry, showing processes and expertise that audiences rarely see.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Manufacturing and production processes</li>
                <li>• Industry secret revelations</li>
                <li>• Expert knowledge sharing</li>
                <li>• Innovation and development stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Reality TV Production Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Format Development</h3>
                <p className="text-gray-300 mb-4">
                  We create a unique reality show format that naturally incorporates your brand while delivering compelling entertainment value.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Show concept creation</li>
                  <li>• Brand integration strategy</li>
                  <li>• Format bible development</li>
                  <li>• Episode structure planning</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Casting & Pre-Production</h3>
                <p className="text-gray-300 mb-4">
                  Professional casting ensures we find the right personalities who will create engaging content while representing your brand positively.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Participant casting and vetting</li>
                  <li>• Location scouting and setup</li>
                  <li>• Legal agreements and releases</li>
                  <li>• Production schedule planning</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Reality TV Production</h3>
                <p className="text-gray-300 mb-4">
                  Multi-camera setups capture every moment of authentic drama, interaction, and brand integration throughout the filming period.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Multiple camera coverage</li>
                  <li>• Continuous audio recording</li>
                  <li>• Natural moment capture</li>
                  <li>• Brand integration filming</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Post-Production & Distribution</h3>
                <p className="text-gray-300 mb-4">
                  Expert reality TV editing creates compelling episodes with perfect pacing, natural brand integration, and maximum entertainment value.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Reality TV editing techniques</li>
                  <li>• Story arc development</li>
                  <li>• Music and sound design</li>
                  <li>• Multi-platform formatting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Why Branded Reality Shows Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">📺</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Entertainment First</h3>
              <p className="text-gray-300">
                Audiences engage with quality entertainment, creating positive associations with your brand through enjoyable viewing experiences.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Authentic Integration</h3>
              <p className="text-gray-300">
                Natural brand placement within reality content feels authentic rather than promotional, creating genuine brand affinity.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Series Longevity</h3>
              <p className="text-gray-300">
                Multiple episodes create ongoing brand exposure and allow for deeper storytelling and audience relationship building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Investment Packages
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Mini-Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 1,500,000</p>
              <p className="text-gray-400 mb-6">Short series format</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  3-5 episodes (20-30 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Format development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  5-8 days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Basic casting
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional editing
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Full Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 4,000,000</p>
              <p className="text-gray-400 mb-6">Complete season</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  8-10 episodes (30-45 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Complete format bible
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  15-20 days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional casting
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced post-production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Distribution strategy
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Two Season Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 7,500,000</p>
              <p className="text-gray-400 mb-6">Multi-season production</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20 episodes across 2 seasons
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Premium format development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  40+ days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Celebrity casting options
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Broadcast-quality production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multi-platform distribution
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Marketing campaign
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gold/20 to-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Create Your Branded Reality Show?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your brand into compelling entertainment that audiences will love to watch while naturally building brand awareness and affinity.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Start Your Reality Show Journey</h3>
            <p className="text-lg text-gray-300 mb-6">
              Contact us to discuss your brand and vision, and we'll develop a reality show format that entertains while promoting your business.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="bg-cinematic-gold text-cinematic-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors glow-gold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrandedRealityShows 