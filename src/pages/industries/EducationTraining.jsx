import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const EducationTraining = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🎓 Education & Training Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Educate and Inspire with Cinematic Learning Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services transform education institutions: From student success stories to campus culture, we help institutions attract the right students and build reputation in Kenya's competitive education landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Educate Your Audience
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Education Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Education & Training Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Student Enrollment</h3>
              <p className="text-gray-300">Attracting and enrolling the right students by showcasing academic excellence, campus life, and career outcomes effectively.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Institutional Reputation</h3>
              <p className="text-gray-300">Building and maintaining educational credibility, academic standards, and institutional prestige in competitive education markets.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Learning Engagement</h3>
              <p className="text-gray-300">Creating compelling educational content that enhances student engagement and improves learning outcomes and retention.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Faculty Excellence</h3>
              <p className="text-gray-300">Showcasing teaching expertise, research achievements, and faculty qualifications to attract students and academic partnerships.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Career Outcomes</h3>
              <p className="text-gray-300">Demonstrating student success, job placement rates, and career advancement to prove educational value and return on investment.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Community Impact</h3>
              <p className="text-gray-300">Highlighting educational institution's role in community development, social impact, and national progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Educational Institutions
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From universities to vocational training centers, we create video content that attracts students, showcases excellence, and builds educational reputation across Kenya's education sector.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Education</h3>
              <p className="text-gray-300 mb-6">Inspiring promotional campaigns showcasing academic excellence, campus life, and student success stories that drive enrollment and institutional pride.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• University and college enrollment campaigns</li>
                    <li>• Academic program and course launches</li>
                    <li>• Campus facility and infrastructure showcases</li>
                    <li>• Scholarship and financial aid programs</li>
                    <li>• Educational achievement celebrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in student inquiries</li>
                    <li>• Enhanced institutional prestige and reputation</li>
                    <li>• Better student quality and engagement</li>
                    <li>• Improved enrollment conversion rates</li>
                    <li>• Stronger emotional brand connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Students, faculty, and staff in their daily academic routines, showcasing authentic campus experiences and educational excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Student campus life and academic routines</li>
                    <li>• Faculty teaching and research activities</li>
                    <li>• Laboratory and practical learning sessions</li>
                    <li>• Student organizations and extracurricular activities</li>
                    <li>• International student experiences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% improvement in enrollment conversion</li>
                    <li>• Enhanced student experience understanding</li>
                    <li>• Better faculty recognition and pride</li>
                    <li>• Increased parent confidence and support</li>
                    <li>• Authentic campus culture showcase</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Educational transformation stories and institutional heritage narratives that inspire confidence and showcase academic legacy and vision.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Institutional founding and growth stories</li>
                    <li>• Student transformation and success journeys</li>
                    <li>• Academic breakthrough and research achievements</li>
                    <li>• Community impact and social contribution</li>
                    <li>• Educational innovation and technology adoption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 95% increase in institutional pride</li>
                    <li>• Enhanced donor and stakeholder engagement</li>
                    <li>• Stronger alumni connection and support</li>
                    <li>• Improved academic partnership opportunities</li>
                    <li>• Greater media coverage and recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following student journeys, academic competitions, or research projects, creating engaging educational content that entertains while informing.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Student academic journey and progress</li>
                    <li>• Research project development and outcomes</li>
                    <li>• Academic competitions and challenges</li>
                    <li>• Campus event planning and execution</li>
                    <li>• International exchange and study abroad</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 180% increase in prospective student engagement</li>
                    <li>• Educational content for broader community</li>
                    <li>• Ongoing content series for marketing</li>
                    <li>• Enhanced transparency and accessibility</li>
                    <li>• Community building and student recruitment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Academic competitions, skill challenges, and knowledge contests that showcase institutional excellence while engaging students and communities.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Academic competitions and quiz shows</li>
                    <li>• Innovation and entrepreneurship challenges</li>
                    <li>• Skills demonstrations and trade competitions</li>
                    <li>• Debate tournaments and public speaking</li>
                    <li>• Creative arts and talent showcases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 250% increase in student participation</li>
                    <li>• Enhanced academic reputation and excellence</li>
                    <li>• Community engagement and outreach</li>
                    <li>• Talent development and recognition</li>
                    <li>• Educational content for broader impact</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of educational institutions, showcasing administration, teaching methods, and institutional operations for transparency and insight.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Educational administration and governance</li>
                    <li>• Teaching methodology and curriculum development</li>
                    <li>• Student services and support systems</li>
                    <li>• Research operations and innovation</li>
                    <li>• Quality assurance and accreditation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced transparency and accountability</li>
                    <li>• Educational value for education sector</li>
                    <li>• Improved stakeholder confidence</li>
                    <li>• Industry thought leadership positioning</li>
                    <li>• Knowledge sharing and best practice promotion</li>
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
            Education & Training Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Private University</h3>
              <p className="text-gray-300 mb-4">A leading university increased enrollment by 300% through our student success story series and campus life showcases.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Competitive enrollment and reputation building<br/>
                <strong>Solution:</strong> Mini-movies + Day-in-life videos<br/>
                <strong>Result:</strong> 300% enrollment increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Vocational Training Institute</h3>
              <p className="text-gray-300 mb-4">A technical college improved job placement rates by 220% with our skills demonstration and graduate success videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Employment outcomes and industry credibility<br/>
                <strong>Solution:</strong> Reality shows + Competitions<br/>
                <strong>Result:</strong> 220% job placement improvement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">International School</h3>
              <p className="text-gray-300 mb-4">An international school attracted 150% more international students through our multicultural campus showcase series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> International student attraction<br/>
                <strong>Solution:</strong> Cultural showcases + Student journeys<br/>
                <strong>Result:</strong> 150% international enrollment growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Education & Training Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">91%</div>
              <p className="text-gray-300">of prospective students watch campus videos before applying</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">6x</div>
              <p className="text-gray-300">higher engagement rates for student success story videos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">78%</div>
              <p className="text-gray-300">of parents prefer video content over brochures for school selection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">85%</div>
              <p className="text-gray-300">of educational videos are shared by current students and alumni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan educational institutions using cinematic videos to attract students, showcase excellence, and build lasting educational legacies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Educate Your Strategy
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

export default EducationTraining 