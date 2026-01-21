import { db } from './connection';
import { runMigration } from './migrations/migrations';

runMigration();

export { db };
