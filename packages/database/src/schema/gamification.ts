import { integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { users } from './users';

export const xpTransactions = pgTable('xp_transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  amount: integer('amount').notNull(),
  source: text('source', {
    enum: ['lesson_completion', 'challenge_solved', 'badge_earned', 'daily_login', 'streak_bonus', 'course_completion'],
  }).notNull(),
  sourceId: text('source_id').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const badges = pgTable('badges', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
  iconUrl: text('icon_url').notNull(),
  category: text('category', { enum: ['achievement', 'skill', 'social', 'streak', 'special'] }).notNull(),
  criteria: jsonb('criteria').notNull().$type<{ type: string; threshold: number; metadata?: Record<string, unknown> }>(),
  xpReward: integer('xp_reward').default(50).notNull(),
  rarity: text('rarity', { enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'] }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const userBadges = pgTable('user_badges', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  badgeId: uuid('badge_id').references(() => badges.id).notNull(),
  earnedAt: timestamp('earned_at').defaultNow().notNull(),
});

export const userStats = pgTable('user_stats', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull().unique(),
  totalXP: integer('total_xp').default(0).notNull(),
  currentLevel: integer('current_level').default(1).notNull(),
  currentStreak: integer('current_streak').default(0).notNull(),
  longestStreak: integer('longest_streak').default(0).notNull(),
  completedCourses: integer('completed_courses').default(0).notNull(),
  completedLessons: integer('completed_lessons').default(0).notNull(),
  completedChallenges: integer('completed_challenges').default(0).notNull(),
  lastActiveAt: timestamp('last_active_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
