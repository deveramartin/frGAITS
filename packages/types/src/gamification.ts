export interface XPTransaction {
  id: string;
  userId: string;
  amount: number;
  source: XPSource;
  sourceId: string;
  description: string;
  createdAt: Date;
}

export enum XPSource {
  LESSON_COMPLETION = 'lesson_completion',
  CHALLENGE_SOLVED = 'challenge_solved',
  BADGE_EARNED = 'badge_earned',
  DAILY_LOGIN = 'daily_login',
  STREAK_BONUS = 'streak_bonus',
  COURSE_COMPLETION = 'course_completion',
}

export interface Level {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  category: BadgeCategory;
  criteria: BadgeCriteria;
  xpReward: number;
  rarity: BadgeRarity;
}

export enum BadgeCategory {
  ACHIEVEMENT = 'achievement',
  SKILL = 'skill',
  SOCIAL = 'social',
  STREAK = 'streak',
  SPECIAL = 'special',
}

export enum BadgeRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
}

export interface BadgeCriteria {
  type: string;
  threshold: number;
  metadata?: Record<string, unknown>;
}

export interface UserProgress {
  userId: string;
  totalXP: number;
  currentLevel: number;
  currentLevelProgress: number;
  completedCourses: number;
  completedLessons: number;
  completedChallenges: number;
  currentStreak: number;
  longestStreak: number;
  badges: string[];
  rank: number;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  fullName: string;
  avatarUrl: string | null;
  totalXP: number;
  level: number;
  badgeCount: number;
}

export interface LeaderboardPeriod {
  type: 'daily' | 'weekly' | 'monthly' | 'all-time';
  startDate: Date;
  endDate: Date;
}
