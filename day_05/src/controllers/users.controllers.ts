import { NextFunction, Request, Response } from 'express';
import { createUser, deleteUserById, findAllUsers, findUserById, updateUserById } from '../services/users.services';
import { createUserSchema } from '../dtos/create-user.dto';
import { updateUserSchema } from '../dtos/update-user.dto';

export function getUsers(req: Request, res: Response) {
    const users = findAllUsers();
    return res.json(users);
};

export function getUsersById(req: Request, res: Response) {
    const { id } = req.params;
    
    const user = findUserById(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    };
    
    return res.json(user);
};

export function createUserController(req: Request, res: Response, next: NextFunction) {
    try {
        const data = createUserSchema.parse(req.body);
        
        const user = createUser(data.name);

        return res.status(201).json(user);
    } catch (e) {
        next(e);
    };
    
};

export function deleteUserController(req: Request, res: Response, next: NextFunction) {
   const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Id is required' });
    };
        
    const deleted = deleteUserById(id);

    if (!deleted) {
        return res.status(404).json({ message: 'User not found' });
    };

    return res.status(204).send();
};

export function updateUserByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const data = updateUserSchema.parse(req.body);

        const updatedUser = updateUserById(id, data.name!);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        };

        return res.json(updatedUser)
    } catch (e) {
        next(e);
    }
};

export function replaceUserController(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const data = updateUserSchema.parse(req.body)

        const updatedUser = updateUserById(id, data.name!);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        };

        return res.json(updatedUser);
    } catch (e) {
        next(e);
    }
};