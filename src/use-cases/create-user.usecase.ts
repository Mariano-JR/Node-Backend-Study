import { v4 as uuid } from 'uuid';
import { AppError } from '../errors/app.error';
import { errorMessages } from '../enums/error-messages.enum';
import { UserRepository } from '../repositories/user.repository';
import { UserResponse } from '../dtos/user-reponse.dto';

interface CreateUserInput {
  name: string;
  role: 'admin' | 'user'
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: CreateUserInput): UserResponse {
    if (!data.name || data.name.length < 3) {
      throw new AppError(errorMessages.INVALID_NAME, 400);
    }

    const user = {
      id: uuid(),
      name: data.name,
      role: data.role ?? 'user'
    };

    return this.userRepository.create(user);
  }
}
