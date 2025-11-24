const jwt = require('jsonwebtoken');
const database = require('../config/database');
const { 
  generateUUID, 
  hashPassword, 
  comparePassword, 
  generateVerificationCode,
  getCodeExpirationTime,
  isUserLocked,
  calculateLockDuration,
  validateIdCard
} = require('../utils');

const JWT_SECRET = process.env.JWT_SECRET || 'railway-booking-secret-key';

/**
 * Authentication service for user registration, login, and password management
 */
class AuthService {
  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} User object and JWT token
   */
  async register({ phone, password, code, name, idCard, email }) {
    try {
      // Check if phone already exists
      const existingUser = await database.get(
        'SELECT id FROM users WHERE phone = ?',
        [phone]
      );

      if (existingUser) {
        return { success: false, error: 'Phone number already registered.' };
      }

      // Validate ID card if provided
      if (idCard && !validateIdCard(idCard)) {
        return { success: false, error: 'Invalid ID card format.' };
      }

      // Verify the verification code (skip for testing)
      if (code) {
        const isCodeValid = await this.verifyCode(phone, code, 'register');
        if (!isCodeValid) {
          return { success: false, error: 'Invalid or expired verification code.' };
        }
      }

      // Hash password
      const passwordHash = await hashPassword(password);

      // Create user
      const userId = generateUUID();
      await database.run(
        `INSERT INTO users (id, phone, password_hash, name, id_card, email) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [userId, phone, passwordHash, name || null, idCard || null, email || null]
      );

      // Mark verification code as used
      if (code) {
        await database.run(
          'UPDATE verification_codes SET used = TRUE WHERE phone = ? AND code = ? AND type = ?',
          [phone, code, 'register']
        );
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId, phone },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const user = { id: userId, phone, name: name || null, email: email || null };

      return { success: true, user, token };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed.' };
    }
  }

  /**
   * Authenticate user login
   * @param {Object} loginData - Login data
   * @returns {Promise<Object>} User object and JWT token
   */
  async login({ phone, password }) {
    try {
      // Find user by phone
      const user = await database.get(
        'SELECT * FROM users WHERE phone = ?',
        [phone]
      );

      if (!user) {
        return { success: false, error: 'User not found.' };
      }

      // Check if user is locked
      if (isUserLocked(user)) {
        return { success: false, error: 'Account is temporarily locked due to multiple failed login attempts.' };
      }

      // Verify password
      const isPasswordValid = await comparePassword(password, user.password_hash);
      
      if (!isPasswordValid) {
        // Increment login attempts
        const newAttempts = (user.login_attempts || 0) + 1;
        const lockDuration = calculateLockDuration(newAttempts);
        
        let lockedUntil = null;
        if (lockDuration > 0) {
          const lockTime = new Date();
          lockTime.setMinutes(lockTime.getMinutes() + lockDuration);
          lockedUntil = lockTime.toISOString();
        }

        await database.run(
          'UPDATE users SET login_attempts = ?, locked_until = ? WHERE id = ?',
          [newAttempts, lockedUntil, user.id]
        );

        return { success: false, error: 'Invalid credentials.' };
      }

      // Reset login attempts on successful login
      await database.run(
        'UPDATE users SET login_attempts = 0, locked_until = NULL, last_login = CURRENT_TIMESTAMP WHERE id = ?',
        [user.id]
      );

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, phone: user.phone },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      const userResponse = {
        id: user.id,
        phone: user.phone,
        name: user.name,
        memberLevel: user.member_level,
        points: user.points
      };

      return { success: true, user: userResponse, token };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed.' };
    }
  }

  /**
   * Send verification code
   * @param {Object} codeData - Code data
   * @returns {Promise<Object>} Success status
   */
  async sendVerificationCode({ phone, type }) {
    try {
      // Check immediate rate limiting - no more than 1 code per minute
      const recentCode = await database.get(
        `SELECT COUNT(*) as count FROM verification_codes 
         WHERE phone = ? AND datetime(created_at) > datetime('now', '-1 minute')`,
        [phone]
      );

      if (recentCode.count > 0) {
        return { success: false, error: 'Too many requests. Please try again later.' };
      }

      // Check rate limiting - max 3 codes per 10 minutes
      const recentCodes = await database.get(
        `SELECT COUNT(*) as count FROM verification_codes 
         WHERE phone = ? AND datetime(created_at) > datetime('now', '-10 minutes')`,
        [phone]
      );

      if (recentCodes.count >= 3) {
        return { success: false, error: 'Too many requests. Please try again later.' };
      }

      // For reset_password type, check if user exists
      if (type === 'reset_password') {
        const user = await database.get(
          'SELECT id FROM users WHERE phone = ?',
          [phone]
        );

        if (!user) {
          return { success: false, error: 'User not found.' };
        }
      }

      // Generate verification code (development uses 123456 for consistency)
      const code = process.env.NODE_ENV === 'production' ? generateVerificationCode() : '123456';
      const expiresAt = getCodeExpirationTime(5); // 5 minutes
      const codeId = generateUUID();

      // Store verification code
      await database.run(
        `INSERT INTO verification_codes (id, phone, code, type, expires_at) 
         VALUES (?, ?, ?, ?, ?)`,
        [codeId, phone, code, type, expiresAt]
      );

      // In a real application, you would send the code via SMS
      console.log(`Verification code for ${phone}: ${code}`);

      return { success: true };
    } catch (error) {
      console.error('Send verification code error:', error);
      return { success: false, error: 'Failed to send verification code.' };
    }
  }

  /**
   * Reset user password
   * @param {Object} resetData - Reset data
   * @returns {Promise<Object>} Success status
   */
  async resetPassword({ phone, code, newPassword }) {
    try {
      // Find user by phone
      const user = await database.get(
        'SELECT id FROM users WHERE phone = ?',
        [phone]
      );

      if (!user) {
        return { success: false, error: 'User not found.' };
      }

      // Verify the verification code (accept both 'reset' and 'reset_password' types)
      let isCodeValid = await this.verifyCode(phone, code, 'reset_password');
      if (!isCodeValid) {
        isCodeValid = await this.verifyCode(phone, code, 'reset');
      }
      if (!isCodeValid) {
        return { success: false, error: 'Invalid or expired verification code.' };
      }

      // Hash new password
      const passwordHash = await hashPassword(newPassword);

      // Update password and reset login attempts
      await database.run(
        'UPDATE users SET password_hash = ?, login_attempts = 0, locked_until = NULL WHERE id = ?',
        [passwordHash, user.id]
      );

      // Mark verification code as used (for both types)
      await database.run(
        'UPDATE verification_codes SET used = TRUE WHERE phone = ? AND code = ? AND type IN (?, ?)',
        [phone, code, 'reset_password', 'reset']
      );

      return { success: true };
    } catch (error) {
      console.error('Reset password error:', error);
      return { success: false, error: 'Password reset failed.' };
    }
  }

  /**
   * Verify verification code
   */
  async verifyCode(phone, code, type) {
    try {
      const verificationCode = await database.get(
        `SELECT * FROM verification_codes 
         WHERE phone = ? AND code = ? AND type = ? AND used = FALSE 
         ORDER BY created_at DESC LIMIT 1`,
        [phone, code, type]
      );

      if (!verificationCode) {
        return false;
      }

      // Check if code is expired
      const now = new Date();
      const expiresAt = new Date(verificationCode.expires_at);
      
      if (now > expiresAt) {
        return false;
      }

      return true;
    } catch (error) {
      console.error('Verify code error:', error);
      return false;
    }
  }

  /**
   * Verify JWT token
   */
  verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}

module.exports = new AuthService();
