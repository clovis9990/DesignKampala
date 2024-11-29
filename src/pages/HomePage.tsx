import React, { lazy, Suspense } from 'react';
import { Attention } from '../components/home/Attention';

const Interest = lazy(() => import('../components/home/Interest').then(m => ({ default: m.Interest })));
const Desire = lazy(() => import('../components/home/Desire').then(m => ({ default: m.Desire })));
const Action = lazy(() => import('../components/home/Action').then(m => ({ default: m.Action })));

const LoadingFallback = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

export function HomePage() {
  return (
    <>
      <Attention />
      <Suspense fallback={<LoadingFallback />}>
        <Interest />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Desire />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Action />
      </Suspense>
    </>
  );
}