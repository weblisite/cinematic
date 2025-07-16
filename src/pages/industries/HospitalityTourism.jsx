import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const HospitalityTourism = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏨 Hospitality & Tourism Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Inspire Wanderlust with Cinematic Tourism Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services elevate hospitality marketing: From luxury hotel showcases to authentic travel experiences, we inspire wanderlust and drive reservations across Kenya's vibrant tourism and hospitality sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Inspire Travelers
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Tourism Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Hospitality & Tourism Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Experience Visualization</h3>
              <p className="text-gray-300">Helping potential guests envision their stay, activities, and experiences before booking hotels, resorts, or travel packages.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Trust & Safety</h3>
              <p className="text-gray-300">Building confidence in service quality, safety standards, and authentic experiences, especially for international and domestic travelers.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Destination Marketing</h3>
              <p className="text-gray-300">Showcasing unique attractions, cultural experiences, and natural beauty to attract tourists and increase destination appeal.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Service Excellence</h3>
              <p className="text-gray-300">Demonstrating hospitality standards, staff expertise, and commitment to guest satisfaction across all service touchpoints.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Seasonal Promotion</h3>
              <p className="text-gray-300">Marketing different experiences across seasons, weather conditions, and special events to maximize year-round bookings.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cultural Authenticity</h3>
              <p className="text-gray-300">Showcasing genuine local culture, traditions, and experiences that provide authentic and memorable travel experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Hospitality Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From luxury safari lodges to beach resorts, we create video content that inspires travel dreams, showcases authentic experiences, and drives bookings across Kenya's hospitality industry.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Hospitality</h3>
              <p className="text-gray-300 mb-6">Breathtaking destination showcases and luxury experience campaigns that inspire wanderlust and drive hotel bookings and travel package sales.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Luxury hotel and resort showcases</li>
                    <li>• Safari and wildlife experience promotions</li>
                    <li>• Cultural tourism and heritage site marketing</li>
                    <li>• Beach and coastal destination campaigns</li>
                    <li>• Adventure tourism and activity packages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in booking inquiries</li>
                    <li>• Enhanced luxury positioning and premium pricing</li>
                    <li>• Better international market penetration</li>
                    <li>• Improved social media engagement and sharing</li>
                    <li>• Stronger emotional destination connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Real guests and travelers experiencing destinations, accommodations, and activities, building authentic trust and showcasing genuine hospitality experiences.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Guest experiences and hotel stay journeys</li>
                    <li>• Local guide and staff hospitality excellence</li>
                    <li>• Cultural immersion and authentic experiences</li>
                    <li>• Adventure activities and excursion participation</li>
                    <li>• Family vacation and group travel experiences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in booking conversion</li>
                    <li>• Enhanced guest confidence and trust</li>
                    <li>• Better understanding of experience value</li>
                    <li>• Increased repeat bookings and referrals</li>
                    <li>• Authentic testimonial and social proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Destination heritage stories and hospitality excellence narratives that showcase history, culture, and commitment to exceptional guest experiences.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Hotel heritage and establishment stories</li>
                    <li>• Destination history and cultural significance</li>
                    <li>• Conservation and community impact initiatives</li>
                    <li>• Family hospitality business legacies</li>
                    <li>• Sustainable tourism and environmental protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand authenticity perception</li>
                    <li>• Enhanced emotional destination connection</li>
                    <li>• Stronger guest loyalty and advocacy</li>
                    <li>• Improved premium positioning and value</li>
                    <li>• Greater tourism industry recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following travel adventures, hotel operations, or tourism experiences, creating engaging content that educates while showcasing destination appeal.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Guest journey documentaries and travel experiences</li>
                    <li>• Hotel operations and service excellence showcases</li>
                    <li>• Cultural exploration and local community features</li>
                    <li>• Adventure tourism and activity challenges</li>
                    <li>• Seasonal tourism and weather experience variations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 180% increase in destination engagement</li>
                    <li>• Educational content for travel planning</li>
                    <li>• Ongoing content series for tourism marketing</li>
                    <li>• Enhanced destination authority and expertise</li>
                    <li>• Community building and travel inspiration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Travel photography contests, adventure challenges, and cultural experience competitions that engage travel enthusiasts while showcasing destination beauty.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Travel photography and videography contests</li>
                    <li>• Adventure challenge and activity competitions</li>
                    <li>• Cultural experience and storytelling contests</li>
                    <li>• Guest review and testimonial competitions</li>
                    <li>• Sustainable tourism and conservation challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in destination engagement</li>
                    <li>• User-generated content and authentic testimonials</li>
                    <li>• Enhanced destination trial and experience</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Travel community building and advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of hospitality businesses, hotel operations, and tourism services, showcasing professionalism and commitment to guest satisfaction.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Hotel management and operations excellence</li>
                    <li>• Guest services and hospitality training</li>
                    <li>• Tourism business development and innovation</li>
                    <li>• Quality control and service standardization</li>
                    <li>• Hospitality industry insights and best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and trust building</li>
                    <li>• Educational value for hospitality industry</li>
                    <li>• Improved guest confidence and loyalty</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and service excellence promotion</li>
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
            Hospitality & Tourism Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Safari Lodge</h3>
              <p className="text-gray-300 mb-4">A luxury safari lodge increased international bookings by 400% through our wildlife experience series and cultural immersion documentaries.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> International market penetration<br/>
                <strong>Solution:</strong> Wildlife documentaries + Cultural series<br/>
                <strong>Result:</strong> 400% international booking growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Beach Resort</h3>
              <p className="text-gray-300 mb-4">A coastal resort improved occupancy rates by 250% with our guest experience series and adventure activity showcases.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Seasonal occupancy and experience differentiation<br/>
                <strong>Solution:</strong> Guest experiences + Activity showcases<br/>
                <strong>Result:</strong> 250% occupancy improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cultural Tourism Site</h3>
              <p className="text-gray-300 mb-4">A heritage site increased visitor numbers by 180% through our cultural storytelling series and educational competition campaigns.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Cultural tourism awareness and visitor engagement<br/>
                <strong>Solution:</strong> Cultural stories + Educational competitions<br/>
                <strong>Result:</strong> 180% visitor increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Hospitality & Tourism Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">93%</div>
              <p className="text-gray-300">of travelers watch destination videos before booking accommodations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">8x</div>
              <p className="text-gray-300">higher booking conversion rates for hotels with virtual tour videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">84%</div>
              <p className="text-gray-300">of tourism videos are shared across social media platforms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">90%</div>
              <p className="text-gray-300">of destination videos influence final travel decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Inspire Your Next Travelers?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan hospitality brands using cinematic videos to showcase experiences, inspire wanderlust, and drive bookings in the competitive tourism market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Inspire Your Strategy
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

export default HospitalityTourism 