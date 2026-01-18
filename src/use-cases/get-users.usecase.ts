import { UserRepository } from "../repositories/user.repository";

interface GetUsersOutput {
    id: string,
    name: string,
}

export class GetUsersUseCase {
    constructor(private usersRepository: UserRepository) { }
    
    execute(): GetUsersOutput[] {
        return this.usersRepository.findAll();
    }
}