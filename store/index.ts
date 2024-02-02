import { create } from "zustand";

import { ICartState, IDrawerState } from "./types";
import { createDrawerSlice } from "./drawer.slice";
import { createSelectors } from "./selectors";
import { createCartSlice } from "./cart.slice";
import { persist } from "zustand/middleware";

const useBaseBoundStore = create<IDrawerState & ICartState>()(
  persist(
    (...a) => ({
      ...createDrawerSlice(...a),
      ...createCartSlice(...a),
    }),
    {
      name: "storage",
    }
  )
);

export const useBoundStore = createSelectors(useBaseBoundStore);
