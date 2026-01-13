import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/app.error';
import { errorMessages } from '../enums/error-messages.enum';

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      statusCode: 400,
      errors: 'Validation Error',
      message: err.issues.map(e => {
        if (e.path.includes('name')) {
          return errorMessages.INVALID_NAME
        }
      }),
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: 'Application Error',
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Unexpected error occurred'
  });
}
