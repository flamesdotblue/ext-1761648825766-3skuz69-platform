import React from 'react';
import { Calendar } from 'lucide-react';

function generatePath(values, width, height, padding = 24) {
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = innerW / (values.length - 1);
  const points = values.map((v, i) => {
    const x = padding + i * step;
    const y = padding + innerH - ((v - min) / range) * innerH;
    return [x, y];
  });
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');
  const area = `${d} L ${padding + innerW} ${padding + innerH} L ${padding} ${padding + innerH} Z`;
  return { d, area, points };
}

export default function ChartPanel() {
  const data = [12, 14, 13, 17, 16, 18, 22, 21, 25, 24, 28, 27, 30, 29, 33, 35, 34, 36, 39, 42, 40];
  const width = 900;
  const height = 280;
  const { d, area, points } = generatePath(data, width, height);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Traffic & Conversions</h2>
          <p className="text-sm text-white/60">Session volume and conversion trend (last 21 days)</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 hover:bg-white/10 transition">7D</button>
          <button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/10">21D</button>
          <button className="px-3 py-1.5 rounded-lg text-xs border border-white/10 bg-white/5 hover:bg-white/10 transition">90D</button>
          <span className="inline-flex items-center gap-2 text-xs text-white/70 px-2 py-1 rounded-lg border border-white/10 bg-white/5">
            <Calendar size={14} />
            Custom
          </span>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-500/5 to-transparent">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-60">
          <defs>
            <linearGradient id="gLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#34d399" floodOpacity="0.25" />
            </filter>
          </defs>

          <g>
            <path d={area} fill="url(#gArea)" />
            <path d={d} stroke="url(#gLine)" strokeWidth="3" fill="none" filter="url(#shadow)" />
            {points.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={3.5} fill="#a7f3d0" className="opacity-90" />
            ))}
          </g>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div className="rounded-lg border border-white/10 p-3 bg-white/5">
          <p className="text-white/60">Sessions</p>
          <p className="text-lg font-semibold">42,380</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3 bg-white/5">
          <p className="text-white/60">Conversion</p>
          <p className="text-lg font-semibold">3.8%</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3 bg-white/5">
          <p className="text-white/60">AOV</p>
          <p className="text-lg font-semibold">$58.20</p>
        </div>
        <div className="rounded-lg border border-white/10 p-3 bg-white/5">
          <p className="text-white/60">Revenue</p>
          <p className="text-lg font-semibold">$124,980</p>
        </div>
      </div>
    </section>
  );
}
