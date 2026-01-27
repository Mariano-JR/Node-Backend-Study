import { InMemoryUserRepository } from './in-memory-user.repository';
import { SQLiteUserRepository } from './sqlite-user.repository';
import { UserRepository } from './user.repository';

export function makeUserRepository(): UserRepository {
  if (process.env.NODE_ENV === 'test') {
    return new InMemoryUserRepository();
  }

  return new SQLiteUserRepository();
}
