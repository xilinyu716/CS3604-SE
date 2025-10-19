import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import LoginForm from '../../src/components/LoginForm';

vi.mock('axios');

describe('LoginForm', () => {
  it('should call the login API and onLoginSuccess on successful login', async () => {
    const handleLoginSuccess = vi.fn();
    const mockPost = vi.spyOn(axios, 'post').mockResolvedValue({ data: { token: 'fake-token' } });

    render(<LoginForm onLoginSuccess={handleLoginSuccess} />);

    fireEvent.change(screen.getByTestId('identifier-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('/api/auth/login', {
        identifier: 'test@example.com',
        password: 'password123',
        captcha: '1234',
      });
    });

    await waitFor(() => {
      expect(handleLoginSuccess).toHaveBeenCalled();
    });
  });
});