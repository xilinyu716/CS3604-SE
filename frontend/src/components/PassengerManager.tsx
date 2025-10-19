import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useToast,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

interface Passenger {
  id: string;
  name: string;
  idCard: string;
  phone: string;
}

const PassengerManager: React.FC = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPassenger, setCurrentPassenger] = useState<Partial<Passenger> | null>(null);
  const toast = useToast();

  useEffect(() => {
    fetchPassengers();
  }, []);

  const fetchPassengers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/passengers', { headers: { Authorization: `Bearer ${token}` } });
      setPassengers(response.data);
    } catch (error) {
      console.error('Failed to fetch passengers', error);
    }
  };

  const handleSave = async () => {
    if (!currentPassenger) return;
    try {
      const token = localStorage.getItem('token');
      if (currentPassenger.id) {
        await axios.put(`/api/passengers/${currentPassenger.id}`, currentPassenger, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post('/api/passengers', currentPassenger, { headers: { Authorization: `Bearer ${token}` } });
      }
      fetchPassengers();
      onClose();
      setCurrentPassenger(null);
      toast({ title: 'Success', description: 'Passenger saved.', status: 'success', duration: 2000, isClosable: true });
    } catch (error) {
      console.error('Failed to save passenger', error);
      toast({ title: 'Error', description: 'Failed to save passenger.', status: 'error', duration: 2000, isClosable: true });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/passengers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchPassengers();
      toast({ title: 'Success', description: 'Passenger deleted.', status: 'success', duration: 2000, isClosable: true });
    } catch (error) {
      console.error('Failed to delete passenger', error);
      toast({ title: 'Error', description: 'Failed to delete passenger.', status: 'error', duration: 2000, isClosable: true });
    }
  };

  const openModal = (passenger: Partial<Passenger> | null) => {
    setCurrentPassenger(passenger);
    onOpen();
  };

  return (
    <Box>
      <Button data-testid="add-passenger-button" onClick={() => openModal({})}>新增乘客</Button>

      <TableContainer mt={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>姓名</Th>
              <Th>身份证号</Th>
              <Th>手机号</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {passengers.map((passenger) => (
              <Tr key={passenger.id} data-testid="passenger-item">
                <Td>{passenger.name}</Td>
                <Td>{passenger.idCard}</Td>
                <Td>{passenger.phone}</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton aria-label="Edit" icon={<EditIcon />} data-testid={`edit-passenger-${passenger.id}`} onClick={() => openModal(passenger)} />
                    <IconButton aria-label="Delete" icon={<DeleteIcon />} data-testid={`delete-passenger-${passenger.id}`} onClick={() => handleDelete(passenger.id)} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {currentPassenger && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{currentPassenger.id ? '编辑乘客' : '新增乘客'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>姓名</FormLabel>
                <Input
                  value={currentPassenger.name || ''}
                  onChange={(e) => setCurrentPassenger({ ...currentPassenger, name: e.target.value })}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>身份证号</FormLabel>
                <Input
                  value={currentPassenger.idCard || ''}
                  onChange={(e) => setCurrentPassenger({ ...currentPassenger, idCard: e.target.value })}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>手机号</FormLabel>
                <Input
                  value={currentPassenger.phone || ''}
                  onChange={(e) => setCurrentPassenger({ ...currentPassenger, phone: e.target.value })}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>保存</Button>
              <Button onClick={onClose}>取消</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default PassengerManager;