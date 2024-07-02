export interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  banner: string
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  idFeatured: boolean;
  images: Image[]
}

export interface Image {
  id: string;
  url: string;
}