import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { challenges } from './challenges';
import { users } from './users';

export const submissions = pgTable('submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  challengeId: uuid('challenge_id').references(() => challenges.id).notNull(),
  code: text('code').notNull(),
  language: text('language', { enum: ['javascript', 'typescript', 'python', 'c', 'cpp'] }).notNull(),
  status: text('status', { enum: ['pending', 'running', 'passed', 'failed', 'error', 'timeout'] }).notNull().default('pending'),
  output: text('output'),
  executionTime: integer('execution_time'),
  memoryUsed: integer('memory_used'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
