const request = require('supertest');
const app = require('../server');
const schema = require('../utils/schema');

// Mock the schema module to avoid file I/O during tests
jest.mock('../utils/schema');

describe('Backend API Tests', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('Auth Routes', () => {
    test('POST /api/auth/send-code should return a verification code', async () => {
      const res = await request(app)
        .post('/api/auth/send-code')
        .send({ mobile: '13800138000' });
      
      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(res.body.debugCode).toBeDefined();
    });

    test('POST /api/auth/register should register a new user', async () => {
      // Mock schema functions
      schema.readUsers.mockResolvedValue([]);
      schema.writeUsers.mockResolvedValue();

      // First send code to setup state in server memory
      const codeRes = await request(app)
        .post('/api/auth/send-code')
        .send({ mobile: '13800138000' });
      const code = codeRes.body.debugCode;

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          userName: 'testuser',
          password: 'password123',
          mobileNo: '13800138000',
          code: code
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(schema.writeUsers).toHaveBeenCalled();
    });

    test('POST /api/auth/login should return token for valid user', async () => {
      schema.readUsers.mockResolvedValue([
        { userName: 'testuser', password: 'password123' }
      ]);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(res.body.data.token).toBeDefined();
    });

    test('POST /api/auth/login should fail for invalid credentials', async () => {
      schema.readUsers.mockResolvedValue([
        { userName: 'testuser', password: 'password123' }
      ]);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'wrongpassword' });

      expect(res.statusCode).toBe(401);
      expect(res.body.code).toBe(1);
    });
  });

  describe('User Profile Routes', () => {
    test('GET /api/user/profile should return profile data', async () => {
      const mockProfile = { 
        basic: { name: 'Test', idNo: '110101199001011234' }, 
        contact: { mobileNo: '13800138000' }, 
        extra: {}, 
        student: {} 
      };
      schema.readProfile.mockResolvedValue(mockProfile);

      const res = await request(app).get('/api/user/profile');
      expect(res.statusCode).toBe(200);
      expect(res.body.data.basic.name).toBe('Test');
    });

    test('PUT /api/user/profile should update profile', async () => {
      schema.readProfile.mockResolvedValue({ basic: { name: 'Old' }, contact: {}, extra: {} });
      schema.writeProfile.mockResolvedValue();

      const res = await request(app)
        .put('/api/user/profile')
        .send({ basic: { name: 'New' } });

      expect(res.statusCode).toBe(200);
      expect(schema.writeProfile).toHaveBeenCalledWith(expect.objectContaining({
        basic: expect.objectContaining({ name: 'New' })
      }));
    });
  });

  describe('Passenger Routes', () => {
    test('GET /api/user/passengers should return list', async () => {
      const mockPassengers = [{ passenger_name: 'P1' }];
      schema.readPassengers.mockResolvedValue(mockPassengers);
      
      const res = await request(app).get('/api/user/passengers');
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toEqual(mockPassengers);
    });

    test('POST /api/user/passengers should add passenger', async () => {
      schema.readPassengers.mockResolvedValue([]);
      schema.writePassengers.mockResolvedValue();

      const res = await request(app)
        .post('/api/user/passengers')
        .send({ passenger_name: 'P1' });

      expect(res.statusCode).toBe(200);
      expect(schema.writePassengers).toHaveBeenCalled();
    });

    test('PUT /api/user/passengers/:id should update passenger', async () => {
      const mockPassengers = [{ allEncStr: '123', passenger_name: 'Old' }];
      schema.readPassengers.mockResolvedValue(mockPassengers);
      schema.writePassengers.mockResolvedValue();

      const res = await request(app)
        .put('/api/user/passengers/123')
        .send({ passenger_name: 'New' });

      expect(res.statusCode).toBe(200);
      expect(schema.writePassengers).toHaveBeenCalled();
    });

    test('DELETE /api/user/passengers/:id should delete passenger', async () => {
      const mockPassengers = [{ allEncStr: '123' }];
      schema.readPassengers.mockResolvedValue(mockPassengers);
      schema.writePassengers.mockResolvedValue();

      const res = await request(app).delete('/api/user/passengers/123');

      expect(res.statusCode).toBe(200);
      expect(schema.writePassengers).toHaveBeenCalledWith([]);
    });
  });

  describe('Train Routes', () => {
    test('GET /api/trains/query should return filtered trains', async () => {
      const mockTrains = [
        { from: 'Beijing', to: 'Shanghai', depart: '10:00', date: '2023-10-01', price: 100 },
        { from: 'Xi\'an', to: 'Chengdu', depart: '12:00', date: '2023-10-01', price: 200 }
      ];
      schema.readTrains.mockResolvedValue(mockTrains);

      const res = await request(app)
        .get('/api/trains/query')
        .query({ from: 'Beijing', to: 'Shanghai' });

      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].from).toBe('Beijing');
    });

    test('GET /api/trains/query should return trains with correct date and price', async () => {
      const mockTrains = [
        { from: 'Beijing', to: 'Shanghai', depart: '10:00', date: '2023-10-01', price: 100 },
        { from: 'Beijing', to: 'Shanghai', depart: '14:00', date: '2023-10-02', price: 150 }
      ];
      schema.readTrains.mockResolvedValue(mockTrains);

      const res = await request(app)
        .get('/api/trains/query')
        .query({ from: 'Beijing', to: 'Shanghai', date: '2023-10-01' });

      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].date).toBe('2023-10-01');
      expect(res.body.data[0].price).toBe(100);
    });
  });

  describe('Order Routes', () => {
    test('POST /api/order/submit should create order', async () => {
      schema.readOrders.mockResolvedValue({ nottrip: [], history: [], unfinished: [] });
      schema.writeOrders.mockResolvedValue();

      const res = await request(app)
        .post('/api/order/submit')
        .send({
          train: { code: 'G1', from: 'A', to: 'B', depart: '10:00' },
          passengers: [{ passenger_name: 'P1', ticketType: '成人', seatType: 'A' }],
          price: 100
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.code).toBe(0);
      expect(schema.writeOrders).toHaveBeenCalled();
    });

    test('POST /api/order/cancel should cancel order', async () => {
      const mockOrder = { sequence_no: '123', tickets: [{ status: '待出行' }] };
      schema.readOrders.mockResolvedValue({
        nottrip: [mockOrder],
        history: [],
        unfinished: []
      });
      schema.writeOrders.mockResolvedValue();

      const res = await request(app)
        .post('/api/order/cancel')
        .send({ sequence_no: '123' });

      expect(res.statusCode).toBe(200);
      expect(schema.writeOrders).toHaveBeenCalled();
    });
  });
});
