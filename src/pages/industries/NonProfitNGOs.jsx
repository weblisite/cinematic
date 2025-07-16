import { Link } from 'react-router-dom';
import CinematicBrandCard from '../../components/CinematicBrandCard';
import ScrollToTop from '../../components/ScrollToTop';

const NonProfitNGOs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Non-Profit & NGOs
              <span className="block text-yellow-400">Video Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              How our services amplify social impact: From community transformation stories to donor engagement content, we help organizations secure funding and expand their reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Amplify Your Impact
              </Link>
              <Link 
                to="/portfolio" 
                className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Impact Stories
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
                Securing Funding & Expanding Reach
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Non-profit organizations and NGOs rely on powerful storytelling to communicate their mission, demonstrate impact, and inspire action. Donors and supporters need to see tangible results and emotional connections to causes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our cinematic video content captures community transformation stories, showcases organizational impact, and creates compelling donor engagement content that helps secure funding, attract volunteers, and expand organizational reach and influence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">International NGOs</h3>
                  <p className="text-sm text-gray-600">Showcase global impact and programs</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Local Charities</h3>
                  <p className="text-sm text-gray-600">Highlight community transformation</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Social Enterprises</h3>
                  <p className="text-sm text-gray-600">Demonstrate sustainable impact models</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Advocacy Groups</h3>
                  <p className="text-sm text-gray-600">Build awareness and drive action</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">89%</div>
                  <span className="text-gray-700">Donors prefer video over text</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">57%</div>
                  <span className="text-gray-700">More likely to donate after watching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">120%</div>
                  <span className="text-gray-700">Increase in social media sharing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">78%</div>
                  <span className="text-gray-700">Better volunteer recruitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services for Non-Profit & NGOs */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Non-Profit & NGO Video Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized video content that amplifies social impact and helps organizations secure funding and expand reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cinematic Video Ads */}
            <CinematicBrandCard
              title="Cinematic Video Ads"
              description="High-impact promotional videos that showcase your organization's mission, programs, and community impact. Perfect for fundraising campaigns, awareness drives, and building emotional connections with donors and supporters."
              features={[
                "Mission-driven campaigns",
                "Impact demonstration",
                "Fundraising appeals",
                "Awareness building"
              ]}
              linkTo="/services/cinematic-video-ads"
            />

            {/* Day-in-Life Videos */}
            <CinematicBrandCard
              title="Day-in-Life Videos"
              description="Authentic community transformation videos that show real beneficiaries, daily program operations, and the tangible impact of your work. These videos help donors understand how their contributions make a difference."
              features={[
                "Beneficiary stories",
                "Program documentation",
                "Community transformation",
                "Volunteer experiences"
              ]}
              linkTo="/services/day-in-life-videos"
            />

            {/* Business Mini-Movies */}
            <CinematicBrandCard
              title="Business Mini-Movies"
              description="Compelling organizational stories that showcase founding mission, values, and commitment to social change. Perfect for building emotional connections with donors and establishing credibility in the non-profit sector."
              features={[
                "Founding mission stories",
                "Organizational values",
                "Leadership narratives",
                "Historical impact"
              ]}
              linkTo="/services/business-mini-movies"
            />

            {/* Branded Reality Shows */}
            <CinematicBrandCard
              title="Branded Reality Shows"
              description="Engaging series following real community transformations, program implementations, and social change initiatives. These shows build trust through authentic storytelling and demonstrate organizational effectiveness."
              features={[
                "Community transformation series",
                "Program implementation",
                "Change documentation",
                "Impact measurement"
              ]}
              linkTo="/services/branded-reality-shows"
            />

            {/* Branded Competitions */}
            <CinematicBrandCard
              title="Branded Competitions"
              description="Interactive contests encouraging community engagement, volunteer participation, and social action sharing. These competitions boost awareness and create authentic advocacy content around social causes."
              features={[
                "Community engagement contests",
                "Volunteer recognition",
                "Social action challenges",
                "Impact storytelling"
              ]}
              linkTo="/services/branded-competitions"
            />

            {/* Business Reality Shows */}
            <CinematicBrandCard
              title="Business Reality Shows"
              description="Behind-the-scenes series showcasing organizational operations, program development, community outreach, and the daily dedication that creates sustainable social impact and positive change."
              features={[
                "Organizational operations",
                "Program development",
                "Community outreach",
                "Impact measurement"
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
            Social Impact Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Relief NGO</h3>
              <p className="text-gray-600 mb-4">
                Community transformation videos increased annual donations by 275% and attracted major foundation grants
              </p>
              <div className="text-yellow-600 font-semibold">+275% Donations</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Education Charity</h3>
              <p className="text-gray-600 mb-4">
                Day-in-life program videos generated 350% more volunteer applications and community support
              </p>
              <div className="text-yellow-600 font-semibold">+350% Volunteers</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental NGO</h3>
              <p className="text-gray-600 mb-4">
                Reality series showcasing conservation efforts resulted in 400% increase in public awareness and support
              </p>
              <div className="text-yellow-600 font-semibold">+400% Awareness</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Amplify Your Social Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create cinematic content that tells your transformation stories and helps secure funding for your mission
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

export default NonProfitNGOs; 