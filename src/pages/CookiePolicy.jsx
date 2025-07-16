import React from 'react'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-cinematic-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          Cookie Policy
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          This policy explains how we use cookies and similar technologies on our website.
        </p>
        
        {/* What Are Cookies */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p>
                Cookies enable websites to remember your actions and preferences over a period of time, so you don't have to re-enter information whenever you visit the site or browse from one page to another.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Marketing Cookies</h3>
                <p>These cookies track visitors across websites to enable us to display relevant and engaging advertisements.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Preference Cookies</h3>
                <p>These cookies remember your preferences and settings to provide a more personalized experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Third-Party Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong className="text-cinematic-gold">Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong className="text-cinematic-gold">Social Media Platforms:</strong> To enable social sharing features</li>
                <li><strong className="text-cinematic-gold">Marketing Platforms:</strong> To deliver targeted advertisements</li>
                <li><strong className="text-cinematic-gold">Customer Support Tools:</strong> To provide live chat and support services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Managing Your Cookie Preferences</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                You can control and manage cookies in various ways:
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-cinematic-gold mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cinematic-gold mb-2">Cookie Consent Tool</h3>
                  <p>You can use our cookie consent tool to manage your preferences for different types of cookies.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cinematic-gold mb-2">Opt-Out Links</h3>
                  <p>You can opt out of certain third-party cookies by visiting the respective company's opt-out page.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Disabling Cookies */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Impact of Disabling Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                While you can choose to disable cookies, please note that doing so may affect your ability to use certain features of our website. Some areas of the site may not function properly without cookies.
              </p>
              <p>
                Essential cookies cannot be disabled as they are necessary for the website to function. However, you can control other types of cookies through your browser settings or our cookie consent tool.
              </p>
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Updates to This Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                Please check this page periodically for any updates. The date of the last update is shown at the bottom of this page.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p><strong className="text-cinematic-gold">Email:</strong> antony@cinematic.co.ke</p>
                <p><strong className="text-cinematic-gold">Phone:</strong> +254 708 901 911</p>
                <p><strong className="text-cinematic-gold">Address:</strong> Westlands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-gray-400 text-sm">
          <p>Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy 