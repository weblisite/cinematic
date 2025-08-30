import React from 'react'
import { Link } from 'react-router-dom'

const DayInLifeVideos = () => {

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cinematic-gold mb-6">
            Day-in-Life Videos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Showcase your team's expertise and dedication through cinematic day-in-the-life documentaries that humanize your business and build authentic connections with your audience.
          </p>
          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-6 rounded-lg glow-gold inline-block">
            <p className="text-3xl font-bold text-cinematic-gold mb-2">Starting at KSh 150,000</p>
            <p className="text-gray-300">Professional documentary-style production</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-cinematic-gold mb-6">
                What Are Day-in-Life Videos?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Day-in-life videos are cinematic documentaries that follow your team members, employees, or business leaders through their typical workday. These authentic stories showcase the human side of your business, highlighting expertise, dedication, and the passion that drives your success.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Unlike staged corporate videos, day-in-life content captures genuine moments that build trust, showcase company culture, and demonstrate the real value your team brings to customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">92%</div>
                  <div className="text-gray-300">Trust Increase</div>
                </div>
                <div className="text-center bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <div className="text-3xl font-bold text-cinematic-gold mb-2">78%</div>
                  <div className="text-gray-300">Employee Pride Boost</div>
                </div>
              </div>
            </div>
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">👥</span>
                  <div>
                    <strong className="text-white">Subject Selection & Preparation</strong>
                    <p className="text-gray-400 text-sm">Identify the right team members and prepare for filming</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">📋</span>
                  <div>
                    <strong className="text-white">Story Development</strong>
                    <p className="text-gray-400 text-sm">Craft compelling narratives around daily work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎬</span>
                  <div>
                    <strong className="text-white">Full Day Documentation</strong>
                    <p className="text-gray-400 text-sm">Cinema-grade filming throughout the workday</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">🎤</span>
                  <div>
                    <strong className="text-white">Interview Segments</strong>
                    <p className="text-gray-400 text-sm">Personal insights and professional perspectives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cinematic-gold mr-3 mt-1">✂️</span>
                  <div>
                    <strong className="text-white">Documentary-Style Editing</strong>
                    <p className="text-gray-400 text-sm">Professional storytelling and pacing</p>
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
            Why Day-in-Life Videos Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Build Authentic Trust</h3>
              <p className="text-gray-300">
                Real people doing real work creates genuine connections with your audience, building trust that traditional marketing cannot achieve.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Showcase Expertise</h3>
              <p className="text-gray-300">
                Demonstrate your team's skills, knowledge, and dedication through their daily work, proving your company's competence and professionalism.
              </p>
            </div>
            <div className="text-center bg-cinematic-black p-8 rounded-lg glow-gold">
              <div className="text-cinematic-gold text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-cinematic-gold mb-4">Highlight Company Culture</h3>
              <p className="text-gray-300">
                Show the positive work environment, team collaboration, and values that make your company a great place to work and do business with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Day-in-Life Video Types
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Leadership Focus</h3>
              <p className="text-gray-300 mb-4">
                Follow CEOs, managers, and department heads as they lead teams, make decisions, and drive business success.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Executive decision-making processes</li>
                <li>• Team leadership and mentoring</li>
                <li>• Strategic planning sessions</li>
                <li>• Client relationship management</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Expert Professionals</h3>
              <p className="text-gray-300 mb-4">
                Showcase specialists, technicians, and skilled workers demonstrating their expertise and craft.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Technical skills and craftsmanship</li>
                <li>• Problem-solving abilities</li>
                <li>• Quality control processes</li>
                <li>• Innovation and creativity</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Customer-Facing Teams</h3>
              <p className="text-gray-300 mb-4">
                Document sales teams, customer service representatives, and client-facing professionals in action.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Customer service excellence</li>
                <li>• Sales process and relationship building</li>
                <li>• Problem resolution</li>
                <li>• Client satisfaction delivery</li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Behind-the-Scenes Teams</h3>
              <p className="text-gray-300 mb-4">
                Highlight the essential work of support teams, operations staff, and specialized departments.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Operations and logistics</li>
                <li>• Research and development</li>
                <li>• Quality assurance</li>
                <li>• Administrative excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Our Documentary Process
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Subject Selection & Planning</h3>
                <p className="text-gray-300 mb-4">
                  We work with you to identify the right team members whose stories will best represent your company values and expertise.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Employee interviews and selection</li>
                  <li>• Story potential assessment</li>
                  <li>• Schedule coordination</li>
                  <li>• Permission and consent processes</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Pre-Production Research</h3>
                <p className="text-gray-300 mb-4">
                  Understanding your team's daily routines, challenges, and achievements helps us capture the most compelling moments.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Workflow analysis</li>
                  <li>• Key moment identification</li>
                  <li>• Interview question preparation</li>
                  <li>• Technical setup planning</li>
                </ul>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Documentary Filming</h3>
                <p className="text-gray-300 mb-4">
                  Our crew follows subjects throughout their day, capturing authentic moments with minimal disruption to normal work flow.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Unobtrusive filming techniques</li>
                  <li>• Multiple camera angles</li>
                  <li>• Natural audio capture</li>
                  <li>• Spontaneous moment documentation</li>
                </ul>
              </div>
              <div className="bg-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Story Construction</h3>
                <p className="text-gray-300 mb-4">
                  Expert editing transforms hours of footage into compelling narratives that showcase your team's dedication and expertise.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Narrative structure development</li>
                  <li>• Interview integration</li>
                  <li>• Emotional pacing</li>
                  <li>• Professional finishing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cinematic-gold mb-16">
            Investment Packages
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Team Focus</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 450,000</p>
              <p className="text-gray-400 mb-6">3 employees featured</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  3 employees day-in-life
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  3 separate 25 minute videos
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  3 days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Interview segments
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Professional editing
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border-2 border-cinematic-gold glow-gold">
              <div className="text-center mb-4">
                <span className="bg-cinematic-gold text-cinematic-black px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Team Series</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 1,050,000</p>
              <p className="text-gray-400 mb-6">10 employees featured</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  10 employees featured
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  10 separate 25 minute videos
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  10 days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Extended interviews
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Advanced post-production
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Social media cuts
                </li>
              </ul>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Department Focus</h3>
              <p className="text-3xl font-bold text-white mb-2">KSh 1,500,000</p>
              <p className="text-gray-400 mb-6">Entire department showcase</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Full department coverage
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Combined 90 minute documentary
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  5 days filming
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multiple team members
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Comprehensive storytelling
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Multiple format versions
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-cinematic-gold mr-3">✓</span>
                  Distribution strategy
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
            Showcase Your Team's Story
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us create authentic day-in-life videos that highlight your team's expertise, dedication, and the human side of your business that builds lasting customer relationships.
          </p>
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Start Your Documentary Project</h3>
            <p className="text-lg text-gray-300 mb-6">
              Contact us to discuss your team and we'll create a filming plan that captures their unique stories and expertise.
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

export default DayInLifeVideos 