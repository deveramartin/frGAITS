'use client';

// useUser hook - provides current user data
// TODO: implement with Supabase client
export function useUser() {
  return {
    user: null,
    isLoading: false,
    error: null,
  };
}
