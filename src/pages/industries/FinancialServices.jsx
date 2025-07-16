import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, DollarSign, Shield, TrendingUp, Users } from 'lucide-react'

const FinancialServices = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-cinematic-black via-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 mb-6">
              <p className="text-cinematic-gold text-sm font-medium">
                🏦 Financial Services Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-cinematic-gold mb-6">
              Build Financial Trust with Cinematic Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From investment success stories to banking operations, we make finance relatable and trustworthy, driving customer confidence across Kenya's financial sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Financial Video Strategy
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Financial Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Financial Services Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Shield className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Building Customer Trust</h3>
              <p className="text-gray-300">Establishing credibility and confidence in financial institutions through transparent and authentic storytelling.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <DollarSign className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Complex Product Explanation</h3>
              <p className="text-gray-300">Simplifying complex financial concepts, investment products, and banking services for everyday customers.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <TrendingUp className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Investment Confidence</h3>
              <p className="text-gray-300">Demonstrating track records and success stories to encourage investment and financial planning decisions.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <Users className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Financial Literacy</h3>
              <p className="text-gray-300">Educating customers about financial planning, savings, and investment opportunities in accessible ways.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <CheckCircle className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-300">Communicating compliance and security measures while maintaining engaging and approachable messaging.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <ArrowRight className="text-cinematic-gold w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Digital Adoption</h3>
              <p className="text-gray-300">Encouraging customers to adopt digital banking and fintech solutions through education and demonstration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-4">
            How Our Video Solutions Transform Financial Institutions
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From commercial banks to microfinance institutions, we create video content that builds trust, simplifies complexity, and drives financial inclusion across Kenya.
          </p>
          
          <div className="space-y-12">
            {/* Cinematic Video Ads */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads for Financial Services</h3>
              <p className="text-gray-300 mb-6">Investment products, loans, and financial services showcased through compelling storytelling that builds confidence and drives applications.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Investment product launches and promotions</li>
                    <li>• Loan and credit facility marketing</li>
                    <li>• Insurance product explanations and benefits</li>
                    <li>• Digital banking service showcases</li>
                    <li>• Financial planning and wealth management services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 85% increase in product application rates</li>
                    <li>• Enhanced brand trust and credibility</li>
                    <li>• Better customer understanding of services</li>
                    <li>• Reduced customer acquisition costs</li>
                    <li>• Improved customer lifetime value</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-in-Life Videos */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Day-in-Life Videos</h3>
              <p className="text-gray-300 mb-6">Follow financial advisors, bankers, and investment professionals in action, showcasing expertise and building personal connections with potential clients.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Financial advisor expertise and approach</li>
                    <li>• Bank teller and customer service excellence</li>
                    <li>• Investment analyst insights and processes</li>
                    <li>• Insurance agent client relationship building</li>
                    <li>• Microfinance officer community impact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 70% improvement in advisor-client relationships</li>
                    <li>• Enhanced professional credibility</li>
                    <li>• Better staff recruitment and retention</li>
                    <li>• Increased customer confidence in expertise</li>
                    <li>• Stronger personal branding for advisors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Mini-Movies */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-6">Client wealth-building journeys and financial transformation stories that inspire confidence and demonstrate real-world success.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Customer financial success stories</li>
                    <li>• Institution founding and heritage narratives</li>
                    <li>• Community development and microfinance impact</li>
                    <li>• Business growth through financial partnership</li>
                    <li>• Financial inclusion and empowerment stories</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 120% increase in customer referrals</li>
                    <li>• Enhanced emotional brand connection</li>
                    <li>• Stronger community trust and loyalty</li>
                    <li>• Improved customer retention rates</li>
                    <li>• Greater social impact recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-6">Follow financial advisors helping clients achieve their goals, showcasing real decision-making processes and successful outcomes.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Financial planning consultations and outcomes</li>
                    <li>• Investment advisory sessions and strategies</li>
                    <li>• Loan application and approval processes</li>
                    <li>• Small business financing success stories</li>
                    <li>• Financial crisis resolution and recovery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 90% increase in consultation bookings</li>
                    <li>• Educational value for potential customers</li>
                    <li>• Enhanced transparency and trust</li>
                    <li>• Thought leadership in financial services</li>
                    <li>• Community financial literacy improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Branded Competitions */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h3>
              <p className="text-gray-300 mb-6">Financial literacy challenges and investment strategy contests that educate while promoting your financial products and services.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Financial literacy competitions and challenges</li>
                    <li>• Investment strategy contests and simulations</li>
                    <li>• Entrepreneurship funding competitions</li>
                    <li>• Savings challenge programs and campaigns</li>
                    <li>• Financial planning excellence awards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• 150% increase in customer engagement</li>
                    <li>• Enhanced financial education and awareness</li>
                    <li>• Strong community participation and loyalty</li>
                    <li>• Viral marketing through competition sharing</li>
                    <li>• Lead generation through participant data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Reality Shows */}
            <div className="bg-cinematic-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h3>
              <p className="text-gray-300 mb-6">Bank operations, investment decisions, and financial institution management showcasing transparency and operational excellence.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Perfect For:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Bank operations and decision-making processes</li>
                    <li>• Investment committee deliberations and strategies</li>
                    <li>• Risk management and compliance procedures</li>
                    <li>• Customer service excellence programs</li>
                    <li>• Financial innovation and technology adoption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cinematic-gold mb-3">Key Benefits:</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Enhanced institutional transparency</li>
                    <li>• Better stakeholder confidence and trust</li>
                    <li>• Improved operational accountability</li>
                    <li>• Financial industry thought leadership</li>
                    <li>• Regulatory compliance demonstration</li>
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
            Financial Services Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Commercial Bank</h3>
              <p className="text-gray-300 mb-4">A major Kenyan bank increased loan applications by 200% with our customer success story video campaign.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low loan uptake and trust issues<br/>
                <strong>Solution:</strong> Customer stories + Advisor profiles<br/>
                <strong>Result:</strong> 200% loan application increase
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Insurance Company</h3>
              <p className="text-gray-300 mb-4">A life insurance provider improved customer understanding by 80% through our product explanation videos.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Complex product confusion<br/>
                <strong>Solution:</strong> Animated explainers + Real stories<br/>
                <strong>Result:</strong> 80% better understanding, 45% sales boost
              </div>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Investment Firm</h3>
              <p className="text-gray-300 mb-4">A wealth management company tripled their assets under management through our investor education series.</p>
              <div className="text-sm text-gray-400">
                <strong>Challenge:</strong> Low investment confidence<br/>
                <strong>Solution:</strong> Education series + Success showcases<br/>
                <strong>Result:</strong> 300% AUM growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 px-4 bg-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-cinematic-gold mb-12">
            Financial Services Video Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">86%</div>
              <p className="text-gray-300">of people want to see more video content from financial brands</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">2.5x</div>
              <p className="text-gray-300">higher engagement rates for financial videos vs. text content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">71%</div>
              <p className="text-gray-300">of customers prefer video explanations of financial products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cinematic-gold mb-2">94%</div>
              <p className="text-gray-300">of financial advisors say video improves client relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cinematic-gold mb-6">
            Ready to Build Financial Trust?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading Kenyan financial institutions using cinematic videos to build trust, educate customers, and drive financial inclusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Your Financial Video Strategy
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
              <span>Regulatory compliance expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Financial industry knowledge</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cinematic-gold w-4 h-4" />
              <span>Trust-focused approach</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FinancialServices 