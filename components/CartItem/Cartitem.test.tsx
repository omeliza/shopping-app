import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartItem from './CartItem';
import { useBoundStore } from '@/store';
import { product1 } from '@/__mocks__/products';

jest.mock('@/store');

describe('CartItem', () => {
  it('renders product details correctly', () => {
    const { getByText } = render(
      <CartItem product={{ ...product1, quantity: 1 }} />
    );

    const titleElement = getByText('Product 1');
    const priceElement = getByText('$200');
    const quantityElement = getByText('Quantity: 1');

    waitFor(() => {
      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
      expect(quantityElement).toBeInTheDocument();
    });
  });

  it('calls removeFromCart when remove button is clicked', () => {
    const { getByTitle } = render(<CartItem product={product1} />);

    const removeButton = getByTitle('Remove Item');
    userEvent.click(removeButton);

    waitFor(() => {
      expect(useBoundStore.use.removeFromCart).toHaveBeenCalled();
      expect(useBoundStore.use.removeFromCart).toHaveBeenCalledWith(product1);
    });
  });
});
