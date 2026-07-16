import type { UserRole } from '@gaits/types';

import { getUser } from '../server';

/**
 * Role-based access guard for server-side route protection
 * Throws if user doesn't have required role
 */
export async function withRole(allowedRoles: UserRole[]) {
  const user = await getUser();
  if (!user) {
    throw new Error('Unauthorized');
  }

  const userRole = user.user_metadata?.role as UserRole | undefined;
  if (!userRole || !allowedRoles.includes(userRole)) {
    throw new Error('Forbidden: insufficient permissions');
  }

  return user;
}
