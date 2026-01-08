import { NextFunction, Request, Response } from 'express';
import { createUser, deleteUserById, findAllUsers, findUserById } from '../services/users.services';

export function getUsers(req: Request, res: Response) {
    const users = findAllUsers();
    return res.json(users);
}

export function getUsersById(req: Request, res: Response) {
    const { id } = req.params;
    
    const user = findUserById(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    return res.json(user);
}

export function createUserController(req: Request, res: Response, next: NextFunction) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        
        const user = createUser(name);

        return res.status(201).json(user);
    } catch (e) {
        next(e)
    }
    
}

export function deleteUserController(req: Request, res: Response, next: NextFunction) {
   const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Id is required' });
    };
        
    const deleted = deleteUserById(id);

    if (!deleted) {
        res.status(404).json({ message: 'User not found' });
    };

    return res.status(204).send();
}