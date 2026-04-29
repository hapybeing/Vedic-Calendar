import { motion } from 'framer-motion';
import { cardHover, easePremium } from './motionTokens';

export default function DayCard({ day }) {
  const fields = [
    ['Tithi', day.tithi],
    ['Nakshatra', day.nakshatra],
    ['Yoga', day.yoga],
    ['Karana', day.karana],
    ['Location', day.location],
  ];

  return (
    <motion.aside layout className="rounded-[32px] border border-white/10 bg-panel/75 p-7 shadow-glass backdrop-blur-2xl md:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-300/80">Day Deep Dive</p>
      <h3 className="mt-2 font-display text-3xl font-semibold">{day.weekday}</h3>
      <p className="text-zinc-400">{day.isoDate}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {fields.map(([k, v]) => (
          <details key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 open:border-gold-300/35">
            <summary className="cursor-pointer list-none text-sm font-medium text-zinc-200">{k}</summary>
            <p className="mt-2 text-sm text-zinc-400">{v}</p>
          </details>
        ))}
      </div>
    </motion.aside>
  );
}
