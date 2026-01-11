import express from 'express';
import usersRoutes from './routes/users.routes';
import { logMiddleware } from './middlewares/log.middleware';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express()

app.use(express.json());

app.use(logMiddleware);

app.use(usersRoutes);

app.use(errorMiddleware);


export default app;