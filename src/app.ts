import './database';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import usersRoutes from './routes/users.routes';
import { logMiddleware } from './middlewares/log.middleware';
import { errorMiddleware } from './middlewares/error.middleware';
import { swaggerSpec } from './docs/swagger';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(logMiddleware);
  app.use(usersRoutes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(errorMiddleware);

  return app;
}
