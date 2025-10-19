const request = require('supertest');
const express = require('express');
const passengersRouter = require('../../src/routes/passengers');

const app = express();
app.use(express.json());
app.use('/api/user/passengers', passengersRouter);

describe('Passengers API', () => {

  beforeEach(async () => {
    // Reset the state before each test
    await request(app).post('/api/user/passengers/test/reset').set('Authorization', 'Bearer fake-token');
  });

  // Test for API-GET-Passengers
  describe('GET /api/user/passengers', () => {
    it('should return a list of passengers for the current user', async () => {
      const res = await request(app)
        .get('/api/user/passengers')
        .set('Authorization', 'Bearer fake-token');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Test for API-POST-Passengers
  describe('POST /api/user/passengers', () => {
    it('should add a new passenger and return the passengerId', async () => {
      const res = await request(app)
        .post('/api/user/passengers')
        .set('Authorization', 'Bearer fake-token')
        .send({
          name: 'John Doe',
          idCard: '123456789012345678',
          phone: '13900139000'
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('passengerId');
    });
  });

  // Test for API-PUT-Passengers
  describe('PUT /api/user/passengers/:passengerId', () => {
    it('should update a passenger and return a success message', async () => {
      // First, add a passenger
      const addRes = await request(app)
        .post('/api/user/passengers')
        .set('Authorization', 'Bearer fake-token')
        .send({
          name: 'John Doe',
          idCard: '123456789012345678',
          phone: '13900139000'
        });
      const passengerId = addRes.body.passengerId;

      // Then, update the passenger
      const res = await request(app)
        .put(`/api/user/passengers/${passengerId}`)
        .set('Authorization', 'Bearer fake-token')
        .send({
          name: 'John Doe Updated',
          idCard: '123456789012345678',
          phone: '13900139001'
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Passenger updated.');
    });
  });

  // Test for API-DELETE-Passengers
  describe('DELETE /api/user/passengers/:passengerId', () => {
    it('should delete a passenger and return a success message', async () => {
      // First, add a passenger
      const addRes = await request(app)
        .post('/api/user/passengers')
        .set('Authorization', 'Bearer fake-token')
        .send({
          name: 'Jane Doe',
          idCard: '876543210987654321',
          phone: '13800138001'
        });
      const passengerId = addRes.body.passengerId;

      // Then, delete the passenger
      const res = await request(app)
        .delete(`/api/user/passengers/${passengerId}`)
        .set('Authorization', 'Bearer fake-token');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Passenger deleted.');
    });
  });

});