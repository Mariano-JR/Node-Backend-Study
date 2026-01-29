import request from 'supertest';
import { createApp } from '../src/app';

describe('Auth API', () => {
  let app: ReturnType<typeof createApp>;
  let authHeader: { Authorization: string };

  beforeEach(() => {
    app = createApp();
    authHeader = { Authorization: 'Bearer test-token' };
  });

  it('should login successfully', async () => {
    const response = await request(app)
      .post('/v1/auth/login')
      .send({ name: 'John Doe' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should return 401 without auth header', async () => {
    const response = await request(app).get('/v1/users');

    expect(response.status).toBe(401);
  });

  it('should allow access with auth header', async () => {
    const response = await request(app).get('/v1/users').set(authHeader);

    expect(response.statusCode).toBe(200);
  });
});
