import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          About Cinematic
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-4xl mx-auto">
          We are Kenya's premier video production agency, dedicated to creating cinematic content that elevates brands and tells compelling stories.
        </p>
        
        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              To transform how Kenyan businesses connect with their audiences through the power of cinematic storytelling. 
              We believe every brand has a unique story worth telling, and we're here to bring those stories to life with 
              professional quality and creative excellence.
            </p>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="mb-20">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Our Approach</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              We combine cutting-edge technology with creative expertise to deliver video content that not only looks 
              stunning but drives real business results. Our team of passionate professionals brings years of experience 
              in commercial video production, ensuring your brand's story is told with the impact it deserves.
            </p>
          </div>
        </section>
        
        {/* Our Promise Section */}
        <section className="mb-20">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Our Promise</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Every project receives our unwavering commitment to excellence - from on-time delivery and cinema-quality standards to transparent communication and complete client satisfaction. Your success is our guarantee.
            </p>
          </div>
        </section>
        
        {/* Company Stats */}
        <section className="grid md:grid-cols-4 gap-8 text-center mb-20">
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">15</div>
            <div className="text-gray-300">Films in Pipeline</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">10+</div>
            <div className="text-gray-300">Brands Integrated</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">10X</div>
            <div className="text-gray-300">Views Generated</div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cinematic-gold to-yellow-600 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-black mb-6">
              Ready to Work with Kenya's Premier Video Production Team?
            </h2>
            <p className="text-xl text-cinematic-black mb-8 opacity-90 leading-relaxed">
              Join our growing family of successful clients and discover how our cinematic storytelling approach can transform your brand's presence and drive real business results.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact"
                className="bg-cinematic-black text-cinematic-gold px-8 py-4 text-xl font-bold rounded-lg hover:bg-cinematic-gray transition-all duration-300 glow-gold"
              >
                Start Your Project Today
              </Link>
              <Link 
                to="/portfolio"
                className="border-2 border-cinematic-black text-cinematic-black px-8 py-4 text-xl font-bold rounded-lg hover:bg-cinematic-black hover:text-cinematic-gold transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cinematic-black opacity-80">
              <div className="flex items-center gap-2">
                <span className="text-cinematic-black">✓</span>
                <span>Free Strategy Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cinematic-black">✓</span>
                <span>Custom Quote Within 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cinematic-black">✓</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 