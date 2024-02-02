import { StateCreator } from "zustand";
import { ICartState } from "./types";

export const createCartSlice: StateCreator<ICartState> = (set, get) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,

  addToCart: (product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },

  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    })),

  clearCart: () =>
    set(() => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    })),
});
