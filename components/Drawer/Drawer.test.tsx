import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Drawer from './Drawer';
import { useBoundStore } from '@/store';

jest.mock('@/store');

describe('Drawer', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Drawer>Hello World</Drawer>);
    useBoundStore.use.toggleDrawer();
    const drawerElement = getByRole('dialog');
    waitFor(() => {
      expect(drawerElement).toBeInTheDocument();
      expect(drawerElement).toHaveClass('translate-x-full');
    });
  });

  it('should toggle drawer when button is clicked', () => {
    useBoundStore.use.toggleDrawer();
    const { getByRole } = render(<Drawer>Hello World</Drawer>);
    const drawerElement = getByRole('dialog');

    waitFor(() => {
      expect(drawerElement).toBeInTheDocument();
    });

    const buttonElement = getByRole('button');
    userEvent.click(buttonElement);

    waitFor(() => {
      expect(useBoundStore.use.toggleDrawer).toHaveBeenCalled();
      expect(drawerElement).not.toBeInTheDocument();
    });
  });
});
