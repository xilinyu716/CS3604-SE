const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// In-memory user store for demonstration purposes
const users = [];
let userIdCounter = 1;

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { type, identifier, verificationCode, password } = req.body;

  // Basic validation
  if (!type || !identifier || !password) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  // Check if user already exists
  if (users.find(u => u.identifier === identifier)) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  // Create new user
  const newUser = {
    id: userIdCounter++,
    type,
    identifier,
    password, // In a real app, hash and salt the password!
  };
  users.push(newUser);

  // Generate a token
  const token = jwt.sign({ id: newUser.id }, 'your-secret-key', { expiresIn: '1h' });

  res.status(201).json({ userId: newUser.id, token });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { identifier, password, captcha } = req.body;

  // Basic validation
  if (!identifier || !password) {
    return res.status(400).json({ message: 'Missing identifier or password.' });
  }

  // Find the user
  const user = users.find(u => u.identifier === identifier && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  // Generate a token
  const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });

  res.status(200).json({ token });
});

// POST /api/auth/password/request
router.post('/password/request', (req, res) => {
  // TODO: Implement password reset request logic
  res.status(501).json({ message: 'Not Implemented' });
});

// POST /api/auth/password/reset
router.post('/password/reset', (req, res) => {
  // TODO: Implement password reset logic
  res.status(501).json({ message: 'Not Implemented' });
});

// This route is only for testing purposes to reset the state
if (process.env.NODE_ENV === 'test') {
  router.post('/test/reset', (req, res) => {
    users.length = 0;
    userIdCounter = 1;
    res.status(204).send();
  });
}

module.exports = router;