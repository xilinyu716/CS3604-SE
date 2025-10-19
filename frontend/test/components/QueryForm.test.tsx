import { render, screen, fireEvent } from '@testing-library/react';
import QueryForm from '../../src/components/QueryForm';
import axios from 'axios';

vi.mock('axios');

describe('QueryForm', () => {
  it('should render from, to, date inputs and a query button', () => {
    render(<QueryForm />);
    expect(screen.getByTestId('from-input')).toBeInTheDocument();
    expect(screen.getByTestId('to-input')).toBeInTheDocument();
    expect(screen.getByTestId('date-input')).toBeInTheDocument();
    expect(screen.getByTestId('query-button')).toBeInTheDocument();
  });

  it('should call the query API when the query button is clicked', async () => {
    const mockedAxios = axios as vi.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({ data: [] });

    render(<QueryForm />);

    fireEvent.change(screen.getByTestId('from-input'), { target: { value: 'Beijing' } });
    fireEvent.change(screen.getByTestId('to-input'), { target: { value: 'Shanghai' } });
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: '2025-10-20' } });

    const queryButton = screen.getByTestId('query-button');
    fireEvent.click(queryButton);

    await screen.findByText('查询');

    expect(mockedAxios.get).toHaveBeenCalledWith('/api/trains', {
      params: { from: 'Beijing', to: 'Shanghai', date: '2025-10-20', isStudent: false },
    });
  });
});