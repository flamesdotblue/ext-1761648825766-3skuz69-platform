import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                <Rocket size={18} />
              </span>
              <span className="text-emerald-300 text-sm font-medium tracking-wide">Live Metrics</span>
            </div>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Real-time Metrics Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
              Monitor KPIs, visualize trends, and inspect recent activity. Powered by a dark, futuristic 3D topographic scene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
