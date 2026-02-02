import './database';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import usersRoutes from './routes/users.routes';
import { logMiddleware } from './middlewares/log.middleware';
import { errorMiddleware } from './middlewares/error.middleware';
import { swaggerSpec } from './docs/swagger';
import { authRoutes } from './routes/auth.routes';
import { authMiddleware } from './middlewares/auth.middleware';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(logMiddleware);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use('/v1/auth', authRoutes);
  app.use(authMiddleware);
  app.use(usersRoutes);
  
  app.use(errorMiddleware);

  return app;
}
