import React from 'react';
import { MenuItem } from '../types/food';
import { BarChart3, Beef, Wheat, Cookie } from 'lucide-react';

interface ComparisonCardProps {
  item: MenuItem;
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={item.imageUrl || 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400'}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.restaurant}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {item.calories} cal
          </span>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Beef className="w-4 h-4 mr-2" />
            <span>Protein: {item.protein}g</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Wheat className="w-4 h-4 mr-2" />
            <span>Carbs: {item.carbs}g</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Cookie className="w-4 h-4 mr-2" />
            <span>Fat: {item.fat}g</span>
          </div>
        </div>
      </div>
    </div>
  );
};