'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useBoundStore } from '@/store';
import Basket from '../icons/Basket';

export default function Header() {
  const toggle = useBoundStore.use.toggleDrawer();
  const quantity = useBoundStore.use.totalItems();
  const pathname = usePathname();

  const isCheckout = pathname === '/checkout';

  return (
    <header className="bg-gray-900 text-white py-4 flex items-center justify-between h-14 sticky top-0 z-10">
      <nav className="px-24 text-lg font-semibold">
        <Link href="/">E-commerce</Link>
      </nav>
      {!isCheckout && (
        <button
          className="pr-24 flex items-center dark:text-white"
          onClick={toggle}
          type="button"
        >
          <Basket size={24} />
          <div className="rounded bg-blue-700 w-5 h-5 text-sm -ml-1 mt-4">
            {quantity}
          </div>
        </button>
      )}
    </header>
  );
}
