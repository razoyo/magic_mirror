export interface ProductType {
  name: string;
  price: number;
  sizes: { name: string, url_key: string }[];
  photos?: string[];
  }
