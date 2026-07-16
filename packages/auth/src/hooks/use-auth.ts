'use client';

// useAuth hook - provides authentication state and methods
// TODO: implement with Supabase client
export function useAuth() {
  return {
    signIn: async (_email: string, _password: string) => {},
    signUp: async (_email: string, _password: string, _fullName: string) => {},
    signOut: async () => {},
    resetPassword: async (_email: string) => {},
  };
}
