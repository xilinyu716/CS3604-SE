import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import OrderList from './OrderList';
import PassengerManager from './PassengerManager';
import AccountSettings from './AccountSettings';

const PersonalCenter: React.FC = () => {
  return (
    <Box maxW="container.xl" mx="auto" mt={10} p={6}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Personal Center
      </Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab data-testid="orders-tab">订单管理</Tab>
          <Tab data-testid="passengers-tab">乘客管理</Tab>
          <Tab data-testid="settings-tab">账户设置</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <OrderList />
          </TabPanel>
          <TabPanel>
            <PassengerManager />
          </TabPanel>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PersonalCenter;