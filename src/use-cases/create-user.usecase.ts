import { v4 as uuidv4 } from 'uuid';
import { AppError } from "../errors/app.error";
import { errorMessages } from "../enums/error-messages.enum";
import { UserRepository } from "../repositories/user.repository";
import { UserResponse } from '../dtos/user-reponse.dto';

interface CreateUserInput {
    name: string;
}

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }
    
    execute({ name }: CreateUserInput): UserResponse {
        if (!name || name.length < 3) {
            throw new AppError(errorMessages.INVALID_NAME, 400);
        }

        const user = {
            id: uuidv4(),
            name: name,
        };

        return this.userRepository.create(user);
    }
}