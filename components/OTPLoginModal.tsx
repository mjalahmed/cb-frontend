'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { authApi } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { X, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface OTPLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function OTPLoginModal({ isOpen, onClose, onSuccess }: OTPLoginModalProps) {
  const t = useTranslations('auth');
  const { setAuth } = useAuthStore();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast.error('Please enter a phone number');
      return;
    }

    setLoading(true);
    try {
      const response = await authApi.sendOTP(phoneNumber);
      if (response.success || response.message) {
        toast.success(t('otpSent'));
        setStep('otp');
      } else {
        toast.error('Failed to send OTP');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.response?.data?.errors?.[0]?.msg ||
                          'Failed to send OTP';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim() || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const { token, user } = await authApi.verifyOTP(phoneNumber, otp);
      setAuth(user, token);
      toast.success(t('loginSuccess'));
      onSuccess();
      onClose();
      setStep('phone');
      setPhoneNumber('');
      setOtp('');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.response?.data?.errors?.[0]?.msg ||
                          t('invalidOTP');
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      await authApi.sendOTP(phoneNumber);
      toast.success(t('otpSent'));
      setOtp('');
    } catch (error: any) {
      toast.error('Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {step === 'phone' ? t('sendOTP') : t('verifyOTP')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 'phone' ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{t('sendOTP')}</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
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
                />
                <p className="text-sm text-gray-500 mt-2">
                  {t('otpSent')}
                </p>
              </div>
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-chocolate-600 text-white py-2 px-4 rounded-lg hover:bg-chocolate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{t('verifyOTP')}</span>
              </button>
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={loading}
                className="w-full text-chocolate-600 py-2 px-4 rounded-lg hover:bg-chocolate-50 transition-colors disabled:opacity-50"
              >
                {t('resendOTP')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep('phone');
                  setOtp('');
                }}
                className="w-full text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('back', { ns: 'common' })}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

