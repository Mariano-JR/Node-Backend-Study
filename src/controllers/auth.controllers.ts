import { Request, Response } from 'express';
import { LoginUseCase } from '../use-cases/auth/login.usecase';

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  login(req: Request, res: Response) {
    const { name } = req.body;

    const result = this.loginUseCase.execute(name);

    return res.status(200).json(result);
  }
}
