'use client';
import { ReactNode } from 'react';

import { useBoundStore } from '@/store';
import Close from '../icons/Close';

interface IProps {
  children: ReactNode;
}

export default function Drawer({ children }: IProps) {
  const toggle = useBoundStore.use.toggleDrawer();
  const isOpen = useBoundStore.use.drawerIsOpen();

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transition duration-700 ease-in-out transform z-50 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
      >
        <aside className="h-full">
          <header className="flex justify-end p-4 h-14">
            <div>
              <button onClick={toggle}>
                <Close size={24} />
              </button>
            </div>
          </header>
          <main className="p-4 bg-white text-black">{children}</main>
        </aside>
      </div>
    </div>
  );
}
