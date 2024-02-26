import { act } from '@testing-library/react';
import { create } from 'zustand';
import { IUIState } from '../types';
import { createUISlice } from '../ui.slice';

const useTestStore = create<IUIState>()((...a) => ({
  ...createUISlice(...a),
}));

describe('ui slice', () => {
  it('should toggle the drawer', () => {
    expect(useTestStore.getState().drawerIsOpen).toBe(false);

    act(() => {
      useTestStore.getState().toggleDrawer();
    });
    expect(useTestStore.getState().drawerIsOpen).toBe(true);

    act(() => {
      useTestStore.getState().toggleDrawer();
    });
    expect(useTestStore.getState().drawerIsOpen).toBe(false);
  });

  it('should toggle the login modal', () => {
    expect(useTestStore.getState().loginModalIsOpen).toBe(false);

    act(() => {
      useTestStore.getState().toggleLoginModal();
    });
    expect(useTestStore.getState().loginModalIsOpen).toBe(true);

    act(() => {
      useTestStore.getState().toggleLoginModal();
    });
    expect(useTestStore.getState().loginModalIsOpen).toBe(false);
  });

  it('should toggle the register modal', () => {
    expect(useTestStore.getState().registerModalIsOpen).toBe(false);

    act(() => {
      useTestStore.getState().toggleRegisterModal();
    });
    expect(useTestStore.getState().registerModalIsOpen).toBe(true);

    act(() => {
      useTestStore.getState().toggleRegisterModal();
    });
    expect(useTestStore.getState().registerModalIsOpen).toBe(false);
  });
});
