import { AppError } from '../../errors/app.error';
import { UserRepository } from '../../repositories/user.repository';

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(name: string) {
    if (!name) {
      throw new AppError('Invalid credencials', 401);
    }

    return {
      token: 'mock-token',
    };
  }
}
