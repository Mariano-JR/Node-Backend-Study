import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app.error';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Unauthorized', 401);
  }

  return next();
}
