export interface MenuItem {
  id: string;
  name: string;
  restaurant: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: string;
  imageUrl?: string;
}

export type Restaurant = 'McDonald\'s' | 'Burger King' | 'Chipotle' | 'Chick-fil-A' | 'KFC' | 'Popeyes';