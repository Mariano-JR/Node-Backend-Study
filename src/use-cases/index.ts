import { InMemoryUserRepository } from '../repositories/in-memory-user.repository';
import { CreateUserUseCase } from './create-user.usecase';
import { UpdateUserUseCase } from './update-user.usecase';
import { DeleteUserUseCase } from './delete-user.usecase';
import { GetUsersUseCase } from './get-users.usecase';
import { GetUserUseCase } from './get-user.usecase';

const userRepository = new InMemoryUserRepository();

export const getUserUseCase = new GetUserUseCase(userRepository);
export const getUsersUseCase = new GetUsersUseCase(userRepository);
export const createUserUseCase = new CreateUserUseCase(userRepository);
export const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);
