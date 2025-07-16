import React from 'react'
import { Link } from 'react-router-dom'

const CinematicVideoAds = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Cinematic Video Ads
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Drive sales with captivating cinematic advertisements that transform viewers into loyal customers through professional storytelling and visual excellence.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 100,000</p>
            <p className="text-gray-300">Professional cinema-grade video advertising</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Cinematic Video Ads?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Cinematic video ads are premium advertising content that combines Hollywood-level production values with strategic marketing objectives. Unlike traditional commercials, these ads tell compelling stories that emotionally connect with your audience while showcasing your products or services.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our cinematic approach ensures your brand stands out in today's crowded digital landscape, driving 300% higher engagement rates compared to standard video advertising.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">300%</div>
                  <div className="text-gray-300">Higher Engagement</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">85%</div>
                  <div className="text-gray-300">Brand Recall Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Cinema-Grade Production</strong>
                    <p className="text-gray-400 text-sm">Professional cameras, lighting, and equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📝</span>
                  <div>
                    <strong className="text-white">Creative Strategy & Scripting</strong>
                    <p className="text-gray-400 text-sm">Custom narrative tailored to your brand</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎭</span>
                  <div>
                    <strong className="text-white">Professional Talent</strong>
                    <p className="text-gray-400 text-sm">Skilled actors and voice-over artists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">✨</span>
                  <div>
                    <strong className="text-white">Post-Production Magic</strong>
                    <p className="text-gray-400 text-sm">Color grading, sound design, and visual effects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📱</span>
                  <div>
                    <strong className="text-white">Multiple Formats</strong>
                    <p className="text-gray-400 text-sm">Optimized for TV, social media, and web</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Why Choose Cinematic Video Ads?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Drive Conversions</h3>
              <p className="text-gray-300">
                Emotional storytelling combined with strategic calls-to-action convert viewers into customers more effectively than traditional advertising.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Premium Brand Image</h3>
              <p className="text-gray-300">
                Cinematic quality elevates your brand perception, positioning you as a premium, trustworthy choice in your industry.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Measurable ROI</h3>
              <p className="text-gray-300">
                Track performance across platforms with detailed analytics and see real business impact from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Production Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Strategy & Concept Development</h3>
                <p className="text-gray-300 mb-4">
                  We start by understanding your brand, target audience, and marketing objectives. Our creative team develops concepts that align with your business goals while ensuring maximum emotional impact.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Brand analysis and competitor research</li>
                  <li>• Target audience profiling</li>
                  <li>• Creative concept development</li>
                  <li>• Storyboard creation</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Pre-Production Planning</h3>
                <p className="text-gray-300 mb-4">
                  Detailed planning ensures flawless execution. We handle location scouting, talent casting, equipment preparation, and shot list creation to maximize efficiency during filming.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Location scouting and permits</li>
                  <li>• Professional talent casting</li>
                  <li>• Equipment and crew coordination</li>
                  <li>• Detailed shot list preparation</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Cinematic Production</h3>
                <p className="text-gray-300 mb-4">
                  Our experienced crew uses professional cinema cameras, lighting, and audio equipment to capture stunning visuals that rival major brand campaigns.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• RED Digital Cinema cameras</li>
                  <li>• Professional lighting setup</li>
                  <li>• Multi-track audio recording</li>
                  <li>• Multiple angle coverage</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Post-Production Excellence</h3>
                <p className="text-gray-300 mb-4">
                  Our post-production team transforms raw footage into polished cinematic masterpieces using industry-leading software and techniques.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Professional editing and pacing</li>
                  <li>• Color grading for cinematic look</li>
                  <li>• Sound design and music composition</li>
                  <li>• Motion graphics and visual effects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Perfect For Every Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">💻</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Technology</h3>
              <p className="text-gray-400 text-sm">SaaS demos and tech product launches</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Healthcare</h3>
              <p className="text-gray-400 text-sm">Medical services and patient care</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🛍️</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Retail</h3>
              <p className="text-gray-400 text-sm">Product showcases and brand stories</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🏦</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Financial</h3>
              <p className="text-gray-400 text-sm">Investment products and banking</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🏨</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Hospitality</h3>
              <p className="text-gray-400 text-sm">Destination marketing and hotels</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🚗</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Automotive</h3>
              <p className="text-gray-400 text-sm">Vehicle features and lifestyle</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">✨</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Beauty</h3>
              <p className="text-gray-400 text-sm">Cosmetics and beauty products</p>
            </div>
            <div className="bg-cinematic-black p-6 rounded-lg glow-gold text-center">
              <div className="text-cinematic-gold text-3xl mb-3">🏠</div>
              <h3 className="font-bold text-cinematic-gold mb-2">Real Estate</h3>
              <p className="text-gray-400 text-sm">Property tours and lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Investment Packages
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Essential</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 100,000</p>
              <p className="text-gray-400 mb-6">Perfect for small businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  30-second cinematic ad
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional script & storyboard
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  1 day production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Basic post-production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  2 format versions
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Professional</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 150,000</p>
              <p className="text-gray-400 mb-6">Ideal for growing companies</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  60-second cinematic ad
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced script & storyboard
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  2 days production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional talent
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced post-production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  4 format versions
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Premium</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 250,000</p>
              <p className="text-gray-400 mb-6">For enterprise brands</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  90-second cinematic ad
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Premium script & concepts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  3 days production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Celebrity talent option
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Hollywood-level post
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  6 format versions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Campaign strategy
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
            Ready to Create Cinematic Video Ads That Convert?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your marketing with cinematic video ads that captivate audiences and drive real business results. Our team is ready to bring your brand story to life.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Get Started Today</h3>
            <p className="text-lg text-gray-300 mb-6">
              Email us with your project details and we'll provide a custom quote within 24 hours.
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

export default CinematicVideoAds 