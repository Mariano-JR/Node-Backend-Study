import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: err.issues.map((e) => ({
        path: e.path,
        message: e.message,
      })),
    });
  }

  if (err instanceof Error) {
    console.error(err.message);
  }

  return res.status(500).json({ message: 'Internal server error' });
}
