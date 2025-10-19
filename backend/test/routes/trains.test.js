const request = require('supertest');
const express = require('express');
const trainsRouter = require('../../src/routes/trains');

const app = express();
app.use(express.json());
app.use('/api/trains', trainsRouter);

describe('Trains API', () => {

  // Test for API-GET-Trains
  describe('GET /api/trains', () => {
    it('should return a list of trains for valid query parameters', async () => {
      const res = await request(app)
        .get('/api/trains')
        .query({
          from: 'Beijing',
          to: 'Shanghai',
          date: '2025-10-20',
          isStudent: false
        });
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('should return 400 for invalid query parameters', async () => {
      const res = await request(app)
        .get('/api/trains')
        .query({
          from: 'Beijing'
          // Missing 'to' and 'date'
        });
      expect(res.statusCode).toEqual(400);
    });
  });

});