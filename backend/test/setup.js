const database = require('../src/config/database');

// Set test environment
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key';

// Global test setup
beforeAll(async () => {
  // Connect to in-memory database for testing
  await database.connect(':memory:');
});

// Clean up after all tests
afterAll(async () => {
  await database.close();
});

// Clean up after each test
afterEach(async () => {
  // Clear all tables for clean state between tests
  const db = database.getDb();
  if (db) {
    await new Promise((resolve, reject) => {
      db.run('DELETE FROM verification_codes', (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    await new Promise((resolve, reject) => {
      db.run('DELETE FROM users', (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
});