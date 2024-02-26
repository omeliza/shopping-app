import { createCartSlice } from '@/store/cart.slice';
import { ICartState } from '@/store/types';
import { renderHook } from '@testing-library/react';
import { create } from 'zustand';
import { product1, product2 } from '../__mocks__/products';

const useTestStore = create<ICartState>()((...a) => ({
  ...createCartSlice(...a),
}));

describe('cart slice', () => {
  it('should add a product to the cart', () => {
    useTestStore.getState().addToCart(product1);

    const { result } = renderHook(() => useTestStore());

    expect(result.current.cart).toEqual([{ ...product1, quantity: 1 }]);
    expect(result.current.totalItems).toEqual(1);
    expect(result.current.totalPrice).toEqual(product1.price);
  });

  it('should remove a product from the cart', () => {
    useTestStore.getState().addToCart(product1);

    useTestStore.getState().removeFromCart(product1);

    const { result } = renderHook(() => useTestStore());

    expect(result.current.cart).toEqual([]);

    expect(result.current.totalItems).toEqual(0);
    expect(result.current.totalPrice).toEqual(0);
  });

  it('should clear the cart', () => {
    useTestStore.getState().addToCart(product1);
    useTestStore.getState().addToCart(product2);

    useTestStore.getState().clearCart();

    const { result } = renderHook(() => useTestStore());

    expect(result.current.cart).toEqual([]);

    expect(result.current.totalItems).toEqual(0);

    expect(result.current.totalPrice).toEqual(0);
  });
});
