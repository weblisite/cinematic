import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Heart, Shield, Users, Award } from 'lucide-react'

const Healthcare = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏥 Healthcare Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Build Patient Trust with Cinematic Healthcare Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services elevate healthcare providers: From patient testimonials to facility showcases, we humanize medical care and build confidence across Kenya's healthcare landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Healthcare Video Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Healthcare Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Healthcare Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Heart className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Building Patient Trust</h3>
              <p className="text-gray-300">Creating emotional connections and confidence in medical care through authentic patient stories and professional expertise.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Medical Excellence Showcase</h3>
              <p className="text-gray-300">Demonstrating advanced medical procedures, technology, and facilities to build credibility and attract patients.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Complex Information Simplification</h3>
              <p className="text-gray-300">Making complex medical procedures and treatments easily understandable for patients and their families.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Award className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Healthcare Professional Recruitment</h3>
              <p className="text-gray-300">Attracting top medical talent by showcasing hospital culture, values, and career opportunities.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Community Health Education</h3>
              <p className="text-gray-300">Educating communities about health prevention, treatments, and wellness through engaging visual content.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Insurance & Payment Clarity</h3>
              <p className="text-gray-300">Explaining insurance processes, payment options, and healthcare accessibility to reduce patient anxiety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Elevate Healthcare Providers
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From private clinics to major hospitals, we create video content that builds patient trust, demonstrates medical excellence, and drives healthcare outcomes across Kenya.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Healthcare</h3>
              <p className="text-gray-300 mb-6">Medical procedure explanations and patient success stories that build trust and drive appointment bookings through compelling visual storytelling.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Medical procedure explanations and demonstrations</li>
                    <li>• Patient success story testimonials</li>
                    <li>• Hospital and clinic facility showcases</li>
                    <li>• Specialized treatment program promotions</li>
                    <li>• Health awareness and prevention campaigns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 70% increase in appointment bookings</li>
                    <li>• Reduced patient anxiety and fear</li>
                    <li>• Enhanced hospital reputation and trust</li>
                    <li>• Better patient education and compliance</li>
                    <li>• Increased referral rates from patients</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Doctors, nurses, and specialists showcasing their dedication and expertise, building professional credibility and patient confidence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Surgeon and specialist expertise showcases</li>
                    <li>• Nursing excellence and patient care</li>
                    <li>• Hospital department operations</li>
                    <li>• Medical staff recruitment and culture</li>
                    <li>• Community outreach and mobile clinics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% improvement in patient trust scores</li>
                    <li>• Enhanced staff pride and retention</li>
                    <li>• Better recruitment of medical professionals</li>
                    <li>• Increased community engagement</li>
                    <li>• Stronger physician-patient relationships</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Hospital transformation stories and medical breakthrough narratives that inspire confidence and showcase institutional excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Hospital founding and growth stories</li>
                    <li>• Medical breakthrough and innovation stories</li>
                    <li>• Patient recovery journey documentaries</li>
                    <li>• Community health impact narratives</li>
                    <li>• Medical mission and values storytelling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in positive hospital perception</li>
                    <li>• Enhanced donor and partner engagement</li>
                    <li>• Stronger community trust and loyalty</li>
                    <li>• Improved staff motivation and purpose</li>
                    <li>• Greater media coverage and recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following medical teams through critical cases and patient care, showcasing real-world medical excellence and human compassion.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Emergency department operations</li>
                    <li>• Surgical team procedures and collaboration</li>
                    <li>• Patient care journey documentation</li>
                    <li>• Medical education and training programs</li>
                    <li>• Hospital crisis management and response</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in social media engagement</li>
                    <li>• Educational value for medical community</li>
                    <li>• Public health awareness and education</li>
                    <li>• Medical staff recognition and pride</li>
                    <li>• Enhanced transparency and accountability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Medical innovation challenges and healthcare excellence awards that position your institution as a leader in medical advancement.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Medical innovation and research competitions</li>
                    <li>• Healthcare excellence awards and recognition</li>
                    <li>• Medical student competitions and challenges</li>
                    <li>• Community health improvement contests</li>
                    <li>• Medical technology adoption challenges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in medical talent interest</li>
                    <li>• Enhanced research and innovation reputation</li>
                    <li>• Stronger academic and industry partnerships</li>
                    <li>• Community engagement and health advocacy</li>
                    <li>• Medical breakthrough recognition and funding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Hospital operations, management decisions, and healthcare delivery systems that demonstrate institutional excellence and transparency.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Hospital administration and governance</li>
                    <li>• Healthcare policy implementation</li>
                    <li>• Medical facility expansion and growth</li>
                    <li>• Quality improvement initiatives</li>
                    <li>• Healthcare system optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced institutional transparency</li>
                    <li>• Better stakeholder confidence and trust</li>
                    <li>• Improved operational efficiency</li>
                    <li>• Healthcare industry thought leadership</li>
                    <li>• Policy influence and advocacy impact</li>
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
            Healthcare Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Private Hospital</h3>
              <p className="text-gray-300 mb-4">A Nairobi private hospital increased patient bookings by 180% with our patient success story video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low patient trust and awareness<br/>
                <strong>Solution:</strong> Patient testimonials + Doctor profiles<br/>
                <strong>Result:</strong> 180% booking increase, 95% satisfaction
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Specialty Clinic</h3>
              <p className="text-gray-300 mb-4">A cardiac surgery center reduced patient anxiety by 60% through our procedure explanation video series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> High patient anxiety before procedures<br/>
                <strong>Solution:</strong> Procedure explanations + Success stories<br/>
                <strong>Result:</strong> 60% anxiety reduction, better outcomes
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Medical College</h3>
              <p className="text-gray-300 mb-4">A medical training institution doubled enrollment with our student journey and career outcome videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low student enrollment numbers<br/>
                <strong>Solution:</strong> Student stories + Career showcases<br/>
                <strong>Result:</strong> 100% enrollment increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Healthcare Video Impact Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">79%</div>
              <p className="text-gray-300">of patients research medical procedures online before treatment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">3x</div>
              <p className="text-gray-300">higher appointment booking rates with video testimonials</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">68%</div>
              <p className="text-gray-300">of patients prefer video explanations over text for medical procedures</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">92%</div>
              <p className="text-gray-300">of healthcare professionals believe video improves patient understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Healthcare Communication?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan healthcare providers using cinematic videos to build patient trust, demonstrate excellence, and improve health outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Healthcare Video Strategy
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
              <span>HIPAA-compliant production</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Medical industry expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Patient-focused approach</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Healthcare 