const express = require('express');
const router = express.Router();

// Mock passenger data
let passengers = [];
let passengerIdCounter = 1;

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

// GET /api/user/passengers
router.get('/', (req, res) => {
  res.status(200).json(passengers);
});

// POST /api/user/passengers
router.post('/', (req, res) => {
  const { name, idCard, phone } = req.body;
  if (!name || !idCard || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newPassenger = { 
    id: passengerIdCounter++, 
    name, 
    idCard, 
    phone, 
    userId: req.userId 
  };
  passengers.push(newPassenger);
  res.status(201).json({ passengerId: newPassenger.id });
});

// PUT /api/user/passengers/:passengerId
router.put('/:passengerId', (req, res) => {
  const passengerId = parseInt(req.params.passengerId, 10);
  const { name, idCard, phone } = req.body;
  const passengerIndex = passengers.findIndex(p => p.id === passengerId);

  if (passengerIndex === -1) {
    return res.status(404).json({ message: 'Passenger not found' });
  }

  passengers[passengerIndex] = { ...passengers[passengerIndex], name, idCard, phone };
  res.status(200).json({ message: 'Passenger updated.' });
});

// DELETE /api/user/passengers/:passengerId
router.delete('/:passengerId', (req, res) => {
  const passengerId = parseInt(req.params.passengerId, 10);
  const initialLength = passengers.length;
  passengers = passengers.filter(p => p.id !== passengerId);

  if (passengers.length === initialLength) {
    return res.status(404).json({ message: 'Passenger not found' });
  }

  res.status(200).json({ message: 'Passenger deleted.' });
});

// This route is only for testing purposes to reset the state
if (process.env.NODE_ENV === 'test') {
  router.post('/test/reset', (req, res) => {
    passengers = [];
    passengerIdCounter = 1;
    res.status(204).send();
  });
}

module.exports = router;