import React from 'react';
import { Activity, CheckCircle2, AlertTriangle } from 'lucide-react';

const rows = [
  { id: 'evt_2048', type: 'Deployment', status: 'Success', time: '2m ago' },
  { id: 'evt_2047', type: 'Ingestion', status: 'Success', time: '10m ago' },
  { id: 'evt_2046', type: 'Alert', status: 'Warning', time: '22m ago' },
  { id: 'evt_2045', type: 'Backup', status: 'Success', time: '1h ago' },
  { id: 'evt_2044', type: 'API Spike', status: 'Warning', time: '2h ago' },
];

function StatusBadge({ status }) {
  if (status === 'Success') {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-300 text-xs px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-400/20">
        <CheckCircle2 size={14} />
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs px-2 py-1 rounded-md bg-amber-500/10 border border-amber-400/20">
      <AlertTriangle size={14} />
      {status}
    </span>
  );
}

export default function ActivityTable() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
            <Activity size={16} className="text-emerald-300" />
          </span>
          <div>
            <h3 className="text-base font-semibold">Recent Activity</h3>
            <p className="text-xs text-white/60">System events and operational updates</p>
          </div>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">View all</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-white/60">
            <tr className="border-t border-b border-white/10 bg-white/5">
              <th className="px-5 py-3 font-medium">Event ID</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className={i % 2 === 0 ? 'bg-white/0' : 'bg-white/5'}>
                <td className="px-5 py-3 font-mono text-white/90">{r.id}</td>
                <td className="px-5 py-3">{r.type}</td>
                <td className="px-5 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-5 py-3 text-white/70">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
