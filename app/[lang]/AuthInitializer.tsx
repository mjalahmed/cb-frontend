'use client';

import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';

export function AuthInitializer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only initialize auth after component is mounted to prevent hydration errors
  if (!mounted) {
    return null;
  }

  // Use a separate component to ensure hooks are called after mount
  return <AuthInitializerContent />;
}

function AuthInitializerContent() {
  useAuth();
  return null;
}

