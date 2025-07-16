import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, ArrowDown } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()
  const videoRef = useRef(null)

  useEffect(() => {
    // Lazy loading implementation
    const lazyElements = document.querySelectorAll('.lazy-load')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded')
          observer.unobserve(entry.target)
        }
      })
    })
    
    lazyElements.forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden pt-6 md:pt-8">
        {/* Video Background - Clean gradient background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cinematic-black via-cinematic-gray to-cinematic-black">
          {/* Video overlay for actual implementation */}
          {/* <video ref={videoRef} autoPlay muted loop className="hero-video w-full h-full">
             <source src="https://example.com/cinematic-showreel.mp4" type="video/mp4" />
             <source src="https://example.com/cinematic-showreel.webm" type="video/webm" />
           </video> */}
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Subtle Tagline */}
          <div className="mb-4 inline-block bg-cinematic-black/30 backdrop-blur-sm border border-cinematic-gold/50 rounded-lg px-6 py-2 glow-gold animate-fade-in-up">
            <p className="text-cinematic-gold text-sm font-medium">
              🎬 Cinema-Grade Video Production For Businesses
            </p>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-cinematic-gold mb-6 leading-tight animate-fade-in-up">
            Elevate Your Brand with Cinematic Videos
          </h1>
          <p className="text-xl md:text-2xl text-cinematic-white mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Turning ordinary businesses into extraordinary brands through the power of cinematic videos that go viral on social media.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="btn-primary text-xl glow-gold animate-glow-pulse focus-visible"
            aria-label="Get your free quote"
          >
            Get Your Free Quote
          </button>
          
          {/* Trust Building Tags */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-cinematic-gold">✓</span>
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cinematic-gold">✓</span>
              <span>Quick 2-Week Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cinematic-gold">✓</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cinematic-gold animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-cinematic-gold mb-8">
                About Cinematic
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are Kenya's premier cinematic video production agency, transforming businesses through the power of storytelling and visual excellence.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Founded by passionate filmmakers who understand the Kenyan market, we combine international production standards with local expertise to create content that resonates with your audience and drives real business results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cinematic-gold">150+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cinematic-gold">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cinematic-gold">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cinematic-gold">10M+</div>
                  <div className="text-gray-400">Views Generated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold">
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  To elevate Kenyan businesses through cinematic storytelling that captivates audiences, builds emotional connections, and drives measurable growth.
                </p>
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Our Vision</h3>
                <p className="text-gray-300 mb-6">
                  To be the leading force in transforming how African businesses communicate their stories to the world through cinematic excellence.
                </p>
                <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Our Promise</h3>
                <p className="text-gray-300">
                  Every project receives our unwavering commitment to excellence - from on-time delivery and cinema-quality standards to transparent communication and complete client satisfaction. Your success is our guarantee.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA after About section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Ready to work with Kenya's premier cinematic video production agency?</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Schedule a Free Consultation
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Cinematic Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-black to-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Why Choose Cinematic?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glow-gold bg-cinematic-gray p-8 rounded-lg text-center service-card lazy-load">
              <div className="text-cinematic-gold text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Unmatched Cinematic Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional-grade equipment and artistic expertise create stunning visuals that captivate audiences and turn viewers into loyal customers.
              </p>
            </div>
            <div className="glow-gold bg-cinematic-gray p-8 rounded-lg text-center service-card lazy-load">
              <div className="text-cinematic-gold text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Business-Focused Results</h3>
              <p className="text-gray-300 leading-relaxed">
                Every video is strategically crafted to drive engagement, boost conversions, and deliver measurable ROI for your business goals.
              </p>
            </div>
            <div className="glow-gold bg-cinematic-gray p-8 rounded-lg text-center service-card lazy-load">
              <div className="text-cinematic-gold text-5xl mb-4">🇰🇪</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Kenyan Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Deep understanding of the Kenyan market ensures your content resonates with local audiences while maintaining global appeal.
              </p>
            </div>
          </div>
          
          {/* CTA after Why Choose Cinematic section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Experience the difference cinematic quality makes for your brand</p>
            <button 
              onClick={() => navigate('/services')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              See Our Services
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              Get Your Quote
            </button>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Our Cinematic Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cinematic Video Ads</h3>
              <p className="text-gray-300 mb-4">Drive sales with cinematic ads that captivate and convert your audience.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 100,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Day in the Life Videos</h3>
              <p className="text-gray-300 mb-4">Cinematic documentaries featuring your business personnel and employees.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 150,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Business Mini-Movies</h3>
              <p className="text-gray-300 mb-4">Tell your brand's story with compelling cinematic mini-documentaries.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 200,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Branded Reality Shows</h3>
              <p className="text-gray-300 mb-4">High-production reality shows with your business brand infused in the show.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 300,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Branded Competitions</h3>
                              <p className="text-gray-300 mb-4">Competition show with your brand at the center stage of the competition.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 400,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg service-card lazy-load">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Business Reality Shows</h3>
              <p className="text-gray-300 mb-4">Reality shows modeled after Netflix hits like Selling Sunset and Owning Manhattan - adapting their cinematic storytelling for your business.</p>
              <p className="text-cinematic-gold font-bold mb-4">Starting at KSh 500,000</p>
              <button 
                onClick={() => navigate('/services')}
                className="w-full btn-primary focus-visible"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspiration & Approach */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Why We Model After Global Success Stories
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-3xl font-bold text-cinematic-gold mb-6">Inspired by Global Competitions</h3>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                <strong className="text-cinematic-gold">Studied MasterChef's Formula:</strong> We analyzed how MasterChef integrated Viking appliances as both cooking equipment and prizes, with Viking being mentioned prominently during the competitions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Inspired by how Viking ovens became central to MasterChef competition, we are using this approach to create branded competitions where your products become integral to compelling narratives.
              </p>
              <div className="bg-cinematic-black/50 p-4 rounded-lg border-l-4 border-cinematic-gold">
                <p className="text-cinematic-gold font-medium italic">
                  "We studied global competitions and how they have integrated brands in the competition to adapt their proven brand integration techniques for Kenyan businesses."
                </p>
              </div>
            </div>
            
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-3xl font-bold text-cinematic-gold mb-6">Inspired by Global Reality Shows</h3>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                <strong className="text-cinematic-gold">Analyzed Global Hits:</strong> We studied how shows like Selling Sunset, Selling the OC, Owning Manhattan, and Selling Tampa captivated millions with their blend of luxury, drama, and stunning visuals.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By analyzing these Netflix hits, we adapted their proven storytelling techniques for Kenyan businesses - bringing the same cinematic polish that made these business reality shows globally successful.
              </p>
              <div className="bg-cinematic-black/50 p-4 rounded-lg border-l-4 border-cinematic-gold">
                <p className="text-cinematic-gold font-medium italic">
                  "We deconstructed the success of business reality shows on streaming services to create localized versions for Kenyan businesses."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold">
            <h3 className="text-3xl font-bold text-cinematic-gold mb-6">Following Industry Leaders</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-cinematic-gold">Companies that are active on social media</strong> are pioneering cinematic video content that drives real business results. We're bringing this cutting-edge approach to Kenya, creating content that rivals global standards.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">🎬</div>
                <h4 className="text-xl font-bold text-cinematic-gold mb-2">Cinematic Videos</h4>
                <p className="text-gray-400">Seamless brand integration in competitions</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">📺</div>
                <h4 className="text-xl font-bold text-cinematic-gold mb-2">Hollywood Quality</h4>
                <p className="text-gray-400">Global reality show production levels</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-4xl mb-3">🚀</div>
                <h4 className="text-xl font-bold text-cinematic-gold mb-2">Modern Innovation</h4>
                <p className="text-gray-400">Inspired by forward thinking businesses</p>
              </div>
            </div>
          </div>
          
          {/* CTA after Inspiration section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Ready to bring global production standards to your Kenyan business?</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
      
      {/* Benefits of Cinematic Videos */}
      <section className="py-20 px-4 bg-gradient-to-r from-cinematic-black to-cinematic-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Why Cinematic Videos Transform Businesses
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">The Power of Cinematic Storytelling</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-cinematic-gold text-2xl mr-4">📈</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">300% Higher Engagement</h4>
                    <p className="text-gray-400">Cinematic videos capture attention longer and generate significantly more engagement than standard content.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-cinematic-gold text-2xl mr-4">💰</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">5x Better ROI</h4>
                    <p className="text-gray-400">Professional cinematic production delivers measurable business results and higher conversion rates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-cinematic-gold text-2xl mr-4">🏆</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Premium Brand Positioning</h4>
                    <p className="text-gray-400">Elevate your brand perception and stand out from competitors with cinema-quality content.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-cinematic-gold text-2xl mr-4">❤️</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Emotional Connection</h4>
                    <p className="text-gray-400">Create lasting emotional bonds with your audience through powerful visual storytelling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6">What Makes Us Different</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>Hollywood-grade equipment and techniques</li>
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>Award-winning creative team</li>
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>Local market expertise</li>
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>End-to-end production support</li>
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>Guaranteed delivery timelines</li>
                <li className="flex items-center"><span className="text-cinematic-gold mr-3">✓</span>Post-production excellence</li>
              </ul>
            </div>
          </div>
          
          {/* CTA after Benefits section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Transform your business with cinematic videos that deliver results</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Get Your Custom Quote
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Why Choose Cinematic Over Traditional Video?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-red-900/20 to-cinematic-gray p-8 rounded-lg border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Traditional Video Production</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Basic equipment and lighting</li>
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Limited creative direction</li>
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Standard editing techniques</li>
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Generic storytelling approach</li>
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Limited post-production value</li>
                <li className="flex items-center text-gray-400"><span className="text-red-400 mr-3">✗</span>Lower audience engagement</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-gray p-8 rounded-lg border border-cinematic-gold/30 glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-6 text-center">Cinematic Production</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>Professional cinema-grade equipment</li>
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>Artistic direction and vision</li>
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>Advanced editing and color grading</li>
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>Compelling narrative storytelling</li>
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>Hollywood-level post-production</li>
                <li className="flex items-center text-gray-300"><span className="text-cinematic-gold mr-3">✓</span>300% higher engagement rates</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Ready to see the difference cinematic quality makes?</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3"
            >
              Start Your Cinematic Journey
            </button>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Industry Expertise
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            We understand that every industry has unique challenges and opportunities. Our cinematic video solutions are tailored to address specific industry needs across Kenya's major economic sectors, driving measurable results for businesses of all sizes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Technology</h3>
              <p className="text-gray-300 mb-4">Challenge: Making complex tech solutions accessible and building trust</p>
              <p className="text-gray-400 text-sm mb-4">How our services transform tech companies: From SaaS demos to startup journeys, we create content that drives user adoption and investment.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Product launch campaigns that showcase software benefits cinematically</li>
                <li>• <strong>Day-in-Life Videos:</strong> Developers and engineers showing real problem-solving in action</li>
                <li>• <strong>Business Mini-Movies:</strong> Startup founding stories and tech innovation journeys</li>
                <li>• <strong>Branded Reality Shows:</strong> Following tech teams through product development cycles</li>
                <li>• <strong>Branded Competitions:</strong> Coding challenges and hackathons with your tech as the centerpiece</li>
                <li>• <strong>Business Reality Shows:</strong> Behind-the-scenes of successful tech companies and their operations</li>
              </ul>
            </div>

            {/* Healthcare */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">Challenge: Building patient trust and showcasing medical excellence</p>
              <p className="text-gray-400 text-sm mb-4">How our services elevate healthcare providers: From patient testimonials to facility showcases, we humanize medical care and build confidence.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Medical procedure explanations and patient success stories</li>
                <li>• <strong>Day-in-Life Videos:</strong> Doctors, nurses, and specialists showcasing their dedication and expertise</li>
                <li>• <strong>Business Mini-Movies:</strong> Hospital transformation stories and medical breakthrough narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following medical teams through critical cases and patient care</li>
                <li>• <strong>Branded Competitions:</strong> Medical innovation challenges and healthcare excellence awards</li>
                <li>• <strong>Business Reality Shows:</strong> Hospital operations, management decisions, and healthcare delivery systems</li>
              </ul>
            </div>

            {/* Finance */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Financial Services</h3>
              <p className="text-gray-300 mb-4">Challenge: Building trust and simplifying complex financial concepts</p>
              <p className="text-gray-400 text-sm mb-4">How our services transform financial institutions: From investment success stories to banking operations, we make finance relatable and trustworthy.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Investment products, loans, and financial services that build confidence</li>
                <li>• <strong>Day-in-Life Videos:</strong> Financial advisors, bankers, and investment professionals in action</li>
                <li>• <strong>Business Mini-Movies:</strong> Client wealth-building journeys and financial transformation stories</li>
                <li>• <strong>Branded Reality Shows:</strong> Following financial advisors helping clients achieve their goals</li>
                <li>• <strong>Branded Competitions:</strong> Financial literacy challenges and investment strategy contests</li>
                <li>• <strong>Business Reality Shows:</strong> Bank operations, investment decisions, and financial institution management</li>
              </ul>
            </div>

            {/* Retail */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Retail & E-commerce</h3>
              <p className="text-gray-300 mb-4">Challenge: Creating compelling product stories that drive sales in competitive markets</p>
              <p className="text-gray-400 text-sm mb-4">How our services boost retail businesses: From product launches to customer experiences, we create content that converts browsers into buyers.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Product showcases that highlight features, benefits, and lifestyle appeal</li>
                <li>• <strong>Day-in-Life Videos:</strong> Store managers, buyers, and customer service teams in action</li>
                <li>• <strong>Business Mini-Movies:</strong> Brand founding stories and product development journeys</li>
                <li>• <strong>Branded Reality Shows:</strong> Following retail teams through seasonal campaigns and store operations</li>
                <li>• <strong>Branded Competitions:</strong> Customer styling challenges and product design contests</li>
                <li>• <strong>Business Reality Shows:</strong> Retail chain management, inventory decisions, and customer experience optimization</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Manufacturing</h3>
              <p className="text-gray-300 mb-4">Challenge: Demonstrating quality, safety, and innovation in production processes</p>
              <p className="text-gray-400 text-sm mb-4">How our services showcase manufacturing excellence: From production line efficiency to worker expertise, we build trust in your manufacturing capabilities.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Quality control processes and finished product superiority</li>
                <li>• <strong>Day-in-Life Videos:</strong> Factory workers, engineers, and quality assurance teams at work</li>
                <li>• <strong>Business Mini-Movies:</strong> Company growth stories and innovation breakthroughs</li>
                <li>• <strong>Branded Reality Shows:</strong> Following production teams through complex manufacturing challenges</li>
                <li>• <strong>Branded Competitions:</strong> Innovation challenges and efficiency improvement contests</li>
                <li>• <strong>Business Reality Shows:</strong> Factory operations, supply chain management, and production optimization</li>
              </ul>
            </div>

            {/* Hospitality */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Hospitality & Tourism</h3>
              <p className="text-gray-300 mb-4">Challenge: Creating compelling destination experiences that drive bookings</p>
              <p className="text-gray-400 text-sm mb-4">How our services elevate hospitality businesses: From luxury hotel showcases to authentic travel experiences, we inspire wanderlust and drive reservations.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Destination marketing and hotel luxury experience showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Hotel staff, tour guides, and hospitality professionals creating exceptional experiences</li>
                <li>• <strong>Business Mini-Movies:</strong> Destination development stories and cultural heritage narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following hospitality teams through peak season operations and guest experiences</li>
                <li>• <strong>Branded Competitions:</strong> Chef competitions, hospitality excellence awards, and cultural showcases</li>
                <li>• <strong>Business Reality Shows:</strong> Hotel management, resort operations, and tourism industry development</li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Real Estate & Property</h3>
              <p className="text-gray-300 mb-4">Challenge: Making properties irresistible and building agent credibility</p>
              <p className="text-gray-400 text-sm mb-4">How our services transform real estate marketing: From luxury property showcases to agent success stories, we help sell properties faster and build reputations.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Luxury property tours highlighting lifestyle and investment potential</li>
                <li>• <strong>Day-in-Life Videos:</strong> Top-performing agents showing their expertise and client service</li>
                <li>• <strong>Business Mini-Movies:</strong> Property development stories and community transformation narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following real estate teams through high-stakes property deals and client relationships</li>
                <li>• <strong>Branded Competitions:</strong> Property styling challenges and real estate excellence awards</li>
                <li>• <strong>Business Reality Shows:</strong> Real estate agency operations, market analysis, and investment decisions</li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Education & Training</h3>
              <p className="text-gray-300 mb-4">Challenge: Attracting students and showcasing educational outcomes</p>
              <p className="text-gray-400 text-sm mb-4">How our services elevate educational institutions: From student success stories to campus culture, we help institutions attract the right students and build reputation.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Program highlights showcasing career outcomes and learning experiences</li>
                <li>• <strong>Day-in-Life Videos:</strong> Teachers, students, and administrators demonstrating educational excellence</li>
                <li>• <strong>Business Mini-Movies:</strong> Alumni success stories and institutional transformation narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following students through challenging academic programs and real-world applications</li>
                <li>• <strong>Branded Competitions:</strong> Academic competitions, innovation challenges, and student showcase events</li>
                <li>• <strong>Business Reality Shows:</strong> School administration, curriculum development, and educational innovation</li>
              </ul>
            </div>

            {/* Agriculture */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Agriculture & Food</h3>
              <p className="text-gray-300 mb-4">Challenge: Building consumer trust and showcasing sustainable farming practices</p>
              <p className="text-gray-400 text-sm mb-4">How our services strengthen agricultural businesses: From farm-to-table narratives to sustainable practice showcases, we connect consumers with quality food sources.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Farm-to-table journeys highlighting quality, sustainability, and freshness</li>
                <li>• <strong>Day-in-Life Videos:</strong> Farmers, agricultural experts, and food processors demonstrating their craft</li>
                <li>• <strong>Business Mini-Movies:</strong> Agricultural innovation stories and family farm legacy narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following agricultural teams through seasonal challenges and harvest cycles</li>
                <li>• <strong>Branded Competitions:</strong> Best produce contests, sustainable farming awards, and culinary challenges</li>
                <li>• <strong>Business Reality Shows:</strong> Agricultural business operations, supply chain management, and food distribution</li>
              </ul>
            </div>

            {/* Legal Services */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Legal & Professional Services</h3>
              <p className="text-gray-300 mb-4">Challenge: Humanizing legal services and building client trust</p>
              <p className="text-gray-400 text-sm mb-4">How our services enhance legal practice marketing: From client success stories to professional expertise showcases, we make legal services accessible and trustworthy.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Legal service explanations and client testimonial stories</li>
                <li>• <strong>Day-in-Life Videos:</strong> Lawyers, paralegals, and support staff demonstrating their dedication</li>
                <li>• <strong>Business Mini-Movies:</strong> Landmark case victories and firm founding stories</li>
                <li>• <strong>Branded Reality Shows:</strong> Following legal teams through complex cases and client relationships</li>
                <li>• <strong>Branded Competitions:</strong> Legal knowledge competitions and professional excellence awards</li>
                <li>• <strong>Business Reality Shows:</strong> Law firm operations, case strategy development, and legal industry insights</li>
              </ul>
            </div>

            {/* Automotive */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Automotive</h3>
              <p className="text-gray-300 mb-4">Challenge: Creating emotional connections with vehicles and building brand loyalty</p>
              <p className="text-gray-400 text-sm mb-4">How our services accelerate automotive marketing: From performance showcases to lifestyle integration, we make vehicles irresistible and build lasting brand connections.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Vehicle performance, luxury features, and lifestyle integration showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Automotive engineers, designers, and sales professionals at work</li>
                <li>• <strong>Business Mini-Movies:</strong> Brand heritage stories and automotive innovation journeys</li>
                <li>• <strong>Branded Reality Shows:</strong> Following automotive teams through vehicle development and racing challenges</li>
                <li>• <strong>Branded Competitions:</strong> Car shows, racing events, and automotive excellence competitions</li>
                <li>• <strong>Business Reality Shows:</strong> Dealership operations, automotive industry trends, and customer experience innovation</li>
              </ul>
            </div>

            {/* Media & Entertainment */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Media & Entertainment</h3>
              <p className="text-gray-300 mb-4">Challenge: Building audience engagement and showcasing artistic talent</p>
              <p className="text-gray-400 text-sm mb-4">How our services amplify entertainment businesses: From artist showcases to behind-the-scenes content, we create compelling narratives that build fan bases and drive bookings.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Artist promotional content and event marketing showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Musicians, actors, producers, and entertainment professionals in their creative process</li>
                <li>• <strong>Business Mini-Movies:</strong> Artistic journey stories and entertainment company success narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following entertainment teams through production processes and creative challenges</li>
                <li>• <strong>Branded Competitions:</strong> Talent competitions, creative challenges, and entertainment industry showcases</li>
                <li>• <strong>Business Reality Shows:</strong> Entertainment industry operations, artist management, and creative business development</li>
              </ul>
            </div>

            {/* Non-Profit & NGOs */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Non-Profit & NGOs</h3>
              <p className="text-gray-300 mb-4">Challenge: Demonstrating impact and inspiring sustainable funding</p>
              <p className="text-gray-400 text-sm mb-4">How our services amplify social impact: From community transformation stories to donor engagement content, we help organizations secure funding and expand their reach.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Fundraising campaigns and program impact showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Field workers, volunteers, and beneficiaries showing real community impact</li>
                <li>• <strong>Business Mini-Movies:</strong> Organizational founding stories and community transformation narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following NGO teams through community development projects and challenges</li>
                <li>• <strong>Branded Competitions:</strong> Community development challenges and social impact innovations</li>
                <li>• <strong>Business Reality Shows:</strong> NGO operations, funding decisions, and program development strategies</li>
              </ul>
            </div>

            {/* Fashion & Beauty */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">💄</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Fashion & Beauty</h3>
              <p className="text-gray-300 mb-4">Challenge: Creating aspirational brand appeal and driving purchase desire</p>
              <p className="text-gray-400 text-sm mb-4">How our services elevate fashion brands: From runway showcases to beauty transformations, we create content that inspires style choices and drives brand loyalty.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Fashion collections and beauty product showcases with artistic flair</li>
                <li>• <strong>Day-in-Life Videos:</strong> Designers, stylists, makeup artists, and fashion professionals in their creative process</li>
                <li>• <strong>Business Mini-Movies:</strong> Brand founding stories and fashion industry success narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following fashion teams through collection development and fashion shows</li>
                <li>• <strong>Branded Competitions:</strong> Style competitions, beauty challenges, and fashion design contests</li>
                <li>• <strong>Business Reality Shows:</strong> Fashion house operations, trend forecasting, and brand development strategies</li>
              </ul>
            </div>

            {/* Sports & Fitness */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏋️</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Sports & Fitness</h3>
              <p className="text-gray-300 mb-4">Challenge: Inspiring fitness journeys and building athletic credibility</p>
              <p className="text-gray-400 text-sm mb-4">How our services energize sports businesses: From transformation stories to athletic showcases, we create motivational content that drives membership and builds athletic brands.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Fitness facility showcases and athletic performance highlights</li>
                <li>• <strong>Day-in-Life Videos:</strong> Athletes, trainers, coaches, and fitness professionals demonstrating expertise</li>
                <li>• <strong>Business Mini-Movies:</strong> Athletic achievement stories and fitness transformation narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following athletes through training regimens and competitive challenges</li>
                <li>• <strong>Branded Competitions:</strong> Fitness challenges, athletic competitions, and sports excellence showcases</li>
                <li>• <strong>Business Reality Shows:</strong> Sports facility operations, team management, and athletic program development</li>
              </ul>
            </div>

            {/* Furniture & Home Décor */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🪑</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Furniture & Home Décor</h3>
              <p className="text-gray-300 mb-4">Challenge: Showcasing craftsmanship and inspiring home transformation</p>
              <p className="text-gray-400 text-sm mb-4">How our services elevate furniture businesses: From artisan craftsmanship to home makeovers, we create content that drives furniture sales and builds brand reputation.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Furniture collections and home transformation showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Craftsmen, designers, and furniture makers demonstrating their skills</li>
                <li>• <strong>Business Mini-Movies:</strong> Artisan stories and furniture business success narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following furniture teams through design processes and custom projects</li>
                <li>• <strong>Branded Competitions:</strong> Home makeover challenges and furniture design contests</li>
                <li>• <strong>Business Reality Shows:</strong> Furniture showroom operations, design trends, and manufacturing processes</li>
              </ul>
            </div>

            {/* Household Goods */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Household Goods & Appliances</h3>
              <p className="text-gray-300 mb-4">Challenge: Demonstrating product value and building consumer trust</p>
              <p className="text-gray-400 text-sm mb-4">How our services boost household goods brands: From product demonstrations to family lifestyle integration, we create content that drives purchases and builds brand loyalty.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Product functionality and family lifestyle integration showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Families using household products in real daily situations</li>
                <li>• <strong>Business Mini-Movies:</strong> Brand innovation stories and customer satisfaction narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following families through home improvement and organization challenges</li>
                <li>• <strong>Branded Competitions:</strong> Home organization challenges and household efficiency contests</li>
                <li>• <strong>Business Reality Shows:</strong> Appliance retail operations, product development, and customer service excellence</li>
              </ul>
            </div>

            {/* FMCG - Food & Daily Essentials */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">FMCG - Food & Daily Essentials</h3>
              <p className="text-gray-300 mb-4">Challenge: Building brand preference in competitive everyday product markets</p>
              <p className="text-gray-400 text-sm mb-4">How our services strengthen FMCG brands: From cooking demonstrations to family care stories, we create content that builds brand loyalty for flour, cooking oil, detergents, and soap.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Product quality demonstrations and family usage scenarios for flour, oil, detergents</li>
                <li>• <strong>Day-in-Life Videos:</strong> Families cooking with your flour/oil, mothers caring with your detergents/soap</li>
                <li>• <strong>Business Mini-Movies:</strong> Brand heritage stories and quality assurance narratives for FMCG products</li>
                <li>• <strong>Branded Reality Shows:</strong> Following families through daily routines featuring your products naturally</li>
                <li>• <strong>Branded Competitions:</strong> Cooking competitions with your flour/oil, cleaning challenges with detergents</li>
                <li>• <strong>Business Reality Shows:</strong> FMCG production lines, quality control, and distribution operations</li>
              </ul>
            </div>

            {/* Construction & Building Materials */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Construction & Building Materials</h3>
              <p className="text-gray-300 mb-4">Challenge: Demonstrating product durability and project success</p>
              <p className="text-gray-400 text-sm mb-4">How our services build construction businesses: From project showcases to material quality demonstrations, we create content that builds contractor trust and drives sales.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Construction project showcases and material durability demonstrations</li>
                <li>• <strong>Day-in-Life Videos:</strong> Contractors, architects, and construction workers using quality materials</li>
                <li>• <strong>Business Mini-Movies:</strong> Major project success stories and construction company growth narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following construction teams through complex building projects</li>
                <li>• <strong>Branded Competitions:</strong> Construction excellence awards and building innovation challenges</li>
                <li>• <strong>Business Reality Shows:</strong> Construction company operations, project management, and material sourcing</li>
              </ul>
            </div>

            {/* Import/Export & Trading */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Import/Export & Trading</h3>
              <p className="text-gray-300 mb-4">Challenge: Building trust in international trade relationships and logistics</p>
              <p className="text-gray-400 text-sm mb-4">How our services expand trading businesses: From logistics showcases to international partnerships, we create content that builds trust and attracts new trading relationships.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Logistics capabilities and international trade success showcases</li>
                <li>• <strong>Day-in-Life Videos:</strong> Traders, logistics coordinators, and international business professionals at work</li>
                <li>• <strong>Business Mini-Movies:</strong> International partnership stories and trade success narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following trading teams through complex international deals and logistics challenges</li>
                <li>• <strong>Branded Competitions:</strong> Export excellence awards and trade innovation challenges</li>
                <li>• <strong>Business Reality Shows:</strong> Trading company operations, international negotiations, and supply chain management</li>
              </ul>
            </div>

            {/* Beauty & Cosmetics */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold lazy-load">
              <div className="text-cinematic-gold text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Beauty & Cosmetics</h3>
              <p className="text-gray-300 mb-4">Challenge: Creating aspirational beauty content that drives product desire and brand loyalty</p>
              <p className="text-gray-400 text-sm mb-4">How our services enhance beauty brands: From makeup tutorials to transformation stories, we create content that showcases lipstick, makeup, wigs, body lotions, perfumes, and the full range of beauty products.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• <strong>Cinematic Video Ads:</strong> Luxury lipstick collections, makeup tutorials, wig styling showcases, and perfume lifestyle integration</li>
                <li>• <strong>Day-in-Life Videos:</strong> Makeup artists, beauty consultants, and salon professionals demonstrating product expertise</li>
                <li>• <strong>Business Mini-Movies:</strong> Beauty brand founding stories, product development journeys, and customer transformation narratives</li>
                <li>• <strong>Branded Reality Shows:</strong> Following beauty teams through makeover challenges, salon operations, and customer transformations</li>
                <li>• <strong>Branded Competitions:</strong> Makeup artistry contests, beauty transformation challenges, and product innovation showcases</li>
                <li>• <strong>Business Reality Shows:</strong> Beauty salon operations, cosmetics retail management, and beauty industry trend forecasting</li>
              </ul>
            </div>
          </div>
          
          {/* CTA after Industry Expertise section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Ready to create industry-specific cinematic content for your business?</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Get Industry-Specific Quote
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Production Capabilities
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            Professional cinema-grade equipment and cutting-edge technology ensure every frame meets the highest industry standards.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Equipment & Technology */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Camera & Equipment</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-4">Cinema Cameras</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• RED Digital Cinema Cameras</li>
                      <li>• Sony FX Series (FX6, FX9)</li>
                      <li>• Blackmagic URSA Mini Pro</li>
                      <li>• Canon EOS C300 Mark III</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-4">Aerial & Specialty</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• DJI Inspire 2 & Air 2S Drones</li>
                      <li>• Gimbal stabilization systems</li>
                      <li>• Slider & crane equipment</li>
                      <li>• 360° camera systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lighting & Audio */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Lighting & Audio</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-4">Professional Lighting</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• ARRI & Aputure LED panels</li>
                      <li>• Softbox & diffusion systems</li>
                      <li>• Color temperature control</li>
                      <li>• Portable studio setup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-4">Audio Systems</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Wireless lavalier microphones</li>
                      <li>• Boom pole & shotgun mics</li>
                      <li>• Multi-track audio recording</li>
                      <li>• Noise reduction technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Post-Production Suite */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Post-Production Suite</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h4 className="text-xl font-bold text-cinematic-gold mb-4">Software & Technology</h4>
                <ul className="text-gray-300 space-y-3">
                  <li>• DaVinci Resolve Studio (Color Grading)</li>
                  <li>• Adobe Creative Suite (Premiere, After Effects)</li>
                  <li>• Avid Media Composer</li>
                  <li>• Cinema 4D (3D Graphics & Animation)</li>
                  <li>• Pro Tools (Audio Post-Production)</li>
                  <li>• RED Raw workflow optimization</li>
                </ul>
              </div>
            </div>

            {/* Studio & Facilities */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Studio & Facilities</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h4 className="text-xl font-bold text-cinematic-gold mb-4">Production Facilities</h4>
                <ul className="text-gray-300 space-y-3">
                  <li>• Green screen studio space</li>
                  <li>• Professional lighting grid</li>
                  <li>• Makeup & wardrobe rooms</li>
                  <li>• Equipment storage & prep areas</li>
                  <li>• Client viewing & meeting rooms</li>
                  <li>• On-site parking & accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-cinematic-gold mb-12">Technical Specifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cinematic-gray p-6 rounded-lg glow-gold text-center">
                <h4 className="text-xl font-bold text-cinematic-gold mb-4">Video Quality</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Up to 8K resolution capability</li>
                  <li>• 4K standard delivery</li>
                  <li>• HDR & Wide Color Gamut</li>
                  <li>• Multiple format outputs</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-6 rounded-lg glow-gold text-center">
                <h4 className="text-xl font-bold text-cinematic-gold mb-4">Frame Rates</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 24fps (Cinematic standard)</li>
                  <li>• 60fps (Smooth motion)</li>
                  <li>• 120fps (Slow motion)</li>
                  <li>• Custom frame rates</li>
                </ul>
              </div>
              <div className="bg-cinematic-gray p-6 rounded-lg glow-gold text-center">
                <h4 className="text-xl font-bold text-cinematic-gold mb-4">Delivery Formats</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Broadcast quality files</li>
                  <li>• Web-optimized versions</li>
                  <li>• Social media formats</li>
                  <li>• RAW footage backup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Journey */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Your Client Experience Journey
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            From first contact to final delivery, we ensure a seamless, professional experience that exceeds your expectations at every touchpoint.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Communication & Project Management */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Communication & Updates</h3>
              <div className="space-y-6">
                <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <h4 className="text-xl font-bold text-cinematic-gold mb-3">Dedicated Project Manager</h4>
                  <p className="text-gray-300">Your single point of contact throughout the entire project, ensuring clear communication and timely updates.</p>
                </div>
                <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <h4 className="text-xl font-bold text-cinematic-gold mb-3">Weekly Progress Reports</h4>
                  <p className="text-gray-300">Detailed updates on project milestones, upcoming activities, and any adjustments needed to stay on track.</p>
                </div>
                <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                  <h4 className="text-xl font-bold text-cinematic-gold mb-3">Real-Time Project Portal</h4>
                  <p className="text-gray-300">Access to our client dashboard where you can view progress, approve content, and communicate with the team.</p>
                </div>
              </div>
            </div>

            {/* Timeline & Milestones */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Project Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold">Initial Consultation (Day 1-2)</h4>
                    <p className="text-gray-300 text-sm">Strategy session, goal alignment, and project kickoff meeting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold">Creative Approval (Week 1)</h4>
                    <p className="text-gray-300 text-sm">Script review, storyboard approval, and production planning sign-off</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold">Production Updates (Week 2-3)</h4>
                    <p className="text-gray-300 text-sm">Daily shoot reports, behind-the-scenes content, and progress photos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold">Review Cycles (Week 4-5)</h4>
                    <p className="text-gray-300 text-sm">First cut preview, revision rounds, and final approval process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1">5</div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold">Final Delivery (Week 6)</h4>
                    <p className="text-gray-300 text-sm">Complete video package, multiple formats, and launch support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-6 text-center">What You Can Expect</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">🎯</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Clear Expectations</h4>
                <p className="text-gray-300 text-sm">Detailed project scope and timeline ensure everyone is aligned from day one.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">🤝</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Partnership Approach</h4>
                <p className="text-gray-300 text-sm">We become an extension of your team, working collaboratively toward shared goals.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">📈</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Continuous Improvement</h4>
                <p className="text-gray-300 text-sm">Regular feedback loops ensure the project evolves to exceed expectations.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">🚀</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Launch Support</h4>
                <p className="text-gray-300 text-sm">Post-delivery support to ensure successful launch and maximum impact.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">💬</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Direct Communication</h4>
                <p className="text-gray-300 text-sm">24/7 access to your dedicated project manager for real-time updates and quick decisions.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-4">🎬</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Creative Excellence</h4>
                <p className="text-gray-300 text-sm">Award-winning creative direction that elevates your brand above the competition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Our Quality Guarantee
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            We stand behind every frame we create with industry-leading standards, comprehensive insurance, and an unwavering commitment to excellence.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Quality Standards */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Professional Standards</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-cinematic-gold mr-3 mt-1">🏆</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Cinema Industry Standards</h4>
                      <p className="text-gray-300 text-sm">All productions adhere to international cinema and broadcast quality standards</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cinematic-gold mr-3 mt-1">🎓</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Certified Professionals</h4>
                      <p className="text-gray-300 text-sm">Our team holds industry certifications and continues ongoing professional development</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cinematic-gold mr-3 mt-1">✅</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Quality Control Process</h4>
                      <p className="text-gray-300 text-sm">Multi-stage review process ensures every deliverable meets our high standards</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cinematic-gold mr-3 mt-1">📋</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">ISO Compliance</h4>
                      <p className="text-gray-300 text-sm">Following international quality management standards for consistent excellence</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Revision Policy */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Revision & Satisfaction Policy</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-3">Unlimited Revisions Promise</h4>
                    <p className="text-gray-300 mb-4">We're not satisfied until you are. Included revisions at each approval stage:</p>
                    <ul className="text-gray-400 space-y-1 text-sm">
                      <li>• Script & concept: Unlimited revisions</li>
                      <li>• First cut: 3 revision rounds included</li>
                      <li>• Final cut: 2 revision rounds included</li>
                      <li>• Additional revisions at minimal cost</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-3">100% Satisfaction Guarantee</h4>
                    <p className="text-gray-300 text-sm">If you're not completely satisfied with the final product, we'll work until it's perfect or provide a full refund.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance & Protection */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Insurance & Liability</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">🛡️</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Full Production Insurance</h4>
                      <p className="text-gray-300 text-sm">Comprehensive coverage for equipment, locations, and personnel</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">📄</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Professional Liability</h4>
                      <p className="text-gray-300 text-sm">Errors & omissions insurance protects your investment</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">🔒</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Data Protection</h4>
                      <p className="text-gray-300 text-sm">Secure handling and storage of all project materials and client data</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Delivery Guarantees</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">⏰</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">On-Time Delivery</h4>
                      <p className="text-gray-300 text-sm">Projects delivered on schedule or 10% discount on final invoice</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">💾</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">Backup & Archive</h4>
                      <p className="text-gray-300 text-sm">All project files backed up and archived for 2 years minimum</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="text-cinematic-gold mr-3">🔄</div>
                    <div>
                      <h4 className="text-lg font-bold text-cinematic-gold">File Recovery</h4>
                      <p className="text-gray-300 text-sm">Guaranteed file recovery and re-delivery if needed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Onboarding Process */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Client Onboarding Process
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            Once you choose Cinematic, our comprehensive onboarding process ensures a smooth transition from contract signing to project kickoff.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* After Contract Signing */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Immediate Next Steps</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1 text-sm">24h</div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-2">Welcome Package</h4>
                    <p className="text-gray-300">Comprehensive project handbook, team introductions, and contact information delivered within 24 hours of contract signing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1 text-sm">48h</div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-2">Project Manager Assignment</h4>
                    <p className="text-gray-300">Your dedicated project manager reaches out to schedule the kickoff meeting and establish communication preferences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold mr-4 mt-1 text-sm">72h</div>
                  <div>
                    <h4 className="text-xl font-bold text-cinematic-gold mb-2">Portal Access Setup</h4>
                    <p className="text-gray-300">Secure client portal credentials and project management system access for real-time updates and file sharing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kickoff Meeting Structure */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Kickoff Meeting Agenda</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold mb-2">1. Team Introductions (15 min)</h4>
                    <p className="text-gray-300 text-sm">Meet your creative team, project manager, and key personnel who will be working on your project.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold mb-2">2. Project Deep Dive (30 min)</h4>
                    <p className="text-gray-300 text-sm">Detailed discussion of goals, target audience, brand guidelines, and creative vision alignment.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold mb-2">3. Timeline Walkthrough (20 min)</h4>
                    <p className="text-gray-300 text-sm">Review project schedule, key milestones, approval points, and delivery dates.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-cinematic-gold mb-2">4. Communication Setup (15 min)</h4>
                    <p className="text-gray-300 text-sm">Establish meeting schedules, reporting preferences, and emergency contact procedures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Documentation & Legal */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Documentation & Requirements</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h4 className="text-xl font-bold text-cinematic-gold mb-6">Required Documentation</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cinematic-gold mr-3">📋</span>
                    <div>
                      <span className="font-bold">Brand Assets Package:</span>
                      <p className="text-sm text-gray-400">Logos, color palettes, fonts, and brand guidelines</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinematic-gold mr-3">📝</span>
                    <div>
                      <span className="font-bold">Content Requirements:</span>
                      <p className="text-sm text-gray-400">Key messages, scripts, reference materials, and inspiration</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinematic-gold mr-3">📄</span>
                    <div>
                      <span className="font-bold">Legal Clearances:</span>
                      <p className="text-sm text-gray-400">Location permissions, talent releases, and music licensing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cinematic-gold mr-3">🎭</span>
                    <div>
                      <span className="font-bold">Casting Information:</span>
                      <p className="text-sm text-gray-400">Talent preferences, employee participants, and spokesperson details</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Management Tools */}
            <div>
              <h3 className="text-3xl font-bold text-cinematic-gold mb-8">Project Management & Communication</h3>
              <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
                <h4 className="text-xl font-bold text-cinematic-gold mb-6">Communication Channels</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-cinematic-gold text-2xl mr-4">💻</div>
                    <div>
                      <h5 className="font-bold text-cinematic-gold">Client Portal</h5>
                      <p className="text-gray-300 text-sm">Central hub for all project files, approvals, and updates</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-cinematic-gold text-2xl mr-4">📱</div>
                    <div>
                      <h5 className="font-bold text-cinematic-gold">WhatsApp Group</h5>
                      <p className="text-gray-300 text-sm">Quick updates, behind-the-scenes content, and urgent communication</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-cinematic-gold text-2xl mr-4">📞</div>
                    <div>
                      <h5 className="font-bold text-cinematic-gold">Scheduled Check-ins</h5>
                      <p className="text-gray-300 text-sm">Weekly video calls and milestone review meetings</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-cinematic-gold text-2xl mr-4">📧</div>
                    <div>
                      <h5 className="font-bold text-cinematic-gold">Email Reports</h5>
                      <p className="text-gray-300 text-sm">Detailed progress reports and formal project updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Preparation */}
          <div className="mt-16 bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold">
            <h3 className="text-2xl font-bold text-cinematic-gold mb-6 text-center">Setting You Up for Success</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Clear Expectations</h4>
                <p className="text-gray-300 text-sm">Detailed project scope and timeline ensure everyone is aligned from day one.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Partnership Approach</h4>
                <p className="text-gray-300 text-sm">We become an extension of your team, working collaboratively toward shared goals.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-3">📈</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Continuous Improvement</h4>
                <p className="text-gray-300 text-sm">Regular feedback loops ensure the project evolves to exceed expectations.</p>
              </div>
              <div className="text-center">
                <div className="text-cinematic-gold text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-cinematic-gold mb-2">Launch Support</h4>
                <p className="text-gray-300 text-sm">Post-delivery support to ensure successful launch and maximum impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Timeline */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-cinematic-gold mb-12 md:mb-16">
            How We Create Cinematic Magic
          </h2>
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cinematic-gold to-transparent"></div>
            
            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-cinematic-gold to-transparent"></div>
            
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">1</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Discovery & Strategy</h3>
                      <p className="text-gray-300 text-sm">We dive deep into your brand, goals, and target audience to craft the perfect cinematic strategy.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">1. Discovery & Strategy</h3>
                      <p className="text-gray-300">We dive deep into your brand, goals, and target audience to craft the perfect cinematic strategy.</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">1</div>
                  <div className="w-5/12"></div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">2</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Creative Development</h3>
                      <p className="text-gray-300 text-sm">Our creative team develops compelling scripts, storyboards, and visual concepts tailored to your vision.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12"></div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">2</div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">2. Creative Development</h3>
                      <p className="text-gray-300">Our creative team develops compelling scripts, storyboards, and visual concepts tailored to your vision.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">3</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Pre-Production</h3>
                      <p className="text-gray-300 text-sm">Location scouting, casting, equipment planning, and scheduling to ensure flawless execution.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">3. Pre-Production</h3>
                      <p className="text-gray-300">Location scouting, casting, equipment planning, and scheduling to ensure flawless execution.</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">3</div>
                  <div className="w-5/12"></div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">4</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Cinematic Production</h3>
                      <p className="text-gray-300 text-sm">Professional filming with cinema-grade equipment, expert lighting, and artistic direction.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12"></div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">4</div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">4. Cinematic Production</h3>
                      <p className="text-gray-300">Professional filming with cinema-grade equipment, expert lighting, and artistic direction.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">5</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Post-Production Magic</h3>
                      <p className="text-gray-300 text-sm">Expert editing, color grading, sound design, and visual effects to create the final masterpiece.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">5. Post-Production Magic</h3>
                      <p className="text-gray-300">Expert editing, color grading, sound design, and visual effects to create the final masterpiece.</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">5</div>
                  <div className="w-5/12"></div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex items-start md:items-center md:justify-between">
                {/* Mobile layout */}
                <div className="md:hidden flex items-start space-x-6">
                  <div className="w-16 h-16 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">6</div>
                  <div className="flex-1">
                    <div className="bg-cinematic-gray p-4 rounded-lg glow-gold">
                      <h3 className="text-xl font-bold text-cinematic-gold mb-3">Delivery & Launch</h3>
                      <p className="text-gray-300 text-sm">Final delivery with multiple formats and ongoing support for successful launch and distribution.</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop layout */}
                <div className="hidden md:flex md:items-center md:justify-between md:w-full">
                  <div className="w-5/12"></div>
                  <div className="w-12 h-12 bg-cinematic-gold rounded-full flex items-center justify-center text-black font-bold relative z-10">6</div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
                      <h3 className="text-2xl font-bold text-cinematic-gold mb-4">6. Delivery & Launch</h3>
                      <p className="text-gray-300">Final delivery with multiple formats and ongoing support for successful launch and distribution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA after How We Create Cinematic Magic section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Ready to start your cinematic video production journey?</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Start Your Project Today
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
      

      {/* Trusted by Leading Brands */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-gray to-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Our Portfolio
          </h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-80 max-w-4xl mx-auto">
             <div className="bg-cinematic-gray p-6 rounded-lg text-center glow-gold">
               <div className="text-2xl font-bold text-cinematic-gold">Watches.co.ke</div>
               <div className="text-gray-400 text-sm mt-2">Luxury Watch E-commerce</div>
             </div>
             <div className="bg-cinematic-gray p-6 rounded-lg text-center glow-gold">
               <div className="text-2xl font-bold text-cinematic-gold">Wholetail.co.ke</div>
               <div className="text-gray-400 text-sm mt-2">B2B Marketplace</div>
             </div>
             <div className="bg-cinematic-gray p-6 rounded-lg text-center glow-gold">
               <div className="text-2xl font-bold text-cinematic-gold">Celebrichat.com</div>
               <div className="text-gray-400 text-sm mt-2">Celebrity Platform</div>
             </div>
           </div>
           
           {/* CTA after Portfolio section */}
           <div className="text-center mt-12">
             <p className="text-xl text-gray-300 mb-6">Inspired by our work? Let's create something amazing for your brand</p>
             <button 
               onClick={() => navigate('/contact')}
               className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
             >
               Get Your Free Quote
             </button>
             <button 
               onClick={() => navigate('/portfolio')}
               className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
             >
               See More Projects
             </button>
           </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 bg-cinematic-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glow-gold bg-cinematic-gray p-8 rounded-lg lazy-load">
              <p className="text-gray-300 text-lg mb-6 italic">
                "Cinematic turned our product launch into a masterpiece! The cinematic quality and storytelling approach helped us achieve a 300% increase in sales inquiries."
              </p>
              <div className="text-center">
                <p className="text-cinematic-gold font-bold">Jane Muthoni</p>
                <p className="text-gray-400">CEO, Ecommerce Brand</p>
              </div>
            </div>
            <div className="glow-gold bg-cinematic-gray p-8 rounded-lg lazy-load">
              <p className="text-gray-300 text-lg mb-6 italic">
                "The team at Cinematic delivered beyond our expectations. Their branded reality show concept generated massive engagement and positioned us as industry leaders."
              </p>
              <div className="text-center">
                <p className="text-cinematic-gold font-bold">David Kiprotich</p>
                <p className="text-gray-400">Marketing Director, Retail Shop</p>
              </div>
            </div>
          </div>
          
          {/* CTA after Testimonials section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Join our satisfied clients and transform your business with cinematic videos</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Start Your Transformation
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              Learn About Our Process
            </button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cinematic-black to-cinematic-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-cinematic-gold mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">How long does a typical video production take?</h3>
              <p className="text-gray-300">Production timelines vary by project complexity. Simple videos take 2-3 weeks, while comprehensive campaigns can take 4-8 weeks from concept to delivery.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">What's included in your video production packages?</h3>
              <p className="text-gray-300">All packages include pre-production planning, professional filming, post-production editing, color grading, sound design, and final delivery in multiple formats.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Do you work with businesses of all sizes?</h3>
              <p className="text-gray-300">Yes! We work with startups, SMEs, and large corporations. Our flexible packages and scalable services accommodate businesses of every size and budget.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Can you help with video marketing strategy?</h3>
              <p className="text-gray-300">Absolutely! We provide strategic guidance on video content planning, platform optimization, and distribution strategies to maximize your ROI.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">What makes your videos "cinematic"?</h3>
              <p className="text-gray-300">We use professional cinema-grade equipment, artistic lighting techniques, advanced color grading, and storytelling methods typically seen in films and high-end commercials.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">How do you apply global show techniques to Kenyan businesses?</h3>
              <p className="text-gray-300">We've studied successful formats like MasterChef's brand integration and Netflix reality shows to adapt their proven storytelling and brand placement techniques for the Kenyan market, creating content that resonates locally while maintaining international quality standards.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">What are branded reality shows and competitions?</h3>
              <p className="text-gray-300">These are reality-style productions where your business, products, or services are integrated into compelling narratives. Think MasterChef with kitchen appliances, but for your industry - creating engaging content where your brand becomes essential to the story.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Do you have experience in my specific industry?</h3>
              <p className="text-gray-300">We work across 21+ industries including technology, healthcare, finance, real estate, agriculture, FMCG, furniture, construction, and more. Our approach involves understanding your industry's unique challenges and tailoring our cinematic solutions accordingly.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">What's the difference between your cinematic approach and traditional video production?</h3>
              <p className="text-gray-300">Traditional video production focuses on basic recording and editing. Our cinematic approach uses Hollywood-level equipment, artistic direction, advanced post-production, and compelling storytelling that delivers 300% higher engagement rates.</p>
            </div>
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <h3 className="text-xl font-bold text-cinematic-gold mb-3">Can you create day-in-the-life videos for our team?</h3>
              <p className="text-gray-300">Yes! Day-in-the-life videos are one of our specialties. We create cinematic documentaries that showcase your team's expertise, company culture, and behind-the-scenes operations in a compelling, authentic way that builds trust and humanizes your brand.</p>
            </div>
          </div>
          
          {/* CTA after FAQ section */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Got your questions answered? Let's discuss your cinematic video project</p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-8 py-3 mr-4 mb-4 md:mb-0"
            >
              Schedule a Call
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-transparent border-2 border-cinematic-gold text-cinematic-gold px-8 py-3 text-lg font-bold rounded-lg hover:bg-cinematic-gold hover:text-cinematic-black transition-all duration-300 glow-gold"
            >
              Browse Services
            </button>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cinematic-gold to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cinematic-black mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-cinematic-black mb-8 opacity-90">
            Join hundreds of businesses that have elevated their brand with our cinematic video production services.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-cinematic-black text-cinematic-gold px-8 py-4 text-xl font-bold rounded-lg hover:bg-cinematic-gray transition-all duration-300 glow-gold focus-visible"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home 