import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/content-hub', name: 'Blog' },
    { path: '/contact', name: 'Contact' },
    { path: '/about', name: 'About' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-cinematic-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-cinematic-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-cinematic-gold hover:text-yellow-300 transition-colors"
            aria-label="Cinematic homepage"
          >
            Cinematic
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ path, name }) => (
              <Link 
                key={path}
                to={path} 
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible ${
                  isActive(path) 
                    ? 'text-cinematic-gold bg-cinematic-gray' 
                    : 'text-cinematic-white hover:text-cinematic-gold'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cinematic-white hover:text-cinematic-gold focus-visible"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cinematic-black bg-opacity-95 border-t border-cinematic-gray">
              {navLinks.map(({ path, name }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`nav-link block px-3 py-2 rounded-md text-base font-medium transition-colors focus-visible ${
                    isActive(path) 
                      ? 'text-cinematic-gold bg-cinematic-gray' 
                      : 'text-cinematic-white hover:text-cinematic-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 