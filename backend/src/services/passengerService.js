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
      const passengers = await database.all(
        'SELECT * FROM passengers WHERE user_id = ? ORDER BY created_at ASC',
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
      const id = require('../utils').generateUUID();
      await database.run(
        `INSERT INTO passengers (id, user_id, name, id_card, phone, passenger_type, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [id, userId, name, idCard, phone || null, passengerType || 'adult', createdAt]
      );
      return { id, name, idCard, phone: phone || null, passengerType: passengerType || 'adult', createdAt };
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
      const existingPassenger = await database.get(
        'SELECT * FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );
      if (!existingPassenger) {
        throw new Error('Passenger not found');
      }
      await database.run(
        `UPDATE passengers SET name = ?, id_card = ?, phone = ?, passenger_type = ?, updated_at = ?
         WHERE id = ? AND user_id = ?`,
        [name, idCard, phone, passengerType, updatedAt, passengerId, userId]
      );
      return { id: passengerId, name, idCard, phone, passengerType, updatedAt };
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
      const existingPassenger = await database.get(
        'SELECT * FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );
      if (!existingPassenger) {
        throw new Error('Passenger not found');
      }
      const result = await database.run(
        'DELETE FROM passengers WHERE id = ? AND user_id = ?',
        [passengerId, userId]
      );
      return result.changes > 0;
    } catch (error) {
      console.error('Delete passenger error:', error);
      throw new Error('Failed to delete passenger');
    }
  }
}

module.exports = new PassengerService();