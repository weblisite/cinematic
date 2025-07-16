import React from 'react'

const Careers = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-cinematic-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-cinematic-gold mb-8">
          Join Our Team
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Be part of Kenya's premier cinematic video production agency. We're looking for talented individuals who share our passion for storytelling.
        </p>
        
        {/* Why Work With Us */}
        <section className="mb-16">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Why Work With Cinematic?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Creative Freedom</h3>
                <p>Work on exciting projects with creative freedom to explore new ideas and push boundaries in video production.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Growth Opportunities</h3>
                <p>Continuous learning and development opportunities to advance your career in the film and video industry.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Cutting-Edge Equipment</h3>
                <p>Access to professional-grade equipment and the latest technology in video production.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cinematic-gold mb-3">Collaborative Environment</h3>
                <p>Work with a passionate team of creatives in a supportive and collaborative environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cinematic-gold mb-8 text-center">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Video Editor */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Senior Video Editor</h3>
              <p className="text-gray-300 mb-4">Full-time • Nairobi, Kenya</p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>5+ years of video editing experience</li>
                    <li>Proficiency in Adobe Premiere Pro, After Effects</li>
                    <li>Strong storytelling and creative skills</li>
                    <li>Experience with color grading and audio editing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Edit high-quality video content for clients</li>
                    <li>Collaborate with directors and producers</li>
                    <li>Manage multiple projects simultaneously</li>
                    <li>Ensure brand consistency across all projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cinematographer */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Cinematographer</h3>
              <p className="text-gray-300 mb-4">Full-time • Nairobi, Kenya</p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>3+ years of cinematography experience</li>
                    <li>Proficiency with professional cameras and equipment</li>
                    <li>Strong understanding of lighting and composition</li>
                    <li>Experience with commercial and corporate video</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Capture high-quality footage for various projects</li>
                    <li>Work closely with directors to achieve vision</li>
                    <li>Manage camera equipment and crew</li>
                    <li>Ensure technical quality and artistic vision</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Motion Graphics Designer */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Motion Graphics Designer</h3>
              <p className="text-gray-300 mb-4">Full-time • Nairobi, Kenya</p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>3+ years of motion graphics experience</li>
                    <li>Expert in After Effects and Cinema 4D</li>
                    <li>Strong design and animation skills</li>
                    <li>Portfolio demonstrating creative work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Create engaging motion graphics and animations</li>
                    <li>Design title sequences and visual effects</li>
                    <li>Collaborate with video editors and directors</li>
                    <li>Maintain consistency with brand guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Production Assistant */}
            <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
              <h3 className="text-2xl font-bold text-cinematic-gold mb-4">Production Assistant</h3>
              <p className="text-gray-300 mb-4">Full-time • Nairobi, Kenya</p>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>1+ years of production experience</li>
                    <li>Strong organizational and communication skills</li>
                    <li>Ability to work in fast-paced environment</li>
                    <li>Passion for video production and storytelling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cinematic-gold">Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Assist with pre-production planning</li>
                    <li>Coordinate filming schedules and logistics</li>
                    <li>Manage equipment and props</li>
                    <li>Support production team during shoots</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">How to Apply</h2>
            <div className="space-y-4 text-gray-300 text-center">
              <p>
                Ready to join our team? We'd love to hear from you! Send us your resume, portfolio, and a brief cover letter explaining why you'd be a great fit for our team.
              </p>
              <div className="mt-8">
                <p className="text-lg"><strong className="text-cinematic-gold">Email:</strong> careers@cinematic.co.ke</p>
                <p className="text-lg"><strong className="text-cinematic-gold">Subject:</strong> Application for [Position Name]</p>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  We review applications on a rolling basis and will contact qualified candidates for interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Our Culture</h2>
            <div className="space-y-4 text-gray-300 text-center">
              <p>
                At Cinematic, we believe in the power of storytelling to transform businesses and connect people. We're a team of passionate creatives who are committed to excellence in everything we do.
              </p>
              <p>
                We foster an environment where creativity thrives, ideas are valued, and everyone has the opportunity to grow and contribute to our success.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-cinematic-gray p-8 rounded-lg glow-gold">
            <h2 className="text-3xl font-bold text-cinematic-gold mb-6 text-center">Questions About Careers?</h2>
            <div className="space-y-4 text-gray-300 text-center">
              <p>
                Have questions about working with us? Get in touch!
              </p>
              <div className="mt-4">
                <p><strong className="text-cinematic-gold">Email:</strong> careers@cinematic.co.ke</p>
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

export default Careers 