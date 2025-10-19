const request = require('supertest');
const express = require('express');
const ordersRouter = require('../../src/routes/orders');

const app = express();
app.use(express.json());
app.use('/api/orders', ordersRouter);
app.use('/api/user/orders', ordersRouter);

describe('Orders API', () => {

  // Test for API-GET-Orders
  describe('GET /api/user/orders', () => {
    it('should return a list of orders for the current user', async () => {
      const res = await request(app)
        .get('/api/user/orders')
        .set('Authorization', 'Bearer fake-token')
        .query({ status: 'upcoming' });
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Test for API-POST-Orders
  describe('POST /api/orders', () => {
    it('should create a new order and return orderId and paymentUrl', async () => {
      const res = await request(app)
        .post('/api/orders')
        .set('Authorization', 'Bearer fake-token')
        .send({
          trainId: 'some-train-id',
          passengers: [
            {
              passengerId: 'some-passenger-id',
              seatType: 'second-class',
              ticketType: 'adult'
            }
          ]
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('orderId');
      expect(res.body).toHaveProperty('paymentUrl');
    });

    it('should return 400 for incomplete order information', async () => {
        const res = await request(app)
          .post('/api/orders')
          .set('Authorization', 'Bearer fake-token')
          .send({
            trainId: 'some-train-id'
            // Missing passengers
          });
        expect(res.statusCode).toEqual(400);
      });
  });

});