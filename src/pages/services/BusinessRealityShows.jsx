import React from 'react'
import { Link } from 'react-router-dom'

const BusinessRealityShows = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Business Reality Shows
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create premium reality shows inspired by global hits, showcasing your company culture, leadership, and operations through compelling cinematic storytelling that builds your brand.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 500,000</p>
            <p className="text-gray-300">Premium reality TV production</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Business Reality Shows?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Business reality shows are premium documentary-style series that follow your company's operations, leadership decisions, and team dynamics. Inspired by successful global reality shows, we create compelling content that showcases your business expertise while entertaining audiences.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                These shows adapt proven global reality TV techniques to create authentic business content that builds your company's reputation, attracts top talent, and establishes industry leadership through compelling storytelling.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">750%</div>
                  <div className="text-gray-300">Brand Recognition</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">95%</div>
                  <div className="text-gray-300">Talent Attraction</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📋</span>
                  <div>
                    <strong className="text-white">Show Format Development</strong>
                    <p className="text-gray-400 text-sm">Custom reality show structure around your business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎭</span>
                  <div>
                    <strong className="text-white">Executive Character Development</strong>
                    <p className="text-gray-400 text-sm">Positioning leadership as compelling personalities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Continuous Documentation</strong>
                    <p className="text-gray-400 text-sm">Ongoing filming of business operations and decisions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📺</span>
                  <div>
                    <strong className="text-white">Reality TV Editing</strong>
                    <p className="text-gray-400 text-sm">Professional reality show pacing and storytelling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🌟</span>
                  <div>
                    <strong className="text-white">Brand Positioning</strong>
                    <p className="text-gray-400 text-sm">Strategic positioning as industry leader</p>
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
            Business Reality Show Formats
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Executive Leadership Series</h3>
              <p className="text-gray-300 mb-4">
                Follow C-suite executives and business leaders as they navigate high-stakes decisions, manage teams, and drive company growth.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• CEO decision-making processes</li>
                <li>• Executive team dynamics</li>
                <li>• Strategic planning sessions</li>
                <li>• Crisis management and problem-solving</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Company Culture Showcase</h3>
              <p className="text-gray-300 mb-4">
                Document your unique workplace culture, team interactions, and company values in action through authentic daily operations.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Team collaboration and innovation</li>
                <li>• Company culture and values in action</li>
                <li>• Employee growth and development</li>
                <li>• Work-life balance initiatives</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Transformation Journey</h3>
              <p className="text-gray-300 mb-4">
                Chronicle major business transformations, digital upgrades, or expansion projects as they unfold in real-time.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Digital transformation projects</li>
                <li>• Business expansion processes</li>
                <li>• Product launch campaigns</li>
                <li>• Market entry strategies</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Industry Innovation Stories</h3>
              <p className="text-gray-300 mb-4">
                Showcase your company's role in driving industry innovation, developing new technologies, or disrupting traditional markets.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Research and development processes</li>
                <li>• Innovation team collaborations</li>
                <li>• Technology development journeys</li>
                <li>• Market disruption strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Success Inspiration */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Inspired by Global Reality Show Success
          </h2>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <p className="text-lg text-gray-300 mb-6 text-center">
              We study the cinematic storytelling techniques of successful global reality shows to adapt their engaging formats for business content.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">🏢</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Business Operations</h3>
                <p className="text-gray-400 text-sm">How global shows make business operations compelling and entertaining</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">👔</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Executive Personalities</h3>
                <p className="text-gray-400 text-sm">Showcasing leadership and decision-making as engaging character development</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">📈</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Business Drama</h3>
                <p className="text-gray-400 text-sm">Creating suspense and engagement around real business challenges and growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Reality Show Production Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Business Analysis & Format Design</h3>
                <p className="text-gray-300 mb-4">
                  We analyze your business operations and culture to design a reality show format that naturally showcases your strengths and expertise.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Business operations assessment</li>
                  <li>• Key personality identification</li>
                  <li>• Show format customization</li>
                  <li>• Story arc development</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Character Development & Preparation</h3>
                <p className="text-gray-300 mb-4">
                  We work with your leadership team to prepare them for filming while maintaining authenticity and natural business operations.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Executive coaching for cameras</li>
                  <li>• Team preparation and consent</li>
                  <li>• Natural behavior encouragement</li>
                  <li>• Legal framework establishment</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Continuous Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Our embedded crew captures authentic business moments over extended periods, building compelling narrative arcs from real events.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Embedded filming approach</li>
                  <li>• Multiple location coverage</li>
                  <li>• Unobtrusive documentation</li>
                  <li>• Key moment identification</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Reality TV Post-Production</h3>
                <p className="text-gray-300 mb-4">
                  Professional reality TV editing creates engaging episodes with perfect pacing, character development, and business insight integration.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Reality show editing techniques</li>
                  <li>• Character arc development</li>
                  <li>• Business insight highlighting</li>
                  <li>• Episode series creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Why Business Reality Shows Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-gray p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Industry Authority</h3>
              <p className="text-gray-300">
                Position your company as a thought leader and industry authority through documented expertise and innovation.
              </p>
            </div>
            <div className="text-center bg-cinematic-gray p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Talent Attraction</h3>
              <p className="text-gray-300">
                Showcase company culture and leadership to attract top talent who want to work for a forward-thinking organization.
              </p>
            </div>
            <div className="text-center bg-cinematic-gray p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Client Confidence</h3>
              <p className="text-gray-300">
                Build client confidence by demonstrating your team's expertise, processes, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Investment Packages
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Mini Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 500,000</p>
              <p className="text-gray-400 mb-6">5-episode series</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  5 episodes (30-45 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Format development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  8 days embedded filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Executive focus
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional editing
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Full Season Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 1,200,000</p>
              <p className="text-gray-400 mb-6">10-episode series</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  10 episodes (30-45 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced format development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20 days embedded filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multiple department coverage
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Reality TV editing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Distribution strategy
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Two Season Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 2,500,000</p>
              <p className="text-gray-400 mb-6">20 episodes (2 seasons)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20 episodes (10 per season)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Premium format development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  40+ days embedded filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Full company coverage
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
                  PR and marketing support
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
            Ready to Showcase Your Business Reality?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create a premium reality series that positions your company as an industry leader while building your brand through compelling business storytelling and authentic documentation.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Launch Your Business Reality Show</h3>
            <p className="text-lg text-gray-300 mb-6">
              Contact us to discuss your business and vision, and we'll create a reality show format that showcases your company's unique story and expertise.
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

export default BusinessRealityShows 