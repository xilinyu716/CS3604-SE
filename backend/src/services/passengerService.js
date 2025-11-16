const database = require('../config/database');

/**
 * Passenger service for passenger information management
 */
class PassengerService {
  /**
   * Get user's passenger list
   * @param {number} userId - User ID
   * @returns {Promise<Array>} Array of passenger objects
   */
  async getPassengers(userId) {
    try {
      const db = database.getConnection();
      
      const passengers = await db.all(
        'SELECT * FROM passengers WHERE user_id = ? ORDER BY is_default DESC, created_at ASC',
        [userId]
      );

      return passengers;
    } catch (error) {
      console.error('Get passengers error:', error);
      throw new Error('Failed to retrieve passengers');
    }
  }

  /**
   * Add new passenger
   * @param {number} userId - User ID
   * @param {Object} passengerData - Passenger data
   * @returns {Promise<Object>} Created passenger object
   */
  async addPassenger(userId, passengerData) {
    const { name, idCard, phone, passengerType } = passengerData;
    const createdAt = new Date().toISOString();

    try {
      const db = database.getConnection();
      
      // Check if this is the first passenger for the user
      const existingPassengers = await db.all(
        'SELECT COUNT(*) as count FROM passengers WHERE user_id = ?',
        [userId]
      );
      
      const isDefault = existingPassengers[0].count === 0;

      const result = await db.run(
        `INSERT INTO passengers (user_id, name, id_card, phone, passenger_type, is_default, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [userId, name, idCard, phone, passengerType, isDefault ? 1 : 0, createdAt]
      );

      return {
        id: result.lastID,
        name,
        idCard,
        phone,
        passengerType,
        isDefault,
        createdAt
      };
    } catch (error) {
      console.error('Add passenger error:', error);
      throw new Error('Failed to add passenger');
    }
  }

  /**
   * Update passenger information
   * @param {number} passengerId - Passenger ID
   * @param {number} userId - User ID
   * @param {Object} passengerData - Updated passenger data
   * @returns {Promise<Object>} Updated passenger object
   */
  async updatePassenger(passengerId, userId, passengerData) {
    const { name, idCard, phone, passengerType } = passengerData;
    const updatedAt = new Date().toISOString();

    try {
      const db = database.getConnection();
      
      // Check if passenger exists and belongs to user
      const existingPassenger = await db.get(
        'SELECT * FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );

      if (!existingPassenger) {
        throw new Error('Passenger not found');
      }

      await db.run(
        `UPDATE passengers SET name = ?, id_card = ?, phone = ?, passenger_type = ?, updated_at = ?
         WHERE id = ? AND user_id = ?`,
        [name, idCard, phone, passengerType, updatedAt, passengerId, userId]
      );

      return {
        id: passengerId,
        name,
        idCard,
        phone,
        passengerType,
        isDefault: existingPassenger.is_default,
        updatedAt
      };
    } catch (error) {
      console.error('Update passenger error:', error);
      throw new Error('Failed to update passenger');
    }
  }

  /**
   * Delete passenger
   * @param {number} passengerId - Passenger ID
   * @param {number} userId - User ID
   * @returns {Promise<boolean>} Success status
   */
  async deletePassenger(passengerId, userId) {
    try {
      const db = database.getConnection();
      
      // Check if passenger exists and belongs to user
      const existingPassenger = await db.get(
        'SELECT * FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );

      if (!existingPassenger) {
        throw new Error('Passenger not found');
      }

      const result = await db.run(
        'DELETE FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );

      // If deleted passenger was default, make another passenger default
      if (existingPassenger.is_default) {
        const remainingPassengers = await db.all(
          'SELECT * FROM passengers WHERE user_id = ? ORDER BY created_at ASC LIMIT 1',
          [userId]
        );

        if (remainingPassengers.length > 0) {
          await db.run(
            'UPDATE passengers SET is_default = 1 WHERE id = ?',
            [remainingPassengers[0].id]
          );
        }
      }

      return result.changes > 0;
    } catch (error) {
      console.error('Delete passenger error:', error);
      throw new Error('Failed to delete passenger');
    }
  }
}

module.exports = new PassengerService();