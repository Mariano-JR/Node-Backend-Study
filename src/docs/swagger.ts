import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Node Backend Study API',
      version: '1.0.0',
      description: 'API desenvolvida para estudo de Node.js e boas práticas.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['src/docs/*.swagger.ts'],
});
