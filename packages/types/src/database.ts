export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string | null;
  instructorId: string;
  isPublished: boolean;
  difficulty: CourseDifficulty;
  totalLessons: number;
  totalChallenges: number;
  xpReward: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum CourseDifficulty {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  order: number;
  type: LessonType;
  videoUrl: string | null;
  duration: number;
  xpReward: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum LessonType {
  VIDEO = 'video',
  TEXT = 'text',
  INTERACTIVE = 'interactive',
  QUIZ = 'quiz',
}

export interface Challenge {
  id: string;
  lessonId: string | null;
  title: string;
  description: string;
  difficulty: ChallengeDifficulty;
  starterCode: string;
  solutionCode: string;
  testCases: TestCase[];
  hints: string[];
  xpReward: number;
  language: ProgrammingLanguage;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum ChallengeDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum ProgrammingLanguage {
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  C = 'c',
  CPP = 'cpp',
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}

export interface Submission {
  id: string;
  userId: string;
  challengeId: string;
  code: string;
  language: ProgrammingLanguage;
  status: SubmissionStatus;
  output: string | null;
  executionTime: number | null;
  memoryUsed: number | null;
  createdAt: Date;
}

export enum SubmissionStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  PASSED = 'passed',
  FAILED = 'failed',
  ERROR = 'error',
  TIMEOUT = 'timeout',
}
