import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, PlusCircle, ShoppingCart, Heart } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/recipes', icon: BookOpen, label: 'Recipes' },
    { path: '/build', icon: PlusCircle, label: 'Build' },
    { path: '/education', icon: BookOpen, label: 'Education' },
    { path: '/shopping-list', icon: ShoppingCart, label: 'List' },
    { path: '/my-recipes', icon: Heart, label: 'Saved' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:block sticky top-0 z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/pku.png" 
                alt="PKBrew Logo" 
                className="h-10 w-10 object-contain filter drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
              />
              <span className="text-xl font-bold glow-text">PKBrew</span>
            </Link>
            <div className="flex space-x-8">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive(item.path)
                        ? 'text-[#00d4ff] bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)]'
                        : 'text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition ${
                  isActive(item.path)
                    ? 'text-[#00d4ff]'
                    : 'text-gray-400'
                }`}
              >
                <Icon 
                  size={24} 
                  strokeWidth={isActive(item.path) ? 2.5 : 2}
                  className={isActive(item.path) ? 'filter drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]' : ''}
                />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navigation;