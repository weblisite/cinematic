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
// Industry Pages - All 21 Industries
import Technology from './pages/industries/Technology'
import Healthcare from './pages/industries/Healthcare'
import FinancialServices from './pages/industries/FinancialServices'
import RetailEcommerce from './pages/industries/RetailEcommerce'
import Manufacturing from './pages/industries/Manufacturing'
import HospitalityTourism from './pages/industries/HospitalityTourism'
import RealEstateProperty from './pages/industries/RealEstateProperty'
import EducationTraining from './pages/industries/EducationTraining'
import AgricultureFood from './pages/industries/AgricultureFood'
import LegalProfessionalServices from './pages/industries/LegalProfessionalServices'
import Automotive from './pages/industries/Automotive'
import MediaEntertainment from './pages/industries/MediaEntertainment'
import NonProfitNGOs from './pages/industries/NonProfitNGOs'
import FashionBeauty from './pages/industries/FashionBeauty'
import SportsFitness from './pages/industries/SportsFitness'
import FurnitureHomeDecor from './pages/industries/FurnitureHomeDecor'
import HouseholdGoodsAppliances from './pages/industries/HouseholdGoodsAppliances'
import FMCGFoodDailyEssentials from './pages/industries/FMCGFoodDailyEssentials'
import ConstructionBuildingMaterials from './pages/industries/ConstructionBuildingMaterials'
import ImportExportTrading from './pages/industries/ImportExportTrading'
import BeautyCosmetics from './pages/industries/BeautyCosmetics'

function App() {
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
            {/* Industry Pages - All 21 Industries */}
            <Route path="/industries/technology" element={<Technology />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/financial-services" element={<FinancialServices />} />
            <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/hospitality-tourism" element={<HospitalityTourism />} />
            <Route path="/industries/real-estate-property" element={<RealEstateProperty />} />
            <Route path="/industries/education-training" element={<EducationTraining />} />
            <Route path="/industries/agriculture-food" element={<AgricultureFood />} />
            <Route path="/industries/legal-professional-services" element={<LegalProfessionalServices />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
            <Route path="/industries/non-profit-ngos" element={<NonProfitNGOs />} />
            <Route path="/industries/fashion-beauty" element={<FashionBeauty />} />
            <Route path="/industries/sports-fitness" element={<SportsFitness />} />
            <Route path="/industries/furniture-home-decor" element={<FurnitureHomeDecor />} />
            <Route path="/industries/household-goods-appliances" element={<HouseholdGoodsAppliances />} />
            <Route path="/industries/fmcg-food-daily-essentials" element={<FMCGFoodDailyEssentials />} />
            <Route path="/industries/construction-building-materials" element={<ConstructionBuildingMaterials />} />
            <Route path="/industries/import-export-trading" element={<ImportExportTrading />} />
            <Route path="/industries/beauty-cosmetics" element={<BeautyCosmetics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 