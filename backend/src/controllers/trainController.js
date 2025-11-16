const { validationResult } = require('express-validator');
const trainService = require('../services/trainService');

/**
 * Search trains by criteria
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const searchTrains = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ 
        success: false, 
        message: errorMessages.join(', ') 
      });
    }

    const searchParams = req.query;
    
    try {
      const result = await trainService.searchTrains(searchParams);
      
      res.status(200).json({
        success: true,
        message: '查询成功',
        data: result
      });
    } catch (serviceError) {
      if (serviceError.message === '不能查询过去的日期') {
        return res.status(400).json({
          success: false,
          message: serviceError.message
        });
      }
      throw serviceError;
    }
  } catch (error) {
    console.error('Search trains error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Train search service unavailable.' 
    });
  }
};

/**
 * Get detailed train information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getTrainDetails = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ 
        success: false, 
        message: errorMessages.join(', ') 
      });
    }

    const { trainId } = req.params;
    
    try {
      const trainDetails = await trainService.getTrainDetails(trainId);
      
      res.status(200).json({
        success: true,
        message: '获取成功',
        data: trainDetails
      });
    } catch (serviceError) {
      if (serviceError.message === '列车不存在') {
        return res.status(404).json({
          success: false,
          message: serviceError.message
        });
      }
      throw serviceError;
    }
  } catch (error) {
    console.error('Get train details error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Train information service unavailable.' 
    });
  }
};

module.exports = {
  searchTrains,
  getTrainDetails
};