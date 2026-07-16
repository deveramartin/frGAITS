export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface CreateCourseDTO {
  title: string;
  description: string;
  difficulty: string;
  imageUrl?: string;
}

export interface UpdateCourseDTO {
  title?: string;
  description?: string;
  difficulty?: string;
  imageUrl?: string;
  isPublished?: boolean;
}

export interface CreateLessonDTO {
  courseId: string;
  title: string;
  content: string;
  type: string;
  videoUrl?: string;
  duration?: number;
  xpReward?: number;
}

export interface CreateChallengeDTO {
  lessonId?: string;
  title: string;
  description: string;
  difficulty: string;
  starterCode: string;
  solutionCode: string;
  testCases: { input: string; expectedOutput: string; isHidden: boolean }[];
  hints?: string[];
  xpReward?: number;
  language: string;
}

export interface SubmitSolutionDTO {
  challengeId: string;
  code: string;
  language: string;
}
