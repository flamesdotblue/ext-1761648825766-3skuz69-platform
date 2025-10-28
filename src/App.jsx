import React from 'react';
import Hero from './components/Hero';
import KPIGrid from './components/KPIGrid';
import ChartPanel from './components/ChartPanel';
import ActivityTable from './components/ActivityTable';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 space-y-10 pb-16">
        <KPIGrid />
        <ChartPanel />
        <ActivityTable />
      </main>
    </div>
  );
}
