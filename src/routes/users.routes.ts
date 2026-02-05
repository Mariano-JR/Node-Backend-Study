import { Router } from 'express';
import { UserController } from '../controllers/users.controllers';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema } from '../dtos/create-user.dto';
import { updateUserSchema } from '../dtos/update-user.dto';
import { authMiddleware } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/authorization.middleware';
import { UserRole } from '../enums/user-role';

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.get('/v1/users',
  authMiddleware,
  authorize([UserRole.ADMIN, UserRole.USER]),
  userController.getUsers
);
usersRoutes.get('/v1/users/:id',
  authMiddleware,
  authorize([UserRole.ADMIN, UserRole.USER]),
  userController.getUsersById
);

usersRoutes.post(
  '/v1/users',
  authMiddleware,
  authorize([UserRole.ADMIN, UserRole.USER]),
  validate(createUserSchema),
  userController.createUser
);

usersRoutes.delete('/v1/users/:id',
  authMiddleware,
  authorize([UserRole.ADMIN]),
  userController.deleteUser
);

usersRoutes.patch(
  '/v1/users/:id',
  authMiddleware,
  authorize([UserRole.ADMIN, UserRole.USER]),
  validate(updateUserSchema),
  userController.updateUserById
);

usersRoutes.put(
  '/v1/users/:id',
  authMiddleware,
  authorize([UserRole.ADMIN, UserRole.USER]),
  validate(updateUserSchema),
  userController.replaceUser
);

export default usersRoutes;
