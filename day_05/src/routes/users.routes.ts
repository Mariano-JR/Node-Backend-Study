import { Router } from 'express';
import { createUserController, deleteUserController, getUsers, getUsersById, updateUserByIdController, replaceUserController } from '../controllers/users.controllers';

const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.get('/users/:id', getUsersById)

usersRoutes.post('/users', createUserController)

usersRoutes.delete('/users/:id', deleteUserController)

usersRoutes.patch('/users/:id', updateUserByIdController)

usersRoutes.put('/users/:id', replaceUserController)

export default usersRoutes;