const { validationResult } = require('express-validator');
const userService = require('../services/userService');

/**
 * Get user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await userService.getUserProfile(userId);
    res.status(200).json({ user });
  } catch (error) {
    console.error('Get user profile error:', error);
    if (error.message === 'User not found') {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(500).json({ error: 'Failed to retrieve user profile.' });
  }
};

/**
 * Update user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateUserProfile = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid profile data.' });
    }

    const userId = req.user.id;
    const { name, email, avatar } = req.body;

    const user = await userService.updateUserProfile(userId, {
      name,
      email,
      avatar
    });

    res.status(200).json({ user });
  } catch (error) {
    console.error('Update user profile error:', error);
    if (error.message === 'User not found') {
      return res.status(404).json({ error: 'User not found.' });
    }
    if (error.message === 'No fields to update') {
      return res.status(400).json({ error: 'No fields to update.' });
    }
    res.status(500).json({ error: 'Failed to update user profile.' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile
};