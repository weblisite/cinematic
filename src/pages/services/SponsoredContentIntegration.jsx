import React from 'react'
import { Link } from 'react-router-dom'

const SponsoredContentIntegration = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Sponsored Content Integration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get your brand seamlessly featured in our high-quality cinematic content across our main video channels with natural, non-intrusive integration that resonates with audiences.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">KSh 250,000 per episode</p>
            <p className="text-gray-300">Premium brand integration in existing content</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What is Sponsored Content Integration?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Sponsored Content Integration allows your brand to be naturally woven into our existing high-quality cinematic productions. Instead of creating standalone content, your products or services become part of authentic storytelling in our regular video content.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                This approach mirrors successful brand integrations seen in international content where brands feel organic to the story rather than forced advertisements, creating genuine audience connection and brand recall.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">85%</div>
                  <div className="text-gray-300">Better Brand Recall</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">70%</div>
                  <div className="text-gray-300">Lower Cost Per View</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">Integration Includes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Natural Product Placement</strong>
                    <p className="text-gray-400 text-sm">Seamless integration into storylines and scenes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🗣️</span>
                  <div>
                    <strong className="text-white">Organic Brand Mentions</strong>
                    <p className="text-gray-400 text-sm">Natural dialogue and context integration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎯</span>
                  <div>
                    <strong className="text-white">Targeted Content Themes</strong>
                    <p className="text-gray-400 text-sm">Content aligned with your brand values</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📊</span>
                  <div>
                    <strong className="text-white">Performance Analytics</strong>
                    <p className="text-gray-400 text-sm">Detailed engagement and reach metrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎨</span>
                  <div>
                    <strong className="text-white">Creative Collaboration</strong>
                    <p className="text-gray-400 text-sm">Work with our team to ensure perfect fit</p>
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
            Why Sponsored Content Integration Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Authentic Connection</h3>
              <p className="text-gray-300">
                Brands integrated naturally into content feel more trustworthy and create stronger emotional connections with audiences.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Cost-Effective</h3>
              <p className="text-gray-300">
                Lower production costs compared to standalone content while reaching engaged audiences already watching our content.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🎪</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">High-Quality Association</h3>
              <p className="text-gray-300">
                Your brand benefits from association with our premium cinematic content and professional production values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Integration Opportunities
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">Content Types Available</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Business Documentaries</h4>
                  <p className="text-gray-400">Feature your products in real business environment stories</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Lifestyle Content</h4>
                  <p className="text-gray-400">Natural integration in day-in-life and lifestyle videos</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Educational Series</h4>
                  <p className="text-gray-400">Your expertise showcased in informational content</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Entertainment Shows</h4>
                  <p className="text-gray-400">Product placement in reality and competition content</p>
                </div>
              </div>
            </div>

            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">Integration Methods</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Visual Integration</h4>
                  <p className="text-gray-400">Strategic product placement and brand visibility</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Narrative Integration</h4>
                  <p className="text-gray-400">Brands woven into storylines and character interactions</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Expert Commentary</h4>
                  <p className="text-gray-400">Your team featured as industry experts and consultants</p>
                </div>
                <div className="border-l-4 border-cinematic-gold pl-4">
                  <h4 className="text-lg font-bold text-white mb-2">Environment Branding</h4>
                  <p className="text-gray-400">Subtle branding in locations and settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Integration Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Brand Consultation</h3>
                <p className="text-gray-300 mb-4">
                  We analyze your brand, target audience, and marketing goals to identify the best integration opportunities.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Brand identity assessment</li>
                  <li>• Audience alignment analysis</li>
                  <li>• Content calendar review</li>
                  <li>• Integration strategy development</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Content Planning</h3>
                <p className="text-gray-300 mb-4">
                  Our creative team plans how to naturally incorporate your brand into upcoming content pieces.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Script adaptation</li>
                  <li>• Scene planning</li>
                  <li>• Product placement strategy</li>
                  <li>• Timeline coordination</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Production Integration</h3>
                <p className="text-gray-300 mb-4">
                  Your brand is seamlessly integrated during the production process with careful attention to authenticity.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Natural integration filming</li>
                  <li>• Multiple angle coverage</li>
                  <li>• Quality assurance</li>
                  <li>• Brand guidelines adherence</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Performance Tracking</h3>
                <p className="text-gray-300 mb-4">
                  We provide detailed analytics on how your brand integration performed across all platforms.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• View and engagement metrics</li>
                  <li>• Brand mention analysis</li>
                  <li>• Audience response tracking</li>
                  <li>• ROI assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Package */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Investment Package
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-6">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-2 rounded-full text-sm font-bold">FEATURED INTEGRATION</span>
              </div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-4 text-center">Channel Sponsorship</h3>
              <p className="text-4xl font-bold text-white mb-2 text-center">KSh 250,000</p>
              <p className="text-gray-400 mb-6 text-center">Per episode integration</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Natural brand integration in one episode
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Strategic product placement
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Organic brand mentions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Cross-platform distribution
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Performance analytics report
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Content approval process
                </li>
              </ul>
              <div className="bg-cinematic-black p-4 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-cinematic-gold mb-2">Volume Discounts Available:</h4>
                <div className="text-gray-300 space-y-1">
                  <p>• 5+ episodes: 10% discount</p>
                  <p>• 10+ episodes: 20% discount</p>
                  <p>• Season partnership: 30% discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Integration Success Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Tech Company Integration</h3>
              <p className="text-gray-300 mb-4">
                A Kenyan software company was featured in our business documentary series, with their team using their own project management software during real work scenarios. The natural integration led to 300% increase in demo requests.
              </p>
              <div className="text-cinematic-gold font-bold">Result: 300% increase in demo requests</div>
            </div>
            <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Restaurant Chain Feature</h3>
              <p className="text-gray-300 mb-4">
                A local restaurant chain was organically featured in our day-in-life series, showing busy professionals grabbing lunch there. The authentic portrayal resulted in 45% increase in weekday lunch traffic.
              </p>
              <div className="text-cinematic-gold font-bold">Result: 45% increase in lunch traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Integrate Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let us create authentic sponsored content integration that naturally showcases your brand in our high-quality cinematic productions, reaching engaged audiences with genuine storytelling.
          </p>
          
          <div className="flex justify-center mb-8">
            <Link 
              to="/contact"
              className="inline-block bg-cinematic-gold text-cinematic-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-cinematic-gold/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <p className="text-gray-400">
            Available content slots are limited. Contact us early to secure the best integration opportunities for your brand.
          </p>
        </div>
      </section>
    </div>
  )
}

export default SponsoredContentIntegration 