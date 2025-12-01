const { validationResult } = require('express-validator')
const cateringService = require('../services/cateringService')

const getMenu = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid query.' })
    }
    const { trainId } = req.query
    const data = await cateringService.getMenuByTrainId(trainId)
    res.status(200).json({ menu: data })
  } catch (error) {
    if (error.message === 'Train not found') {
      return res.status(404).json({ error: 'Train not found.' })
    }
    res.status(500).json({ error: 'Failed to get menu.' })
  }
}

const createOrder = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid order data.' })
    }
    const userId = req.user.id
    const { trainId, items, deliverySeat } = req.body
    const order = await cateringService.createCateringOrder({ userId, trainId, items, deliverySeat })
    res.status(201).json({ order })
  } catch (error) {
    if (error.message === 'No items' || error.message === 'Invalid item') {
      return res.status(400).json({ error: 'Invalid items.' })
    }
    if (error.message === 'Train not found') {
      return res.status(404).json({ error: 'Train not found.' })
    }
    res.status(500).json({ error: 'Order creation failed.' })
  }
}

const getUserOrders = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid query.' })
    }
    const userId = req.user.id
    const { page = 1, limit = 10 } = req.query
    const result = await cateringService.getUserCateringOrders(userId, { page, limit })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders.' })
  }
}

module.exports = { getMenu, createOrder, getUserOrders }