const sqlite3 = require('sqlite3').verbose();
const path = require('path');

/**
 * Database configuration and connection management
 */
class Database {
  constructor() {
    this.db = null;
  }

  /**
   * Initialize database connection
   * @param {string} dbPath - Path to SQLite database file
   * @returns {Promise<sqlite3.Database>}
   */
  async connect(dbPath = null) {
    const defaultPath = process.env.NODE_ENV === 'test' 
      ? ':memory:' 
      : path.join(__dirname, '../../data/railway.db');
    
    const finalPath = dbPath || defaultPath;
    
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(finalPath, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log(`Connected to SQLite database: ${finalPath}`);
          this.initializeTables().then(() => resolve(this.db));
        }
      });
    });
  }

  /**
   * Initialize database tables
   * @returns {Promise<void>}
   */
  async initializeTables() {
    const tables = [
      // Users table
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        phone TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT,
        id_card TEXT,
        email TEXT,
        member_level TEXT DEFAULT 'normal',
        points INTEGER DEFAULT 0,
        login_attempts INTEGER DEFAULT 0,
        locked_until DATETIME,
        last_login DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      
      // Verification codes table
      `CREATE TABLE IF NOT EXISTS verification_codes (
        id TEXT PRIMARY KEY,
        phone TEXT NOT NULL,
        code TEXT NOT NULL,
        type TEXT NOT NULL,
        expires_at DATETIME NOT NULL,
        used BOOLEAN DEFAULT FALSE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      
      // Trains table
      `CREATE TABLE IF NOT EXISTS trains (
        id TEXT PRIMARY KEY,
        train_number TEXT UNIQUE NOT NULL,
        from_station TEXT NOT NULL,
        to_station TEXT NOT NULL,
        departure_time TEXT NOT NULL,
        arrival_time TEXT NOT NULL,
        duration TEXT NOT NULL,
        train_type TEXT NOT NULL,
        seat_info TEXT NOT NULL,
        travel_date TEXT NOT NULL,
        is_active BOOLEAN DEFAULT TRUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      
      // Passengers table
      `CREATE TABLE IF NOT EXISTS passengers (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        name TEXT NOT NULL,
        id_card TEXT NOT NULL,
        phone TEXT,
        passenger_type TEXT DEFAULT 'adult',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )`,
      
      // Orders table
      `CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        train_id TEXT NOT NULL,
        seat_type TEXT NOT NULL,
        total_amount REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        paid_at DATETIME,
        payment_method TEXT,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (train_id) REFERENCES trains (id)
      )`,
      
      // Order passengers table
      `CREATE TABLE IF NOT EXISTS order_passengers (
        id TEXT PRIMARY KEY,
        order_id TEXT NOT NULL,
        passenger_id TEXT NOT NULL,
        seat_number TEXT,
        ticket_price REAL NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
        FOREIGN KEY (passenger_id) REFERENCES passengers (id)
      )`
    ];

    for (const table of tables) {
      await this.run(table);
    }

    // Insert sample train data if not exists
    await this.insertSampleData();
  }

  /**
   * Insert sample train data
   */
  async insertSampleData() {
    const checkTrains = `SELECT COUNT(*) as count FROM trains`;
    const result = await this.get(checkTrains);
    
    if (result.count === 0) {
      const sampleTrains = [
        {
          id: 'train-001',
          train_number: 'G1',
          from_station: '北京',
          to_station: '上海',
          departure_time: '08:00',
          arrival_time: '12:28',
          duration: '4小时28分',
          train_type: 'high_speed',
          seat_info: JSON.stringify({
            business: { price: 1748, available: 10, total: 10 },
            first: { price: 933, available: 50, total: 50 },
            second: { price: 553, available: 200, total: 200 }
          }),
          travel_date: '2025-03-15'
        },
        {
          id: 'train-002',
          train_number: 'D1',
          from_station: '北京',
          to_station: '天津',
          departure_time: '06:30',
          arrival_time: '07:45',
          duration: '1小时15分',
          train_type: 'bullet',
          seat_info: JSON.stringify({
            first: { price: 69, available: 30, total: 30 },
            second: { price: 54, available: 150, total: 150 }
          }),
          travel_date: '2025-03-15'
        },
        {
          id: 'train-003',
          train_number: 'K1',
          from_station: '北京',
          to_station: '广州',
          departure_time: '20:00',
          arrival_time: '18:30',
          duration: '22小时30分',
          train_type: 'normal',
          seat_info: JSON.stringify({
            hard_seat: { price: 263, available: 100, total: 100 },
            soft_sleeper: { price: 740, available: 20, total: 20 },
            hard_sleeper: { price: 463, available: 60, total: 60 }
          }),
          travel_date: '2025-03-15'
        }
      ];

      for (const train of sampleTrains) {
        await this.run(
          `INSERT OR IGNORE INTO trains (id, train_number, from_station, to_station, departure_time, arrival_time, duration, train_type, seat_info, travel_date) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [train.id, train.train_number, train.from_station, train.to_station, 
           train.departure_time, train.arrival_time, train.duration, train.train_type, 
           train.seat_info, train.travel_date]
        );
      }
    }
  }

  /**
   * Execute SQL query
   */
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, changes: this.changes });
        }
      });
    });
  }

  /**
   * Get single row
   */
  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  /**
   * Get all rows
   */
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  /**
   * Close database connection
   * @returns {Promise<void>}
   */
  async close() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close((err) => {
          if (err) {
            reject(err);
          } else {
            console.log('Database connection closed');
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }

  /**
   * Get database instance
   * @returns {sqlite3.Database}
   */
  getDb() {
    return this.db;
  }
}

module.exports = new Database();