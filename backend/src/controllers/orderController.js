const { validationResult } = require('express-validator');
const orderService = require('../services/orderService');

/**
 * Create new order
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid order data.' });
    }

    const { trainId, passengers, contactPhone } = req.body;
    const userId = req.user.id;
    
    const order = await orderService.createOrder({
      userId,
      trainId,
      passengers,
      contactPhone
    });

    res.status(201).json({ order });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Order creation failed.' });
  }
};

/**
 * Get user orders with pagination
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserOrders = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid query parameters.' });
    }

    const { page = 1, limit = 10, status } = req.query;
    const userId = req.user.id;

    const result = await orderService.getUserOrders(userId, { page, limit, status });
    res.status(200).json(result);
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ error: 'Failed to retrieve orders.' });
  }
};

/**
 * Get order details
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getOrderDetails = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid order ID.' });
    }

    const { orderId } = req.params;
    const userId = req.user.id;

    const order = await orderService.getOrderDetails(orderId, userId);
    res.status(200).json({ order });
  } catch (error) {
    console.error('Get order details error:', error);
    if (error.message === 'Order not found') {
      return res.status(404).json({ error: 'Order not found.' });
    }
    res.status(500).json({ error: 'Failed to retrieve order details.' });
  }
};

/**
 * Pay for order
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const payOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid payment data.' });
    }

    const { orderId } = req.params;
    const { paymentMethod } = req.body;
    const userId = req.user.id;

    const result = await orderService.payOrder(orderId, { userId, paymentMethod });
    res.status(200).json(result);
  } catch (error) {
    console.error('Pay order error:', error);
    if (error.message === 'Order not found') {
      return res.status(404).json({ error: 'Order not found.' });
    }
    if (error.message === 'Order cannot be paid') {
      return res.status(400).json({ error: 'Order cannot be paid.' });
    }
    res.status(500).json({ error: 'Payment processing failed.' });
  }
};

/**
 * Cancel order
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const cancelOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid cancellation data.' });
    }

    const { orderId } = req.params;
    const { reason } = req.body;
    const userId = req.user.id;

    const result = await orderService.cancelOrder(orderId, userId, reason);
    res.status(200).json(result);
  } catch (error) {
    console.error('Cancel order error:', error);
    if (error.message === 'Order not found') {
      return res.status(404).json({ error: 'Order not found.' });
    }
    if (error.message === 'Order already cancelled') {
      return res.status(400).json({ error: 'Order already cancelled.' });
    }
    res.status(500).json({ error: 'Order cancellation failed.' });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderDetails,
  payOrder,
  cancelOrder
};