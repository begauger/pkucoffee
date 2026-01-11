import { Link } from 'react-router-dom';
import { Heart, Clock, TrendingUp, Sparkles } from 'lucide-react';

function MyRecipes({ savedRecipes }) {
  const premadeRecipes = savedRecipes.filter(r => !r.isCustom);
  const customRecipes = savedRecipes.filter(r => r.isCustom);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 glow-text">
          My Saved Recipes
        </h1>
        <p className="text-gray-400">
          Your favorite and custom coffee recipes
        </p>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <div className="text-6xl mb-4 filter drop-shadow-[0_4px_20px_rgba(0,212,255,0.3)]">❤️</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            No saved recipes yet
          </h2>
          <p className="text-gray-400 mb-6">
            Save recipes from the browse page or create your own custom recipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recipes"
              className="glass-card btn-ripple px-6 py-3 rounded-lg font-semibold transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)]"
            >
              Browse Recipes
            </Link>
            <Link
              to="/build"
              className="glass-card btn-ripple px-6 py-3 rounded-lg font-semibold transition border-2 border-[rgba(123,47,247,0.4)] text-[#a78bfa] hover:border-[rgba(123,47,247,0.8)] hover:shadow-[0_6px_25px_rgba(123,47,247,0.5)]"
            >
              Build Your Own
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Custom Recipes */}
          {customRecipes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-[#a78bfa]" size={24} />
                <h2 className="text-2xl font-bold text-white">
                  My Custom Recipes
                </h2>
                <span className="glass-card text-[#a78bfa] text-sm font-medium px-3 py-1 rounded-full border border-[rgba(123,47,247,0.3)]">
                  {customRecipes.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {customRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} isCustom />
                ))}
              </div>
            </div>
          )}

          {/* Saved Premade Recipes */}
          {premadeRecipes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-[#00d4ff]" size={24} />
                <h2 className="text-2xl font-bold text-white">
                  Saved Recipes
                </h2>
                <span className="glass-card text-[#00d4ff] text-sm font-medium px-3 py-1 rounded-full border border-[rgba(0,212,255,0.3)]">
                  {premadeRecipes.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {premadeRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RecipeCard({ recipe, isCustom = false }) {
  return (
    <div className="glass-card glass-card-hover rounded-xl overflow-hidden">
      {/* Recipe Image/Icon */}
      <div className={`h-32 flex items-center justify-center text-6xl border-b border-[rgba(255,255,255,0.1)] ${
        isCustom 
          ? 'bg-gradient-to-br from-[rgba(123,47,247,0.2)] to-[rgba(219,39,119,0.2)]'
          : 'bg-gradient-to-br from-[rgba(0,212,255,0.15)] to-[rgba(123,47,247,0.15)]'
      }`}>
        {recipe.image}
      </div>

      {/* Recipe Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white flex-1">
            {recipe.name}
          </h3>
          {isCustom && (
            <span className="ml-2 glass-card text-[#a78bfa] text-xs font-medium px-2 py-1 rounded border border-[rgba(123,47,247,0.3)]">
              Custom
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 mb-3">
          {recipe.description}
        </p>

        {/* Recipe Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <TrendingUp size={14} />
            <span>{recipe.protein}g protein</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{recipe.prepTime} min</span>
          </div>
        </div>

        {/* Type Badge and Link */}
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-[rgba(0,212,255,0.15)] text-[#00d4ff] text-xs font-medium rounded-full border border-[rgba(0,212,255,0.3)]">
            {recipe.type}
          </span>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-[#00d4ff] font-medium text-sm hover:text-[#7b2ff7] transition"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyRecipes;