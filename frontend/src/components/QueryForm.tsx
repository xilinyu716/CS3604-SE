import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Heading, SimpleGrid } from '@chakra-ui/react';
import TrainList from './TrainList';

interface Train {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seats: number;
}

const QueryForm: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [trains, setTrains] = useState<Train[]>([]);

  const handleQuery = async () => {
    try {
      const response = await axios.get('/api/trains', {
        params: { from, to, date, isStudent: false },
      });
      setTrains(response.data);
    } catch (error) {
      console.error('Query failed:', error);
    }
  };

  return (
    <Box maxW="xl" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Train Query</Heading>
      <SimpleGrid columns={3} spacing={4}>
        <FormControl id="from" isRequired>
          <FormLabel>出发地</FormLabel>
          <Input
            data-testid="from-input"
            placeholder="出发地"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </FormControl>
        <FormControl id="to" isRequired>
          <FormLabel>目的地</FormLabel>
          <Input
            data-testid="to-input"
            placeholder="目的地"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>日期</FormLabel>
          <Input
            data-testid="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
      </SimpleGrid>
      <Button data-testid="query-button" mt={6} colorScheme="blue" onClick={handleQuery} width="full">
        查询
      </Button>
      {trains.length > 0 && <TrainList trains={trains} />}
    </Box>
  );
};

export default QueryForm;