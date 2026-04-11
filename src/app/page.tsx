import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('@/components/sections/LandingPage').then(mod => mod.LandingPage));
const WhatsAppFloat = dynamic(() => import('@/components/ui/WhatsAppFloat').then(mod => mod.WhatsAppFloat));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <LandingPage />
        <WhatsAppFloat />
      </Suspense>
    </main>
  );
}
