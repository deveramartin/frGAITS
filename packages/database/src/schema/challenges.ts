import { boolean, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { lessons } from './lessons';

export const challenges = pgTable('challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  lessonId: uuid('lesson_id').references(() => lessons.id),
  title: text('title').notNull(),
  description: text('description').notNull(),
  difficulty: text('difficulty', { enum: ['easy', 'medium', 'hard'] }).notNull(),
  starterCode: text('starter_code').notNull(),
  solutionCode: text('solution_code').notNull(),
  testCases: jsonb('test_cases').notNull().$type<{ input: string; expectedOutput: string; isHidden: boolean }[]>(),
  hints: jsonb('hints').$type<string[]>().default([]),
  xpReward: integer('xp_reward').default(100).notNull(),
  language: text('language', { enum: ['javascript', 'typescript', 'python', 'c', 'cpp'] }).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
