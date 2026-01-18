import { User } from '../types/user.type';
import { UserRepository } from './user.repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  delete(id: string): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return;
    this.users.splice(index, 1);
  }

  update(id: string, data: Partial<User>): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return;

    this.users[index] = {
      ...this.users[index],
      ...data,
    };

    return this.users[index];
  }
}
