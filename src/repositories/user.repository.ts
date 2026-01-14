import User from '../types/user.type';

export interface UserRepository {
  findAll(): User[];
  findById(id: number): User | undefined;
  create(user: User): User;
  delete(id: number): void;
  update(id: number, data: Partial<User>): User | undefined;
}
