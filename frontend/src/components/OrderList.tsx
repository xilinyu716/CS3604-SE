import React, { useState, useEffect, useMemo } from 'react';
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
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';

interface Order {
  id: string;
  train: any; // Simplified for now
  status: 'upcoming' | 'historical' | 'unpaid';
  passengers: any[]; // Simplified for now
  price: number;
  createdAt: string;
  paymentUrl?: string;
}

type FilterStatus = 'all' | 'upcoming' | 'historical' | 'unpaid';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<FilterStatus>('all');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    if (filter === 'all') return orders;
    return orders.filter(order => order.status === filter);
  }, [orders, filter]);

  const handlePayment = (paymentUrl: string) => {
    window.location.href = paymentUrl;
  };

  const handleFilterChange = (index: number) => {
    const filters: FilterStatus[] = ['all', 'unpaid', 'upcoming', 'historical'];
    setFilter(filters[index]);
  };

  return (
    <Box>
      <Tabs onChange={handleFilterChange}>
        <TabList>
          <Tab>全部</Tab>
          <Tab>待支付</Tab>
          <Tab>待出行</Tab>
          <Tab>历史订单</Tab>
        </TabList>
      </Tabs>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>车次</Th>
              <Th>状态</Th>
              <Th>价格</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredOrders.map((order) => (
              <Tr key={order.id} data-testid="order-item">
                <Td>{order.train.id}</Td>
                <Td>{order.status}</Td>
                <Td>{order.price}</Td>
                <Td>
                  {order.status === 'unpaid' && order.paymentUrl && (
                    <Button colorScheme="blue" size="sm" onClick={() => handlePayment(order.paymentUrl!)}>支付</Button>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderList;