const express = require('express');
const router = express.Router();

// Mock order data
let orders = [];
let orderIdCounter = 1;

// Middleware to simulate user authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    // In a real app, you'd verify the token and get the user ID
    req.userId = 'mock-user-id'; 
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

router.use(authenticate);

// GET /api/user/orders
router.get('/', (req, res) => {
  const { status } = req.query;
  let userOrders = orders.filter(order => order.userId === req.userId);

  if (status) {
    userOrders = userOrders.filter(order => order.status === status);
  }

  res.status(200).json(userOrders);
});

// POST /api/orders
router.post('/', (req, res) => {
  const { trainId, passengers } = req.body;

  if (!trainId || !passengers || !Array.isArray(passengers) || passengers.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: trainId and passengers' });
  }

  const newOrder = {
    id: orderIdCounter++,
    userId: req.userId,
    trainId,
    passengers,
    status: 'pending-payment',
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);

  res.status(201).json({
    orderId: newOrder.id,
    paymentUrl: `/payment/pay?orderId=${newOrder.id}`
  });
});

module.exports = router;