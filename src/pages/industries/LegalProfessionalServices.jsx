import { Link } from 'react-router-dom';
import CinematicBrandCard from '../../components/CinematicBrandCard';
import ScrollToTop from '../../components/ScrollToTop';

const LegalProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Legal & Professional
              <span className="block text-yellow-400">Services Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              How our services enhance legal practice marketing: From client success stories to professional expertise showcases, we make legal services accessible and trustworthy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Build Trust Today
              </Link>
              <Link 
                to="/portfolio" 
                className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Legal Content
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Making Legal Services Accessible & Trustworthy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Legal and professional services often feel intimidating to potential clients. Building trust, demonstrating expertise, and showing genuine care for client outcomes is essential for attracting the right clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our cinematic video content humanizes legal professionals, showcases successful case outcomes, and demonstrates expertise in accessible ways, helping build trust and credibility while attracting quality clients who value professional excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Law Firms</h3>
                  <p className="text-sm text-gray-600">Build trust and showcase legal expertise</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Consulting Services</h3>
                  <p className="text-sm text-gray-600">Demonstrate value and thought leadership</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Accounting Firms</h3>
                  <p className="text-sm text-gray-600">Show expertise and client relationships</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Associations</h3>
                  <p className="text-sm text-gray-600">Highlight member value and standards</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">94%</div>
                  <span className="text-gray-700">Research attorneys online before hiring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">75%</div>
                  <span className="text-gray-700">More likely to hire after watching video</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">300%</div>
                  <span className="text-gray-700">More engagement with video content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">85%</div>
                  <span className="text-gray-700">Value transparency in legal services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services for Legal & Professional Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Legal & Professional Services Video Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized video content that makes legal services accessible and builds professional trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cinematic Video Ads */}
            <CinematicBrandCard
              title="Cinematic Video Ads"
              description="High-impact promotional videos that showcase your legal expertise, successful case outcomes, and client-focused approach. Perfect for building credibility and attracting quality clients in competitive legal markets."
              features={[
                "Expertise demonstrations",
                "Case success highlights",
                "Client testimonials",
                "Professional credibility"
              ]}
              linkTo="/services/cinematic-video-ads"
            />

            {/* Day-in-Life Videos */}
            <CinematicBrandCard
              title="Day-in-Life Videos"
              description="Authentic professional journey videos that show the daily work of legal practice, client interactions, and case preparation. These videos help potential clients understand your process and dedication."
              features={[
                "Legal process documentation",
                "Client consultation insights",
                "Case preparation work",
                "Professional routine showcase"
              ]}
              linkTo="/services/day-in-life-videos"
            />

            {/* Business Mini-Movies */}
            <CinematicBrandCard
              title="Business Mini-Movies"
              description="Compelling firm brand stories that showcase legal heritage, professional values, and commitment to client success. Perfect for building emotional connections and establishing market authority."
              features={[
                "Firm heritage stories",
                "Professional values showcase",
                "Legal philosophy narratives",
                "Community involvement"
              ]}
              linkTo="/services/business-mini-movies"
            />

            {/* Branded Reality Shows */}
            <CinematicBrandCard
              title="Branded Reality Shows"
              description="Engaging series following real legal cases, client journeys, and professional challenges. These shows build trust through authentic experiences and demonstrate legal expertise in action."
              features={[
                "Case journey documentation",
                "Client transformation stories",
                "Legal challenge resolution",
                "Professional development"
              ]}
              linkTo="/services/branded-reality-shows"
            />

            {/* Branded Competitions */}
            <CinematicBrandCard
              title="Branded Competitions"
              description="Interactive contests encouraging legal knowledge sharing, case study discussions, and professional development content. These competitions boost engagement and create valuable educational content."
              features={[
                "Legal knowledge contests",
                "Case study competitions",
                "Professional development challenges",
                "Community legal education"
              ]}
              linkTo="/services/branded-competitions"
            />

            {/* Business Reality Shows */}
            <CinematicBrandCard
              title="Business Reality Shows"
              description="Behind-the-scenes series showcasing legal operations, professional training, case strategy development, and the daily dedication that ensures excellent client representation and outcomes."
              features={[
                "Legal operations insights",
                "Professional training programs",
                "Case strategy development",
                "Client service excellence"
              ]}
              linkTo="/services/business-reality-shows"
            />

          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Legal Professional Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Injury Law Firm</h3>
              <p className="text-gray-600 mb-4">
                Client success story videos increased case inquiries by 165% and improved client quality significantly
              </p>
              <div className="text-yellow-600 font-semibold">+165% Case Inquiries</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Law Practice</h3>
              <p className="text-gray-600 mb-4">
                Day-in-life professional videos drove 220% increase in corporate client consultations and referrals
              </p>
              <div className="text-yellow-600 font-semibold">+220% Consultations</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consulting Firm</h3>
              <p className="text-gray-600 mb-4">
                Reality series showcasing expertise resulted in 180% increase in high-value client acquisitions
              </p>
              <div className="text-yellow-600 font-semibold">+180% Client Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Professional Trust?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create cinematic content that showcases your expertise and makes legal services accessible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/content-hub" 
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProfessionalServices; 