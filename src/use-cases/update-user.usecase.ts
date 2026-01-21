import { AppError } from '../errors/app.error';
import { UserResponse } from '../dtos/user-reponse.dto';
import { errorMessages } from '../enums/error-messages.enum';
import { UserRepository } from '../repositories/user.repository';

interface UpdateUserInput {
  id: string;
  name: string;
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute({ id, name }: UpdateUserInput): UserResponse {
    if (!name || name.length < 3) {
      throw new AppError(errorMessages.INVALID_NAME, 400);
    }

    const user = this.userRepository.update(id, { name });

    if (!user) {
      throw new AppError(errorMessages.USER_NOT_FOUND, 404);
    }

    return user;
  }
}
