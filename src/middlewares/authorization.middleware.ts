import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";

export function authorize(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const role = req.user?.role;

        if (!role || !allowedRoles.includes(role)) {
            throw new AppError('Forbidden', 403);
        }

        return next();
    }
}