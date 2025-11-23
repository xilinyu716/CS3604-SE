const database = require('../config/database');
const { generateUUID, generateSeatNumber } = require('../utils');

/**
 * Order service for order management and processing
 */
class OrderService {
  async createOrder(orderData) {
    const { userId, trainId, passengers } = orderData;
    const orderId = generateUUID();
    const totalAmount = passengers.length * 120;
    const status = 'pending';
    const createdAt = new Date().toISOString();
    try {
      await database.run(
        `INSERT INTO orders (id, user_id, train_id, seat_type, total_amount, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [orderId, userId, trainId, (passengers[0] && passengers[0].seatType) || 'second', totalAmount, status, createdAt]
      );
      let idx = 0;
      for (const passenger of passengers) {
        const existing = await database.get(
          'SELECT id FROM passengers WHERE user_id = ? AND id_card = ?',
          [userId, passenger.idCard]
        );
        let passengerId = existing ? existing.id : null;
        if (!passengerId) {
          passengerId = generateUUID();
          await database.run(
            `INSERT INTO passengers (id, user_id, name, id_card, phone, passenger_type, created_at)
             VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`,
            [passengerId, userId, passenger.name, passenger.idCard, null, 'adult']
          );
        }
        const opId = generateUUID();
        const seatNumber = generateSeatNumber(passenger.seatType, idx);
        idx += 1;
        await database.run(
          `INSERT INTO order_passengers (id, order_id, passenger_id, seat_number, ticket_price)
           VALUES (?, ?, ?, ?, ?)`,
          [opId, orderId, passengerId, seatNumber, 120]
        );
      }
      return { id: orderId, trainId, passengers, totalAmount, status, createdAt };
    } catch (error) {
      console.error('Order creation error:', error);
      throw new Error('Failed to create order');
    }
  }

  /**
   * Get user orders with pagination
   * @param {number} userId - User ID
   * @param {Object} queryParams - Query parameters
   * @returns {Promise<Object>} Orders and pagination info
   */
  async getUserOrders(userId, queryParams) {
    const { page = 1, limit = 10, status } = queryParams;
    const offset = (page - 1) * limit;
    try {
      let whereClause = 'WHERE user_id = ?';
      let params = [userId];
      if (status) {
        whereClause += ' AND status = ?';
        params.push(status);
      }
      const orders = await database.all(
        `SELECT * FROM orders ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );
      const totalResult = await database.get(
        `SELECT COUNT(*) as total FROM orders ${whereClause}`,
        params
      );
      return {
        orders,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalResult.total,
          totalPages: Math.ceil(totalResult.total / limit)
        }
      };
    } catch (error) {
      console.error('Get user orders error:', error);
      throw new Error('Failed to retrieve orders');
    }
  }

  /**
   * Get order details
   * @param {string} orderId - Order ID
   * @param {number} userId - User ID
   * @returns {Promise<Object>} Order details object
   */
  async getOrderDetails(orderId, userId) {
    try {
      const order = await database.get(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?',
        [orderId, userId]
      );
      if (!order) {
        throw new Error('Order not found');
      }
      const passengers = await database.all(
        'SELECT * FROM order_passengers WHERE order_id = ?',
        [orderId]
      );
      return { ...order, passengers };
    } catch (error) {
      console.error('Get order details error:', error);
      throw new Error('Failed to retrieve order details');
    }
  }

  /**
   * Process order payment
   * @param {string} orderId - Order ID
   * @param {Object} paymentData - Payment data
   * @returns {Promise<Object>} Payment result
   */
  async payOrder(orderId, paymentData) {
    const { userId, paymentMethod } = paymentData;
    try {
      const order = await database.get(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?',
        [orderId, userId]
      );
      if (!order) {
        throw new Error('Order not found');
      }
      if (order.status !== 'pending') {
        throw new Error('Order cannot be paid');
      }
      const paidAt = new Date().toISOString();
      await database.run(
        'UPDATE orders SET status = ?, paid_at = ?, payment_method = ? WHERE id = ?',
        ['paid', paidAt, paymentMethod, orderId]
      );
      return { orderId, status: 'paid', paymentMethod, paidAt };
    } catch (error) {
      console.error('Pay order error:', error);
      throw new Error('Failed to process payment');
    }
  }

  /**
   * Cancel order
   * @param {string} orderId - Order ID
   * @param {number} userId - User ID
   * @param {string} reason - Cancellation reason
   * @returns {Promise<Object>} Cancellation result
   */
  async cancelOrder(orderId, userId, reason) {
    try {
      const order = await database.get(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?',
        [orderId, userId]
      );
      if (!order) {
        throw new Error('Order not found');
      }
      if (order.status === 'cancelled') {
        throw new Error('Order already cancelled');
      }
      await database.run(
        'UPDATE orders SET status = ? WHERE id = ?',
        ['cancelled', orderId]
      );
      return { orderId, status: 'cancelled', reason };
    } catch (error) {
      console.error('Cancel order error:', error);
      throw new Error('Failed to cancel order');
    }
  }
}

module.exports = new OrderService();