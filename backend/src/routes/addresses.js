const express = require('express');
const { body, param, validationResult } = require('express-validator');
const addressController = require('../controllers/addressController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Apply authentication middleware to all address routes
router.use(authMiddleware);

/**
 * GET /api/addresses
 * Get user's address list
 */
router.get('/', addressController.getAddresses);

/**
 * POST /api/addresses
 * Add new address
 */
router.post('/', [
  body('province').notEmpty().withMessage('Province is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('detailAddress').notEmpty().withMessage('Detail address is required'),
  body('recipientName').notEmpty().withMessage('Recipient name is required'),
  body('recipientPhone').isMobilePhone('zh-CN').withMessage('Invalid phone number'),
  body('isDefault').optional().isBoolean().withMessage('isDefault must be a boolean')
], addressController.addAddress);

/**
 * PUT /api/addresses/:addressId
 * Update address information
 */
router.put('/:addressId', [
  param('addressId').notEmpty().withMessage('Address ID is required'),
  body('province').notEmpty().withMessage('Province is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('detailAddress').notEmpty().withMessage('Detail address is required'),
  body('recipientName').notEmpty().withMessage('Recipient name is required'),
  body('recipientPhone').isMobilePhone('zh-CN').withMessage('Invalid phone number'),
  body('isDefault').optional().isBoolean().withMessage('isDefault must be a boolean')
], addressController.updateAddress);

/**
 * DELETE /api/addresses/:addressId
 * Delete address
 */
router.delete('/:addressId', [
  param('addressId').notEmpty().withMessage('Address ID is required')
], addressController.deleteAddress);

module.exports = router;
