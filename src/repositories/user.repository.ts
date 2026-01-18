import { User } from '../types/user.type';

export interface UserRepository {
  findAll(): User[];
  findById(id: string): User | undefined;
  create(user: User): User;
  delete(id: string): void;
  update(id: string, data: Partial<User>): User | undefined;
}
