import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Clock, TrendingUp } from 'lucide-react';

// This would normally come from a database or API
const getRecipeById = (id) => {
  const recipes = [
    {
      id: 1,
      name: 'Vanilla Almond Latte',
      protein: 0.5,
      prepTime: 5,
      difficulty: 'Easy',
      type: 'Hot',
      image: '☕',
      description: 'Smooth and creamy latte with vanilla and almond milk',
      servings: 1,
      ingredients: [
        { name: 'Almond milk (unsweetened)', amount: '1 cup', protein: 0.4 },
        { name: 'Decaf coffee or coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Vanilla extract', amount: '1/2 tsp', protein: 0 },
        { name: 'Stevia or sugar', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Heat almond milk in a small saucepan or microwave until warm (not boiling)',
        'Brew your decaf coffee or prepare coffee substitute',
        'Add vanilla extract and sweetener to the warm milk and stir',
        'Pour coffee into a mug',
        'Slowly add the vanilla almond milk mixture',
        'Optionally, froth the milk before adding for extra creaminess',
        'Enjoy immediately!'
      ],
      tips: [
        'For a stronger vanilla flavor, use vanilla bean paste instead of extract',
        'Try using flavored stevia for additional taste variations',
        'Can be served over ice for an iced version'
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
      servings: 1,
      ingredients: [
        { name: 'Coconut milk (low protein)', amount: '1 cup', protein: 0.2 },
        { name: 'Cold brew coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free caramel syrup', amount: '2 tbsp', protein: 0 },
        { name: 'Ice cubes', amount: '1 cup', protein: 0 },
      ],
      instructions: [
        'Fill a tall glass with ice cubes',
        'Pour coconut milk over the ice',
        'Add cold brew coffee substitute',
        'Drizzle in caramel syrup',
        'Stir gently to combine',
        'Garnish with extra caramel drizzle if desired',
        'Serve immediately with a straw'
      ],
      tips: [
        'Make your own cold brew substitute the night before for best flavor',
        'Use light coconut milk for fewer calories',
        'Add a pinch of sea salt for a salted caramel flavor'
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
      servings: 1,
      ingredients: [
        { name: 'Oat milk (low protein brand)', amount: '3/4 cup', protein: 0.7 },
        { name: 'Espresso substitute', amount: '1 shot', protein: 0 },
        { name: 'Cinnamon', amount: '1/4 tsp', protein: 0 },
        { name: 'Honey or agave', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Heat oat milk until steaming',
        'Add cinnamon and sweetener to milk, whisk well',
        'Froth the spiced milk until foamy',
        'Prepare your espresso substitute',
        'Pour frothed milk into a glass',
        'Carefully pour espresso through the foam to create layers',
        'Dust with extra cinnamon on top'
      ],
      tips: [
        'Use a milk frother for best results',
        'Pour espresso slowly for distinct layers',
        'Experiment with nutmeg or cardamom for variety'
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
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Cold coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Cocoa powder (measured)', amount: '1 tsp', protein: 0.3 },
        { name: 'Ice', amount: '1.5 cups', protein: 0 },
        { name: 'Sugar', amount: '2 tsp', protein: 0 },
      ],
      instructions: [
        'Add all ingredients to a blender',
        'Blend on high until smooth and creamy',
        'Check consistency - add more ice if too thin',
        'Pour into a tall glass',
        'Top with coconut whipped cream if desired',
        'Drizzle with chocolate syrup (PKU-safe)',
        'Enjoy with a straw or spoon'
      ],
      tips: [
        'Freeze coffee substitute in ice cube trays for extra coffee flavor',
        'Use dark cocoa powder for richer chocolate taste',
        'Blend in a frozen banana for creamier texture (adds minimal protein)'
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
      servings: 1,
      ingredients: [
        { name: 'Almond milk', amount: '1 cup', protein: 0.4 },
        { name: 'Decaf coffee', amount: '1/2 cup', protein: 0 },
        { name: 'Sugar-free maple syrup', amount: '1 tbsp', protein: 0 },
        { name: 'Pecan extract', amount: '1/4 tsp', protein: 0 },
      ],
      instructions: [
        'Brew your decaf coffee',
        'Heat almond milk until warm',
        'Stir in maple syrup and pecan extract',
        'Froth the flavored milk',
        'Pour coffee into mug',
        'Add frothed milk mixture',
        'Top with a sprinkle of cinnamon or nutmeg'
      ],
      tips: [
        'Real maple syrup can be used if preferred (check protein content)',
        'Toast and crush one pecan for garnish (adds about 0.3g protein)',
        'This is perfect for fall mornings!'
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
      servings: 1,
      ingredients: [
        { name: 'Coconut milk', amount: '1 cup', protein: 0.2 },
        { name: 'Coffee substitute', amount: '1/2 cup', protein: 0 },
        { name: 'Hazelnut extract', amount: '1/2 tsp', protein: 0 },
        { name: 'Stevia', amount: '1 tsp', protein: 0 },
      ],
      instructions: [
        'Prepare your coffee substitute',
        'Heat coconut milk until warm',
        'Add hazelnut extract and stevia to milk',
        'Stir or froth the milk',
        'Pour coffee into your favorite mug',
        'Add flavored milk',
        'Enjoy the nutty aroma and flavor!'
      ],
      tips: [
        'Use pure hazelnut extract, not hazelnut syrup with added ingredients',
        'Coconut milk adds a subtle tropical note that complements hazelnut',
        'Great as an iced version too!'
      ]
    },
  ];
  
  return recipes.find(r => r.id === parseInt(id));
};

function RecipeDetail({ savedRecipes, setSavedRecipes, setShoppingList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe not found</h2>
        <button
          onClick={() => navigate('/recipes')}
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back to recipes
        </button>
      </div>
    );
  }

  const isSaved = savedRecipes.some(r => r.id === recipe.id);

  const toggleSave = () => {
    if (isSaved) {
      setSavedRecipes(savedRecipes.filter(r => r.id !== recipe.id));
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  const addToShoppingList = () => {
    setShoppingList(prev => {
      const newItems = recipe.ingredients.map(ing => ({
        ...ing,
        recipeId: recipe.id,
        recipeName: recipe.name,
        checked: false
      }));
      return [...prev, ...newItems];
    });
    alert('Ingredients added to shopping list!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/recipes')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft size={20} />
        <span>Back to recipes</span>
      </button>

      {/* Recipe Header */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 h-48 md:h-64 flex items-center justify-center">
          <span className="text-9xl">{recipe.image}</span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {recipe.name}
            </h1>
            <button
              onClick={toggleSave}
              className="p-2"
            >
              <Heart
                size={28}
                className={isSaved ? 'fill-red-500 text-red-500' : 'text-gray-400'}
              />
            </button>
          </div>

          <p className="text-gray-600 mb-4">{recipe.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
              <TrendingUp className="text-green-600" size={20} />
              <span className="font-semibold text-green-800">{recipe.protein}g protein</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Clock className="text-blue-600" size={20} />
              <span className="font-semibold text-blue-800">{recipe.prepTime} minutes</span>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-lg">
              <span className="font-semibold text-purple-800">{recipe.difficulty}</span>
            </div>
            <div className="bg-orange-50 px-4 py-2 rounded-lg">
              <span className="font-semibold text-orange-800">{recipe.servings} serving</span>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            onClick={addToShoppingList}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Shopping List
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
        <ul className="space-y-3">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <span className="text-gray-800">{ingredient.name}</span>
                <span className="text-gray-500 ml-2">({ingredient.amount})</span>
              </div>
              <span className="text-sm text-green-600 font-medium">
                {ingredient.protein}g protein
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center font-bold">
            <span className="text-gray-800">Total Protein:</span>
            <span className="text-green-600 text-lg">{recipe.protein}g</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
        <ol className="space-y-3">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </span>
              <span className="text-gray-700 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Tips */}
      {recipe.tips && recipe.tips.length > 0 && (
        <div className="bg-amber-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="text-gray-700 flex gap-2">
                <span>•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;