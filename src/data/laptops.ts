import laptopsData from './laptops.json';

export interface Laptop {
  id: string;
  brand: string;
  model: string;
  image: string;
  specs: string;
  condition: string;
  price: number;
  category: string;
}

export const laptops: Laptop[] = laptopsData as Laptop[];

export const laptopBrands = ['All', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple'] as const;

export const conditionFilters = ['All', 'Like New', 'Excellent', 'Good'] as const;
