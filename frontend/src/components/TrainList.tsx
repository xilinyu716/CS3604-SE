import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';

interface Train {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seats: number;
}

interface TrainListProps {
  trains: Train[];
}

const TrainList: React.FC<TrainListProps> = ({ trains }) => {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<'departureTime' | 'price'>('departureTime');

  const sortedTrains = useMemo(() => {
    return [...trains].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
  }, [trains, sortKey]);

  const handleBook = (trainId: string) => {
    navigate(`/order/${trainId}`);
  };

  return (
    <Box maxW="4xl" mx="auto" mt={10}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Train List
      </Heading>
      <Flex mb={4}>
        <Spacer />
        <Button onClick={() => setSortKey('departureTime')} mr={2}>
          Sort by Time
        </Button>
        <Button onClick={() => setSortKey('price')}>Sort by Price</Button>
      </Flex>
      <TableContainer borderWidth={1} borderRadius="lg">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Train</Th>
              <Th>Time</Th>
              <Th>Price</Th>
              <Th>Seats</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedTrains.map((train) => (
              <Tr key={train.id} data-testid="train-item">
                <Td>
                  {train.from} - {train.to}
                </Td>
                <Td>
                  {train.departureTime} - {train.arrivalTime}
                </Td>
                <Td>¥{train.price}</Td>
                <Td>{train.seats} left</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    data-testid={`book-button-${train.id}`}
                    onClick={() => handleBook(train.id)}
                  >
                    预订
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TrainList;