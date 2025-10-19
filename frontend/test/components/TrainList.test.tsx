import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TrainList from '../../src/components/TrainList';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockTrains = [
  {
    id: 'G1',
    from: '北京',
    to: '上海',
    departureTime: '09:00',
    arrivalTime: '13:30',
    price: 553,
    seats: 100,
  },
  {
    id: 'G2',
    from: '北京',
    to: '上海',
    departureTime: '08:00',
    arrivalTime: '12:30',
    price: 600,
    seats: 50,
  },
];

describe('TrainList', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should render a list of trains', () => {
    render(
      <BrowserRouter>
        <TrainList trains={mockTrains} />
      </BrowserRouter>
    );
    const trainItems = screen.getAllByTestId('train-item');
    expect(trainItems).toHaveLength(2);
  });

  it('should navigate to the order page when the book button is clicked', () => {
    render(
      <BrowserRouter>
        <TrainList trains={mockTrains} />
      </BrowserRouter>
    );
    const bookButton = screen.getByTestId('book-button-G1');
    fireEvent.click(bookButton);
    expect(mockNavigate).toHaveBeenCalledWith('/order/G1');
  });

  it('should sort trains by departure time by default', () => {
    render(
      <BrowserRouter>
        <TrainList trains={mockTrains} />
      </BrowserRouter>
    );
    const trainItems = screen.getAllByTestId('train-item');
    expect(trainItems[0]).toHaveTextContent('08:00');
    expect(trainItems[1]).toHaveTextContent('09:00');
  });

  it('should sort trains by price when price sort button is clicked', () => {
    render(
      <BrowserRouter>
        <TrainList trains={mockTrains} />
      </BrowserRouter>
    );
    const priceSortButton = screen.getByText('Sort by Price');
    fireEvent.click(priceSortButton);
    const trainItems = screen.getAllByTestId('train-item');
    expect(trainItems[0]).toHaveTextContent('553');
    expect(trainItems[1]).toHaveTextContent('600');
  });
});