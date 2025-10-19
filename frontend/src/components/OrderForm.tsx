import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Heading,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';

interface TrainInfo {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
}

interface Passenger {
  id: string;
  name: string;
}

interface OrderFormProps {
  trainInfo: TrainInfo;
}

const OrderForm: React.FC<OrderFormProps> = ({ trainInfo }) => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [selectedPassengers, setSelectedPassengers] = useState<string[]>([]);
  const toast = useToast();

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user/passengers', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPassengers(response.data);
      } catch (err) {
        console.error('Failed to fetch passengers:', err);
      }
    };
    fetchPassengers();
  }, []);

  const handlePassengerSelection = (passengerId: string) => {
    setSelectedPassengers((prev) =>
      prev.includes(passengerId)
        ? prev.filter((id) => id !== passengerId)
        : [...prev, passengerId]
    );
  };

  const handleSubmitOrder = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/api/orders',
        {
          trainId: trainInfo.id,
          passengerIds: selectedPassengers,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Redirect to payment URL
      window.location.href = response.data.paymentUrl;
    } catch (err) {
      toast({
        title: 'Order Failed',
        description: 'Failed to create order',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.error('Failed to create order:', err);
    }
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Confirm Order
      </Heading>
      <Box mb={4}>
        <Text fontSize="xl">{trainInfo.from} - {trainInfo.to}</Text>
        <Text color="gray.500">{trainInfo.departureTime} - {trainInfo.arrivalTime}</Text>
      </Box>
      <Heading as="h3" size="md" mb={4}>Select Passengers</Heading>
      <VStack align="start" spacing={2}>
        {passengers.map((passenger) => (
          <Checkbox
            key={passenger.id}
            id={passenger.id}
            isChecked={selectedPassengers.includes(passenger.id)}
            onChange={() => handlePassengerSelection(passenger.id)}
          >
            {passenger.name}
          </Checkbox>
        ))}
      </VStack>
      <Button
        data-testid="submit-order-button"
        mt={6}
        colorScheme="blue"
        onClick={handleSubmitOrder}
        width="full"
      >
        提交订单
      </Button>
    </Box>
  );
};

export default OrderForm;