import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app.error';
import { jwtConfig } from '../config/jwt';
import jwt from 'jsonwebtoken';
import { UserRole } from '../enums/user-role';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not provided', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, jwtConfig.secret) as {
      sub: string;
      role: UserRole
    };

    req.user = {
      sub: decoded.sub,
      role: decoded.role,
    };

    return next()
  } catch {
    throw new AppError('Invalid or expired token', 401);
  }
}
