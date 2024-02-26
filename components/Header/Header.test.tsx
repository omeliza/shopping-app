import { render, waitFor } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';
import { useBoundStore } from '@/store';

jest.mock('@/store');
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Utility function for setting up the test environment
function setup(pathname = '/', totalItems = 0) {
  require('next/navigation').usePathname.mockImplementation(() => pathname);
  require('@/store').useBoundStore.use.totalItems.mockImplementation(
    () => totalItems
  );
}

describe('Header Component', () => {
  it('renders the e-commerce link', () => {
    setup();
    const { getByText } = render(<Header />);
    waitFor(() => expect(getByText('E-commerce')).toBeInTheDocument());
  });

  it('shows the basket with quantity when not on checkout page', () => {
    setup('/', 3); // Assuming there are 3 items in the basket
    const { getByText, getByRole } = render(<Header />);

    waitFor(() => {
      expect(getByText('3')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  it('does not show the basket on the checkout page', () => {
    setup('/checkout');
    const { queryByText, queryByRole } = render(<Header />);
    waitFor(() => {
      expect(queryByText('3')).toBeNull(); // Assuming the same quantity as before, but it shouldn't be found
      expect(queryByRole('button')).toBeNull();
    });
  });

  it('calls toggleDrawer when the basket button is clicked', () => {
    setup('/', 2); // Setup with 2 items and not on checkout page
    const { getByRole } = render(<Header />);
    const button = getByRole('button');
    userEvent.click(button);
    waitFor(() => {
      expect(useBoundStore.use.toggleDrawer).toHaveBeenCalledTimes(1);
    });
  });

  it('updates the basket quantity correctly when items are added', () => {
    setup('/', 1); // Start with 1 item
    const { getByText } = render(<Header />);

    setup('/', 4); // Update to 4 items
    waitFor(() => {
      expect(getByText('4')).toBeInTheDocument();
    });
  });
});
