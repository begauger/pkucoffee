import { useState } from 'react';
import { Plus, Minus, Save, Calculator } from 'lucide-react';

const ingredientCategories = {
  base: [
    { name: 'Water', protein: 0, unit: 'cup' },
    { name: 'Almond Milk (unsweetened)', protein: 0.4, unit: 'cup' },
    { name: 'Coconut Milk', protein: 0.2, unit: 'cup' },
    { name: 'Oat Milk (low protein)', protein: 0.7, unit: 'cup' },
    { name: 'Rice Milk', protein: 0.3, unit: 'cup' },
  ],
  coffee: [
    { name: 'Decaf Coffee', protein: 0, unit: 'cup' },
    { name: 'Coffee Substitute', protein: 0, unit: 'cup' },
    { name: 'Cold Brew Substitute', protein: 0, unit: 'cup' },
  ],
  sweeteners: [
    { name: 'Sugar', protein: 0, unit: 'tsp' },
    { name: 'Stevia', protein: 0, unit: 'tsp' },
    { name: 'Honey', protein: 0, unit: 'tsp' },
    { name: 'Monk Fruit Sweetener', protein: 0, unit: 'tsp' },
    { name: 'Agave Syrup', protein: 0, unit: 'tbsp' },
  ],
  flavors: [
    { name: 'Vanilla Extract', protein: 0, unit: 'tsp' },
    { name: 'Caramel Syrup (SF)', protein: 0, unit: 'tbsp' },
    { name: 'Hazelnut Extract', protein: 0, unit: 'tsp' },
    { name: 'Peppermint Extract', protein: 0, unit: 'tsp' },
    { name: 'Cocoa Powder', protein: 0.3, unit: 'tsp' },
    { name: 'Cinnamon', protein: 0, unit: 'tsp' },
  ],
  toppings: [
    { name: 'Coconut Whipped Cream', protein: 0.1, unit: 'tbsp' },
    { name: 'Cinnamon Powder', protein: 0, unit: 'pinch' },
    { name: 'Cocoa Powder Dusting', protein: 0.1, unit: 'pinch' },
  ]
};

function BuildYourOwn({ setSavedRecipes, setShoppingList }) {
  const [recipeName, setRecipeName] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [temperature, setTemperature] = useState('hot');

  const addIngredient = (ingredient, category) => {
    const newIngredient = {
        ...ingredient,
     category,
        id: crypto.randomUUID(),
        quantity: 1,
    };
    setSelectedIngredients([...selectedIngredients, newIngredient]);
    };

  const removeIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter(i => i.id !== id));
  };

  const updateQuantity = (id, change) => {
    setSelectedIngredients(selectedIngredients.map(i => 
      i.id === id ? { ...i, quantity: Math.max(0.25, i.quantity + change) } : i
    ));
  };

  const calculateTotalProtein = () => {
    return selectedIngredients.reduce((total, ing) => 
      total + (ing.protein * ing.quantity), 0
    ).toFixed(2);
  };

  const saveRecipe = () => {
    if (!recipeName.trim()) {
      alert('Please enter a name for your recipe!');
      return;
    }
    if (selectedIngredients.length === 0) {
      alert('Please add at least one ingredient!');
      return;
    }

    const newRecipe = {
        id: crypto.randomUUID(),
        name: recipeName,
        protein: parseFloat(calculateTotalProtein()),
      type: temperature.charAt(0).toUpperCase() + temperature.slice(1),
      difficulty: 'Custom',
      prepTime: 10,
      image: '☕',
      description: 'Your custom coffee creation',
      ingredients: selectedIngredients.map(ing => ({
        name: ing.name,
        amount: `${ing.quantity} ${ing.unit}${ing.quantity > 1 ? 's' : ''}`,
        protein: (ing.protein * ing.quantity).toFixed(2)
      })),
      isCustom: true
    };

    setSavedRecipes(prev => [...prev, newRecipe]);
    alert('Recipe saved successfully!');
    
    // Reset form
    setRecipeName('');
    setSelectedIngredients([]);
  };

  const addAllToShoppingList = () => {
    if (selectedIngredients.length === 0) {
      alert('Add some ingredients first!');
      return;
    }
    
    const items = selectedIngredients.map(ing => ({
      name: ing.name,
      amount: `${ing.quantity} ${ing.unit}${ing.quantity > 1 ? 's' : ''}`,
      protein: (ing.protein * ing.quantity).toFixed(2),
      checked: false
    }));
    
    setShoppingList(prev => [...prev, ...items]);
    alert('Ingredients added to shopping list!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Build Your Own Coffee
      </h1>
      <p className="text-gray-600 mb-6">
        Create your perfect PKU-friendly coffee drink
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Ingredient Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recipe Name */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipe Name
            </label>
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="My Amazing Coffee"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Temperature Selection */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Temperature</h3>
            <div className="flex gap-2">
              {['hot', 'iced', 'blended'].map((temp) => (
                <button
                  key={temp}
                  onClick={() => setTemperature(temp)}
                  className={`flex-1 py-2 rounded-lg font-medium transition ${
                    temperature === temp
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {temp.charAt(0).toUpperCase() + temp.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredient Categories */}
          {Object.entries(ingredientCategories).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-800 mb-3 capitalize">
                {category === 'coffee' ? 'Coffee Base' : category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => addIngredient(item, category)}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition text-left"
                  >
                    <div>
                      <div className="font-medium text-gray-800 text-sm">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.protein}g protein per {item.unit}
                      </div>
                    </div>
                    <Plus size={20} className="text-blue-600 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Your Recipe */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Calculator size={20} />
              Your Recipe
            </h3>

            {/* Selected Ingredients */}
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {selectedIngredients.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">
                  Add ingredients to start building
                </p>
              ) : (
                selectedIngredients.map((ing) => (
                  <div
                    key={ing.id}
                    className="border border-gray-200 rounded-lg p-3"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-800">
                        {ing.name}
                      </span>
                      <button
                        onClick={() => removeIngredient(ing.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(ing.id, -0.25)}
                          className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-16 text-center">
                          {ing.quantity} {ing.unit}
                        </span>
                        <button
                          onClick={() => updateQuantity(ing.id, 0.25)}
                          className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-xs text-green-600 font-medium">
                        {(ing.protein * ing.quantity).toFixed(2)}g
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total Protein */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Total Protein:</span>
                <span className="text-2xl font-bold text-green-600">
                  {calculateTotalProtein()}g
                </span>
              </div>
              <div className={`text-xs text-center py-2 rounded ${
                parseFloat(calculateTotalProtein()) <= 1 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {parseFloat(calculateTotalProtein()) <= 1 
                  ? '✓ Low protein friendly' 
                  : '⚠ Higher protein content'}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={saveRecipe}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Save Recipe
              </button>
              <button
                onClick={addAllToShoppingList}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Add to Shopping List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildYourOwn;