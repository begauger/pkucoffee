import { Link } from 'react-router-dom';
import { Heart, Clock, TrendingUp, Sparkles } from 'lucide-react';

function MyRecipes({ savedRecipes }) {
  const premadeRecipes = savedRecipes.filter(r => !r.isCustom);
  const customRecipes = savedRecipes.filter(r => r.isCustom);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          My Saved Recipes
        </h1>
        <p className="text-gray-600">
          Your favorite and custom coffee recipes
        </p>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No saved recipes yet
          </h2>
          <p className="text-gray-600 mb-6">
            Save recipes from the browse page or create your own custom recipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recipes"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse Recipes
            </Link>
            <Link
              to="/build"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
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
                <Sparkles className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  My Custom Recipes
                </h2>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
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
                <Heart className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">
                  Saved Recipes
                </h2>
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Recipe Image/Icon */}
      <div className={`h-32 flex items-center justify-center text-6xl ${
        isCustom 
          ? 'bg-gradient-to-br from-purple-400 to-pink-500'
          : 'bg-gradient-to-br from-amber-400 to-orange-500'
      }`}>
        {recipe.image}
      </div>

      {/* Recipe Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 flex-1">
            {recipe.name}
          </h3>
          {isCustom && (
            <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
              Custom
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-3">
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
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {recipe.type}
          </span>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-600 font-medium text-sm hover:text-blue-700"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyRecipes;