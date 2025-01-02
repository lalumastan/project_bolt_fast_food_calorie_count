import { MenuItem } from '../types/food';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Big Mac',
    restaurant: 'McDonald\'s',
    calories: 563,
    protein: 26,
    carbs: 45,
    fat: 33,
    category: 'Burgers',
    imageUrl: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Whopper',
    restaurant: 'Burger King',
    calories: 657,
    protein: 28,
    carbs: 49,
    fat: 40,
    category: 'Burgers',
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Chicken Burrito Bowl',
    restaurant: 'Chipotle',
    calories: 665,
    protein: 44,
    carbs: 71,
    fat: 23,
    category: 'Bowls',
    imageUrl: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=400',
  },
  // Add more items as needed
];