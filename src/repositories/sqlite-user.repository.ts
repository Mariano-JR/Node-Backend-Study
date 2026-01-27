import { db } from '../database';
import { User } from '../types/user.type';
import { UserRepository } from './user.repository';

export class SQLiteUserRepository implements UserRepository {
  findAll(): User[] {
    return db.prepare('SELECT * FROM users').all() as User[];
  }

  findById(id: string): User | undefined {
    return (
      (db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User) ||
      undefined
    );
  }

  create(user: User): User {
    db.prepare('INSERT INTO users (id, name) VALUES (?, ?)').run(
      user.id,
      user.name
    );

    return user;
  }

  update(id: string, data: { name: string }): User | undefined {
    const user = this.findById(id);
    if (!user) return;

    const name = data.name ?? user.name;

    db.prepare('UPDATE users SET name = ? WHERE id = ?').run(name, id);

    return { ...user, name };
  }

  delete(id: string): void {
    db.prepare('DELETE FROM users WHERE id = ?').run(id);
  }
}
