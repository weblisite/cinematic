import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const FMCGFoodDailyEssentials = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🛒 FMCG - Food & Daily Essentials Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Build Brand Loyalty with Cinematic FMCG Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services strengthen FMCG brands: From cooking demonstrations to family care stories, we create content that builds brand loyalty for flour, cooking oil, detergents, and soap across Kenya's essential goods market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Build Brand Loyalty
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View FMCG Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            FMCG Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in crowded retail markets where numerous brands compete for shelf space and consumer attention.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Consumer Trust</h3>
              <p className="text-gray-300">Building confidence in product quality, safety, and value for everyday essentials that families rely on daily.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Usage Demonstration</h3>
              <p className="text-gray-300">Showing practical applications, cooking techniques, and proper usage of food and household products effectively.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Emotional Connection</h3>
              <p className="text-gray-300">Creating emotional bonds with families through storytelling that connects products to daily life and cherished moments.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Retail Visibility</h3>
              <p className="text-gray-300">Gaining prominent retail placement and shopper preference in competitive supermarket and local shop environments.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Price Sensitivity</h3>
              <p className="text-gray-300">Justifying value propositions and quality benefits to price-conscious consumers in competitive FMCG markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform FMCG Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From household product manufacturers to food brands, we create video content that builds consumer trust, demonstrates value, and drives retail sales across Kenya's FMCG sector.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for FMCG</h3>
              <p className="text-gray-300 mb-6">Compelling product showcases featuring cooking demonstrations, family moments, and household solutions that drive brand preference and purchase decisions.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Cooking oil and flour recipe demonstrations</li>
                    <li>• Soap and detergent effectiveness showcases</li>
                    <li>• Food product taste and quality highlights</li>
                    <li>• Household cleaning solutions in action</li>
                    <li>• Family care and health product benefits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 80% increase in brand recall and recognition</li>
                    <li>• Enhanced product quality perception</li>
                    <li>• Better retail placement and visibility</li>
                    <li>• Improved consumer trial and adoption</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real families integrating FMCG products into daily routines, cooking, cleaning, and household management, building authentic consumer connection.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family cooking and meal preparation routines</li>
                    <li>• Household cleaning and maintenance activities</li>
                    <li>• Daily use of personal care and hygiene products</li>
                    <li>• Shopping and product selection experiences</li>
                    <li>• Product usage across different family scenarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% improvement in product relatability</li>
                    <li>• Enhanced consumer confidence and trust</li>
                    <li>• Better understanding of product benefits</li>
                    <li>• Increased household penetration</li>
                    <li>• Authentic testimonial and social proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Brand heritage stories and quality commitment narratives that showcase manufacturing excellence, family traditions, and dedication to consumer welfare.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Brand founding and family business stories</li>
                    <li>• Quality control and manufacturing excellence</li>
                    <li>• Community impact and local sourcing narratives</li>
                    <li>• Product innovation and development journeys</li>
                    <li>• Sustainability and environmental responsibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in brand trust and loyalty</li>
                    <li>• Enhanced quality perception and value</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Improved consumer advocacy and recommendations</li>
                    <li>• Greater retail partner confidence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following families, cooking challenges, or household management scenarios, creating engaging content that educates while showcasing product benefits.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Family cooking competitions and challenges</li>
                    <li>• Household management and organization series</li>
                    <li>• Recipe development and cooking education</li>
                    <li>• Product testing and comparison studies</li>
                    <li>• Consumer lifestyle and usage documentaries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in consumer engagement</li>
                    <li>• Educational content for household management</li>
                    <li>• Ongoing content series for brand building</li>
                    <li>• Enhanced product credibility and demonstration</li>
                    <li>• Community building and consumer advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Cooking contests, recipe challenges, and household innovation competitions that engage consumers while showcasing product versatility and quality.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Recipe competitions and cooking challenges</li>
                    <li>• Household innovation and creative usage contests</li>
                    <li>• Consumer product testing and feedback</li>
                    <li>• Family cooking and bonding competitions</li>
                    <li>• Community recipe sharing and development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in brand engagement</li>
                    <li>• User-generated content and authentic testimonials</li>
                    <li>• Enhanced product trial and adoption</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Consumer community building and loyalty</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of FMCG businesses, manufacturing processes, and quality control, showcasing transparency and commitment to consumer welfare.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Manufacturing processes and quality control</li>
                    <li>• Supply chain and ingredient sourcing</li>
                    <li>• Product development and innovation labs</li>
                    <li>• Consumer feedback integration and improvement</li>
                    <li>• Sustainability and environmental initiatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and consumer trust</li>
                    <li>• Educational content for quality assurance</li>
                    <li>• Improved brand credibility and authenticity</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Consumer confidence in product safety</li>
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
            FMCG Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cooking Oil Brand</h3>
              <p className="text-gray-300 mb-4">A local cooking oil manufacturer increased market share by 280% through our family cooking series and recipe competition campaigns.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Market penetration and brand differentiation<br/>
                <strong>Solution:</strong> Cooking shows + Recipe competitions<br/>
                <strong>Result:</strong> 280% market share growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Soap & Detergent Company</h3>
              <p className="text-gray-300 mb-4">A household products manufacturer improved brand loyalty by 200% with our family care and cleaning effectiveness video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Consumer trust and product demonstration<br/>
                <strong>Solution:</strong> Day-in-life videos + Reality shows<br/>
                <strong>Result:</strong> 200% brand loyalty improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Food Products Company</h3>
              <p className="text-gray-300 mb-4">A regional food brand expanded distribution by 180% through our authentic family cooking and cultural recipe showcase videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Regional expansion and cultural relevance<br/>
                <strong>Solution:</strong> Cultural cooking series + Mini-movies<br/>
                <strong>Result:</strong> 180% distribution expansion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            FMCG Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">87%</div>
              <p className="text-gray-300">of FMCG shoppers watch recipe and usage videos before purchasing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">5x</div>
              <p className="text-gray-300">higher brand recall for FMCG products featured in cooking videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">79%</div>
              <p className="text-gray-300">of families prefer brands that show real usage scenarios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">92%</div>
              <p className="text-gray-300">of FMCG recipe videos are shared within family networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Build Your FMCG Brand Loyalty?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan FMCG brands using cinematic videos to build consumer trust, demonstrate value, and create lasting household brand loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Build Your FMCG Strategy
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

export default FMCGFoodDailyEssentials 