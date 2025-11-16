const { validationResult } = require('express-validator');
const authService = require('../services/authService');
const { validatePhone, validatePassword } = require('../utils');

/**
 * Handle user registration
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const phoneError = errors.array().find(error => error.path === 'phone');
      const idCardError = errors.array().find(error => error.path === 'idCard');
      const passwordError = errors.array().find(error => error.path === 'password');
      
      if (phoneError) {
        return res.status(400).json({ 
          success: false, 
          message: '手机号格式不正确' 
        });
      }
      if (idCardError) {
        return res.status(400).json({ 
          success: false, 
          message: '身份证号格式不正确' 
        });
      }
      if (passwordError) {
        return res.status(400).json({ 
          success: false, 
          message: '密码长度至少6位' 
        });
      }
      return res.status(400).json({ 
        success: false, 
        message: '输入格式错误或缺少必填字段' 
      });
    }

    const { phone, password, code, name, idCard } = req.body;
    
    // Additional validation
    if (!validatePhone(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: '手机号格式不正确' 
      });
    }
    
    if (!validatePassword(password)) {
      return res.status(400).json({ 
        success: false, 
        message: '密码强度不足，需要包含大小写字母和数字，长度至少8位' 
      });
    }

    const result = await authService.register({ phone, password, code, name, idCard });
    
    if (result.success) {
      res.status(201).json({ 
        success: true,
        message: '注册成功',
        data: {
          userId: result.user.id,
          user: result.user, 
          token: result.token
        }
      });
    } else {
      const statusCode = result.error === 'Phone number already registered.' ? 409 :
                        result.error === 'Invalid or expired verification code.' ? 422 : 400;
      const message = result.error === 'Phone number already registered.' ? '手机号已注册' :
                     result.error === 'Invalid or expired verification code.' ? '验证码错误或已过期' :
                     result.error === 'Invalid ID card format.' ? '身份证号格式不正确' : result.error;
      res.status(statusCode).json({ 
        success: false, 
        message 
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: '服务器内部错误' 
    });
  }
};

/**
 * Handle user login
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const phoneError = errors.array().find(error => error.path === 'phone');
      if (phoneError) {
        return res.status(400).json({ 
          success: false, 
          message: '手机号格式不正确' 
        });
      }
      return res.status(400).json({ 
        success: false, 
        message: '输入格式错误' 
      });
    }

    const { phone, password } = req.body;
    
    if (!validatePhone(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: '手机号格式不正确' 
      });
    }

    const result = await authService.login({ phone, password });
    
    if (result.success) {
      res.status(200).json({ 
        success: true,
        message: '登录成功',
        data: {
          user: result.user, 
          token: result.token
        }
      });
    } else {
      const statusCode = result.error === 'Account is temporarily locked due to multiple failed login attempts.' ? 423 : 401;
      const message = result.error === 'Account is temporarily locked due to multiple failed login attempts.' ? '账户已被锁定，请稍后再试' : '手机号或密码错误';
      res.status(statusCode).json({ 
        success: false, 
        message 
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: '认证服务不可用' 
    });
  }
};

/**
 * Send verification code
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const sendVerificationCode = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: '手机号格式不正确' 
      });
    }

    const { phone, type } = req.body;
    
    if (!validatePhone(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: '手机号格式不正确' 
      });
    }

    const result = await authService.sendVerificationCode({ phone, type });
    
    if (result.success) {
      res.status(200).json({ 
        success: true,
        message: '验证码发送成功',
        data: {
          expireTime: 300
        }
      });
    } else {
      const statusCode = result.error === 'Too many requests. Please try again later.' ? 429 : 400;
      const message = result.error === 'Too many requests. Please try again later.' ? '请求过于频繁，请稍后再试' : result.error;
      res.status(statusCode).json({ 
        success: false, 
        message 
      });
    }
  } catch (error) {
    console.error('Send code error:', error);
    res.status(503).json({ 
      success: false, 
      message: '短信服务不可用' 
    });
  }
};

/**
 * Reset password
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const resetPassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: '输入格式错误' 
      });
    }

    const { phone, verificationCode, newPassword } = req.body;
    const code = verificationCode;
    
    if (!validatePhone(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: '手机号格式不正确' 
      });
    }
    
    if (!validatePassword(newPassword)) {
      return res.status(400).json({ 
        success: false, 
        message: '密码强度不足，需要包含大小写字母和数字，长度至少8位' 
      });
    }

    const result = await authService.resetPassword({ phone, code, newPassword });
    
    if (result.success) {
      res.status(200).json({ 
        success: true,
        message: '密码重置成功'
      });
    } else {
      const statusCode = result.error === 'User not found.' ? 404 :
                        result.error === 'Invalid or expired verification code.' ? 400 : 400;
      const message = result.error === 'User not found.' ? '用户不存在' :
                     result.error === 'Invalid or expired verification code.' ? '验证码错误或已过期' : result.error;
      res.status(statusCode).json({ 
        success: false, 
        message 
      });
    }
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ 
      success: false, 
      message: '服务器内部错误' 
    });
  }
};

module.exports = {
  register,
  login,
  sendVerificationCode,
  resetPassword
};