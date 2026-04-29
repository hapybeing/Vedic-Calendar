import { motion } from 'framer-motion';
import { fadeUp } from './motionTokens';

export default function DayCard({ day }) {
  const fields = [
    ['Tithi', day.tithi, 'Lunar phase quality and ritual orientation'],
    ['Nakshatra', day.nakshatra, 'Constellation influence and behavioral tone'],
    ['Yoga', day.yoga, 'Energetic blend shaping outcomes'],
    ['Karana', day.karana, 'Action suitability for practical tasks'],
  ];

  return (
    <motion.aside {...fadeUp} className="rounded-[34px] border border-white/10 bg-panel/75 p-7 shadow-glass backdrop-blur-2xl md:p-8">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold-300/75">Day Deep Dive</p>
      <h3 className="mt-2 font-display text-3xl font-semibold">{day.weekday}</h3>
      <p className="text-zinc-400">{day.isoDate} · {day.location}</p>

      <div className="mt-6 space-y-3">
        {fields.map(([k, v, desc], idx) => (
          <motion.details
            key={k}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 open:border-gold-300/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-sm font-medium text-zinc-200">{k}</span>
              <span className="text-xs text-zinc-500 transition group-open:rotate-45 group-open:text-gold-300">✚</span>
            </summary>
            <p className="mt-2 text-base text-zinc-200">{v}</p>
            <p className="mt-1 text-xs text-zinc-500">{desc}</p>
          </motion.details>
        ))}
      </div>
    </motion.aside>
  );
}
