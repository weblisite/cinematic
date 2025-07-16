import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-cinematic-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          Privacy Policy
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>
        
        {/* Information Collection */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-cinematic-gold">Personal Information:</strong> We collect information you provide directly to us, such as when you fill out our contact form, request a quote, or subscribe to our newsletter.
              </p>
              <p>
                <strong className="text-cinematic-gold">Usage Data:</strong> We automatically collect information about how you use our website, including your IP address, browser type, and pages visited.
              </p>
              <p>
                <strong className="text-cinematic-gold">Cookies:</strong> We use cookies to enhance your experience on our website and analyze site traffic.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and improve our video production services</li>
                <li>To communicate with you about your projects and inquiries</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Information Sharing</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>With trusted service providers who assist us in operating our website</li>
                <li>To protect our rights and the safety of our users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p><strong className="text-cinematic-gold">Email:</strong> privacy@cinematic.co.ke</p>
                <p><strong className="text-cinematic-gold">Phone:</strong> +254 708 901 911</p>
                <p><strong className="text-cinematic-gold">Address:</strong> Westlands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle CTA */}
        <div className="text-center py-12 border-t border-cinematic-gold/20">
          <p className="text-gray-300 mb-4">
            Ready to work with a video production company that values your privacy?
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-cinematic-gold text-cinematic-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-cinematic-gold/80 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>

        {/* Last Updated */}
        <div className="text-center text-gray-400 text-sm">
          <p>Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 