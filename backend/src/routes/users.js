const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Apply authentication middleware to all user routes
router.use(authMiddleware);

/**
 * GET /api/users/profile
 * Get user profile
 */
router.get('/profile', userController.getUserProfile);

/**
 * PUT /api/users/profile
 * Update user profile
 */
router.put('/profile', [
  body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().withMessage('Invalid email format'),
  body('avatar').optional().isURL().withMessage('Invalid avatar URL')
], userController.updateUserProfile);

module.exports = router;