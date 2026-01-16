import { Request, Response } from 'express';
import { UserResponse } from '../dtos/user-reponse.dto';
import { createUserUseCase, deleteUserUseCase, getUsersUseCase, getUserUseCsae, updateUserUseCase } from '../use-cases';

export function getUsers(req: Request, res: Response) {
  const users: UserResponse[] = getUsersUseCase.execute();
  return res.json(users);
}

export function getUsersById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const user: UserResponse = getUserUseCsae.execute({ id });

  return res.json(user);
}

export function createUserController(
  req: Request,
  res: Response,
) {
  const { name } = req.body;

  const user: UserResponse = createUserUseCase.execute({ name });

  return res.status(201).json(user);
}

export function deleteUserController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);

  deleteUserUseCase.execute({ id });

  return res.status(204).send();
}

export function updateUserByIdController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);
  const { name } = req.body;

  const updatedUser: UserResponse = updateUserUseCase.execute({ id, name });

  return res.json(updatedUser);
}

export function replaceUserController(
  req: Request,
  res: Response,
) {
  const id = Number(req.params.id);
  const { name } = req.body;

  const updatedUser: UserResponse = updateUserUseCase.execute({ id, name });

  return res.json(updatedUser);
}
