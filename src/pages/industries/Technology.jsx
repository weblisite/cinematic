import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react'

const Technology = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                💻 Technology Industry Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Transform Your Tech Business with Cinematic Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How our services transform tech companies: From SaaS demos to startup journeys, we create content that drives user adoption and investment in Kenya's rapidly evolving tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Tech Video Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Tech Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Technology Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Complex Product Explanation</h3>
              <p className="text-gray-300">Making sophisticated software and technical solutions easily understandable to diverse audiences and decision-makers.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Building User Trust</h3>
              <p className="text-gray-300">Establishing credibility and confidence in new technologies, especially for startups and emerging tech companies.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Investor Attraction</h3>
              <p className="text-gray-300">Creating compelling narratives that showcase potential and attract investment for tech startups and scale-ups.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Zap className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">User Adoption</h3>
              <p className="text-gray-300">Demonstrating real-world value and encouraging widespread adoption of new technologies and platforms.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Technical Talent Recruitment</h3>
              <p className="text-gray-300">Attracting top developers and tech professionals by showcasing company culture and innovative projects.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Market Differentiation</h3>
              <p className="text-gray-300">Standing out in crowded tech markets with unique storytelling and compelling brand narratives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Tech Companies
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From fintech startups to enterprise software companies, we create video content that drives user adoption, investment, and business growth across Kenya's tech ecosystem.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Tech</h3>
              <p className="text-gray-300 mb-6">Product launch campaigns that showcase software benefits cinematically, driving user sign-ups and investor interest.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• SaaS product launches and feature announcements</li>
                    <li>• Mobile app marketing and user acquisition</li>
                    <li>• Enterprise software solution showcases</li>
                    <li>• Fintech product demonstrations</li>
                    <li>• E-commerce platform promotions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 65% higher conversion rates than static ads</li>
                    <li>• Better user onboarding and feature adoption</li>
                    <li>• Enhanced investor presentation materials</li>
                    <li>• Improved brand credibility and trust</li>
                    <li>• Social media viral potential</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Developers and engineers showing real problem-solving in action, building trust and attracting top talent.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Developer recruitment and company culture</li>
                    <li>• Showcasing technical expertise and innovation</li>
                    <li>• Behind-the-scenes of product development</li>
                    <li>• Technical team leadership and processes</li>
                    <li>• Startup founder and CTO profiles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 40% improvement in talent recruitment</li>
                    <li>• Enhanced employer branding</li>
                    <li>• Increased team morale and retention</li>
                    <li>• Better investor confidence in team</li>
                    <li>• Authentic company culture showcase</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Startup founding stories and tech innovation journeys that inspire investors, customers, and partners while building emotional connections.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Startup founding and growth stories</li>
                    <li>• Technology innovation documentaries</li>
                    <li>• Company milestone celebrations</li>
                    <li>• Customer success transformation stories</li>
                    <li>• Industry impact and social change narratives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 80% increase in investor meeting requests</li>
                    <li>• Stronger emotional brand connection</li>
                    <li>• Enhanced credibility and authority</li>
                    <li>• Better partnership opportunities</li>
                    <li>• Increased media coverage and PR value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Following tech teams through product development cycles, showcasing innovation processes and building audience engagement.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Product development behind-the-scenes</li>
                    <li>• Startup accelerator programs</li>
                    <li>• Tech conference and event content</li>
                    <li>• Innovation lab showcases</li>
                    <li>• Technical challenge solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 200% increase in social media engagement</li>
                    <li>• Educational content for tech community</li>
                    <li>• Ongoing content series for marketing</li>
                    <li>• Thought leadership positioning</li>
                    <li>• Community building and advocacy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Coding challenges and hackathons with your technology as the centerpiece, building developer community and showcasing platform capabilities.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Developer API competitions and hackathons</li>
                    <li>• Innovation challenges and tech contests</li>
                    <li>• University coding competitions</li>
                    <li>• Platform adoption challenges</li>
                    <li>• Tech skill assessments and showcases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 300% increase in developer engagement</li>
                    <li>• Platform adoption and API usage growth</li>
                    <li>• Talent pipeline development</li>
                    <li>• Community-generated innovation</li>
                    <li>• Viral marketing through competition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Behind-the-scenes of successful tech companies and their operations, showcasing transparency and operational excellence for education and inspiration.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Tech company operations and culture</li>
                    <li>• Executive decision-making processes</li>
                    <li>• Scaling challenges and solutions</li>
                    <li>• Industry insights and trends</li>
                    <li>• Mentorship and educational content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Thought leadership and industry authority</li>
                    <li>• Educational value for tech ecosystem</li>
                    <li>• Investor confidence and transparency</li>
                    <li>• Team pride and external recognition</li>
                    <li>• Knowledge sharing and community impact</li>
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
            Technology Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">FinTech Startup</h3>
              <p className="text-gray-300 mb-4">A Nairobi-based mobile payment platform increased user sign-ups by 250% with our cinematic product demo series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Complex payment process explanation<br/>
                <strong>Solution:</strong> Day-in-life videos + Mini-movie series<br/>
                <strong>Result:</strong> 250% user growth, $2M investment
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">SaaS Platform</h3>
              <p className="text-gray-300 mb-4">An enterprise software company reduced customer acquisition costs by 40% through our branded competition series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> High customer acquisition costs<br/>
                <strong>Solution:</strong> Developer competitions + Reality shows<br/>
                <strong>Result:</strong> 40% CAC reduction, 180% engagement
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">E-commerce Tech</h3>
              <p className="text-gray-300 mb-4">An online marketplace platform attracted top talent and tripled their engineering team through our recruitment videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Developer talent attraction<br/>
                <strong>Solution:</strong> Company culture videos + Tech showcases<br/>
                <strong>Result:</strong> 3x engineering team growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Technology Industry Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">83%</div>
              <p className="text-gray-300">of tech buyers watch video content before making purchase decisions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">4x</div>
              <p className="text-gray-300">higher conversion rates for SaaS demos with video content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">65%</div>
              <p className="text-gray-300">of developers prefer video tutorials over text documentation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">90%</div>
              <p className="text-gray-300">of successful tech startups use video in their investor pitches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Transform Your Tech Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan tech companies using cinematic videos to drive growth, attract investment, and build market-leading brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Custom Tech Strategy
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

export default Technology 