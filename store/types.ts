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

export interface IUIState {
  drawerIsOpen: boolean;
  loginModalIsOpen: boolean;
  registerModalIsOpen: boolean;

  toggleDrawer: () => void;
  toggleLoginModal: () => void;
  toggleRegisterModal: () => void;
}

export interface ICartState {
  cart: IProduct[];
  totalItems: number;
  totalPrice: number;

  addToCart: (item: IProduct) => void;
  removeFromCart: (item: IProduct) => void;
  clearCart: () => void;
}
