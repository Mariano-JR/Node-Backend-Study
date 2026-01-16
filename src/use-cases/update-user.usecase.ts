import { AppError } from "../errors/app.error";
import { errorMessages } from "../enums/error-messages.enum";
import { UserRepository } from "../repositories/user.repository";

interface UpdateUserInput {
    id: number,
    name: string,
}

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) { }
    
    execute({ id, name }: UpdateUserInput): UpdateUserInput {
        const user = this.userRepository.update(id, { name });

        if (!user) {
            throw new AppError(errorMessages.USER_NOT_FOUND, 404)
        }

        if (!name || name.length < 3) {
            throw new AppError(errorMessages.INVALID_NAME, 400);
        }

        return user
    }
}