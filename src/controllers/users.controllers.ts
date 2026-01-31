import { Request, Response } from 'express';
import { UserResponse } from '../dtos/user-reponse.dto';
import {
  createUserUseCase,
  deleteUserUseCase,
  getUsersUseCase,
  getUserUseCase,
  updateUserUseCase,
} from '../use-cases';

export class UserController {
  getUsers(req: Request, res: Response) {
    const users: UserResponse[] = getUsersUseCase.execute();
    return res.json(users);
  }

  getUsersById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      throw new Error('Invalid id');
    }

    const user: UserResponse = getUserUseCase.execute({ id });

    return res.json(user);
  }

  createUser(req: Request, res: Response) {
    const { name } = req.body;
    const role = process.env.NODE_ENV === 'test' ? req.body.role : undefined;

    const user: UserResponse = createUserUseCase.execute({ name, role });

    return res.status(201).json(user);
  }

  deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      throw new Error('Invalid id');
    }

    deleteUserUseCase.execute({ id });

    return res.status(204).send();
  }

  updateUserById(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      throw new Error('Invalid id');
    }

    const updatedUser: UserResponse = updateUserUseCase.execute({ id, name });

    return res.json(updatedUser);
  }

  replaceUser(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      throw new Error('Invalid id');
    }

    const updatedUser: UserResponse = updateUserUseCase.execute({ id, name });

    return res.json(updatedUser);
  }
}
