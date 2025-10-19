import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import PassengerManager from '../../src/components/PassengerManager';

vi.mock('axios');

const mockPassengers = [
  {
    id: '1',
    name: 'John Doe',
    idCard: '123456789012345678',
    phone: '13900139000',
  },
];

describe('PassengerManager', () => {
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockPassengers });
    localStorage.setItem('token', 'fake-token');
  });

  it('should fetch and display a list of passengers', async () => {
    render(<PassengerManager />);
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  it('should open a form to add a new passenger', async () => {
    render(<PassengerManager />);
    fireEvent.click(screen.getByTestId('add-passenger-button'));
    await waitFor(() => {
      expect(screen.getByPlaceholderText('姓名')).toBeInTheDocument();
    });
  });

  it('should call the create passenger API when saving a new passenger', async () => {
    const postMock = vi.spyOn(axios, 'post').mockResolvedValue({ data: {} });
    render(<PassengerManager />);
    fireEvent.click(screen.getByTestId('add-passenger-button'));

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText('姓名'), { target: { value: 'Jane Doe' } });
      fireEvent.click(screen.getByText('保存'));
    });

    await waitFor(() => {
      expect(postMock).toHaveBeenCalledWith('/api/passengers', expect.any(Object), expect.any(Object));
    });
  });

  it('should call the update passenger API when saving an existing passenger', async () => {
    const putMock = vi.spyOn(axios, 'put').mockResolvedValue({ data: {} });
    render(<PassengerManager />);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('edit-passenger-1'));
    });

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText('姓名'), { target: { value: 'Johnathan Doe' } });
      fireEvent.click(screen.getByText('保存'));
    });

    await waitFor(() => {
      expect(putMock).toHaveBeenCalledWith('/api/passengers/1', expect.any(Object), expect.any(Object));
    });
  });

  it('should call the delete passenger API when the delete button is clicked', async () => {
    const deleteMock = vi.spyOn(axios, 'delete').mockResolvedValue({ data: {} });
    render(<PassengerManager />);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('delete-passenger-1'));
    });

    await waitFor(() => {
      expect(deleteMock).toHaveBeenCalledWith('/api/passengers/1', expect.any(Object));
    });
  });
});