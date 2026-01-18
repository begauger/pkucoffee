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
    { name: 'Espresso Substitute (Single Shot)', protein: 0, unit: 'shot' },
    { name: 'Espresso Substitute (Double Shot)', protein: 0, unit: 'shot' },
    { name: 'Hot Water (Americano)', protein: 0, unit: 'cup' },
  ],
  sweeteners: [
    { name: 'Sugar', protein: 0, unit: 'tsp' },
    { name: 'Brown Sugar', protein: 0, unit: 'tsp' },
    { name: 'Stevia', protein: 0, unit: 'tsp' },
    { name: 'Honey', protein: 0, unit: 'tsp' },
    { name: 'Maple Syrup', protein: 0, unit: 'tbsp' },
    { name: 'Monk Fruit Sweetener', protein: 0, unit: 'tsp' },
    { name: 'Agave Syrup', protein: 0, unit: 'tbsp' },
    { name: 'Coconut Sugar', protein: 0, unit: 'tsp' },
    { name: 'Date Syrup', protein: 0, unit: 'tsp' },
    { name: 'Erythritol', protein: 0, unit: 'tsp' },
    { name: 'Splenda', protein: 0, unit: 'tsp' },
  ],
  flavors: [
    { name: 'Vanilla Extract', protein: 0, unit: 'tsp' },
    { name: 'Caramel Syrup (SF)', protein: 0, unit: 'tbsp' },
    { name: 'Salted Caramel Syrup', protein: 0, unit: 'tbsp' },
    { name: 'Hazelnut Extract', protein: 0, unit: 'tsp' },
    { name: 'Peppermint Extract', protein: 0, unit: 'tsp' },
    { name: 'Mint Extract', protein: 0, unit: 'tsp' },
    { name: 'Almond Extract', protein: 0, unit: 'tsp' },
    { name: 'Coconut Extract', protein: 0, unit: 'tsp' },
    { name: 'Butter Extract', protein: 0, unit: 'tsp' },
    { name: 'Maple Extract', protein: 0, unit: 'tsp' },
    { name: 'Irish Cream Flavor', protein: 0, unit: 'tsp' },
    { name: 'Amaretto Flavor', protein: 0, unit: 'tsp' },
    { name: 'Cocoa Powder', protein: 0.3, unit: 'tsp' },
    { name: 'Mocha Sauce', protein: 0.2, unit: 'tbsp' },
    { name: 'White Chocolate Syrup', protein: 0.1, unit: 'tbsp' },
    { name: 'Pumpkin Puree', protein: 0.1, unit: 'tbsp' },
    { name: 'Peanut Butter Powder (PB2)', protein: 0.4, unit: 'tsp' },
    { name: 'Nutella (measured)', protein: 0.3, unit: 'tsp' },
  ],
  spices: [
    { name: 'Cinnamon', protein: 0, unit: 'tsp' },
    { name: 'Nutmeg', protein: 0, unit: 'tsp' },
    { name: 'Cardamom', protein: 0, unit: 'tsp' },
    { name: 'Ginger Powder', protein: 0, unit: 'tsp' },
    { name: 'Cloves', protein: 0, unit: 'tsp' },
    { name: 'Pumpkin Pie Spice', protein: 0, unit: 'tsp' },
    { name: 'Chai Spice Blend', protein: 0, unit: 'tsp' },
    { name: 'Turmeric', protein: 0, unit: 'tsp' },
    { name: 'Vanilla Bean', protein: 0, unit: 'piece' },
  ],
  addins: [
    { name: 'Ice Cubes', protein: 0, unit: 'cup' },
    { name: 'Coffee Ice Cubes', protein: 0, unit: 'cup' },
    { name: 'Crushed Ice', protein: 0, unit: 'cup' },
    { name: 'Whipped Coconut Cream', protein: 0.1, unit: 'tbsp' },
    { name: 'Mini Chocolate Chips', protein: 0.2, unit: 'tsp' },
    { name: 'Sprinkles', protein: 0, unit: 'tsp' },
    { name: 'Crushed Cookies (measured)', protein: 0.2, unit: 'tsp' },
    { name: 'Sea Salt', protein: 0, unit: 'pinch' },
    { name: 'Brown Sugar Crumbles', protein: 0, unit: 'tsp' },
    { name: 'Toasted Coconut Flakes', protein: 0.1, unit: 'tsp' },
    { name: 'Caramel Drizzle', protein: 0, unit: 'drizzle' },
    { name: 'Chocolate Drizzle', protein: 0.1, unit: 'drizzle' },
  ],
  toppings: [
    { name: 'Coconut Whipped Cream', protein: 0.1, unit: 'tbsp' },
    { name: 'Cinnamon Powder', protein: 0, unit: 'pinch' },
    { name: 'Cocoa Powder Dusting', protein: 0.1, unit: 'pinch' },
    { name: 'Nutmeg Dusting', protein: 0, unit: 'pinch' },
    { name: 'Vanilla Powder', protein: 0, unit: 'pinch' },
    { name: 'Matcha Powder', protein: 0.1, unit: 'pinch' },
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
      <h1 className="text-3xl md:text-4xl font-bold mb-2 glow-text">
        Build Your Own Coffee
      </h1>
      <p className="text-gray-400 mb-6">
        Create your perfect PKU-friendly coffee drink
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Ingredient Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recipe Name */}
          <div className="glass-card rounded-xl p-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Recipe Name
            </label>
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="My Amazing Coffee"
              className="w-full px-4 py-2 glass-input rounded-lg"
            />
          </div>

          {/* Temperature Selection */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-semibold text-white mb-3">Temperature</h3>
            <div className="flex gap-2">
              {['hot', 'iced', 'blended'].map((temp) => (
                <button
                  key={temp}
                  onClick={() => setTemperature(temp)}
                  className={`flex-1 py-2 rounded-lg font-medium transition ${
                    temperature === temp
                      ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border-2 border-[rgba(0,212,255,0.5)]'
                      : 'bg-[rgba(255,255,255,0.05)] text-gray-400 hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                  }`}
                >
                  {temp.charAt(0).toUpperCase() + temp.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredient Categories */}
          {Object.entries(ingredientCategories).map(([category, items]) => (
            <div key={category} className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 capitalize">
                {category === 'coffee' ? 'Coffee Base' : 
                 category === 'addins' ? 'Add-Ins' : 
                 category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {items.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => addIngredient(item, category)}
                    className="flex items-center justify-between p-3 border border-[rgba(255,255,255,0.1)] rounded-lg hover:bg-[rgba(0,212,255,0.05)] hover:border-[rgba(0,212,255,0.3)] transition text-left"
                  >
                    <div>
                      <div className="font-medium text-white text-sm">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.protein}g protein per {item.unit}
                      </div>
                    </div>
                    <Plus size={20} className="text-[#00d4ff] flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Your Recipe */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl p-6 sticky top-4">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator size={20} />
              Your Recipe
            </h3>

            {/* Selected Ingredients */}
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {selectedIngredients.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">
                  Add ingredients to start building
                </p>
              ) : (
                selectedIngredients.map((ing) => (
                  <div
                    key={ing.id}
                    className="border border-[rgba(255,255,255,0.1)] rounded-lg p-3 bg-[rgba(255,255,255,0.02)]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-white">
                        {ing.name}
                      </span>
                      <button
                        onClick={() => removeIngredient(ing.id)}
                        className="text-red-400 hover:text-red-300 text-xl leading-none"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(ing.id, -0.25)}
                          className="w-6 h-6 bg-[rgba(255,255,255,0.1)] rounded flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)]"
                        >
                          <Minus size={14} className="text-gray-300" />
                        </button>
                        <span className="text-sm w-16 text-center text-gray-300">
                          {ing.quantity} {ing.unit}
                        </span>
                        <button
                          onClick={() => updateQuantity(ing.id, 0.25)}
                          className="w-6 h-6 bg-[rgba(255,255,255,0.1)] rounded flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)]"
                        >
                          <Plus size={14} className="text-gray-300" />
                        </button>
                      </div>
                      <span className="text-xs text-[#00d4ff] font-medium">
                        {(ing.protein * ing.quantity).toFixed(2)}g
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total Protein */}
            <div className="border-t border-[rgba(255,255,255,0.1)] pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white">Total Protein:</span>
                <span className="text-2xl font-bold text-[#00d4ff]">
                  {calculateTotalProtein()}g
                </span>
              </div>
              <div className={`text-xs text-center py-2 rounded ${
                parseFloat(calculateTotalProtein()) <= 1 
                  ? 'bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]' 
                  : 'bg-[rgba(255,165,0,0.1)] text-orange-400 border border-[rgba(255,165,0,0.3)]'
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
                className="w-full glass-card btn-ripple py-3 rounded-lg font-semibold transition border-2 border-[rgba(0,212,255,0.5)] text-[#00d4ff] hover:border-[rgba(0,212,255,0.8)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Save Recipe
              </button>
              <button
                onClick={addAllToShoppingList}
                className="w-full glass-card py-3 rounded-lg font-semibold transition border border-[rgba(255,255,255,0.1)] text-gray-300 hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
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