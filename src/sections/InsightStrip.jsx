import { useMemo } from 'react';

export default function InsightStrip({ monthData }) {
  const stats = useMemo(() => {
    const festivals = monthData.filter((d) => d.festival).length;
    const favorable = monthData.filter((d) => ['Auspicious', 'Favorable'].includes(d.significance)).length;
    const reflective = monthData.filter((d) => d.significance === 'Reflective').length;
    return [
      { label: 'Festival Days', value: festivals },
      { label: 'Favorable Days', value: favorable },
      { label: 'Reflective Days', value: reflective },
    ];
  }, [monthData]);

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <article key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-glass">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
          <p className="mt-2 font-display text-4xl text-gold-200">{item.value}</p>
        </article>
      ))}
    </section>
  );
}
