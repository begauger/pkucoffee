import { Trash2, Check } from 'lucide-react';

function ShoppingList({ shoppingList, setShoppingList }) {
  const toggleChecked = (index) => {
    setShoppingList(shoppingList.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeItem = (index) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const clearCompleted = () => {
    setShoppingList(shoppingList.filter(item => !item.checked));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire shopping list?')) {
      setShoppingList([]);
    }
  };

  const uncheckedCount = shoppingList.filter(item => !item.checked).length;
  const checkedCount = shoppingList.filter(item => item.checked).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Shopping List
        </h1>
        <p className="text-gray-600">
          Your ingredients to purchase
        </p>
      </div>

      {shoppingList.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your shopping list is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add ingredients from recipes or the coffee builder to get started
          </p>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600">
                  {uncheckedCount} items remaining
                </span>
                {checkedCount > 0 && (
                  <span className="text-sm text-gray-600 ml-4">
                    • {checkedCount} completed
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {checkedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear Completed
                  </button>
                )}
                <button
                  onClick={clearAll}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {/* Shopping List Items */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {shoppingList.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition ${
                    item.checked ? 'bg-gray-50' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleChecked(index)}
                    className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                      item.checked
                        ? 'bg-green-600 border-green-600'
                        : 'border-gray-300 hover:border-green-600'
                    }`}
                  >
                    {item.checked && <Check size={16} className="text-white" />}
                  </button>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium ${
                      item.checked ? 'text-gray-400 line-through' : 'text-gray-800'
                    }`}>
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.amount}
                      {item.recipeName && (
                        <span className="ml-2 text-xs text-blue-600">
                          from {item.recipeName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Protein Info */}
                  <div className="text-sm text-green-600 font-medium hidden sm:block">
                    {item.protein}g
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeItem(index)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-600 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Store Locator Placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              🗺️ Store Locator (Coming Soon!)
            </h3>
            <p className="text-gray-600 mb-4">
              We're working on helping you find nearby stores where you can purchase these ingredients, 
              along with price comparisons and estimated total costs.
            </p>
            <div className="text-sm text-gray-500">
              This feature will include:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Nearby grocery stores and health food shops</li>
                <li>Price comparison between stores</li>
                <li>Estimated total cost for your shopping list</li>
                <li>Links to online purchasing options</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingList;