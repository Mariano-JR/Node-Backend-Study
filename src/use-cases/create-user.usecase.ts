import { v4 as uuidv4 } from 'uuid';
import { AppError } from "../errors/app.error";
import { errorMessages } from "../enums/error-messages.enum";
import { UserRepository } from "../repositories/user.repository";

interface CreateUserInput {
    name: string;
}

interface CreateUserOutput {
    id: string,
    name: string,
}

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }
    
    execute({ name }: CreateUserInput): CreateUserOutput {
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