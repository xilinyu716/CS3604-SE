const { validationResult } = require('express-validator');
const addressService = require('../services/addressService');

/**
 * Get user's address list
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAddresses = async (req, res) => {
  try {
    const userId = req.user.id;

    const addresses = await addressService.getAddresses(userId);
    res.status(200).json({ addresses });
  } catch (error) {
    console.error('Get addresses error:', error);
    res.status(500).json({ error: 'Failed to retrieve addresses.' });
  }
};

/**
 * Add new address
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const addAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid address data.' });
    }

    const userId = req.user.id;
    const { province, city, detailAddress, recipientName, recipientPhone, isDefault } = req.body;

    const address = await addressService.addAddress(userId, {
      province,
      city,
      detailAddress,
      recipientName,
      recipientPhone,
      isDefault
    });

    res.status(201).json({ address });
  } catch (error) {
    console.error('Add address error:', error);
    res.status(500).json({ error: 'Failed to add address.' });
  }
};

/**
 * Update address information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid address data.' });
    }

    const { addressId } = req.params;
    const userId = req.user.id;
    const { province, city, detailAddress, recipientName, recipientPhone, isDefault } = req.body;

    const address = await addressService.updateAddress(addressId, userId, {
      province,
      city,
      detailAddress,
      recipientName,
      recipientPhone,
      isDefault
    });

    res.status(200).json({ address });
  } catch (error) {
    console.error('Update address error:', error);
    if (error.message === 'Address not found') {
      return res.status(404).json({ error: 'Address not found.' });
    }
    res.status(500).json({ error: 'Failed to update address.' });
  }
};

/**
 * Delete address
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteAddress = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid address ID.' });
    }

    const { addressId } = req.params;
    const userId = req.user.id;

    const success = await addressService.deleteAddress(addressId, userId);

    if (success) {
      res.status(200).json({ message: 'Address deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Address not found.' });
    }
  } catch (error) {
    console.error('Delete address error:', error);
    if (error.message === 'Address not found') {
      return res.status(404).json({ error: 'Address not found.' });
    }
    res.status(500).json({ error: 'Failed to delete address.' });
  }
};

module.exports = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress
};
