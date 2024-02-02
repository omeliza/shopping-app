export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
}

export interface IDrawerState {
  isOpen: boolean;
  toggle: () => void;
}

export interface ICartState {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;

  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
  clearCart: () => void;
}
