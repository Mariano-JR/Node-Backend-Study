import { Router } from 'express';
import { createUserController, deleteUserController, getUsers, getUsersById } from '../controllers/users.controllers';

const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.get('/users/:id', getUsersById)

usersRoutes.post('/users', createUserController)

usersRoutes.delete('/users/:id', deleteUserController)

export default usersRoutes;