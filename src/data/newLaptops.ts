import newLaptopsData from './newLaptops.json';

export interface NewLaptop {
  id: string;
  brand: string;
  model: string;
  specs: string;
  highlights: string;
}

export const newLaptops: NewLaptop[] = newLaptopsData as NewLaptop[];
