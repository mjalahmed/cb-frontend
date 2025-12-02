import axios, { AxiosError } from 'axios';
import type { ApiError } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  // If data is FormData, remove Content-Type header to let browser set it with boundary
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Dispatch storage event to sync with auth store
        window.dispatchEvent(new Event('storage'));
        // Get current locale from pathname
        const locale = window.location.pathname.split('/')[1] || 'en';
        // Only redirect if not already on menu page
        if (!window.location.pathname.includes('/menu')) {
          window.location.href = `/${locale}/menu`;
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;

