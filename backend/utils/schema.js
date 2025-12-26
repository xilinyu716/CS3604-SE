const { readJson, writeJson } = require('./fileStorage');

/**
 * Data Schemas and Validation
 * 
 * Defines the expected format for each data type stored in JSON files.
 */

const Schemas = {
  /**
   * User Schema
   * format: {
   *   id: String,
   *   userName: String,
   *   password: String,
   *   mobileNo: String,
   *   createdAt: String,
   *   ...otherInfo
   * }
   */
  User: (item) => {
    return item && 
           typeof item.userName === 'string' && 
           typeof item.password === 'string' && 
           typeof item.mobileNo === 'string' &&
           (item.email === undefined || typeof item.email === 'string');
  },

  /**
   * Profile Schema
   * format: {
   *   basic: Object,
   *   contact: Object,
   *   extra: Object,
   *   student: Object
   * }
   */
  Profile: (item) => {
    return item && 
           typeof item.basic === 'object' && 
           typeof item.contact === 'object' && 
           typeof item.extra === 'object' && 
           typeof item.student === 'object';
  },

  /**
   * Passenger Schema
   * format: {
   *   passenger_name: String,
   *   passenger_id_no: String,
   *   mobile_no: String,
   *   ...otherInfo
   * }
   */
  Passenger: (item) => {
    return item && 
           typeof item.passenger_name === 'string' && 
           typeof item.passenger_id_no === 'string' && 
           typeof item.mobile_no === 'string';
  },

  /**
   * Train Schema
   * format: {
   *   code: String,
   *   from: String,
   *   to: String,
   *   depart: String,
   *   date: String,
   *   price: Number,
   *   ...otherInfo
   * }
   */
  Train: (item) => {
    return item && 
           typeof item.code === 'string' && 
           typeof item.from === 'string' && 
           typeof item.to === 'string' && 
           typeof item.depart === 'string' &&
           // Note: date and price are optional for now to support legacy data
           // or mandatory if we migrate all data. Let's make them check existence if present.
           (item.date === undefined || typeof item.date === 'string') &&
           (item.price === undefined || typeof item.price === 'number');
  },

  /**
   * Order Schema (Root Object)
   * format: {
   *   unfinished: Array,
   *   nottrip: Array,
   *   history: Array
   * }
   */
  Order: (item) => {
    return item && 
           Array.isArray(item.unfinished) && 
           Array.isArray(item.nottrip) && 
           Array.isArray(item.history);
  }
};

/**
 * Validates data against a schema
 * @param {any} data - The data to validate
 * @param {string} type - The schema type key
 * @param {boolean} isArray - Whether the data is expected to be an array of items
 * @returns {boolean}
 */
const validate = (data, type, isArray = false) => {
  if (!Schemas[type]) throw new Error(`Unknown schema type: ${type}`);
  
  if (isArray) {
    if (!Array.isArray(data)) return false;
    return data.every(item => Schemas[type](item));
  }
  
  return Schemas[type](data);
};

// --- Users ---

const readUsers = async () => {
  const users = await readJson('users.json');
  return users || [];
};

const writeUsers = async (users) => {
  if (!validate(users, 'User', true)) {
    throw new Error('Invalid User data format');
  }
  await writeJson('users.json', users);
};

// --- Profile ---

const readProfile = async () => {
  const profile = await readJson('profile.json');
  return profile || {};
};

const writeProfile = async (profile) => {
  if (!validate(profile, 'Profile', false)) {
    throw new Error('Invalid Profile data format');
  }
  await writeJson('profile.json', profile);
};

// --- Passengers ---

const readPassengers = async () => {
  const passengers = await readJson('passengers.json');
  return passengers || [];
};

const writePassengers = async (passengers) => {
  if (!validate(passengers, 'Passenger', true)) {
    throw new Error('Invalid Passenger data format');
  }
  await writeJson('passengers.json', passengers);
};

// --- Trains ---

const readTrains = async () => {
  const trains = await readJson('trains.json');
  return trains || [];
};

const writeTrains = async (trains) => {
  if (!validate(trains, 'Train', true)) {
    throw new Error('Invalid Train data format');
  }
  await writeJson('trains.json', trains);
};

// --- Orders ---

const readOrders = async () => {
  const orders = await readJson('orders.json');
  // Return default structure if null
  return orders || { unfinished: [], nottrip: [], history: [] };
};

const writeOrders = async (orders) => {
  if (!validate(orders, 'Order', false)) {
    throw new Error('Invalid Order data format');
  }
  await writeJson('orders.json', orders);
};

module.exports = {
  readUsers,
  writeUsers,
  readProfile,
  writeProfile,
  readPassengers,
  writePassengers,
  readTrains,
  writeTrains,
  readOrders,
  writeOrders
};
