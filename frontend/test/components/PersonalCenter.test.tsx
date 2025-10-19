import { render, screen, fireEvent } from '@testing-library/react';
import PersonalCenter from '../../src/components/PersonalCenter';

vi.mock('../../src/components/OrderList', () => ({
  default: () => <div data-testid="order-list">订单列表</div>,
}));

vi.mock('../../src/components/PassengerManager', () => ({
  default: () => <div data-testid="passenger-manager">乘客管理</div>,
}));

describe('PersonalCenter', () => {
  it('should render tabs and default to the orders tab', () => {
    render(<PersonalCenter />);
    expect(screen.getByTestId('orders-tab')).toBeInTheDocument();
    expect(screen.getByTestId('passengers-tab')).toBeInTheDocument();
    expect(screen.getByTestId('settings-tab')).toBeInTheDocument();
    expect(screen.getByTestId('order-list')).toBeInTheDocument();
  });

  it('should switch to the passengers tab when clicked', () => {
    render(<PersonalCenter />);
    fireEvent.click(screen.getByTestId('passengers-tab'));
    expect(screen.getByTestId('passenger-manager')).toBeInTheDocument();
  });

  it('should switch to the settings tab when clicked', () => {
    render(<PersonalCenter />);
    fireEvent.click(screen.getByTestId('settings-tab'));
    expect(screen.getByTestId('settings-content')).toBeInTheDocument();
  });
});