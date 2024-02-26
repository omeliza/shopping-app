import { StateCreator } from 'zustand';

import { IUIState } from './types';

export const createUISlice: StateCreator<IUIState> = (set) => ({
  drawerIsOpen: false,
  loginModalIsOpen: false,
  registerModalIsOpen: false,

  toggleDrawer: () =>
    set((state) => ({
      drawerIsOpen: !state.drawerIsOpen,
    })),
  toggleLoginModal: () =>
    set((state) => ({
      loginModalIsOpen: !state.loginModalIsOpen,
    })),
  toggleRegisterModal: () =>
    set((state) => ({
      registerModalIsOpen: !state.registerModalIsOpen,
    })),
});
