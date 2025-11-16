const request = require('supertest');
const app = require('../../src/app');

describe('Authentication Routes', () => {
  describe('POST /auth/signup', () => {
    it('should register a new user successfully with valid data', async () => {
      const userData = {
        phone: '13800138000',
        password: 'Password123',
        name: '张三',
        idCard: '110101199001011234'
      };

      const response = await request(app)
        .post('/auth/signup')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '注册成功');
      expect(response.body.data).toHaveProperty('userId');
      expect(response.body.data).toHaveProperty('token');
      expect(response.body.data.user).toHaveProperty('phone', userData.phone);
      expect(response.body.data.user).toHaveProperty('name', userData.name);
      expect(response.body.data.user).not.toHaveProperty('password');
    });

    it('should reject registration with invalid phone number', async () => {
      const userData = {
        phone: '1234567890',
        password: 'Password123',
        name: '张三',
        idCard: '110101199001011234'
      };

      const response = await request(app)
        .post('/auth/signup')
        .send(userData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('手机号格式不正确');
    });

    it('should reject registration with weak password', async () => {
      const userData = {
        phone: '13800138000',
        password: '123456',
        name: '张三',
        idCard: '110101199001011234'
      };

      const response = await request(app)
        .post('/auth/signup')
        .send(userData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('密码强度不足');
    });

    it('should reject registration with duplicate phone number', async () => {
      const userData = {
        phone: '13800138000',
        password: 'Password123',
        name: '张三',
        idCard: '110101199001011234'
      };

      // First registration
      await request(app)
        .post('/auth/signup')
        .send(userData);

      // Second registration with same phone
      const response = await request(app)
        .post('/auth/signup')
        .send(userData)
        .expect(409);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('手机号已注册');
    });

    it('should reject registration with invalid ID card', async () => {
      const userData = {
        phone: '13800138000',
        password: 'Password123',
        name: '张三',
        idCard: '123456789'
      };

      const response = await request(app)
        .post('/auth/signup')
        .send(userData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('身份证号格式不正确');
    });
  });

  describe('POST /auth/signin', () => {
    beforeEach(async () => {
      // Create a test user
      await request(app)
        .post('/auth/signup')
        .send({
          phone: '13800138000',
          password: 'Password123',
          name: '张三',
          idCard: '110101199001011234'
        });
    });

    it('should login successfully with correct credentials', async () => {
      const loginData = {
        phone: '13800138000',
        password: 'Password123'
      };

      const response = await request(app)
        .post('/auth/signin')
        .send(loginData)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '登录成功');
      expect(response.body.data).toHaveProperty('token');
      expect(response.body.data.user).toHaveProperty('phone', loginData.phone);
      expect(response.body.data.user).not.toHaveProperty('password');
    });

    it('should reject login with incorrect password', async () => {
      const loginData = {
        phone: '13800138000',
        password: 'WrongPassword'
      };

      const response = await request(app)
        .post('/auth/signin')
        .send(loginData)
        .expect(401);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('手机号或密码错误');
    });

    it('should reject login with non-existent phone', async () => {
      const loginData = {
        phone: '13900139000',
        password: 'Password123'
      };

      const response = await request(app)
        .post('/auth/signin')
        .send(loginData)
        .expect(401);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('手机号或密码错误');
    });

    it('should reject login with invalid phone format', async () => {
      const loginData = {
        phone: '1234567890',
        password: 'Password123'
      };

      const response = await request(app)
        .post('/auth/signin')
        .send(loginData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('手机号格式不正确');
    });
  });

  describe('POST /auth/send-code', () => {
    it('should send verification code successfully', async () => {
      const phoneData = {
        phone: '13800138000',
        type: 'register'
      };

      const response = await request(app)
        .post('/auth/send-code')
        .send(phoneData)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '验证码发送成功');
      expect(response.body.data).toHaveProperty('expireTime');
    });

    it('should reject sending code with invalid phone', async () => {
      const phoneData = {
        phone: '1234567890',
        type: 'register'
      };

      const response = await request(app)
        .post('/auth/send-code')
        .send(phoneData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('手机号格式不正确');
    });

    it('should enforce rate limiting for verification codes', async () => {
      const phoneData = {
        phone: '13800138000',
        type: 'register'
      };

      // First request
      await request(app)
        .post('/auth/send-code')
        .send(phoneData)
        .expect(200);

      // Second request immediately
      const response = await request(app)
        .post('/auth/send-code')
        .send(phoneData)
        .expect(429);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('请稍后再试');
    });
  });

  describe('POST /auth/reset-password', () => {
    beforeEach(async () => {
      // Create a test user
      await request(app)
        .post('/auth/signup')
        .send({
          phone: '13800138000',
          password: 'Password123',
          name: '张三',
          idCard: '110101199001011234'
        });

      // Send verification code
      await request(app)
        .post('/auth/send-code')
        .send({
          phone: '13800138000',
          type: 'reset'
        });
    });

    it('should reset password successfully with valid verification code', async () => {
      const resetData = {
        phone: '13800138000',
        verificationCode: '123456', // Mock code
        newPassword: 'NewPassword123'
      };

      const response = await request(app)
        .post('/auth/reset-password')
        .send(resetData)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '密码重置成功');
    });

    it('should reject password reset with invalid verification code', async () => {
      const resetData = {
        phone: '13800138000',
        verificationCode: '000000',
        newPassword: 'NewPassword123'
      };

      const response = await request(app)
        .post('/auth/reset-password')
        .send(resetData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('验证码错误或已过期');
    });

    it('should reject password reset with weak new password', async () => {
      const resetData = {
        phone: '13800138000',
        verificationCode: '123456',
        newPassword: '123456'
      };

      const response = await request(app)
        .post('/auth/reset-password')
        .send(resetData)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('密码强度不足');
    });
  });
});