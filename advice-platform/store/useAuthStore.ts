import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/types';

type AuthState = {
  user: User | null;
  login: (user: User) => void;
  updateProfile: (patch: Partial<User>) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      updateProfile: (patch) =>
        set((state) => (state.user ? { user: { ...state.user, ...patch } } : state)),
      logout: () => set({ user: null }),
    }),
    { name: 'pw_user' },
  ),
);
