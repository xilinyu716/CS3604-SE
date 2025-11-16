const { validationResult } = require('express-validator');
const passengerService = require('../services/passengerService');

/**
 * Get user's passenger list
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getPassengers = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const passengers = await passengerService.getPassengers(userId);
    res.status(200).json({ passengers });
  } catch (error) {
    console.error('Get passengers error:', error);
    res.status(500).json({ error: 'Failed to retrieve passengers.' });
  }
};

/**
 * Add new passenger
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const addPassenger = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid passenger data.' });
    }

    const userId = req.user.id;
    const { name, idCard, phone, passengerType } = req.body;

    const passenger = await passengerService.addPassenger(userId, {
      name,
      idCard,
      phone,
      passengerType
    });

    res.status(201).json({ passenger });
  } catch (error) {
    console.error('Add passenger error:', error);
    res.status(500).json({ error: 'Failed to add passenger.' });
  }
};

/**
 * Update passenger information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updatePassenger = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid passenger data.' });
    }

    const { passengerId } = req.params;
    const userId = req.user.id;
    const { name, idCard, phone, passengerType } = req.body;

    const passenger = await passengerService.updatePassenger(passengerId, userId, {
      name,
      idCard,
      phone,
      passengerType
    });

    res.status(200).json({ passenger });
  } catch (error) {
    console.error('Update passenger error:', error);
    if (error.message === 'Passenger not found') {
      return res.status(404).json({ error: 'Passenger not found.' });
    }
    res.status(500).json({ error: 'Failed to update passenger.' });
  }
};

/**
 * Delete passenger
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deletePassenger = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid passenger ID.' });
    }

    const { passengerId } = req.params;
    const userId = req.user.id;

    const success = await passengerService.deletePassenger(passengerId, userId);
    
    if (success) {
      res.status(200).json({ message: 'Passenger deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Passenger not found.' });
    }
  } catch (error) {
    console.error('Delete passenger error:', error);
    if (error.message === 'Passenger not found') {
      return res.status(404).json({ error: 'Passenger not found.' });
    }
    res.status(500).json({ error: 'Failed to delete passenger.' });
  }
};

module.exports = {
  getPassengers,
  addPassenger,
  updatePassenger,
  deletePassenger
};