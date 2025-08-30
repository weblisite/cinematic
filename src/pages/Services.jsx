import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          Our Cinematic Services
        </h1>
        <p className="text-xl text-center text-gray-300 mb-8">
          Professional cinematic video production services tailored for Kenyan businesses
        </p>
        <div className="text-center mb-16 bg-gradient-to-r from-cinematic-gold/10 to-cinematic-black p-6 rounded-lg glow-gold">
          <p className="text-lg text-gray-300 italic">
            <strong className="text-cinematic-gold">"Studying the success of MasterChef's brand integration, Netflix shows like Selling Sunset, and companies that are active on social media - we adapt their proven techniques for the Kenyan market."</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematic Video Ads</h2>
            <p className="text-gray-300 mb-4">Drive sales with cinematic ads that captivate and convert your audience into customers.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 300,000</p>
            <Link 
              to="/services/cinematic-video-ads" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Day in the Life Videos</h2>
            <p className="text-gray-300 mb-4">Cinematic day-in-the-life documentaries featuring your business personnel and employees.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 450,000</p>
            <Link 
              to="/services/day-in-life-videos" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Business Mini-Movies</h2>
            <p className="text-gray-300 mb-4">Tell your brand's story with compelling cinematic mini-documentaries that showcase your business journey.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 600,000</p>
            <Link 
              to="/services/business-mini-movies" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Reality Shows</h2>
            <p className="text-gray-300 mb-4">High-production reality shows with your business brand infused in the show.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 900,000</p>
            <Link 
              to="/services/branded-reality-shows" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Branded Competitions</h2>
            <p className="text-gray-300 mb-4">Competition series with your product infused in the competition.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 1,200,000</p>
            <Link 
              to="/services/branded-competitions" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-4">Business Reality Shows</h2>
            <p className="text-gray-300 mb-4">Reality shows and drama series showcasing your company culture.</p>
            <p className="text-cinematic-gold font-bold text-lg mb-4">Starting at KSh 1,500,000</p>
            <Link 
              to="/services/business-reality-shows" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-2 rounded-lg font-bold hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Premium Service */}
        <div className="bg-gradient-to-r from-cinematic-gold/20 to-cinematic-black p-8 rounded-lg glow-gold mb-12">
          <h2 className="text-3xl font-bold text-cinematic-gold mb-4 text-center">Sponsored Content Integration</h2>
          <p className="text-gray-300 mb-6 text-center text-lg">
            Get your brand featured in our high-quality cinematic content across our main video channels with seamless integration.
          </p>
          <div className="text-center">
            <h3 className="text-xl font-bold text-cinematic-gold mb-2">Channel Sponsorship</h3>
            <p className="text-gray-300 mb-3">Your brand seamlessly integrated into our cinematic episodes and video content</p>
            <p className="text-cinematic-gold font-bold text-2xl mb-6">KSh 150,000 per episode</p>
            <Link 
              to="/services/sponsored-content-integration" 
              className="inline-block bg-cinematic-gold text-cinematic-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-cinematic-gold/80 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Ready to Transform Your Business Story?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Contact us today for a free consultation and custom quote based on your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary px-8 py-4 text-lg inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services 