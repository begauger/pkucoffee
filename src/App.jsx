import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BrowseRecipes from './pages/BrowseRecipes';
import RecipeDetail from './pages/RecipeDetail';
import BuildYourOwn from './pages/BuildYourOwn';
import ShoppingList from './pages/ShoppingList';
import MyRecipes from './pages/MyRecipes';

function App() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<BrowseRecipes savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} setShoppingList={setShoppingList} />} />
            <Route path="/build" element={<BuildYourOwn setSavedRecipes={setSavedRecipes} setShoppingList={setShoppingList} />} />
            <Route path="/shopping-list" element={<ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />} />
            <Route path="/my-recipes" element={<MyRecipes savedRecipes={savedRecipes} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;