const request = require('supertest')
const app = require('../../src/app')

describe('Send code for reset_password', () => {
  it('should reject when user not found', async () => {
    const res = await request(app)
      .post('/auth/send-code')
      .send({ phone: '13900139000', type: 'reset_password' })
      .expect(400)
    expect(res.body).toHaveProperty('success', false)
    expect(res.body).toHaveProperty('message')
  })

  it('should send code when user exists', async () => {
    await request(app)
      .post('/auth/signup')
      .send({ phone: '13800138001', password: 'Password123', name: '李四', idCard: '110101199001012222' })
      .expect(201)
    const res = await request(app)
      .post('/auth/send-code')
      .send({ phone: '13800138001', type: 'reset_password' })
      .expect(200)
    expect(res.body).toHaveProperty('success', true)
    expect(res.body).toHaveProperty('message', '验证码发送成功')
  })
})