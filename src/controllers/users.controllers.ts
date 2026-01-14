import { NextFunction, Request, Response } from 'express';
import { InMemoryUserRepository } from '../repositories/in-memory-user.repository';
import { UserService } from '../services/users.services';

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

export function getUsers(req: Request, res: Response) {
  const users = userService.findAll();
  return res.json(users);
}

export function getUsersById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const user = userService.findById(Number(id));

  return res.json(user);
}

export function createUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  const user = userService.createUser(name);

  return res.status(201).json(user);
}

export function deleteUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  userService.deleteUser(Number(id));

  return res.status(204).send();
}

export function updateUserByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = userService.updateUser(Number(id), name);

  return res.json(updatedUser);
}

export function replaceUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = userService.updateUser(Number(id), name);

  return res.json(updatedUser);
}
