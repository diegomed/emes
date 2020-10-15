export interface Product {
    name: string; 
    description: string;
    price: string;
    slug: string;
    images: {
      name: string;
      src: string;
    }[];
    categories: any[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}