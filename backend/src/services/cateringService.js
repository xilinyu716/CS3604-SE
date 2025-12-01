const database = require('../config/database')
const { generateUUID } = require('../utils')

class CateringService {
  async getMenuByTrainId(trainId) {
    const train = await database.get('SELECT train_type FROM trains WHERE id = ? OR train_number = ?', [trainId, trainId])
    if (!train) {
      throw new Error('Train not found')
    }
    const type = train.train_type
    const menus = {
      high_speed: [
        { id: 'hs-001', name: '商务套餐A', price: 68 },
        { id: 'hs-002', name: '精品便当', price: 48 },
        { id: 'hs-003', name: '咖啡', price: 22 },
        { id: 'hs-004', name: '矿泉水', price: 5 }
      ],
      bullet: [
        { id: 'bl-001', name: '特色便当', price: 36 },
        { id: 'bl-002', name: '三明治', price: 18 },
        { id: 'bl-003', name: '热茶', price: 10 },
        { id: 'bl-004', name: '矿泉水', price: 5 }
      ],
      normal: [
        { id: 'nm-001', name: '盒饭', price: 25 },
        { id: 'nm-002', name: '泡面', price: 8 },
        { id: 'nm-003', name: '咸菜', price: 4 },
        { id: 'nm-004', name: '矿泉水', price: 5 }
      ]
    }
    const list = menus[type] || []
    return { trainType: type, items: list }
  }

  async createCateringOrder({ userId, trainId, items, deliverySeat }) {
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('No items')
    }
    const menu = await this.getMenuByTrainId(trainId)
    const priceMap = {}
    for (const m of menu.items) {
      priceMap[m.id] = { name: m.name, price: m.price }
    }
    let total = 0
    const normalized = []
    for (const it of items) {
      const base = priceMap[it.itemId]
      if (!base) {
        throw new Error('Invalid item')
      }
      const qty = parseInt(it.quantity || 1)
      total += base.price * qty
      normalized.push({ itemId: it.itemId, name: base.name, price: base.price, quantity: qty })
    }
    const orderId = generateUUID()
    await database.run(
      `INSERT INTO catering_orders (id, user_id, train_id, delivery_seat, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [orderId, userId, trainId, deliverySeat || null, total, 'pending']
    )
    for (const row of normalized) {
      const id = generateUUID()
      await database.run(
        `INSERT INTO catering_order_items (id, order_id, item_id, name, price, quantity) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, orderId, row.itemId, row.name, row.price, row.quantity]
      )
    }
    return { id: orderId, totalAmount: total, status: 'pending', deliverySeat: deliverySeat || null }
  }

  async getUserCateringOrders(userId, { page = 1, limit = 10 }) {
    const offset = (page - 1) * limit
    const orders = await database.all(
      `SELECT * FROM catering_orders WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [userId, limit, offset]
    )
    const totalResult = await database.get(
      `SELECT COUNT(*) as total FROM catering_orders WHERE user_id = ?`,
      [userId]
    )
    return {
      orders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalResult.total,
        totalPages: Math.ceil(totalResult.total / limit)
      }
    }
  }
}

module.exports = new CateringService()