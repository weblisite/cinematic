import React from 'react'

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
        <section className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">150+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-cinematic-gray p-6 rounded-lg glow-gold">
            <div className="text-3xl font-bold text-cinematic-gold mb-2">10M+</div>
            <div className="text-gray-300">Views Generated</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 