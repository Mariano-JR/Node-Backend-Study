import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(3, 'Name must have at least 3 characters')
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;