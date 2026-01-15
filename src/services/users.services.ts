import { AppError } from '../errors/app.error';
import { errorMessages } from '../enums/error-messages.enum';
import { UserRepository } from '../repositories/user.repository';
import { createUserServiceDTO } from '../dtos/create-user.service.dto';
import { updateUserServiceDTO } from '../dtos/update-user.service.dto';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }

  findById(id: number) {
    const user = this.userRepository.findById(id);
    if (!user) {
      throw new AppError(errorMessages.USER_NOT_FOUND, 404);
    }

    return user;
  }

  createUser({ name }: createUserServiceDTO) {
    const newUser = {
      id: Date.now(),
      name: name,
    };

    return this.userRepository.create(newUser);
  }

  deleteUser(id: number) {
    const user = this.userRepository.findById(id);
    if (!user) {
      throw new AppError(errorMessages.USER_NOT_FOUND, 404);
    }

    this.userRepository.delete(id);
  }

  updateUser({ id, name }: updateUserServiceDTO) {
    const user = this.userRepository.update(id, { name });
    if (!user) {
      throw new AppError(errorMessages.USER_NOT_FOUND, 404);
    }

    return user;
  }
}
