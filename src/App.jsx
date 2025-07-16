import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ContentHub from './pages/ContentHub'
import Contact from './pages/Contact'
import About from './pages/About'
// Policy Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Careers from './pages/Careers'
// Individual Service Pages
import CinematicVideoAds from './pages/services/CinematicVideoAds'
import DayInLifeVideos from './pages/services/DayInLifeVideos'
import BusinessMiniMovies from './pages/services/BusinessMiniMovies'
import BrandedRealityShows from './pages/services/BrandedRealityShows'
import BrandedCompetitions from './pages/services/BrandedCompetitions'
import BusinessRealityShows from './pages/services/BusinessRealityShows'
import SponsoredContentIntegration from './pages/services/SponsoredContentIntegration'
// Article Pages
import CinematicVideoAdsGuide from './pages/articles/CinematicVideoAdsGuide'
import DayInLifeVideosGuide from './pages/articles/DayInLifeVideosGuide'
import BusinessMiniMoviesGuide from './pages/articles/BusinessMiniMoviesGuide'
import BrandedRealityShowsMarketing from './pages/articles/BrandedRealityShowsMarketing'
import BrandedCompetitionsStrategy from './pages/articles/BrandedCompetitionsStrategy'
import BusinessRealityShowsAuthority from './pages/articles/BusinessRealityShowsAuthority'

function App() {
  useEffect(() => {
    // GDPR/CCPA Cookie Consent Simulation
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setTimeout(() => {
        const consent = confirm('This website uses cookies to improve your experience. Do you accept our cookie policy?')
        localStorage.setItem('cookieConsent', consent ? 'accepted' : 'declined')
      }, 2000)
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cinematic-black text-cinematic-white font-montserrat">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/content-hub" element={<ContentHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Policy Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/careers" element={<Careers />} />
            {/* Individual Service Pages */}
            <Route path="/services/cinematic-video-ads" element={<CinematicVideoAds />} />
            <Route path="/services/day-in-life-videos" element={<DayInLifeVideos />} />
            <Route path="/services/business-mini-movies" element={<BusinessMiniMovies />} />
            <Route path="/services/branded-reality-shows" element={<BrandedRealityShows />} />
            <Route path="/services/branded-competitions" element={<BrandedCompetitions />} />
            <Route path="/services/business-reality-shows" element={<BusinessRealityShows />} />
            <Route path="/services/sponsored-content-integration" element={<SponsoredContentIntegration />} />
            {/* Article Pages */}
            <Route path="/content-hub/cinematic-video-ads-guide" element={<CinematicVideoAdsGuide />} />
            <Route path="/content-hub/day-in-life-videos-storytelling" element={<DayInLifeVideosGuide />} />
            <Route path="/content-hub/business-mini-movies-guide" element={<BusinessMiniMoviesGuide />} />
            <Route path="/content-hub/branded-reality-shows-marketing" element={<BrandedRealityShowsMarketing />} />
            <Route path="/content-hub/branded-competitions-strategy" element={<BrandedCompetitionsStrategy />} />
            <Route path="/content-hub/business-reality-shows-authority" element={<BusinessRealityShowsAuthority />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 