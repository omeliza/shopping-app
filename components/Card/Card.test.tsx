import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './Card';
import { useBoundStore } from '@/store';
import { product1 } from '@/__mocks__/products';

jest.mock('@/store');

describe('Card', () => {
  it('should render correctly', () => {
    const { container } = render(<Card product={product1} />);
    expect(container).toMatchSnapshot();
  });

  it('should add product to cart', () => {
    const { getByText } = render(<Card product={product1} />);
    userEvent.click(getByText('Add to Cart'));

    waitFor(() => {
      expect(useBoundStore.use.addToCart).toHaveBeenCalled();
      expect(useBoundStore.use.addToCart).toHaveBeenCalledWith(product1);
    });
  });
});
