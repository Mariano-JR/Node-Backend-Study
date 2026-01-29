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
import { authMiddleware } from '../middlewares/auth.middleware';

const usersRoutes = Router();

usersRoutes.get('/v1/users', authMiddleware, getUsers);
usersRoutes.get('/v1/users/:id', authMiddleware, getUsersById);

usersRoutes.post(
  '/v1/users',
  authMiddleware,
  validate(createUserSchema),
  createUserController
);

usersRoutes.delete('/v1/users/:id', authMiddleware, deleteUserController);

usersRoutes.patch(
  '/v1/users/:id',
  authMiddleware,
  validate(updateUserSchema),
  updateUserByIdController
);

usersRoutes.put(
  '/v1/users/:id',
  authMiddleware,
  validate(updateUserSchema),
  replaceUserController
);

export default usersRoutes;
