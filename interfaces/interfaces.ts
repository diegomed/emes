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
  parent: number;
}

export interface Pages {
  id: number;
  slug: string;
  link: string;
  _embbeded: {
    "wp:featuredmedia": {
      source_url: string;
    }[]
  }
}