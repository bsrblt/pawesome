export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}
export interface BottomSectionData {
  [key: string]: {
    href1: string;
    button1Text: string;
    href2: string;
    button2Text: string;
    title: string;
    desc: string;
  };
}
export interface Product {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  Category: string;
  type: string;
  featured: string;
  nutritionValues: {
    [key: string]: string;
  };
}
