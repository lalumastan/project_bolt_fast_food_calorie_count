import React, { useState } from 'react';
import { ComparisonCard } from './components/ComparisonCard';
import { FilterBar } from './components/FilterBar';
import { menuItems } from './data/menuItems';
import { Restaurant, MenuItem } from './types/food';
import { Utensils } from 'lucide-react';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | 'All'>('All');
  const [sortBy, setSortBy] = useState<'calories' | 'protein' | 'carbs' | 'fat'>('calories');

  const filteredItems = menuItems
    .filter((item) => selectedRestaurant === 'All' || item.restaurant === selectedRestaurant)
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Utensils className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Fast Food Calorie Comparison
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterBar
          selectedRestaurant={selectedRestaurant}
          onRestaurantChange={setSelectedRestaurant}
          onSortChange={setSortBy}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ComparisonCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;