import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, TrendingUp } from 'lucide-react';

// 30 PKU-friendly coffee recipes
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
  },
  {
    id: 2,
    name: 'Cinnamon Oat Milk Macchiato',
    protein: 0.8,
    prepTime: 7,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🫖',
    description: 'Layered macchiato with warming cinnamon spice',
  },
  {
    id: 3,
    name: 'Maple Pecan Latte',
    protein: 0.7,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Hot',
    image: '🍁',
    description: 'Sweet maple flavor with hint of pecan',
  },
  {
    id: 4,
    name: 'Hazelnut Dream',
    protein: 0.4,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Hot',
    image: '🌰',
    description: 'Classic hazelnut flavored coffee',
  },
  {
    id: 5,
    name: 'Pumpkin Spice Latte',
    protein: 0.6,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🎃',
    description: 'Fall favorite with pumpkin and warm spices',
  },
  {
    id: 6,
    name: 'Coconut Cream Latte',
    protein: 0.3,
    prepTime: 6,
    difficulty: 'Easy',
    type: 'Hot',
    image: '🥥',
    description: 'Rich and creamy tropical coconut latte',
  },
  {
    id: 7,
    name: 'Salted Caramel Macchiato',
    protein: 0.5,
    prepTime: 8,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🧂',
    description: 'Sweet and salty caramel perfection',
  },
  {
    id: 8,
    name: 'White Chocolate Mocha',
    protein: 0.4,
    prepTime: 7,
    difficulty: 'Easy',
    type: 'Hot',
    image: '🤍',
    description: 'Sweet white chocolate with coffee',
  },
  {
    id: 9,
    name: 'Gingerbread Latte',
    protein: 0.5,
    prepTime: 9,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🍪',
    description: 'Festive gingerbread spice latte',
  },
  {
    id: 10,
    name: 'Lavender Honey Latte',
    protein: 0.4,
    prepTime: 8,
    difficulty: 'Medium',
    type: 'Hot',
    image: '💜',
    description: 'Calming lavender with sweet honey',
  },
  {
    id: 11,
    name: 'Iced Caramel Coconut Coffee',
    protein: 0.3,
    prepTime: 10,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🧊',
    description: 'Refreshing iced coffee with caramel and coconut',
  },
  {
    id: 12,
    name: 'Vanilla Sweet Cream Cold Brew',
    protein: 0.6,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🥛',
    description: 'Smooth cold brew with vanilla sweet cream',
  },
  {
    id: 13,
    name: 'Iced Mint Mojito Coffee',
    protein: 0.3,
    prepTime: 7,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🌿',
    description: 'Refreshing mint and lime iced coffee',
  },
  {
    id: 14,
    name: 'Brown Sugar Cinnamon Iced Coffee',
    protein: 0.5,
    prepTime: 6,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🍬',
    description: 'Sweet brown sugar with cinnamon over ice',
  },
  {
    id: 15,
    name: 'Iced Almond Joy Coffee',
    protein: 0.6,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🍫',
    description: 'Chocolate, coconut, and almond flavors',
  },
  {
    id: 16,
    name: 'Peach Iced Coffee',
    protein: 0.4,
    prepTime: 6,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🍑',
    description: 'Fruity peach with smooth iced coffee',
  },
  {
    id: 17,
    name: 'Raspberry Vanilla Iced Coffee',
    protein: 0.4,
    prepTime: 7,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🫐',
    description: 'Tart raspberry with sweet vanilla',
  },
  {
    id: 18,
    name: 'Coconut Macadamia Iced Coffee',
    protein: 0.3,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🏝️',
    description: 'Tropical island vibes in a cup',
  },
  {
    id: 19,
    name: 'Mocha Coconut Frappé',
    protein: 0.6,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Blended',
    image: '🥤',
    description: 'Chocolate and coconut blended frozen drink',
  },
  {
    id: 20,
    name: 'Vanilla Bean Frappé',
    protein: 0.5,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Blended',
    image: '🍦',
    description: 'Creamy vanilla bean blended coffee',
  },
  {
    id: 21,
    name: 'Caramel Ribbon Crunch Frappé',
    protein: 0.4,
    prepTime: 12,
    difficulty: 'Medium',
    type: 'Blended',
    image: '🍮',
    description: 'Decadent caramel blended with crunch topping',
  },
  {
    id: 22,
    name: 'Mint Chocolate Chip Frappé',
    protein: 0.7,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Blended',
    image: '🍃',
    description: 'Refreshing mint with chocolate chips',
  },
  {
    id: 23,
    name: 'Strawberry Coffee Smoothie',
    protein: 0.5,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Blended',
    image: '🍓',
    description: 'Fruity strawberry blended with coffee',
  },
  {
    id: 24,
    name: 'Peanut Butter Cup Frappé',
    protein: 0.9,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Blended',
    image: '🥜',
    description: 'Rich PB flavor with chocolate (watch portions!)',
  },
  {
    id: 25,
    name: 'Vietnamese Iced Coffee',
    protein: 0.3,
    prepTime: 8,
    difficulty: 'Easy',
    type: 'Iced',
    image: '🇻🇳',
    description: 'Strong coffee with sweetened coconut cream',
  },
  {
    id: 26,
    name: 'Spanish Latte',
    protein: 0.6,
    prepTime: 10,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🇪🇸',
    description: 'Sweetened condensed milk Spanish-style latte',
  },
  {
    id: 27,
    name: 'Affogato Style',
    protein: 0.3,
    prepTime: 5,
    difficulty: 'Easy',
    type: 'Hot',
    image: '🍨',
    description: 'Espresso poured over coconut ice cream',
  },
  {
    id: 28,
    name: 'Dalgona Whipped Coffee',
    protein: 0.4,
    prepTime: 15,
    difficulty: 'Hard',
    type: 'Iced',
    image: '☁️',
    description: 'Trendy whipped coffee over milk',
  },
  {
    id: 29,
    name: 'Matcha Coffee Fusion',
    protein: 0.6,
    prepTime: 7,
    difficulty: 'Medium',
    type: 'Iced',
    image: '🍵',
    description: 'Green tea matcha meets coffee',
  },
  {
    id: 30,
    name: 'Chai Coffee Latte',
    protein: 0.5,
    prepTime: 12,
    difficulty: 'Medium',
    type: 'Hot',
    image: '🧉',
    description: 'Spiced chai tea blended with coffee',
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2 glow-text">
          Browse Recipes
        </h1>
        <p className="text-gray-400">
          Discover 30 delicious PKU-friendly coffee recipes
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
                  ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border-2 border-[rgba(0,212,255,0.5)] shadow-[0_4px_15px_rgba(0,212,255,0.3)]'
                  : 'glass-card text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)]'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Count */}
      <div className="mb-4 text-sm text-gray-400">
        Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="glass-card glass-card-hover rounded-xl overflow-hidden"
          >
            {/* Recipe Image/Icon */}
            <div 
              className="h-32 flex items-center justify-center text-6xl border-b border-[rgba(255,255,255,0.1)]"
              style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,247,0.15))'}}
            >
              {recipe.image}
            </div>

            {/* Recipe Content */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white flex-1">
                  {recipe.name}
                </h3>
                <button
                  onClick={() => toggleSave(recipe)}
                  className="ml-2 p-1"
                >
                  <Heart
                    size={20}
                    className={isSaved(recipe.id) ? 'fill-[#00d4ff] text-[#00d4ff]' : 'text-gray-500'}
                  />
                </button>
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

              {/* Type Badge */}
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
        ))}
      </div>
    </div>
  );
}

export default BrowseRecipes;