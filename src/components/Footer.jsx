import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-cinematic-black border-t border-cinematic-gold">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-cinematic-gold mb-4">Cinematic</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kenya's premier cinematic video production agency, creating Hollywood-quality content that transforms businesses through compelling storytelling and visual excellence.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <span className="text-cinematic-gold mr-2">📍</span>
                Westlands, Nairobi, Kenya
              </p>
              <p className="text-gray-400 flex items-center">
                <span className="text-cinematic-gold mr-2">📞</span>
                +254 708 901 911
              </p>
              <p className="text-gray-400 flex items-center">
                <span className="text-cinematic-gold mr-2">✉️</span>
                                  antony@cinematic.co.ke
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-cinematic-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/cinematic-video-ads" className="text-gray-300 hover:text-cinematic-gold transition-colors">Cinematic Video Ads</Link></li>
              <li><Link to="/services/day-in-life-videos" className="text-gray-300 hover:text-cinematic-gold transition-colors">Day-in-Life Videos</Link></li>
              <li><Link to="/services/business-mini-movies" className="text-gray-300 hover:text-cinematic-gold transition-colors">Business Mini-Movies</Link></li>
              <li><Link to="/services/branded-reality-shows" className="text-gray-300 hover:text-cinematic-gold transition-colors">Branded Reality Shows</Link></li>
              <li><Link to="/services/branded-competitions" className="text-gray-300 hover:text-cinematic-gold transition-colors">Branded Competitions</Link></li>
              <li><Link to="/services/business-reality-shows" className="text-gray-300 hover:text-cinematic-gold transition-colors">Business Reality Shows</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-cinematic-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-cinematic-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cinematic-gold transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-cinematic-gold transition-colors">Portfolio</Link></li>
                              <li><Link to="/content-hub" className="text-gray-300 hover:text-cinematic-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cinematic-gold transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cinematic-gold transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold text-cinematic-gold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Subscribe for industry insights and updates</p>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 bg-cinematic-gray text-gray-300 rounded-lg border border-cinematic-gold/30 focus:outline-none focus:border-cinematic-gold"
              />
              <button className="w-full mt-3 bg-cinematic-gold text-cinematic-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cinematic-gold transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-cinematic-gold transition-colors">📸</a>
              <a href="#" className="text-gray-400 hover:text-cinematic-gold transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-cinematic-gold transition-colors">💼</a>
              <a href="#" className="text-gray-400 hover:text-cinematic-gold transition-colors">📺</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cinematic-gold/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 lg:mb-0">
              © 2025 Cinematic Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cinematic-gold transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-cinematic-gold transition-colors text-sm">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-cinematic-gold transition-colors text-sm">Cookie Policy</Link>
              <Link to="/careers" className="text-gray-400 hover:text-cinematic-gold transition-colors text-sm">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 