const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('this should GET hi', async () => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('should post', async () => {
    const res = await request(app)
      .post('/echo')
      .send('hi');

    expect(res.text).toEqual('hi');
  });

  it('should get red', async () => {
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('should get green', async () => {
    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('should get blue', async () => {
    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
