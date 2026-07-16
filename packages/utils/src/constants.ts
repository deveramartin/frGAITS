export const APP_NAME = 'GAITS';
export const APP_DESCRIPTION = 'Gamified AI Tutoring System';
export const APP_VERSION = '0.1.0';

export const XP_PER_LEVEL_BASE = 1000;
export const XP_LEVEL_MULTIPLIER = 1.5;

export const LEVELS = [
  { level: 1, title: 'Novice', minXP: 0, maxXP: 1000, icon: '🌱' },
  { level: 2, title: 'Apprentice', minXP: 1000, maxXP: 2500, icon: '📚' },
  { level: 3, title: 'Student', minXP: 2500, maxXP: 5000, icon: '🎓' },
  { level: 4, title: 'Coder', minXP: 5000, maxXP: 8500, icon: '💻' },
  { level: 5, title: 'Developer', minXP: 8500, maxXP: 13000, icon: '⚡' },
  { level: 6, title: 'Engineer', minXP: 13000, maxXP: 19000, icon: '🔧' },
  { level: 7, title: 'Architect', minXP: 19000, maxXP: 27000, icon: '🏗️' },
  { level: 8, title: 'Expert', minXP: 27000, maxXP: 37000, icon: '🌟' },
  { level: 9, title: 'Master', minXP: 37000, maxXP: 50000, icon: '👑' },
  { level: 10, title: 'Legend', minXP: 50000, maxXP: Infinity, icon: '🏆' },
] as const;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_LANGUAGES = ['javascript', 'typescript', 'python', 'c', 'cpp'] as const;
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const API_ROUTES = {
  AUTH: {
    SIGN_IN: '/api/auth/sign-in',
    SIGN_UP: '/api/auth/sign-up',
    SIGN_OUT: '/api/auth/sign-out',
    REFRESH: '/api/auth/refresh',
    CALLBACK: '/api/auth/callback',
  },
  COURSES: '/api/courses',
  LESSONS: '/api/lessons',
  CHALLENGES: '/api/challenges',
  SUBMISSIONS: '/api/submissions',
  USERS: '/api/users',
  LEADERBOARD: '/api/leaderboard',
  PROGRESS: '/api/progress',
  AI: {
    HINT: '/api/ai/hint',
    EXPLAIN: '/api/ai/explain',
    REVIEW: '/api/ai/review',
  },
} as const;

export const CACHE_KEYS = {
  USER_PROFILE: 'user-profile',
  COURSES: 'courses',
  LEADERBOARD: 'leaderboard',
  PROGRESS: 'progress',
} as const;
