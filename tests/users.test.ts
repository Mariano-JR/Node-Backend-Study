import request from 'supertest';
import { createApp } from '../src/app';

describe('Users API', () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    app = createApp();
  });

  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /users/:id', () => {
    it('should return a user when id exists', async () => {
      const createResponse = await request(app)
        .post('/users')
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app).get(`/users/${userId}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(userId);
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app).get('/users/999999');

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
        .post('/users')
        .send({ name: 'John Doe' });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('John Doe');
    });

    it('should return 400 if name is invalid', async () => {
      const response = await request(app).post('/users').send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: ['Invalid name'],
      });
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a a user when id exists', async () => {
      const createResponse = await request(app)
        .post('/users')
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app).delete(`/users/${userId}`);

      expect(response.status).toBe(204);
    });

    it('should return 404 when user not exist', async () => {
      const response = await request(app).delete('/users/999999');

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
        .post('/users')
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .patch(`/users/${userId}`)
        .send({ name: 'Mary Doe' });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Mary Doe');
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app)
        .patch('/users/999999')
        .send({ name: 'Mary Doe' });

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });

    it('should return 400 when validation error', async () => {
      const response = await request(app)
        .patch('/users/999999')
        .send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: ['Invalid name'],
      });
    });
  });

  describe('PUT /users/:id', () => {
    it('should update user data when id exists', async () => {
      const createResponse = await request(app)
        .post('/users')
        .send({ name: 'John Doe' });

      const userId = createResponse.body.id;

      const response = await request(app)
        .put(`/users/${userId}`)
        .send({ name: 'Mary Doe' });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Mary Doe');
    });

    it('should return 404 when user not exists', async () => {
      const response = await request(app)
        .put('/users/999999')
        .send({ name: 'Mary Doe' });

      expect(response.body).toEqual({
        statusCode: 404,
        error: 'Application Error',
        message: 'User not found',
      });
    });

    it('should return 400 when validation error', async () => {
      const response = await request(app)
        .put('/users/999999')
        .send({ name: 'MJ' });

      expect(response.body).toEqual({
        statusCode: 400,
        errors: 'Validation Error',
        message: ['Invalid name'],
      });
    });
  });
});
