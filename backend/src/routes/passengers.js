const express = require('express');
const { body, param, validationResult } = require('express-validator');
const passengerController = require('../controllers/passengerController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Apply authentication middleware to all passenger routes
router.use(authMiddleware);

/**
 * GET /api/passengers
 * Get user's passenger list
 */
router.get('/', passengerController.getPassengers);

/**
 * POST /api/passengers
 * Add new passenger
 */
router.post('/', [
  body('name').notEmpty().withMessage('Passenger name is required'),
  body('idCard').isLength({ min: 18, max: 18 }).withMessage('Invalid ID card number'),
  body('phone').optional().isMobilePhone('zh-CN').withMessage('Invalid phone number'),
  body('passengerType').isIn(['adult', 'child', 'student']).withMessage('Invalid passenger type')
], passengerController.addPassenger);

/**
 * PUT /api/passengers/:passengerId
 * Update passenger information
 */
router.put('/:passengerId', [
  param('passengerId').notEmpty().withMessage('Passenger ID is required'),
  body('name').notEmpty().withMessage('Passenger name is required'),
  body('idCard').isLength({ min: 18, max: 18 }).withMessage('Invalid ID card number'),
  body('phone').optional().isMobilePhone('zh-CN').withMessage('Invalid phone number'),
  body('passengerType').isIn(['adult', 'child', 'student']).withMessage('Invalid passenger type')
], passengerController.updatePassenger);

/**
 * DELETE /api/passengers/:passengerId
 * Delete passenger
 */
router.delete('/:passengerId', [
  param('passengerId').notEmpty().withMessage('Passenger ID is required')
], passengerController.deletePassenger);

module.exports = router;