import { create } from 'zustand';

import { ICartState, IUIState } from './types';
import { createSelectors } from './selectors';
import { createCartSlice } from './cart.slice';
import { persist } from 'zustand/middleware';
import { createUISlice } from './ui.slice';

const useBaseBoundStore = create<IUIState & ICartState>()(
  persist(
    (...a) => ({
      ...createUISlice(...a),
      ...createCartSlice(...a),
    }),
    {
      name: 'storage',
    }
  )
);

export const useBoundStore = createSelectors(useBaseBoundStore);
