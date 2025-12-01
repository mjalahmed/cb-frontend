'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { authApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { X, Loader2, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

interface PhoneVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  phoneNumber: string;
  onSkip?: () => void;
}

export function PhoneVerificationModal({
  isOpen,
  onClose,
  onSuccess,
  phoneNumber,
  onSkip,
}: PhoneVerificationModalProps) {
  const t = useTranslations('auth');
  const { user, setAuth } = useAuthStore();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleResendOTP = useCallback(async () => {
    setResendLoading(true);
    try {
      await authApi.sendOTP(phoneNumber);
      toast.success(t('otpSent'));
      setOtp('');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        'Failed to resend OTP';
      toast.error(errorMessage);
    } finally {
      setResendLoading(false);
    }
  }, [phoneNumber, t]);

  useEffect(() => {
    if (isOpen && phoneNumber) {
      // Auto-send OTP when modal opens
      handleResendOTP();
    }
  }, [isOpen, phoneNumber, handleResendOTP]);

  if (!isOpen) return null;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim() || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const { user: updatedUser, message } = await authApi.verifyPhone(phoneNumber, otp);
      // Update user in store
      const currentToken = useAuthStore.getState().token;
      if (updatedUser && currentToken) {
        useAuthStore.getState().setAuth(updatedUser, currentToken);
      }
      toast.success(message || 'Phone verified successfully!');
      onSuccess();
      onClose();
      setOtp('');
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.msg ||
        t('invalidOTP');
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">{t('verifyPhone')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4 text-center">
            <Phone className="w-12 h-12 text-chocolate-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              We&apos;ve sent a verification code to
            </p>
            <p className="font-semibold text-gray-900">{phoneNumber}</p>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('enterOTP')}
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="123456"
                maxLength={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent text-center text-2xl tracking-widest"
                required
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{t('verifyPhone')}</span>
            </button>

            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendLoading}
              className="w-full text-chocolate-600 py-2 px-4 rounded-lg hover:bg-chocolate-50 transition-colors disabled:opacity-50"
            >
              {resendLoading ? (
                <span className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </span>
              ) : (
                t('resendOTP')
              )}
            </button>

            {onSkip && (
              <button
                type="button"
                onClick={onSkip}
                className="w-full text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Skip for now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

