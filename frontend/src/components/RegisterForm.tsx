import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';

interface RegisterFormProps {
  onRegisterSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const toast = useToast();

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', {
        identifier,
        password,
        captcha: verificationCode,
      });
      toast({
        title: 'Registration Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onRegisterSuccess();
    } catch (err) {
      toast({
        title: 'Registration Failed',
        description: 'An unexpected error occurred.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.error('Registration failed:', err);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Register</Heading>
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
      <FormControl id="verification-code" mt={4} isRequired>
        <FormLabel>验证码</FormLabel>
        <Input
          data-testid="verification-code-input"
          placeholder="验证码"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </FormControl>
      <Button data-testid="register-button" mt={6} colorScheme="blue" onClick={handleRegister} width="full">
        注册
      </Button>
    </Box>
  );
};

export default RegisterForm;