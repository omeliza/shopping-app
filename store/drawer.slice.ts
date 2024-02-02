import { StateCreator } from "zustand";

import { IDrawerState } from "./types";

export const createDrawerSlice: StateCreator<IDrawerState> = (set) => ({
  isOpen: false,
  toggle: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
});
