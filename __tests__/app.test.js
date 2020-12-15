const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('this should GET hi', async () => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('post status code 200 and plain text with the request body', async () => {
    const res = await request(app)
      .post('/echo')
      .send('hi');

    expect(res.text).toEqual({
      body: 'hi',
      status: '200 ok',
      contentType: 'text/plain'
    });
  });
});
