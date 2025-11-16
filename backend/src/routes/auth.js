const express = require('express');
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

/**
 * POST /auth/signup
 * User registration endpoint
 */
router.post('/signup', [
  body('phone').isMobilePhone('zh-CN').withMessage('Invalid phone number format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('code').optional().isLength({ min: 4, max: 6 }).withMessage('Invalid verification code'),
  body('name').optional().isLength({ min: 1 }).withMessage('Name cannot be empty'),
  body('idCard').optional().isLength({ min: 15, max: 18 }).withMessage('Invalid ID card format')
], authController.register);

/**
 * POST /auth/signin
 * User login endpoint
 */
router.post('/signin', [
  body('phone').isMobilePhone('zh-CN').withMessage('Invalid phone number format'),
  body('password').notEmpty().withMessage('Password is required')
], authController.login);

/**
 * POST /auth/send-code
 * Send verification code endpoint
 */
router.post('/send-code', [
  body('phone').isMobilePhone('zh-CN').withMessage('Invalid phone number format'),
  body('type').isIn(['register', 'reset_password', 'reset']).withMessage('Invalid code type')
], authController.sendVerificationCode);

/**
 * POST /auth/reset-password
 * Reset password endpoint
 */
router.post('/reset-password', [
  body('phone').isMobilePhone('zh-CN').withMessage('Invalid phone number format'),
  body('verificationCode').isLength({ min: 4, max: 6 }).withMessage('Invalid verification code'),
  body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], authController.resetPassword);

module.exports = router;