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

usersRoutes.get('/v1/users', getUsers);
usersRoutes.get('/v1/users/:id', getUsersById);

usersRoutes.post('/v1/users', validate(createUserSchema), createUserController);

usersRoutes.delete('/v1/users/:id', deleteUserController);

usersRoutes.patch(
  '/v1/users/:id',
  validate(updateUserSchema),
  updateUserByIdController
);

usersRoutes.put(
  '/v1/users/:id',
  validate(updateUserSchema),
  replaceUserController
);

export default usersRoutes;
