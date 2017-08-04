/*
class sizeType {
  name: string;
  url_key: string;
  }
*/
export class ProductType {
  name: string;
  price: number;
  sizes: { name: string, url_key: string }[];
  photos?: string[];
  }
