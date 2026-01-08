import { Router } from 'express';
import { getUsers, getUsersById } from '../controllers/users.controllers';

const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.get('/users/:id', getUsersById)

export default usersRoutes;