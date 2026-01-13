import { NextFunction, Request, Response } from 'express';
import {
  createUser,
  deleteUserById,
  findAllUsers,
  findUserById,
  updateUserById,
} from '../services/users.services';

export function getUsers(req: Request, res: Response) {
  const users = findAllUsers();
  return res.json(users);
}

export function getUsersById(req: Request, res: Response) {
  const { id } = req.params;

  const user = findUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(user);
}

export function createUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name } = req.body;

  const user = createUser(name);

  return res.status(201).json(user);
}

export function deleteUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const deleted = deleteUserById(id);

  if (!deleted) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(204).send();
}

export function updateUserByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = updateUserById(id, name);

  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(updatedUser);
}

export function replaceUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = updateUserById(id, name);

  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(updatedUser);
}
