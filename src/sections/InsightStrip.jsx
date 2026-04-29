import { useMemo } from 'react';

export default function InsightStrip({ monthData }) {
  const stats = useMemo(() => {
    const bestDay = [...monthData].sort((a, b) => b.score - a.score)[0];
    const weekly = Array.from({ length: Math.ceil(monthData.length / 7) }, (_, i) => monthData.slice(i * 7, i * 7 + 7));
    const weeklySummary = weekly.map((w, i) => ({ week: i + 1, avg: Math.round(w.reduce((acc, d) => acc + d.score, 0) / w.length) }));
    return { bestDay, weeklySummary };
  }, [monthData]);

  return (
    <section className="space-y-4">
      <article className="rounded-[24px] border border-gold-300/30 bg-gold-300/10 p-6 shadow-glow">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-100">Best Day of Month</p>
        <p className="mt-2 font-display text-2xl text-gold-100">{stats.bestDay.isoDate} · Score {stats.bestDay.score}</p>
      </article>
      <div className="grid gap-3 md:grid-cols-4">
        {stats.weeklySummary.map((w) => (
          <article key={w.week} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-500">Week {w.week}</p>
            <p className="mt-1 font-display text-2xl text-zinc-100">{w.avg}</p>
            <p className="text-xs text-zinc-500">Avg energy score</p>
          </article>
        ))}
      </div>
    </section>
  );
}
