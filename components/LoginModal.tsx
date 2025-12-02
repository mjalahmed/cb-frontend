'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { authApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { useRouter } from '@/i18n/routing';
import { X, Loader2, User as UserIcon, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToRegister?: () => void;
  redirectAfterLogin?: boolean;
}

export function LoginModal({ isOpen, onClose, onSuccess, onSwitchToRegister, redirectAfterLogin = true }: LoginModalProps) {
  const t = useTranslations('auth');
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error('Please enter username and password');
      return;
    }

    setLoading(true);
    try {
      const { token, user } = await authApi.login(username, password);
      setAuth(user, token);
      toast.success(t('loginSuccess'));
      onSuccess();
      onClose();
      setUsername('');
      setPassword('');
      
      // Redirect based on user role (only if redirectAfterLogin is true)
      if (redirectAfterLogin) {
        if (user.role === 'ADMIN') {
          router.push('/admin/orders');
        } else {
          router.push('/menu');
        }
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">{t('login')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('username')}
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="johndoe"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                  minLength={3}
                  maxLength={30}
                  pattern="[a-zA-Z0-9_]+"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                3-30 characters, letters, numbers, and underscores only
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                  minLength={6}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{t('login')}</span>
            </button>

            {onSwitchToRegister && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="text-sm text-chocolate-600 hover:text-chocolate-700 transition-colors"
                >
                  Don&apos;t have an account? Register here
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

