import { UserResponse } from "../dtos/user-reponse.dto";
import { UserRepository } from "../repositories/user.repository";

export class GetUsersUseCase {
    constructor(private usersRepository: UserRepository) { }
    
    execute(): UserResponse[] {
        return this.usersRepository.findAll();
    }
}