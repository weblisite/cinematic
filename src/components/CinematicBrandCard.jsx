import React from 'react'

const CinematicBrandCard = ({ category, className = "" }) => {
  return (
    <div className={`relative w-full h-48 bg-gradient-to-br from-cinematic-gray via-cinematic-black to-cinematic-gray overflow-hidden ${className}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cinematic-gold/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-8 h-8 border border-cinematic-gold/30 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-cinematic-gold/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-cinematic-gold/25 rounded-full"></div>
        </div>
      </div>
      
      {/* Glowing border */}
      <div className="absolute inset-0 border-2 border-cinematic-gold/50 glow-gold"></div>
      
      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
        {/* Company name */}
        <h1 className="text-4xl md:text-5xl font-bold text-cinematic-gold mb-2 tracking-wider">
          CINEMATIC
        </h1>
        
        {/* Tagline */}
        <p className="text-cinematic-gold/80 text-sm font-medium tracking-widest uppercase">
          Kenya's Premier Video Agency
        </p>
        
        {/* Category badge if provided */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-cinematic-gold/90 text-cinematic-black px-3 py-1 rounded-full text-xs font-bold">
              {category}
            </span>
          </div>
        )}
        
        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 flex space-x-1">
          <div className="w-2 h-2 bg-cinematic-gold rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cinematic-gold/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-cinematic-gold/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cinematic-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cinematic-gold/20 to-transparent"></div>
    </div>
  )
}

export default CinematicBrandCard 