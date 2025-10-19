import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import RegisterForm from '../../src/components/RegisterForm';

vi.mock('axios');

describe('RegisterForm', () => {
  it('should call the register API and onRegisterSuccess on successful registration', async () => {
    const handleRegisterSuccess = vi.fn();
    const mockPost = vi.spyOn(axios, 'post').mockResolvedValue({ data: {} });

    render(<RegisterForm onRegisterSuccess={handleRegisterSuccess} />);

    fireEvent.change(screen.getByTestId('identifier-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('verification-code-input'), { target: { value: '123456' } });
    fireEvent.click(screen.getByTestId('register-button'));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('/api/auth/register', {
        identifier: 'test@example.com',
        password: 'password123',
        captcha: '123456',
      });
    });

    await waitFor(() => {
      expect(handleRegisterSuccess).toHaveBeenCalled();
    });
  });
});