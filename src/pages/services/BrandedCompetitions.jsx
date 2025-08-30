import React from 'react'
import { Link } from 'react-router-dom'

const BrandedCompetitions = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Branded Competitions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create compelling competition series inspired by global shows, where your products become essential to the challenge while delivering entertainment that captivates audiences.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 1,200,000</p>
            <p className="text-gray-300">Competition series production</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Branded Competitions?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Branded competitions are entertainment-focused challenge series that naturally integrate your products or services as essential elements of the competition. Inspired by successful global shows, we create compelling competitions where your brand becomes integral to the storytelling.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                These competitions adapt proven global formats to showcase your products in action while delivering authentic entertainment value that audiences love to watch and share.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">600%</div>
                  <div className="text-gray-300">Product Awareness</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">94%</div>
                  <div className="text-gray-300">Audience Engagement</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🏆</span>
                  <div>
                    <strong className="text-white">Competition Format Design</strong>
                    <p className="text-gray-400 text-sm">Custom competition structure around your products</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">👨‍🍳</span>
                  <div>
                    <strong className="text-white">Contestant Casting & Management</strong>
                    <p className="text-gray-400 text-sm">Professional participant selection and coordination</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Competition Day Production</strong>
                    <p className="text-gray-400 text-sm">Multi-camera filming of challenges and judging</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎭</span>
                  <div>
                    <strong className="text-white">Expert Judges & Hosts</strong>
                    <p className="text-gray-400 text-sm">Industry experts and professional presentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🏅</span>
                  <div>
                    <strong className="text-white">Prize Integration</strong>
                    <p className="text-gray-400 text-sm">Your products as essential prizes and tools</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Formats */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Competition Formats
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Skill-Based Challenges</h3>
              <p className="text-gray-300 mb-4">
                Create competitions where contestants use your products to demonstrate skills, with your brand as the essential tool for success.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cooking competitions with your ingredients/appliances</li>
                <li>• Design challenges using your materials</li>
                <li>• Technical competitions with your equipment</li>
                <li>• Creative challenges featuring your products</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Challenge Competitions</h3>
              <p className="text-gray-300 mb-4">
                Develop business-focused competitions where entrepreneurs compete using your services or products to achieve goals.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Startup pitch competitions</li>
                <li>• Sales challenge contests</li>
                <li>• Innovation development races</li>
                <li>• Market penetration challenges</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Transformation Competitions</h3>
              <p className="text-gray-300 mb-4">
                Create before-and-after style competitions where contestants transform something using your products or services.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Home makeover competitions</li>
                <li>• Fitness transformation challenges</li>
                <li>• Business improvement contests</li>
                <li>• Skill development competitions</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Team Challenge Series</h3>
              <p className="text-gray-300 mb-4">
                Design team-based competitions where groups collaborate using your products to overcome challenges and win prizes.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Team building challenge series</li>
                <li>• Collaborative project competitions</li>
                <li>• Multi-stage team contests</li>
                <li>• Professional development races</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Competition Production Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Format & Rules Development</h3>
                <p className="text-gray-300 mb-4">
                  We design competition formats that naturally integrate your products while creating compelling challenges that test real skills.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Competition structure design</li>
                  <li>• Challenge rule development</li>
                  <li>• Brand integration strategy</li>
                  <li>• Judging criteria creation</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Casting & Preparation</h3>
                <p className="text-gray-300 mb-4">
                  Professional casting ensures we find contestants who will create engaging competition dynamics while showcasing your products effectively.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Contestant casting and vetting</li>
                  <li>• Skills assessment and training</li>
                  <li>• Legal agreements and waivers</li>
                  <li>• Competition venue setup</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Competition Day Filming</h3>
                <p className="text-gray-300 mb-4">
                  Multi-camera production captures every moment of the competition, from intense challenges to emotional reactions and product usage.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Multiple camera angle coverage</li>
                  <li>• Real-time challenge documentation</li>
                  <li>• Contestant interview segments</li>
                  <li>• Judge deliberation filming</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Competition Series Editing</h3>
                <p className="text-gray-300 mb-4">
                  Expert editing creates suspenseful competition episodes with perfect pacing, natural product showcasing, and engaging storytelling.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Competition-style editing</li>
                  <li>• Suspense and drama building</li>
                  <li>• Product integration enhancement</li>
                  <li>• Multi-platform formatting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Success Inspiration */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Inspired by Global Success Stories
          </h2>
          <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
            <p className="text-lg text-gray-300 mb-6 text-center">
              We study successful global competition formats to understand how they naturally integrate brands into compelling entertainment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">🍳</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Culinary Competitions</h3>
                <p className="text-gray-400 text-sm">How cooking shows make specific appliances and ingredients essential to success</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">🏗️</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Design Challenges</h3>
                <p className="text-gray-400 text-sm">Building and design shows that feature specific tools and materials prominently</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">💼</div>
                <h3 className="font-bold text-cinematic-gold mb-2">Business Competitions</h3>
                <p className="text-gray-400 text-sm">Entrepreneurship shows that naturally showcase business tools and services</p>
              </div>
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
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Multi-Brand Competition</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 1,200,000</p>
              <p className="text-gray-400 mb-6">Shared brand integration</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Full season with multiple brands
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Shared brand exposure
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  8-10 episodes (30-45 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  15-20 contestants
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Cost-effective brand integration
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Solo Brand Competition</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 3,600,000</p>
              <p className="text-gray-400 mb-6">Exclusive brand integration</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Solo brand in full season
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  100% brand ownership
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  10-12 episodes (45 min each)
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20+ contestants
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Exclusive brand storytelling
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Premium brand integration
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Exclusive Two Season Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 6,000,000</p>
              <p className="text-gray-400 mb-6">Sole unique brand showcase</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Solo brand in 2 season series
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Sole unique brand showcase
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  20 episodes across 2 seasons
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  40+ contestants total
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Complete brand immersion
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Maximum brand impact
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
            Ready to Create Your Branded Competition?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your products into the stars of compelling competition content that entertains audiences while naturally showcasing your brand's value and quality.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Launch Your Competition Series</h3>
            <p className="text-lg text-gray-300 mb-6">
              Contact us to discuss your products and vision, and we'll design a competition format that makes your brand essential to the challenge.
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

export default BrandedCompetitions 