import { GetUserUseCase } from './get-user.usecase';
import { GetUsersUseCase } from './get-users.usecase';
import { CreateUserUseCase } from './create-user.usecase';
import { UpdateUserUseCase } from './update-user.usecase';
import { DeleteUserUseCase } from './delete-user.usecase';
import { makeUserRepository } from '../repositories/user-repository.factory';

const userRepository = makeUserRepository();

export const getUserUseCase = new GetUserUseCase(userRepository);
export const getUsersUseCase = new GetUsersUseCase(userRepository);
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);
