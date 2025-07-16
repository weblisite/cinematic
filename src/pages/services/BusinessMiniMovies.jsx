import React from 'react'
import { Link } from 'react-router-dom'

const BusinessMiniMovies = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Business Mini-Movies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tell your brand's story with compelling cinematic mini-documentaries that showcase your journey, values, and vision in an engaging narrative format.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 200,000</p>
            <p className="text-gray-300">Cinematic brand storytelling</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Business Mini-Movies?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Business mini-movies are short-form cinematic documentaries that tell your company's story in a compelling, emotionally engaging way. These films go beyond traditional corporate videos to create authentic narratives about your brand's journey, mission, and impact.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                By combining documentary filmmaking techniques with strategic brand messaging, we create content that builds emotional connections with your audience while establishing your company as a leader in your industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">400%</div>
                  <div className="text-gray-300">Emotional Engagement</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">65%</div>
                  <div className="text-gray-300">Brand Trust Increase</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📖</span>
                  <div>
                    <strong className="text-white">Story Development</strong>
                    <p className="text-gray-400 text-sm">Comprehensive brand story research and narrative creation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎭</span>
                  <div>
                    <strong className="text-white">Character Development</strong>
                    <p className="text-gray-400 text-sm">Featuring key personalities and company leaders</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Cinematic Production</strong>
                    <p className="text-gray-400 text-sm">Multi-day filming with professional equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎵</span>
                  <div>
                    <strong className="text-white">Original Score</strong>
                    <p className="text-gray-400 text-sm">Custom music composition for emotional impact</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🏆</span>
                  <div>
                    <strong className="text-white">Festival-Quality Production</strong>
                    <p className="text-gray-400 text-sm">Professional editing and post-production</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Movie Types */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Types of Business Mini-Movies
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Origin Stories</h3>
              <p className="text-gray-300 mb-4">
                Chronicle your company's founding, the challenges overcome, and the vision that drives your success.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Founder journey and motivation</li>
                <li>• Early challenges and breakthroughs</li>
                <li>• Company growth and evolution</li>
                <li>• Core values and mission development</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Impact Stories</h3>
              <p className="text-gray-300 mb-4">
                Showcase the real-world impact your business has on customers, communities, and industries.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Customer transformation stories</li>
                <li>• Community involvement and impact</li>
                <li>• Industry innovation and leadership</li>
                <li>• Social responsibility initiatives</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Innovation Journeys</h3>
              <p className="text-gray-300 mb-4">
                Document the development of groundbreaking products, services, or processes that set you apart.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Product development processes</li>
                <li>• Research and innovation stories</li>
                <li>• Technology advancement narratives</li>
                <li>• Industry disruption chronicles</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Transformation Tales</h3>
              <p className="text-gray-300 mb-4">
                Tell stories of business evolution, pivots, and transformations that demonstrate resilience and adaptability.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Business model evolution</li>
                <li>• Digital transformation journeys</li>
                <li>• Crisis response and adaptation</li>
                <li>• Market expansion stories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Filmmaking Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Story Discovery</h3>
                <p className="text-gray-300 mb-4">
                  We dive deep into your company's history, values, and unique narrative to identify the most compelling story to tell.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Comprehensive company research</li>
                  <li>• Stakeholder interviews</li>
                  <li>• Archive material review</li>
                  <li>• Story theme identification</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Script & Treatment</h3>
                <p className="text-gray-300 mb-4">
                  Professional screenwriters craft a compelling narrative structure that balances authenticity with emotional engagement.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Documentary treatment development</li>
                  <li>• Interview guide creation</li>
                  <li>• Visual storytelling plan</li>
                  <li>• Narrative arc refinement</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Cinematic Production</h3>
                <p className="text-gray-300 mb-4">
                  Multi-day filming with cinema-grade equipment captures the authentic moments and interviews that bring your story to life.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Multiple location filming</li>
                  <li>• Executive and employee interviews</li>
                  <li>• B-roll and atmospheric footage</li>
                  <li>• Archive integration planning</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Post-Production Excellence</h3>
                <p className="text-gray-300 mb-4">
                  Expert editing, original music composition, and color grading create a polished mini-documentary that rivals festival films.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Professional documentary editing</li>
                  <li>• Original music composition</li>
                  <li>• Color grading and finishing</li>
                  <li>• Sound design and mixing</li>
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
            Why Business Mini-Movies Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Emotional Connection</h3>
              <p className="text-gray-300">
                Stories create deeper emotional bonds with your audience than traditional marketing, building lasting brand loyalty.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Credibility & Authority</h3>
              <p className="text-gray-300">
                Professional documentary-style content positions your brand as an industry leader and thought authority.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Multi-Platform Impact</h3>
              <p className="text-gray-300">
                Versatile content works across all platforms - from your website and social media to investor presentations.
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
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Essential Story</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 200,000</p>
              <p className="text-gray-400 mb-6">Perfect for startups and SMEs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20-minute mini-movie
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Story development & scripting
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  2 days production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional interviews
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Basic post-production
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Professional Story</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 400,000</p>
              <p className="text-gray-400 mb-6">Ideal for established companies</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  50-minute mini-movie
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Comprehensive story development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  4 days production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multiple locations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced post-production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Original music score
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Premium Epic</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 700,000</p>
              <p className="text-gray-400 mb-6">For enterprise brands</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  90-minute documentary
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Epic story development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  7 days production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  International locations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Festival-quality production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Orchestra music score
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multiple format versions
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
            Ready to Tell Your Business Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your brand narrative into a compelling mini-movie that connects with your audience on an emotional level and establishes your company as an industry leader.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Begin Your Story Journey</h3>
            <p className="text-lg text-gray-300 mb-6">
              Contact us to discuss your company's unique story and we'll create a cinematic narrative that captures your brand's essence.
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

export default BusinessMiniMovies 