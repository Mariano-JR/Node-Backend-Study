import users from '../../users.json';
import { AppError } from '../errors/app.error';
import { errorMessages } from '../enums/error-messages.enum';

export function findAllUsers() {
  return users;
}

export function findUserById(id: string) {
  const user = users.find((user) => String(user.id) === id);

  if (!user) {
    throw new AppError(errorMessages.USER_NOT_FOUND, 404);
  }

  return user;
}

export function createUser(name: string) {
  const newUser = {
    id: Date.now(),
    name,
  };

  users.push(newUser);
  return newUser;
}

export function deleteUserById(id: string) {
  const index = users.findIndex((user) => String(user.id) === id);

  if (index === -1) {
    throw new AppError(errorMessages.USER_NOT_FOUND, 404);
  }

  users.splice(index, 1);
}

export function updateUserById(id: string, name: string) {
  const user = users.find((user) => String(user.id) === id);

  if (!user) {
    throw new AppError(errorMessages.USER_NOT_FOUND, 404)
  }

  user.name = name;
  return user;
}
