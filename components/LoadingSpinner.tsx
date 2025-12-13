'use client';

/**
 * Professional Loading Spinner Component
 * Replaces the basic circle spinner with a modern, animated loading indicator
 */
export function LoadingSpinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`${sizeClasses[size]} border-4 border-chocolate-100 border-t-chocolate-600 border-r-chocolate-600 rounded-full animate-spin`}
        />
        {/* Inner pulse */}
        <div
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-chocolate-200 opacity-75 animate-ping`}
        />
      </div>
    </div>
  );
}

/**
 * Full Page Loading Component with professional animation
 */
export function PageLoader({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-6 text-lg font-medium text-gray-700 animate-pulse">{message}</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-chocolate-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-chocolate-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-chocolate-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

/**
 * Inline Loading Component for buttons and small areas
 */
export function InlineLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <div className="w-4 h-4 border-2 border-chocolate-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
}

