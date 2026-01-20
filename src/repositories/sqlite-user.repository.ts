import { Database } from "better-sqlite3";
import { User } from "../types/user.type";
import { UserRepository } from "./user.repository";

export class SQLiteUserRepository implements UserRepository {
    constructor(private db: Database) {}

    findAll(): User[] {
        return this.db.prepare('SELECT * FROM users').all() as User[];
    }

    findById(id: string): User | undefined {
        return (
            this.db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User || undefined
        );
    }

    create(user: User): User {
        this.db.prepare(
            'INSERT INTO users (id, name) VALUES (?, ?)'
        ).run(user.id, user.name);

        return user;
    }

    update(id: string, data: Partial<User>): User | undefined {
        const user = this.findById(id);
        if (!user) return;

        const name = data.name ?? user.name;

        this.db.prepare(
            'UPDATE users SET name = ? WHERE id = ?'
        ).run(name, id);

        return { ...user, name };
    }

    delete(id: string): void {
        this.db.prepare('DELETE FROM users WHERE id = ?').run(id);
    }
}