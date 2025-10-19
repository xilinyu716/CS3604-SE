const request = require('supertest');
const express = require('express');
const authRouter = require('../../src/routes/auth');

const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);

describe('Auth API', () => {

  beforeEach(async () => {
    // Reset the state before each test
    await request(app).post('/api/auth/test/reset');
  });

  // Test for API-POST-Register
  describe('POST /api/auth/register', () => {
    it('should return 201 Created for a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          type: 'phone',
          identifier: '13800138000',
          verificationCode: '123456',
          password: 'password123'
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('userId');
      expect(res.body).toHaveProperty('token');
    });

    it('should return 409 Conflict if the user already exists', async () => {
      // First, register a user
      await request(app)
        .post('/api/auth/register')
        .send({
          type: 'phone',
          identifier: '13800138001',
          verificationCode: '123456',
          password: 'password123'
        });

      // Then, try to register the same user again
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          type: 'phone',
          identifier: '13800138001', 
          verificationCode: '123456',
          password: 'password123'
        });
      expect(res.statusCode).toEqual(409);
    });
  });

  // Test for API-POST-Login
  describe('POST /api/auth/login', () => {
    it('should return a token for valid credentials', async () => {
      // First, register a user
      await request(app)
        .post('/api/auth/register')
        .send({
          type: 'phone',
          identifier: '13800138000',
          verificationCode: '123456',
          password: 'password123'
        });

      // Then, try to log in
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          identifier: '13800138000',
          password: 'password123',
          captcha: '1234'
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          identifier: '13800138000',
          password: 'wrongpassword',
          captcha: '1234'
        });
      expect(res.statusCode).toEqual(401);
    });
  });

});