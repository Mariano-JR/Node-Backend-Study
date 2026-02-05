import * as express from 'express';
import { UserRole } from '../../enums/user-role';

declare global {
  namespace Express {
    interface Request {
      user?: {
        sub: string;
        role: UserRole;
      };
    }
  }
}