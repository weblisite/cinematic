import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const SportsFitness = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                ⚽ Sports & Fitness Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Champion Your Brand with Cinematic Sports Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services power athletic success: From transformation stories to athletic showcases, we create motivational content that drives membership and builds athletic brands across Kenya's dynamic sports and fitness market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Champion Your Brand
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Sports Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Sports & Fitness Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Motivation & Inspiration</h3>
              <p className="text-gray-300">Creating compelling content that motivates people to start fitness journeys, join gyms, and commit to athletic training programs.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Community Building</h3>
              <p className="text-gray-300">Building engaged athletic communities around sports teams, fitness centers, and training programs to increase retention and loyalty.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Performance Demonstration</h3>
              <p className="text-gray-300">Showcasing athletic achievements, training results, and performance improvements to attract new members and participants.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Brand Differentiation</h3>
              <p className="text-gray-300">Standing out in competitive fitness markets with unique training methods, coaching excellence, and superior facility experiences.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Transformation Proof</h3>
              <p className="text-gray-300">Proving fitness and training effectiveness through authentic before-and-after transformations and success stories.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Sponsorship Attraction</h3>
              <p className="text-gray-300">Attracting corporate sponsorships and partnerships by showcasing athletic excellence, community impact, and brand alignment opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Sports & Fitness Brands
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From professional sports teams to fitness centers, we create video content that motivates action, builds athletic brands, and drives membership across Kenya's sports and fitness industry.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Sports</h3>
              <p className="text-gray-300 mb-6">High-energy athletic showcases and transformation campaigns that inspire action and drive gym memberships, team support, and sports participation.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Gym membership and fitness program promotions</li>
                    <li>• Sports team season launches and fan engagement</li>
                    <li>• Athletic performance and training showcases</li>
                    <li>• Fitness transformation and success campaigns</li>
                    <li>• Sports equipment and gear demonstrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in gym membership inquiries</li>
                    <li>• Enhanced athletic brand positioning</li>
                    <li>• Better fan engagement and community building</li>
                    <li>• Improved sponsorship attraction</li>
                    <li>• Stronger emotional motivation and inspiration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Athletes, coaches, and fitness enthusiasts in their training routines, showcasing dedication, discipline, and the athletic lifestyle that inspires others.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Professional athlete training and preparation</li>
                    <li>• Fitness coach expertise and methodology</li>
                    <li>• Member transformation journeys and progress</li>
                    <li>• Youth sports development and training</li>
                    <li>• Fitness lifestyle integration and balance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in training program enrollment</li>
                    <li>• Enhanced coach credibility and expertise</li>
                    <li>• Better understanding of athletic commitment</li>
                    <li>• Increased member motivation and retention</li>
                    <li>• Authentic athletic testimonial value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Athletic achievement stories and sports legacy narratives that showcase perseverance, triumph, and the transformative power of sports and fitness.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Athlete journey and championship stories</li>
                    <li>• Gym founding and community impact narratives</li>
                    <li>• Team legacy and historical achievements</li>
                    <li>• Fitness transformation and life change stories</li>
                    <li>• Sports program development and youth impact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in brand inspiration and loyalty</li>
                    <li>• Enhanced emotional athletic connection</li>
                    <li>• Stronger community support and engagement</li>
                    <li>• Improved sponsorship and partnership opportunities</li>
                    <li>• Greater sports industry recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following athletic competitions, training camps, or fitness challenges, creating engaging content that educates while building athletic community.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Athletic training camp and preparation series</li>
                    <li>• Fitness transformation and challenge programs</li>
                    <li>• Sports competition and tournament coverage</li>
                    <li>• Team building and athlete development</li>
                    <li>• Coaching methodology and training innovation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in athletic community engagement</li>
                    <li>• Educational content for sports development</li>
                    <li>• Ongoing content series for fan building</li>
                    <li>• Enhanced coaching authority and expertise</li>
                    <li>• Community building and athlete inspiration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Fitness challenges, sports tournaments, and athletic competitions that engage communities while showcasing training effectiveness and athletic excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Fitness challenge competitions and transformations</li>
                    <li>• Sports tournaments and athletic showcases</li>
                    <li>• Training methodology and performance contests</li>
                    <li>• Youth sports development competitions</li>
                    <li>• Community fitness and wellness challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in athletic participation</li>
                    <li>• Enhanced community fitness engagement</li>
                    <li>• Training program effectiveness demonstration</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Athletic community building and motivation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of sports organizations, gym operations, and athletic programs, showcasing professionalism and commitment to athletic excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Sports team management and operations</li>
                    <li>• Gym facility operations and member services</li>
                    <li>• Athletic program development and coaching</li>
                    <li>• Sports business innovation and growth</li>
                    <li>• Fitness industry insights and best practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and professional credibility</li>
                    <li>• Educational value for sports community</li>
                    <li>• Improved member and fan confidence</li>
                    <li>• Sports industry thought leadership</li>
                    <li>• Knowledge sharing and athletic development</li>
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
            Sports & Fitness Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Premier Fitness Center</h3>
              <p className="text-gray-300 mb-4">A leading gym increased membership by 400% through our transformation story series and athlete training showcase videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Membership growth and training credibility<br/>
                <strong>Solution:</strong> Transformation stories + Training showcases<br/>
                <strong>Result:</strong> 400% membership increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Professional Football Club</h3>
              <p className="text-gray-300 mb-4">A local football team improved fan engagement by 250% with our behind-the-scenes series and match preparation documentaries.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Fan engagement and community support<br/>
                <strong>Solution:</strong> Behind-the-scenes + Match preparation series<br/>
                <strong>Result:</strong> 250% fan engagement growth
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Youth Sports Academy</h3>
              <p className="text-gray-300 mb-4">A sports academy attracted 300% more young athletes through our development program showcases and success story competitions.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Youth recruitment and program credibility<br/>
                <strong>Solution:</strong> Development showcases + Success competitions<br/>
                <strong>Result:</strong> 300% youth athlete recruitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Sports & Fitness Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">94%</div>
              <p className="text-gray-300">of fitness enthusiasts watch workout and transformation videos for motivation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">7x</div>
              <p className="text-gray-300">higher engagement rates for sports content with athletic showcases</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">81%</div>
              <p className="text-gray-300">of gym members prefer video-based fitness guidance and inspiration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">89%</div>
              <p className="text-gray-300">of sports videos are shared within athletic and fitness communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Champion Your Athletic Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan sports and fitness brands using cinematic videos to inspire action, build communities, and create champion athletes and members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Champion Your Strategy
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

export default SportsFitness 