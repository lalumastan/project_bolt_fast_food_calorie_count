import React from 'react';
import { Restaurant } from '../types/food';

interface FilterBarProps {
  selectedRestaurant: Restaurant | 'All';
  onRestaurantChange: (restaurant: Restaurant | 'All') => void;
  onSortChange: (value: 'calories' | 'protein' | 'carbs' | 'fat') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedRestaurant,
  onRestaurantChange,
  onSortChange,
}) => {
  const restaurants: (Restaurant | 'All')[] = [
    'All',
    'McDonald\'s',
    'Burger King',
    'Chipotle',
    'Chick-fil-A',
    'KFC',
    'Popeyes',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <label htmlFor="restaurant" className="text-sm font-medium text-gray-700">
          Restaurant:
        </label>
        <select
          id="restaurant"
          value={selectedRestaurant}
          onChange={(e) => onRestaurantChange(e.target.value as Restaurant | 'All')}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {restaurants.map((restaurant) => (
            <option key={restaurant} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <select
          id="sort"
          onChange={(e) => onSortChange(e.target.value as 'calories' | 'protein' | 'carbs' | 'fat')}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="calories">Calories</option>
          <option value="protein">Protein</option>
          <option value="carbs">Carbs</option>
          <option value="fat">Fat</option>
        </select>
      </div>
    </div>
  );
};