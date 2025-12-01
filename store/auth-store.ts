import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';

interface AuthStore {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      setAuth: (user, token) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
        }
        set({ user, token });
      },
      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        set({ user: null, token: null });
      },
      isAuthenticated: () => {
        return !!get().token && !!get().user;
      },
      initializeAuth: () => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token && !get().token) {
            // Token exists in localStorage but not in store, sync it
            set({ token });
          }
        }
      },
    }),
    {
      name: 'chocobar-auth',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);

