const express = require('express')
const { query, body } = require('express-validator')
const cateringController = require('../controllers/cateringController')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.get('/menu', [
  query('trainId').notEmpty().withMessage('Train ID is required')
], cateringController.getMenu)

router.use(authMiddleware)

router.post('/orders', [
  body('trainId').notEmpty().withMessage('Train ID is required'),
  body('items').isArray({ min: 1 }).withMessage('Items are required'),
  body('items.*.itemId').notEmpty().withMessage('Item ID is required'),
  body('items.*.quantity').optional().isInt({ min: 1 }).withMessage('Invalid quantity'),
  body('deliverySeat').optional().isLength({ max: 32 })
], cateringController.createOrder)

router.get('/orders', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 })
], cateringController.getUserOrders)

module.exports = router