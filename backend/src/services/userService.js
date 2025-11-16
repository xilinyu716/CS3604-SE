const Database = require('../config/database');

/**
 * User service for user profile management
 */
class UserService {
  /**
   * Get user profile
   * @param {number} userId - User ID
   * @returns {Promise<Object>} User profile object
   */
  async getUserProfile(userId) {
    try {
      const db = Database.getInstance();
      
      const user = await db.get(
        'SELECT id, name, email, phone, avatar, created_at FROM users WHERE id = ?',
        [userId]
      );

      if (!user) {
        throw new Error('User not found');
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        createdAt: user.created_at
      };
    } catch (error) {
      console.error('Get user profile error:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   * @param {number} userId - User ID
   * @param {Object} profileData - Profile update data
   * @returns {Promise<Object>} Updated user profile object
   */
  async updateUserProfile(userId, profileData) {
    try {
      const db = Database.getInstance();
      
      // Check if user exists
      const existingUser = await db.get('SELECT id FROM users WHERE id = ?', [userId]);
      if (!existingUser) {
        throw new Error('User not found');
      }

      const { name, email, avatar } = profileData;
      const updateFields = [];
      const updateValues = [];

      if (name !== undefined) {
        updateFields.push('name = ?');
        updateValues.push(name);
      }
      if (email !== undefined) {
        updateFields.push('email = ?');
        updateValues.push(email);
      }
      if (avatar !== undefined) {
        updateFields.push('avatar = ?');
        updateValues.push(avatar);
      }

      if (updateFields.length === 0) {
        throw new Error('No fields to update');
      }

      updateValues.push(userId);

      await db.run(
        `UPDATE users SET ${updateFields.join(', ')}, updated_at = datetime('now') WHERE id = ?`,
        updateValues
      );

      // Return updated user profile
      return await this.getUserProfile(userId);
    } catch (error) {
      console.error('Update user profile error:', error);
      throw error;
    }
  }
}

module.exports = new UserService();