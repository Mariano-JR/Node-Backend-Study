import express from 'express';
import usersRoutes from './routes/users.routes';
import { logMiddleware } from './middlewares/log.middlewares';

const app = express()

app.use(express.json());

app.use(logMiddleware)

app.use(usersRoutes)


export default app;