import { Link } from 'react-router-dom';
import { Coffee, Shield, Sparkles } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <div className="text-6xl md:text-8xl mb-4">☕</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              PKU Coffee App
            </h1>
            <p className="text-lg md:text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Create delicious, low-protein coffee drinks designed for people with PKU. 
              Browse recipes or build your own!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recipes"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition shadow-lg"
              >
                Browse Recipes
              </Link>
              <Link
                to="/build"
                className="bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-900 transition border-2 border-white"
              >
                Build Your Own
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">PKU-Safe</h3>
            <p className="text-gray-600">
              All ingredients are carefully selected to be low in protein and safe for people with PKU.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Easy Recipes</h3>
            <p className="text-gray-600">
              Simple, delicious recipes with clear protein counts and step-by-step instructions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Builder</h3>
            <p className="text-gray-600">
              Create your own unique coffee drinks with real-time protein calculations.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Get Started
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/recipes"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                🔍 Browse Premade Recipes
              </h3>
              <p className="text-gray-600">
                Explore our collection of tested, PKU-friendly coffee recipes ready to make.
              </p>
            </Link>
            <Link
              to="/build"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                🎨 Build Your Own
              </h3>
              <p className="text-gray-600">
                Mix and match ingredients to create your perfect custom coffee drink.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;