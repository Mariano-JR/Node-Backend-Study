import { NextFunction, Request, Response } from 'express';
import { InMemoryUserRepository } from '../repositories/in-memory-user.repository';
import { UserService } from '../services/users.services';
import { UserResponse } from '../dtos/user-reponse.dto';

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

export function getUsers(req: Request, res: Response) {
  const users: UserResponse[] = userService.findAll();
  return res.json(users);
}

export function getUsersById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const user: UserResponse = userService.findById(id);

  return res.json(user);
}

export function createUserController(
  req: Request,
  res: Response,
) {
  const { name } = req.body;

  const user: UserResponse = userService.createUser({ name });

  return res.status(201).json(user);
}

export function deleteUserController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);

  userService.deleteUser(id);

  return res.status(204).send();
}

export function updateUserByIdController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);
  const { name } = req.body;

  const updatedUser: UserResponse = userService.updateUser({ id, name });

  return res.json(updatedUser);
}

export function replaceUserController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);
  const { name } = req.body;

  const updatedUser: UserResponse = userService.updateUser({ id, name });

  return res.json(updatedUser);
}
