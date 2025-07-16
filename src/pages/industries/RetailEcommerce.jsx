import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, ShoppingBag, TrendingUp, Users, Star } from 'lucide-react'

const RetailEcommerce = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🛍️ Retail & E-commerce Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Convert Browsers to Buyers with Cinematic Retail Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From product launches to customer experiences, we create compelling retail content that drives sales and builds lasting brand connections in Kenya's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Retail Video Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Retail Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Retail & E-commerce Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ShoppingBag className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Product Storytelling</h3>
              <p className="text-gray-300">Creating compelling product narratives that go beyond features to showcase lifestyle benefits and emotional appeal.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Conversion Optimization</h3>
              <p className="text-gray-300">Turning website visitors and store browsers into paying customers through persuasive visual content.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in crowded marketplaces with unique brand stories and memorable customer experiences.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Star className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Customer Trust Building</h3>
              <p className="text-gray-300">Establishing credibility and reliability for online purchases and new product launches.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Omnichannel Experience</h3>
              <p className="text-gray-300">Creating consistent brand experiences across online and physical retail touchpoints.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Seasonal Marketing</h3>
              <p className="text-gray-300">Maximizing sales during peak seasons and creating urgency for promotional campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Boost Retail Businesses
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From local boutiques to major retail chains, we create video content that drives sales, builds brand loyalty, and enhances customer experiences across Kenya's retail landscape.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Retail</h3>
              <p className="text-gray-300 mb-6">Product showcases that highlight features, benefits, and lifestyle appeal, turning viewers into customers through compelling visual storytelling.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• New product launches and collections</li>
                    <li>• Seasonal campaigns and promotional events</li>
                    <li>• Fashion shows and styling demonstrations</li>
                    <li>• Home decor and lifestyle product showcases</li>
                    <li>• Electronic and tech product demonstrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in product page conversion rates</li>
                    <li>• Enhanced product understanding and appeal</li>
                    <li>• Reduced return rates through better expectations</li>
                    <li>• Higher average order values</li>
                    <li>• Increased social media sharing and virality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Follow store managers, buyers, and customer service teams in action, showcasing the human side of retail excellence and customer care.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Store manager expertise and leadership</li>
                    <li>• Personal shopper and styling services</li>
                    <li>• Customer service excellence showcases</li>
                    <li>• Buying team product curation process</li>
                    <li>• Behind-the-scenes store operations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 60% improvement in customer service ratings</li>
                    <li>• Enhanced staff pride and motivation</li>
                    <li>• Better employee recruitment and retention</li>
                    <li>• Increased customer loyalty and trust</li>
                    <li>• Stronger personal connections with shoppers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Brand founding stories and product development journeys that create emotional connections and build brand loyalty through authentic storytelling.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Brand founding and heritage stories</li>
                    <li>• Product development and design journeys</li>
                    <li>• Artisan and maker success stories</li>
                    <li>• Sustainable and ethical sourcing narratives</li>
                    <li>• Customer transformation and success stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in brand loyalty scores</li>
                    <li>• Enhanced emotional brand connection</li>
                    <li>• Premium pricing justification</li>
                    <li>• Stronger customer advocacy and referrals</li>
                    <li>• Improved brand perception and trust</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Follow retail teams through seasonal campaigns and store operations, showcasing the energy and expertise behind successful retail experiences.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Seasonal campaign preparation and execution</li>
                    <li>• Store opening and renovation processes</li>
                    <li>• Fashion week and major event coverage</li>
                    <li>• Inventory management and buying decisions</li>
                    <li>• Customer service training and excellence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in social media engagement</li>
                    <li>• Educational content for industry professionals</li>
                    <li>• Enhanced brand transparency and authenticity</li>
                    <li>• Customer insights and market intelligence</li>
                    <li>• Ongoing content series for marketing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Customer styling challenges and product design contests that engage your audience while showcasing your products in creative ways.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Customer styling and outfit competitions</li>
                    <li>• Product design and customization contests</li>
                    <li>• Home makeover and decoration challenges</li>
                    <li>• Shopping and treasure hunt competitions</li>
                    <li>• Brand ambassador and influencer challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in customer engagement</li>
                    <li>• User-generated content for marketing</li>
                    <li>• Product demonstration through competition</li>
                    <li>• Viral marketing through sharing</li>
                    <li>• Customer data collection and insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Retail chain management, inventory decisions, and customer experience optimization showcasing the strategy behind successful retail operations.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Retail chain expansion and management</li>
                    <li>• Inventory planning and buying strategies</li>
                    <li>• Customer experience design and optimization</li>
                    <li>• Technology adoption and digital transformation</li>
                    <li>• Franchise development and support systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced operational transparency</li>
                    <li>• Better stakeholder and investor confidence</li>
                    <li>• Retail industry thought leadership</li>
                    <li>• Franchise partner attraction and education</li>
                    <li>• Competitive advantage demonstration</li>
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
            Retail & E-commerce Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Fashion Boutique</h3>
              <p className="text-gray-300 mb-4">A Nairobi fashion store increased online sales by 320% with our product showcase and styling video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low online engagement and sales<br/>
                <strong>Solution:</strong> Product videos + Styling guides<br/>
                <strong>Result:</strong> 320% online sales increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Electronics Store</h3>
              <p className="text-gray-300 mb-4">A tech retailer reduced return rates by 50% through our detailed product demonstration videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> High return rates and complaints<br/>
                <strong>Solution:</strong> Product demos + Feature explanations<br/>
                <strong>Result:</strong> 50% return rate reduction
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Home Decor Chain</h3>
              <p className="text-gray-300 mb-4">A furniture retailer doubled their average order value with our room transformation and styling videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low average order values<br/>
                <strong>Solution:</strong> Room makeovers + Styling inspiration<br/>
                <strong>Result:</strong> 100% AOV increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Retail Video Marketing Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">73%</div>
              <p className="text-gray-300">of consumers are more likely to purchase after watching a product video</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">4x</div>
              <p className="text-gray-300">higher conversion rates for products with video content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">97%</div>
              <p className="text-gray-300">of businesses say video marketing increased user understanding</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">84%</div>
              <p className="text-gray-300">of consumers have been convinced to buy after watching a brand video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join successful Kenyan retailers using cinematic videos to drive sales, build brand loyalty, and create unforgettable shopping experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Retail Video Strategy
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
              <span>Product-focused approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Conversion optimization expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Multi-platform content delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RetailEcommerce 