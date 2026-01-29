import { Router } from 'express';
import { makeUserRepository } from '../repositories/user-repository.factory';
import { LoginUseCase } from '../use-cases/auth/login.usecase';
import { AuthController } from '../controllers/auth.controllers';

const router = Router();

const userRepository = makeUserRepository();
const loginUseCase = new LoginUseCase(userRepository);
const authController = new AuthController(loginUseCase);

router.post('/login', (req, res) => authController.login(req, res));

export { router as authRoutes };
