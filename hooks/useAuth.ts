'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth-store';
import { userApi } from '@/lib/api-client';
import toast from 'react-hot-toast';

export function useAuth() {
  const { token, user, setAuth, initializeAuth } = useAuthStore();

  useEffect(() => {
    // Initialize auth from localStorage
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    // If we have a token but no user, fetch user data
    const fetchUser = async () => {
      if (token && !user) {
        try {
          const userData = await userApi.getMe();
          setAuth(userData, token);
        } catch (error: any) {
          // Token might be invalid, clear it
          if (error.response?.status === 401) {
            useAuthStore.getState().logout();
          } else {
            console.error('Failed to fetch user:', error);
          }
        }
      }
    };

    fetchUser();
  }, [token, user, setAuth]);

  return { token, user };
}

