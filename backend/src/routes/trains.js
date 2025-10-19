const express = require('express');
const router = express.Router();

// Mock train data
const trains = [
  {
    id: 'G1',
    from: 'Beijing',
    to: 'Shanghai',
    departureTime: '08:00',
    arrivalTime: '12:30',
    price: 553,
    seats: 100
  },
  {
    id: 'G3',
    from: 'Beijing',
    to: 'Shanghai',
    departureTime: '09:00',
    arrivalTime: '13:30',
    price: 553,
    seats: 50
  }
];

// GET /api/trains
router.get('/', (req, res) => {
  const { from, to, date } = req.query;

  if (!from || !to || !date) {
    return res.status(400).json({ message: 'Missing required query parameters: from, to, date' });
  }

  // In a real application, you would query a database based on the parameters.
  // For this example, we'll just return the mock data if the route matches.
  const filteredTrains = trains.filter(train => train.from === from && train.to === to);

  res.status(200).json(filteredTrains);
});

module.exports = router;