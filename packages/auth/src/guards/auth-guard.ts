import { getUser } from '../server';

/**
 * Authentication guard for server-side route protection
 * Throws if user is not authenticated
 */
export async function withAuth() {
  const user = await getUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}
