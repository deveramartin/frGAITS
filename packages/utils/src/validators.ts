import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(30, 'Username must be at most 30 characters')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, hyphens, and underscores');

export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  imageUrl: z.string().url().optional(),
});

export const challengeSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description is required'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  starterCode: z.string().min(1, 'Starter code is required'),
  solutionCode: z.string().min(1, 'Solution code is required'),
  language: z.enum(['javascript', 'typescript', 'python', 'c', 'cpp']),
  testCases: z.array(
    z.object({
      input: z.string(),
      expectedOutput: z.string(),
      isHidden: z.boolean().default(false),
    }),
  ).min(1, 'At least one test case is required'),
  hints: z.array(z.string()).optional(),
  xpReward: z.number().int().positive().default(100),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const result = passwordSchema.safeParse(password);
  if (result.success) return { valid: true, errors: [] };
  return { valid: false, errors: result.error.errors.map((e) => e.message) };
}
