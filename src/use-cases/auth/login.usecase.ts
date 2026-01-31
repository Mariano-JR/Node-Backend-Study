import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { AppError } from '../../errors/app.error';
import { UserRepository } from '../../repositories/user.repository';
import { jwtConfig } from '../../config/jwt';

interface LoginInput {
  name: string,
  role: string
}
export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(user: LoginInput) {
    if (!user) {
      throw new AppError('Invalid credencials', 401);
    }

    const payload = {
      sub: uuid(),
      name: user.name,
      role: user.role,
    }

    const token = jwt.sign(payload, jwtConfig.secret, {
      expiresIn: jwtConfig.expiredIn,
    });

    return {
      token,
    };
  }
}
