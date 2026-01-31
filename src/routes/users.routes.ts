import { Router } from 'express';
import { UserController } from '../controllers/users.controllers';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema } from '../dtos/create-user.dto';
import { updateUserSchema } from '../dtos/update-user.dto';
import { authMiddleware } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/authorization.middleware';

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.get('/v1/users',
  authMiddleware,
  authorize(['admin', 'user']),
  userController.getUsers
);
usersRoutes.get('/v1/users/:id',
  authMiddleware,
  authorize(['admin', 'user']),
  userController.getUsersById
);

usersRoutes.post(
  '/v1/users',
  authMiddleware,
  authorize(['admin', 'user']),
  validate(createUserSchema),
  userController.createUser
);

usersRoutes.delete('/v1/users/:id',
  authMiddleware,
  authorize(['admin']),
  userController.deleteUser
);

usersRoutes.patch(
  '/v1/users/:id',
  authMiddleware,
  authorize(['admin', 'user']),
  validate(updateUserSchema),
  userController.updateUserById
);

usersRoutes.put(
  '/v1/users/:id',
  authMiddleware,
  authorize(['admin', 'user']),
  validate(updateUserSchema),
  userController.replaceUser
);

export default usersRoutes;
