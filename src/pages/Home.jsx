import { Link } from 'react-router-dom';
import { Coffee, Shield, Sparkles } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="glass-card rounded-[30px] mx-4 sm:mx-6 lg:mx-8 my-6 md:my-8 relative overflow-hidden">
        {/* Shimmer effect */}
        <div className="shimmer absolute inset-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <div className="text-center">
            {/* Logo and Coffee Icon Combined */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img 
                src="/pku.png" 
                alt="PKU Logo" 
                className="h-20 md:h-28 w-20 md:w-28 object-contain filter drop-shadow-[0_4px_20px_rgba(0,212,255,0.5)]"
              />
              <div className="text-6xl md:text-8xl filter drop-shadow-[0_4px_20px_rgba(0,212,255,0.5)]">☕</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              PKU Coffee App
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Create delicious, low-protein coffee drinks designed for people with PKU. 
              Browse recipes or build your own!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recipes"
                className="glass-card btn-ripple px-8 py-4 rounded-lg font-semibold text-lg transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)] hover:-translate-y-0.5"
              >
                Browse Recipes
              </Link>
              <Link
                to="/build"
                className="glass-card btn-ripple px-8 py-4 rounded-lg font-semibold text-lg transition border-2 border-[rgba(123,47,247,0.4)] text-[#a78bfa] hover:border-[rgba(123,47,247,0.8)] hover:shadow-[0_6px_25px_rgba(123,47,247,0.5)] hover:-translate-y-0.5"
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
          <div className="glass-card glass-card-hover p-6 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl border border-[rgba(255,255,255,0.1)] shadow-[0_4px_15px_rgba(0,212,255,0.2)]"
                 style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))'}}>
              <Shield className="text-[#00d4ff]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">PKU-Safe</h3>
            <p className="text-gray-400">
              All ingredients are carefully selected to be low in protein and safe for people with PKU.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl border border-[rgba(255,255,255,0.1)] shadow-[0_4px_15px_rgba(0,212,255,0.2)]"
                 style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))'}}>
              <Coffee className="text-[#00d4ff]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Easy Recipes</h3>
            <p className="text-gray-400">
              Simple, delicious recipes with clear protein counts and step-by-step instructions.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl border border-[rgba(255,255,255,0.1)] shadow-[0_4px_15px_rgba(0,212,255,0.2)]"
                 style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))'}}>
              <Sparkles className="text-[#a78bfa]" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Custom Builder</h3>
            <p className="text-gray-400">
              Create your own unique coffee drinks with real-time protein calculations.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-8 glow-text">
          Get Started
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/recipes"
            className="glass-card glass-card-hover p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              🔍 Browse Premade Recipes
            </h3>
            <p className="text-gray-400">
              Explore our collection of tested, PKU-friendly coffee recipes ready to make.
            </p>
          </Link>
          <Link
            to="/build"
            className="glass-card glass-card-hover p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              🎨 Build Your Own
            </h3>
            <p className="text-gray-400">
              Mix and match ingredients to create your perfect custom coffee drink.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;