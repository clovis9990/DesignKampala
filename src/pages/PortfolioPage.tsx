import React, { lazy, Suspense } from 'react';
import { Hero } from '../components/portfolio/Hero';

const Projects = lazy(() => import('../components/portfolio/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('../components/portfolio/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('../components/portfolio/Contact').then(m => ({ default: m.Contact })));

const LoadingFallback = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export function PortfolioPage() {
  return (
    <div className="pt-16">
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
}