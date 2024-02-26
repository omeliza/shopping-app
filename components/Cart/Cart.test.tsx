import { render } from '@testing-library/react';
import { useBoundStore } from '@/store';

import '@testing-library/jest-dom';

import { cart } from '@/__mocks__/cart';
import Cart from './Cart';

jest.mock('@/store');

describe('Cart', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Cart />);
    const headingElement = getByText('Shopping Cart');
    const price = getByText('$0.00');
    expect(headingElement).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should display the total correctly and checkout button is visible when total is greater than 0', () => {
    jest.spyOn(useBoundStore.use, 'cart').mockReturnValue(cart);
    const { getByText, getByRole } = render(<Cart />);

    const totalElement = getByText('$500.00');
    expect(totalElement).toBeInTheDocument();

    const checkoutButton = getByRole('link', { name: 'Checkout' });
    expect(checkoutButton).toBeInTheDocument();
  });

  it('should not display the checkout button when total is 0', () => {
    const cart: any[] = [];
    jest.spyOn(useBoundStore.use, 'cart').mockReturnValue(cart);
    const { queryByRole } = render(<Cart />);
    const checkoutButton = queryByRole('link', { name: 'Checkout' });
    expect(checkoutButton).not.toBeInTheDocument();
  });
});
