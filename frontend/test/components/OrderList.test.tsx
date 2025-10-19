import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import OrderList from '../../src/components/OrderList';

vi.mock('axios');

const mockOrders = [
  {
    id: '1',
    train: { id: 'G1' },
    status: 'unpaid',
    price: 500,
    paymentUrl: 'http://example.com/payment/1',
  },
  {
    id: '2',
    train: { id: 'D32' },
    status: 'upcoming',
    price: 300,
  },
  {
    id: '3',
    train: { id: 'K101' },
    status: 'historical',
    price: 100,
  },
];

describe('OrderList', () => {
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockOrders });
    localStorage.setItem('token', 'fake-token');
  });

  it('should fetch and display a list of orders', async () => {
    render(<OrderList />);
    await waitFor(() => {
      expect(screen.getAllByTestId('order-item')).toHaveLength(3);
    });
  });

  it('should filter orders by status', async () => {
    render(<OrderList />);
    await waitFor(() => {
      fireEvent.click(screen.getByText('待支付'));
    });
    expect(screen.getAllByTestId('order-item')).toHaveLength(1);
    expect(screen.getByText('车次: G1')).toBeInTheDocument();
  });

  it('should redirect to the payment URL when the payment button is clicked', async () => {
    delete window.location;
    window.location = { href: '' };

    render(<OrderList />);
    await waitFor(() => {
      fireEvent.click(screen.getByText('待支付'));
    });

    const paymentButton = screen.getByText('支付');
    fireEvent.click(paymentButton);

    expect(window.location.href).toBe('http://example.com/payment/1');
  });
});