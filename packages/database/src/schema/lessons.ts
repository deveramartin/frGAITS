import { boolean, integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { courses } from './courses';

export const lessons = pgTable('lessons', {
  id: uuid('id').primaryKey().defaultRandom(),
  courseId: uuid('course_id').references(() => courses.id).notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  order: integer('order').notNull(),
  type: text('type', { enum: ['video', 'text', 'interactive', 'quiz'] }).notNull(),
  videoUrl: text('video_url'),
  duration: integer('duration').default(0).notNull(),
  xpReward: integer('xp_reward').default(100).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
