'use client';
import { useBoundStore } from '@/store';
import CartItem from '../CartItem/CartItem';
import Link from 'next/link';

export default function Cart() {
  const cart = useBoundStore.use.cart();
  const toggleDrawer = useBoundStore.use.toggleDrawer();

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) =>
        acc + product.price * ((product.quantity as number) || 1),
      0
    );
  }
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart?.length > 0 && (
        <ul>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
      )}
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">Total:</span>
        <span className="font-bold">${total.toFixed(2)}</span>
        {total > 0 && (
          <Link
            href="/checkout"
            type="button"
            title="Checkout"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg"
            onClick={toggleDrawer}
          >
            Checkout
          </Link>
        )}
      </div>
    </section>
  );
}
