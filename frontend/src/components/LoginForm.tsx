import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        identifier,
        password,
        captcha: '1234', // Mock captcha
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        toast({
          title: 'Login Successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        onLoginSuccess();
      } else {
        toast({
          title: 'Login Failed',
          description: response.data.message || 'Invalid credentials',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: 'Login Failed',
        description: 'An unexpected error occurred.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.error('Login failed:', err);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Login</Heading>
      <FormControl id="identifier" isRequired>
        <FormLabel>手机号/邮箱</FormLabel>
        <Input
          data-testid="identifier-input"
          placeholder="手机号/邮箱"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" mt={4} isRequired>
        <FormLabel>密码</FormLabel>
        <Input
          data-testid="password-input"
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button data-testid="login-button" mt={6} colorScheme="blue" onClick={handleLogin} width="full">
        登录
      </Button>
    </Box>
  );
};

export default LoginForm;