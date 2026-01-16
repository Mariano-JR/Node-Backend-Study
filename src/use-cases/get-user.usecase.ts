import { errorMessages } from "../enums/error-messages.enum";
import { AppError } from "../errors/app.error";
import { UserRepository } from "../repositories/user.repository";

interface GetUserInput {
    id: number,
}

interface GetUserOutput {
    id: number,
    name: string,
}

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) { }
    
    execute({ id }: GetUserInput): GetUserOutput {
        const user = this.userRepository.findById(id);

        if (!user) {
            throw new AppError(errorMessages.USER_NOT_FOUND, 404);
        }

        return user;
    }
}