import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';

const AccountSettings: React.FC = () => {
  const toast = useToast();

  const handleChangePassword = () => {
    // 在这里处理密码更改逻辑
    toast({
      title: 'Password changed.',
      description: "We've changed your password for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading size="lg" mb={6}>
        账户设置
      </Heading>
      <VStack spacing={8} align="flex-start">
        <Box>
          <Heading size="md" mb={4}>
            更改密码
          </Heading>
          <FormControl>
            <FormLabel>当前密码</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>新密码</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>确认新密码</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button mt={6} colorScheme="blue" onClick={handleChangePassword}>
            更改密码
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default AccountSettings;