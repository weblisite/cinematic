import { Link } from 'react-router-dom';
import CinematicBrandCard from '../../components/CinematicBrandCard';
import ScrollToTop from '../../components/ScrollToTop';

const MediaEntertainment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Media & Entertainment
              <span className="block text-yellow-400">Video Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              How our services amplify entertainment businesses: From artist showcases to behind-the-scenes content, we create compelling narratives that build fan bases and drive bookings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Amplify Your Brand
              </Link>
              <Link 
                to="/portfolio" 
                className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Entertainment Content
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
                Building Fan Bases & Driving Bookings
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In the entertainment industry, connection is everything. Audiences want to feel close to artists, understand their creative process, and be part of their journey. Authentic storytelling is the key to building devoted fan bases.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our cinematic video content captures the artistry, passion, and behind-the-scenes moments that create compelling narratives, helping entertainment businesses build emotional connections that translate into loyal fan bases and increased bookings.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Musicians & Artists</h3>
                  <p className="text-sm text-gray-600">Showcase talent and creative process</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Production Companies</h3>
                  <p className="text-sm text-gray-600">Highlight projects and capabilities</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Entertainment Venues</h3>
                  <p className="text-sm text-gray-600">Create atmosphere and drive bookings</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Content Creators</h3>
                  <p className="text-sm text-gray-600">Build personal brand and audience</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">91%</div>
                  <span className="text-gray-700">Discover new entertainment through video</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">4x</div>
                  <span className="text-gray-700">More likely to attend after watching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">85%</div>
                  <span className="text-gray-700">Share entertainment video content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">300%</div>
                  <span className="text-gray-700">More engagement with behind-scenes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services for Media & Entertainment */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Media & Entertainment Video Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized video content that amplifies entertainment brands and builds devoted fan bases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cinematic Video Ads */}
            <CinematicBrandCard
              title="Cinematic Video Ads"
              description="High-energy promotional videos that showcase artistic talent, creative projects, and entertainment experiences. Perfect for launching albums, promoting events, and building excitement around entertainment brands."
              features={[
                "Artist spotlight videos",
                "Event promotion content",
                "Project launch campaigns",
                "Talent showcase reels"
              ]}
              linkTo="/services/cinematic-video-ads"
            />

            {/* Day-in-Life Videos */}
            <CinematicBrandCard
              title="Day-in-Life Videos"
              description="Authentic behind-the-scenes videos that show the creative process, artistic journey, and personal side of entertainment personalities. These videos help fans connect on a deeper level with artists and creators."
              features={[
                "Creative process documentation",
                "Artist daily routine",
                "Studio session insights",
                "Personal journey sharing"
              ]}
              linkTo="/services/day-in-life-videos"
            />

            {/* Business Mini-Movies */}
            <CinematicBrandCard
              title="Business Mini-Movies"
              description="Compelling entertainment brand stories that showcase artistic vision, creative philosophy, and the passion behind entertainment projects. Perfect for building emotional connections and establishing artistic credibility."
              features={[
                "Artist origin stories",
                "Creative vision narratives",
                "Production company heritage",
                "Artistic philosophy showcase"
              ]}
              linkTo="/services/business-mini-movies"
            />

            {/* Branded Reality Shows */}
            <CinematicBrandCard
              title="Branded Reality Shows"
              description="Engaging series following entertainment personalities, creative projects, or industry challenges. These shows build devoted fan bases through authentic storytelling and intimate access to the entertainment world."
              features={[
                "Artist journey series",
                "Creative project documentation",
                "Industry challenge content",
                "Fan engagement series"
              ]}
              linkTo="/services/branded-reality-shows"
            />

            {/* Branded Competitions */}
            <CinematicBrandCard
              title="Branded Competitions"
              description="Interactive contests encouraging fan creativity, talent showcases, and entertainment content sharing. These competitions boost engagement and create authentic community content around entertainment brands."
              features={[
                "Fan talent competitions",
                "Creative challenge contests",
                "Cover song competitions",
                "Fan art showcases"
              ]}
              linkTo="/services/branded-competitions"
            />

            {/* Business Reality Shows */}
            <CinematicBrandCard
              title="Business Reality Shows"
              description="Behind-the-scenes series showcasing entertainment industry operations, creative development processes, and the dedication that creates successful entertainment experiences and artistic achievements."
              features={[
                "Production insights",
                "Industry operations",
                "Creative development",
                "Team collaboration"
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
            Entertainment Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Independent Musician</h3>
              <p className="text-gray-600 mb-4">
                Behind-the-scenes video series increased fan base by 320% and doubled streaming numbers and concert attendance
              </p>
              <div className="text-yellow-600 font-semibold">+320% Fan Growth</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entertainment Venue</h3>
              <p className="text-gray-600 mb-4">
                Cinematic event promotion videos generated 250% more ticket sales and improved venue booking rates
              </p>
              <div className="text-yellow-600 font-semibold">+250% Ticket Sales</div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Company</h3>
              <p className="text-gray-600 mb-4">
                Reality series showcasing creative process resulted in 400% increase in project inquiries and collaborations
              </p>
              <div className="text-yellow-600 font-semibold">+400% Project Inquiries</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Amplify Your Entertainment Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create cinematic content that builds devoted fan bases and drives bookings for your entertainment business
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

export default MediaEntertainment; 