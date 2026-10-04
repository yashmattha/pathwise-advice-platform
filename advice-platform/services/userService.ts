import { User } from '@/lib/types';
import { delay } from '@/lib/utils';

/**
 * Mock auth. Accepts any email/password combination and fabricates a user
 * from the email's local part. Replace with real calls to your auth
 * provider (NextAuth, Clerk, a custom API, etc.) later — the useAuthStore
 * consumer code does not need to change shape.
 */
export async function mockLogin(email: string): Promise<User> {
  const name = email
    .split('@')[0]
    .replace(/[._]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Alex Morgan';
  return delay(
    { name, email, bio: '', interests: [], joinedAt: new Date().toISOString() },
    500,
  );
}

export async function mockSignup(name: string, email: string): Promise<User> {
  return delay({ name, email, bio: '', interests: [], joinedAt: new Date().toISOString() }, 500);
}
