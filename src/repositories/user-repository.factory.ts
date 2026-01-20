import { InMemoryUserRepository } from "./in-memory-user.repository";
import { SQLiteUserRepository } from "./sqlite-user.repository";
import { db } from "../database";

export function makeUserRepository() {
    if (process.env.NODE_ENV === 'test') {
        return new InMemoryUserRepository();
    }

    return new SQLiteUserRepository(db);
}