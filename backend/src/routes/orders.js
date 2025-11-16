const express = require('express');
const { body, param, query, validationResult } = require('express-validator');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Apply authentication middleware to all order routes
router.use(authMiddleware);

/**
 * POST /api/orders
 * Create new order
 */
router.post('/', [
  body('trainId').notEmpty().withMessage('Train ID is required'),
  body('passengers').isArray({ min: 1 }).withMessage('At least one passenger is required'),
  body('passengers.*.name').notEmpty().withMessage('Passenger name is required'),
  body('passengers.*.idCard').isLength({ min: 18, max: 18 }).withMessage('Invalid ID card number'),
  body('passengers.*.seatType').isIn(['business', 'first', 'second']).withMessage('Invalid seat type'),
  body('contactPhone').isMobilePhone('zh-CN').withMessage('Invalid contact phone number')
], orderController.createOrder);

/**
 * GET /api/orders
 * Get user orders with pagination
 */
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Invalid page number'),
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Invalid limit'),
  query('status').optional().isIn(['pending', 'paid', 'cancelled', 'completed']).withMessage('Invalid status')
], orderController.getUserOrders);

/**
 * GET /api/orders/:orderId
 * Get order details
 */
router.get('/:orderId', [
  param('orderId').notEmpty().withMessage('Order ID is required')
], orderController.getOrderDetails);

/**
 * POST /api/orders/:orderId/pay
 * Pay for order
 */
router.post('/:orderId/pay', [
  param('orderId').notEmpty().withMessage('Order ID is required'),
  body('paymentMethod').isIn(['alipay', 'wechat', 'bank_card']).withMessage('Invalid payment method')
], orderController.payOrder);

/**
 * POST /api/orders/:orderId/cancel
 * Cancel order
 */
router.post('/:orderId/cancel', [
  param('orderId').notEmpty().withMessage('Order ID is required'),
  body('reason').optional().isLength({ max: 200 }).withMessage('Reason too long')
], orderController.cancelOrder);

module.exports = router;