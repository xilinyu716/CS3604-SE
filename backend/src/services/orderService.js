const database = require('../config/database');
const { generateUUID } = require('../utils');

/**
 * Order service for order management and processing
 */
class OrderService {
  /**
   * Create new order
   * @param {Object} orderData - Order creation data
   * @returns {Promise<Object>} Created order object
   */
  async createOrder(orderData) {
    const { userId, trainId, passengers, contactPhone } = orderData;
    const orderId = generateUUID();
    const totalAmount = passengers.length * 120; // Base price per passenger
    const status = 'pending';
    const createdAt = new Date().toISOString();

    try {
      const db = database.getConnection();
      
      // Insert order
      const orderResult = await db.run(
        `INSERT INTO orders (id, user_id, train_id, contact_phone, total_amount, status, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [orderId, userId, trainId, contactPhone, totalAmount, status, createdAt]
      );

      // Insert order passengers
      for (const passenger of passengers) {
        await db.run(
          `INSERT INTO order_passengers (order_id, name, id_card, seat_type, seat_number)
           VALUES (?, ?, ?, ?, ?)`,
          [orderId, passenger.name, passenger.idCard, passenger.seatType, `${passenger.seatType.toUpperCase()}${Math.floor(Math.random() * 100) + 1}`]
        );
      }

      return {
        id: orderId,
        trainId,
        passengers,
        contactPhone,
        totalAmount,
        status,
        createdAt
      };
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
      const db = database.getConnection();
      
      let whereClause = 'WHERE user_id = ?';
      let params = [userId];
      
      if (status) {
        whereClause += ' AND status = ?';
        params.push(status);
      }

      const orders = await db.all(
        `SELECT * FROM orders ${whereClause} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );

      const totalResult = await db.get(
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
      const db = database.getConnection();
      
      const order = await db.get(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?',
        [orderId, userId]
      );

      if (!order) {
        throw new Error('Order not found');
      }

      const passengers = await db.all(
        'SELECT * FROM order_passengers WHERE order_id = ?',
        [orderId]
      );

      return {
        ...order,
        passengers
      };
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
      const db = database.getConnection();
      
      const order = await db.get(
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
      
      await db.run(
        'UPDATE orders SET status = ?, paid_at = ? WHERE id = ?',
        ['paid', paidAt, orderId]
      );

      return {
        orderId,
        status: 'paid',
        paymentMethod,
        paidAt
      };
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
      const db = database.getConnection();
      
      const order = await db.get(
        'SELECT * FROM orders WHERE id = ? AND user_id = ?',
        [orderId, userId]
      );

      if (!order) {
        throw new Error('Order not found');
      }

      if (order.status === 'cancelled') {
        throw new Error('Order already cancelled');
      }

      const cancelledAt = new Date().toISOString();
      
      await db.run(
        'UPDATE orders SET status = ?, cancelled_at = ? WHERE id = ?',
        ['cancelled', cancelledAt, orderId]
      );

      return {
        orderId,
        status: 'cancelled',
        reason,
        cancelledAt
      };
    } catch (error) {
      console.error('Cancel order error:', error);
      throw new Error('Failed to cancel order');
    }
  }
}

module.exports = new OrderService();