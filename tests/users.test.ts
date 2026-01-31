import request from 'supertest';
import { createApp } from '../src/app';

describe('Users API', () => {
  let app: ReturnType<typeof createApp>;
  let authHeader: { Authorization: string };

  beforeEach(async () => {
    app = createApp();
    
    const loginResponse = await request(app)
      .post('/v1/auth/login')
      .send({
        name: 'Admin User',
        role: 'admin'
      })
    
    const token = loginResponse.body.token

    authHeader = { Authorization: `Bearer ${token}` };
  });

  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await request(app).get('/v1/users').set(authHeader);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /users/:id', () => {
    it('should return a user when id exists', async () => {
      const createResponse = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .get(`/v1/users/${userId}`)
        .set(authHeader);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(userId);
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app)
        .get('/v1/users/999999')
        .set(authHeader);

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'John Doe' });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('John Doe');
    });

    it('should return 400 if name is invalid', async () => {
      const response = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: 'Invalid name',
      });
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a a user when id exists', async () => {
      const createResponse = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .delete(`/v1/users/${userId}`)
        .set(authHeader);

      expect(response.status).toBe(204);
    });

    it('should return 404 when user not exist', async () => {
      const response = await request(app)
        .delete('/v1/users/999999')
        .set(authHeader);

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });
  });

  describe('PATCH /users/:id', () => {
    it('should update user data when id exists', async () => {
      const createResponse = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .patch(`/v1/users/${userId}`)
        .set(authHeader)
        .send({ name: 'Mary Doe' });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Mary Doe');
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app)
        .patch('/v1/users/999999')
        .set(authHeader)
        .send({ name: 'Mary Doe' });

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });

    it('should return 400 when validation error', async () => {
      const response = await request(app)
        .patch('/v1/users/999999')
        .set(authHeader)
        .send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: 'Invalid name',
      });
    });
  });

  describe('PUT /users/:id', () => {
    it('should update user data when id exists', async () => {
      const createResponse = await request(app)
        .post('/v1/users')
        .set(authHeader)
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .put(`/v1/users/${userId}`)
        .set(authHeader)
        .send({ name: 'Mary Doe' });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Mary Doe');
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app)
        .put('/v1/users/999999')
        .set(authHeader)
        .send({ name: 'Mary Doe' });

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });

    it('should return 400 when validation error', async () => {
      const response = await request(app)
        .put('/v1/users/999999')
        .set(authHeader)
        .send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: 'Invalid name',
      });
    });
  });
});
