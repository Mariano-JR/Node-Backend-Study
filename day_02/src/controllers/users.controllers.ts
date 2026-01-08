import { Request, Response } from 'express';
import { findAllUsers, findUserById } from '../services/users.services';

export function getUsers(req: Request, res: Response) {
    const users = findAllUsers();
    return res.json(users);
}

export function getUsersById(req: Request, res: Response) {
    const { id } = req.params;
    
    const user = findUserById(id);

    if (!user) res.status(404).json({ message: 'User not found' });
    
    return res.json(user);
}