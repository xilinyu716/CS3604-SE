import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import OrderForm from '../../src/components/OrderForm';

vi.mock('axios');

const mockTrainInfo = {
  id: 'G1',
  from: '北京',
  to: '上海',
  departureTime: '08:00',
  arrivalTime: '12:30',
};

const mockPassengers = [
  { id: 'p1', name: '张三' },
  { id: 'p2', name: '李四' },
];

describe('OrderForm', () => {
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockPassengers });
    localStorage.setItem('token', 'fake-token');
  });

  it('should display train information and fetch passengers', async () => {
    render(<OrderForm trainInfo={mockTrainInfo} />);
    expect(screen.getByText('北京 - 上海')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('张三')).toBeInTheDocument();
      expect(screen.getByText('李四')).toBeInTheDocument();
    });
  });

  it('should call the create order API with selected passengers when the submit button is clicked', async () => {
    const mockPost = vi.spyOn(axios, 'post').mockResolvedValue({ data: { paymentUrl: 'http://example.com/payment' } });
    delete window.location;
    window.location = { href: '' };

    render(<OrderForm trainInfo={mockTrainInfo} />);

    await waitFor(() => {
      fireEvent.click(screen.getByLabelText('张三'));
    });

    fireEvent.click(screen.getByTestId('submit-order-button'));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        '/api/orders',
        {
          trainId: 'G1',
          passengerIds: ['p1'],
        },
        {
          headers: { Authorization: `Bearer fake-token` },
        }
      );
    });

    await waitFor(() => {
      expect(window.location.href).toBe('http://example.com/payment');
    });
  });
});