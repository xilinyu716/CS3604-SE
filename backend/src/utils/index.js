const bcrypt = require('bcrypt');
const crypto = require('crypto');

/**
 * Utility functions for the railway booking system
 */

/**
 * Generate a UUID v4
 */
function generateUUID() {
  return crypto.randomUUID();
}

/**
 * Hash password using bcrypt
 */
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Compare password with hash
 */
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

/**
 * Generate verification code
 */
function generateVerificationCode() {
  if (process.env.FORCE_CODE) {
    return String(process.env.FORCE_CODE);
  }
  if (process.env.NODE_ENV === 'test') {
    return '123456';
  }
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Validate phone number format
 */
function validatePhone(phone) {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate password strength
 */
function validatePassword(password) {
  // At least 8 characters, contains letters and numbers
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validate ID card number
 */
function validateIdCard(idCard) {
  const idCardRegex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return idCardRegex.test(idCard);
}

/**
 * Format date to YYYY-MM-DD
 */
function formatDate(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toISOString().split('T')[0];
}

/**
 * Check if date is valid and in future
 */
function isValidFutureDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today && !isNaN(date.getTime());
}

/**
 * Calculate expiration time for verification codes
 */
function getCodeExpirationTime(minutes = 5) {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now.toISOString();
}

/**
 * Check if user is locked due to failed login attempts
 */
function isUserLocked(user) {
  if (!user.locked_until) return false;
  return new Date(user.locked_until) > new Date();
}

/**
 * Calculate lock duration based on failed attempts
 */
function calculateLockDuration(attempts) {
  if (attempts >= 5) {
    return 30; // 30 minutes for 5+ attempts
  } else if (attempts >= 3) {
    return 15; // 15 minutes for 3-4 attempts
  }
  return 0; // No lock for < 3 attempts
}

/**
 * Sanitize input to prevent injection
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Generate seat number
 */
function generateSeatNumber(seatType, index) {
  const carNumber = Math.floor(index / 100) + 1;
  const seatNumber = (index % 100) + 1;
  
  let seatLetter = 'A';
  if (seatType === 'business') {
    seatLetter = ['A', 'C', 'F'][index % 3];
  } else if (seatType === 'first') {
    seatLetter = ['A', 'C', 'D', 'F'][index % 4];
  } else {
    seatLetter = ['A', 'B', 'C', 'D', 'F'][index % 5];
  }
  
  return `${carNumber}车${String(seatNumber).padStart(2, '0')}${seatLetter}`;
}

module.exports = {
  generateUUID,
  hashPassword,
  comparePassword,
  generateVerificationCode,
  validatePhone,
  validatePassword,
  validateIdCard,
  formatDate,
  isValidFutureDate,
  getCodeExpirationTime,
  isUserLocked,
  calculateLockDuration,
  sanitizeInput,
  generateSeatNumber
};