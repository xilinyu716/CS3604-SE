const express = require('express');
const { query, param, validationResult } = require('express-validator');
const trainController = require('../controllers/trainController');

const router = express.Router();

/**
 * GET /api/trains/search
 * Search trains by departure, destination and date
 */
router.get('/search', [
  query('from').notEmpty().withMessage('缺少必要参数'),
  query('to').notEmpty().withMessage('缺少必要参数'),
  query('date').isISO8601().withMessage('日期格式不正确'),
  query('passengerType').optional().isIn(['adult', 'child', 'student']).withMessage('Invalid passenger type')
], trainController.searchTrains);

/**
 * GET /api/trains/:trainId
 * Get detailed train information
 */
router.get('/:trainId', [
  param('trainId').notEmpty().withMessage('Train ID is required')
], trainController.getTrainDetails);

module.exports = router;