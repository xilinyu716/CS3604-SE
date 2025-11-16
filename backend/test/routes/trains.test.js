const request = require('supertest');
const app = require('../../src/app');

describe('Train Routes', () => {
  describe('GET /api/trains/search', () => {
    it('should search trains successfully with valid parameters', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: '2025-03-15'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '查询成功');
      expect(response.body.data).toHaveProperty('trains');
      expect(response.body.data).toHaveProperty('pagination');
      expect(Array.isArray(response.body.data.trains)).toBe(true);
      
      if (response.body.data.trains.length > 0) {
        const train = response.body.data.trains[0];
        expect(train).toHaveProperty('trainId');
        expect(train).toHaveProperty('trainNumber');
        expect(train).toHaveProperty('from');
        expect(train).toHaveProperty('to');
        expect(train).toHaveProperty('departureTime');
        expect(train).toHaveProperty('arrivalTime');
        expect(train).toHaveProperty('duration');
        expect(train).toHaveProperty('seats');
        expect(Array.isArray(train.seats)).toBe(true);
      }
    });

    it('should return empty results for non-existent routes', async () => {
      const searchParams = {
        from: '不存在的城市',
        to: '另一个不存在的城市',
        date: '2025-03-15'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data.trains).toHaveLength(0);
    });

    it('should reject search with missing required parameters', async () => {
      const response = await request(app)
        .get('/api/trains/search')
        .query({ from: '北京' }) // Missing 'to' and 'date'
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('缺少必要参数');
    });

    it('should reject search with invalid date format', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: 'invalid-date'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('日期格式不正确');
    });

    it('should reject search with past date', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: '2020-01-01'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(400);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('不能查询过去的日期');
    });

    it('should support pagination parameters', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: '2025-03-15',
        page: 1,
        pageSize: 10
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(200);

      expect(response.body.data.pagination).toHaveProperty('current', 1);
      expect(response.body.data.pagination).toHaveProperty('pageSize', 10);
      expect(response.body.data.pagination).toHaveProperty('total');
      expect(response.body.data.trains.length).toBeLessThanOrEqual(10);
    });

    it('should support filtering by train type', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: '2025-03-15',
        trainType: 'G'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      // All returned trains should be high-speed trains (G)
      response.body.data.trains.forEach(train => {
        expect(train.trainNumber).toMatch(/^G/);
      });
    });

    it('should support sorting by departure time', async () => {
      const searchParams = {
        from: '北京',
        to: '上海',
        date: '2025-03-15',
        sortBy: 'departureTime'
      };

      const response = await request(app)
        .get('/api/trains/search')
        .query(searchParams)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      
      // Check if trains are sorted by departure time
      const trains = response.body.data.trains;
      for (let i = 1; i < trains.length; i++) {
        expect(trains[i].departureTime >= trains[i-1].departureTime).toBe(true);
      }
    });
  });

  describe('GET /api/trains/:trainId', () => {
    it('should get train details successfully with valid train ID', async () => {
      const trainId = 'G1';

      const response = await request(app)
        .get(`/api/trains/${trainId}`)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', '获取成功');
      expect(response.body.data).toHaveProperty('trainId', trainId);
      expect(response.body.data).toHaveProperty('trainNumber');
      expect(response.body.data).toHaveProperty('route');
      expect(response.body.data).toHaveProperty('schedule');
      expect(response.body.data).toHaveProperty('seats');
      expect(response.body.data).toHaveProperty('services');
      
      // Validate route structure
      expect(response.body.data.route).toHaveProperty('from');
      expect(response.body.data.route).toHaveProperty('to');
      expect(response.body.data.route).toHaveProperty('stations');
      expect(Array.isArray(response.body.data.route.stations)).toBe(true);
      
      // Validate schedule structure
      expect(response.body.data.schedule).toHaveProperty('departureTime');
      expect(response.body.data.schedule).toHaveProperty('arrivalTime');
      expect(response.body.data.schedule).toHaveProperty('duration');
      
      // Validate seats structure
      expect(Array.isArray(response.body.data.seats)).toBe(true);
      if (response.body.data.seats.length > 0) {
        const seat = response.body.data.seats[0];
        expect(seat).toHaveProperty('type');
        expect(seat).toHaveProperty('price');
        expect(seat).toHaveProperty('available');
        expect(seat).toHaveProperty('total');
      }
    });

    it('should return 404 for non-existent train ID', async () => {
      const trainId = 'NONEXISTENT';

      const response = await request(app)
        .get(`/api/trains/${trainId}`)
        .expect(404);

      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('列车不存在');
    });

    it('should include real-time seat availability', async () => {
      const trainId = 'G1';

      const response = await request(app)
        .get(`/api/trains/${trainId}`)
        .expect(200);

      expect(response.body.data.seats).toBeDefined();
      response.body.data.seats.forEach(seat => {
        expect(typeof seat.available).toBe('number');
        expect(seat.available).toBeGreaterThanOrEqual(0);
        expect(seat.available).toBeLessThanOrEqual(seat.total);
      });
    });

    it('should include station stops information', async () => {
      const trainId = 'G1';

      const response = await request(app)
        .get(`/api/trains/${trainId}`)
        .expect(200);

      expect(response.body.data.route.stations).toBeDefined();
      expect(Array.isArray(response.body.data.route.stations)).toBe(true);
      
      if (response.body.data.route.stations.length > 0) {
        const station = response.body.data.route.stations[0];
        expect(station).toHaveProperty('name');
        expect(station).toHaveProperty('arrivalTime');
        expect(station).toHaveProperty('departureTime');
        expect(station).toHaveProperty('stopDuration');
      }
    });

    it('should include train services information', async () => {
      const trainId = 'G1';

      const response = await request(app)
        .get(`/api/trains/${trainId}`)
        .expect(200);

      expect(response.body.data.services).toBeDefined();
      expect(Array.isArray(response.body.data.services)).toBe(true);
      
      // Services should include common train amenities
      const expectedServices = ['餐车', 'WiFi', '充电插座'];
      expectedServices.forEach(service => {
        expect(response.body.data.services).toContain(service);
      });
    });
  });
});