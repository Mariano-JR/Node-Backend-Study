import { db } from '../connection';

export function runMigration() {
  db.prepare(
    `
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL
        )
    `
  ).run();
}
