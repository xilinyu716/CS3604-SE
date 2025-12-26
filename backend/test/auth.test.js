const request = require('supertest');
const app = require('../server');
const schema = require('../utils/schema');

jest.mock('../utils/schema');

describe('Auth API', () => {
  const mockUsers = [
    {
      id: '1',
      userName: 'testuser',
      password: 'password123',
      mobileNo: '13800138000',
      email: 'test@example.com',
      createdAt: '2023-01-01'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    schema.readUsers.mockResolvedValue(mockUsers);
    schema.writeUsers.mockResolvedValue();
    // Mock other schema functions to avoid errors if they are called implicitly
    schema.readProfile.mockResolvedValue({});
  });

  describe('POST /api/auth/login', () => {
    test('should login successfully with valid username', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(res.body.data.user.userName).toBe('testuser');
    });

    test('should login successfully with valid mobile number', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: '13800138000', password: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(res.body.data.user.userName).toBe('testuser');
    });

    test('should login successfully with valid email', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'test@example.com', password: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(res.body.data.user.userName).toBe('testuser');
    });

    test('should fail with invalid password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'wrongpassword' });

      expect(res.statusCode).toBe(401);
    });

    test('should fail with non-existent user', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'nonexistent', password: 'password123' });

      expect(res.statusCode).toBe(401);
    });
  });
});
