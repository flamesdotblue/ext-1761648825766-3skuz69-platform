import React from 'react';
import { TrendingUp, Users, Server, Activity } from 'lucide-react';

const kpis = [
  {
    label: 'Revenue (MTD)',
    value: '$124,980',
    delta: '+12.4%',
    icon: TrendingUp,
    color: 'text-emerald-300',
    ring: 'ring-emerald-400/30',
  },
  {
    label: 'Active Users',
    value: '18,402',
    delta: '+4.8%',
    icon: Users,
    color: 'text-cyan-300',
    ring: 'ring-cyan-400/30',
  },
  {
    label: 'API Throughput',
    value: '2.3k rps',
    delta: '+2.1%',
    icon: Server,
    color: 'text-fuchsia-300',
    ring: 'ring-fuchsia-400/30',
  },
  {
    label: 'Error Rate',
    value: '0.28%',
    delta: '-0.05%',
    icon: Activity,
    color: 'text-amber-300',
    ring: 'ring-amber-400/30',
  },
];

export default function KPIGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 ring-1 ring-inset hover:ring-white/20 transition"
        >
          <div className="flex items-center justify-between">
            <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10 ${kpi.ring}`}>
              <kpi.icon className={kpi.color} size={18} />
            </div>
            <span className={`text-xs font-medium ${kpi.delta.startsWith('-') ? 'text-red-300' : 'text-emerald-300'}`}>
              {kpi.delta}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-white/70">{kpi.label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">{kpi.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
