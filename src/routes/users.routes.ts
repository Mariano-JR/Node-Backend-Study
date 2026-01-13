import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  getUsers,
  getUsersById,
  updateUserByIdController,
  replaceUserController,
} from '../controllers/users.controllers';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema } from '../dtos/create-user.dto';
import { updateUserSchema } from '../dtos/update-user.dto';

const usersRoutes = Router();

usersRoutes.get('/users', getUsers);
usersRoutes.get('/users/:id', getUsersById);

usersRoutes.post('/users', validate(createUserSchema), createUserController);

usersRoutes.delete('/users/:id', deleteUserController);

usersRoutes.patch(
  '/users/:id',
  validate(updateUserSchema),
  updateUserByIdController
);

usersRoutes.put(
  '/users/:id',
  validate(updateUserSchema),
  replaceUserController
);

export default usersRoutes;
