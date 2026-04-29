import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InsightStrip({ monthData }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.children,
      { y: 20, opacity: 0, filter: 'blur(5px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.09, duration: 0.7, ease: 'power3.out' },
    );
  }, [monthData]);

  const festivals = monthData.filter((d) => d.festival).length;
  const auspiciousYoga = monthData.filter((d) => d.yoga.includes('Siddhi') || d.yoga.includes('Shubha') || d.yoga.includes('Saubhagya')).length;
  const shuklaDays = monthData.filter((d) => d.tithi.includes('Shukla')).length;

  const stats = [
    { label: 'Festival Days', value: festivals, foot: 'Celebration markers' },
    { label: 'Auspicious Yogas', value: auspiciousYoga, foot: 'High-alignment windows' },
    { label: 'Shukla Phase Days', value: shuklaDays, foot: 'Waxing lunar cycle' },
  ];

  return (
    <section ref={ref} className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <article key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-glass backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
          <p className="mt-3 font-display text-4xl font-bold text-gold-200">{item.value}</p>
          <p className="mt-2 text-sm text-zinc-400">{item.foot}</p>
        </article>
      ))}
    </section>
  );
}
