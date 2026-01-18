import { errorMessages } from "../enums/error-messages.enum";
import { AppError } from "../errors/app.error";
import { UserRepository } from "../repositories/user.repository";

interface DeleteUserInput {
    id: string,
}

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) { }
    
    execute({ id }: DeleteUserInput): void {
        const user = this.userRepository.findById(id);

        if (!user) {
            throw new AppError(errorMessages.USER_NOT_FOUND, 404);
        }

        this.userRepository.delete(id);
    }
}