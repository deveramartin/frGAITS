import { boolean, integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { users } from './users';

export const courses = pgTable('courses', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  slug: text('slug').notNull().unique(),
  imageUrl: text('image_url'),
  instructorId: uuid('instructor_id').references(() => users.id).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  difficulty: text('difficulty', { enum: ['beginner', 'intermediate', 'advanced'] }).notNull(),
  totalLessons: integer('total_lessons').default(0).notNull(),
  totalChallenges: integer('total_challenges').default(0).notNull(),
  xpReward: integer('xp_reward').default(500).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
