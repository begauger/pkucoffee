import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, TrendingUp } from 'lucide-react';

// Sample PKU-friendly coffee recipes
const sampleRecipes = [
  {
    id: 1,
    name: 'Vanilla Almond Latte',
    protein: 0.5,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Hot',
    image: '☕',
    description: 'Smooth and creamy latte with vanilla and almond milk',
    ingredients: [
      { name: 'Almond milk (unsweetened)', amount: '1 cup', protein: 0.4 },
      { name: 'Decaf coffee or coffee substitute', amount: '1/2 cup', protein: 0 },
      { name: 'Vanilla extract', amount: '1/2 tsp', protein: 0 },
      { name: 'Stevia or sugar', amount: '1 tsp', protein: 0 },
    ]
  },
  {
    id: 2,
    name: 'Iced Caramel Coconut Coffee',
    protein: 0.3,
    prepTime: 10,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🧊',
    description: 'Refreshing iced coffee with caramel and coconut flavors',
    ingredients: [
      { name: 'Coconut milk (low protein)', amount: '1 cup', protein: 0.2 },
      { name: 'Cold brew coffee substitute', amount: '1/2 cup', protein: 0 },
      { name: 'Sugar-free caramel syrup', amount: '2 tbsp', protein: 0 },
      { name: 'Ice cubes', amount: '1 cup', protein: 0 },
    ]
  },
  {
    id: 3,
    name: 'Cinnamon Oat Milk Macchiato',
    protein: 0.8,
    prepTime: 7,
    difficulty: 'Medium',
    type: 'Hot',
    image: '☕',
    description: 'Layered macchiato with warming cinnamon spice',
    ingredients: [
      { name: 'Oat milk (low protein brand)', amount: '3/4 cup', protein: 0.7 },
      { name: 'Espresso substitute', amount: '1 shot', protein: 0 },
      { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
      { name: 'Honey or agave', amount: '1 tsp', protein: 0 },
    ]
  },
  {
    id: 4,
    name: 'Mocha Coconut Frappé',
    protein: 0.6,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Blended',
    image: '🥤',
    description: 'Chocolate and coconut blended frozen coffee drink',
    ingredients: [
      { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
      { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
      { name: 'Cocoa powder (measured)', amount: '1 tsp', protein: 0.3 },
      { name: 'Ice', amount: '1.5 cups', protein: 0 },
      { name: 'Sugar', amount: '2 tsp', protein: 0 },
    ]
  },
  {
    id: 5,
    name: 'Maple Pecan Latte',
    protein: 0.7,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Hot',
    image: '☕',
    description: 'Sweet maple flavor with hint of pecan',
    ingredients: [
      { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
      { name: 'Decaf coffee', amount: '1/2 cup', protein: 0 },
      { name: 'Sugar-free maple syrup', amount: '1 tbsp', protein: 0 },
      { name: 'Pecan extract', amount: '1/4 tsp', protein: 0 },
    ]
  },
  {
    id: 6,
    name: 'Hazelnut Dream',
    protein: 0.4,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Hot',
    image: '☕',
    description: 'Classic hazelnut flavored coffee',
    ingredients: [
      { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
      { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
      { name: 'Hazelnut extract', amount: '1/2 tsp', protein: 0 },
      { name: 'Stevia', amount: '1 tsp', protein: 0 },
    ]
  },
];

function BrowseRecipes({ savedRecipes, setSavedRecipes }) {
  const [filter, setFilter] = useState('all');

  const filteredRecipes = filter === 'all' 
    ? sampleRecipes 
    : sampleRecipes.filter(r => r.type.toLowerCase() === filter);

  const isSaved = (recipeId) => savedRecipes.some(r => r.id === recipeId);

  const toggleSave = (recipe) => {
    if (isSaved(recipe.id)) {
      setSavedRecipes(savedRecipes.filter(r => r.id !== recipe.id));
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Browse Recipes
        </h1>
        <p className="text-gray-600">
          Discover delicious PKU-friendly coffee recipes
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {['all', 'hot', 'iced', 'blended'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Recipe Image/Icon */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 h-32 flex items-center justify-center text-6xl">
              {recipe.image}
            </div>

            {/* Recipe Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800 flex-1">
                  {recipe.name}
                </h3>
                <button
                  onClick={() => toggleSave(recipe)}
                  className="ml-2 p-1"
                >
                  <Heart
                    size={20}
                    className={isSaved(recipe.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
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

              {/* Type Badge */}
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
        ))}
      </div>
    </div>
  );
}

export default BrowseRecipes;