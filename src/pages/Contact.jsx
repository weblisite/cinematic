import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        })
      } else {
        setSubmitMessage('Something went wrong. Please try again or contact us directly.')
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16">
          Ready to create something cinematic? Let's talk!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-2xl font-bold text-cinematic-gold mb-6">Get Your Free Quote</h2>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('Thank you') 
                  ? 'bg-green-900 text-green-200 border border-green-700' 
                  : 'bg-red-900 text-red-200 border border-red-700'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                  placeholder="Your mobile contact"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                  placeholder="Your company or business name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                >
                  <option value="">Select a service</option>
                  <option value="sponsored-content">Sponsored Content Integration (KSh 50K per episode)</option>
                  <option value="cinematic-ads">Cinematic Video Ads (KSh 100K+)</option>
                  <option value="day-in-life">Day in the Life Videos (KSh 150K+)</option>
                  <option value="mini-movies">Business Mini-Movies (KSh 200K+)</option>
                  <option value="business-reality">Business Reality Shows (KSh 300K+)</option>
                  <option value="branded-competitions">Branded Competitions (KSh 400K+)</option>
                  <option value="branded-reality">Branded Reality Shows (KSh 500K+)</option>
                  <option value="other">Other / Custom Quote</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-cinematic-black border border-gray-600 rounded-lg focus:border-cinematic-gold focus:outline-none text-white"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-lg focus-visible ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-cinematic-gold mr-3" />
                <h3 className="text-xl font-bold text-cinematic-gold">Phone</h3>
              </div>
              <p className="text-gray-300">+254 708 901 911</p>
              <p className="text-gray-400 text-sm">Monday - Friday, 9 AM - 6 PM EAT</p>
            </div>
            
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-cinematic-gold mr-3" />
                <h3 className="text-xl font-bold text-cinematic-gold">Email</h3>
              </div>
              <p className="text-gray-300">contact@cinematic.co.ke</p>
              <p className="text-gray-400 text-sm">We respond within 24 hours</p>
            </div>
            
            <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cinematic-gold mr-3" />
                <h3 className="text-xl font-bold text-cinematic-gold">Location</h3>
              </div>
              <p className="text-gray-300">Westlands, Nairobi</p>
              <p className="text-gray-300">Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 