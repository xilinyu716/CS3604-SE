const database = require('../config/database');
const { v4: uuidv4 } = require('uuid');

/**
 * Get user's addresses
 * @param {string} userId - User ID
 * @returns {Promise<Array>} List of addresses
 */
const getAddresses = async (userId) => {
  const sql = `
    SELECT id, province, city, detail_address, recipient_name,
           recipient_phone, is_default, created_at, updated_at
    FROM addresses
    WHERE user_id = ?
    ORDER BY is_default DESC, created_at DESC
  `;

  const addresses = await database.all(sql, [userId]);
  return addresses.map(addr => ({
    ...addr,
    is_default: Boolean(addr.is_default)
  }));
};

/**
 * Add new address
 * @param {string} userId - User ID
 * @param {Object} addressData - Address data
 * @returns {Promise<Object>} Created address
 */
const addAddress = async (userId, addressData) => {
  const { province, city, detailAddress, recipientName, recipientPhone, isDefault } = addressData;
  const id = uuidv4();
  const now = new Date().toISOString();

  // If setting as default, unset all other defaults first
  if (isDefault) {
    await database.run(
      'UPDATE addresses SET is_default = 0 WHERE user_id = ?',
      [userId]
    );
  }

  const sql = `
    INSERT INTO addresses
    (id, user_id, province, city, detail_address, recipient_name, recipient_phone, is_default, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  await database.run(sql, [
    id,
    userId,
    province,
    city,
    detailAddress,
    recipientName,
    recipientPhone,
    isDefault ? 1 : 0,
    now,
    now
  ]);

  return {
    id,
    province,
    city,
    detail_address: detailAddress,
    recipient_name: recipientName,
    recipient_phone: recipientPhone,
    is_default: Boolean(isDefault),
    created_at: now,
    updated_at: now
  };
};

/**
 * Update address
 * @param {string} addressId - Address ID
 * @param {string} userId - User ID
 * @param {Object} addressData - Updated address data
 * @returns {Promise<Object>} Updated address
 */
const updateAddress = async (addressId, userId, addressData) => {
  const { province, city, detailAddress, recipientName, recipientPhone, isDefault } = addressData;

  // Check if address belongs to user
  const existing = await database.get(
    'SELECT id FROM addresses WHERE id = ? AND user_id = ?',
    [addressId, userId]
  );

  if (!existing) {
    throw new Error('Address not found');
  }

  // If setting as default, unset all other defaults first
  if (isDefault) {
    await database.run(
      'UPDATE addresses SET is_default = 0 WHERE user_id = ? AND id != ?',
      [userId, addressId]
    );
  }

  const now = new Date().toISOString();
  const sql = `
    UPDATE addresses
    SET province = ?, city = ?, detail_address = ?,
        recipient_name = ?, recipient_phone = ?, is_default = ?, updated_at = ?
    WHERE id = ? AND user_id = ?
  `;

  await database.run(sql, [
    province,
    city,
    detailAddress,
    recipientName,
    recipientPhone,
    isDefault ? 1 : 0,
    now,
    addressId,
    userId
  ]);

  return {
    id: addressId,
    province,
    city,
    detail_address: detailAddress,
    recipient_name: recipientName,
    recipient_phone: recipientPhone,
    is_default: Boolean(isDefault),
    updated_at: now
  };
};

/**
 * Delete address
 * @param {string} addressId - Address ID
 * @param {string} userId - User ID
 * @returns {Promise<boolean>} Success status
 */
const deleteAddress = async (addressId, userId) => {
  const result = await database.run(
    'DELETE FROM addresses WHERE id = ? AND user_id = ?',
    [addressId, userId]
  );

  if (result.changes === 0) {
    throw new Error('Address not found');
  }

  return true;
};

module.exports = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress
};
