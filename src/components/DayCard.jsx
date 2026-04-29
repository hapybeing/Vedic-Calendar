import { motion } from 'framer-motion';

const details = [
  ['Tithi', 'tithi'],
  ['Nakshatra', 'nakshatra'],
  ['Yoga', 'yoga'],
  ['Karana', 'karana'],
];

export default function DayCard({ day }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[28px] border border-white/10 bg-panel/75 p-6 shadow-glass backdrop-blur-2xl md:p-7"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-gold-300/80">Selected Day</p>
      <h3 className="mt-2 font-display text-3xl font-bold leading-tight">{day.month} {day.day}</h3>
      <p className="text-zinc-400">{day.weekday} · {day.date}</p>

      <div className="mt-6 space-y-3.5">
        {details.map(([label, key], idx) => (
          <motion.details
            key={key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 open:border-gold-300/45"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-zinc-200">{label}</span>
              <span className="text-xs text-zinc-500 transition group-open:rotate-45 group-open:text-gold-300">✚</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{day[key]}</p>
          </motion.details>
        ))}
      </div>

      {day.festival ? (
        <div className="mt-6 rounded-2xl border border-gold-300/35 bg-gradient-to-r from-gold-300/15 to-gold-500/10 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-200">Festival Highlight</p>
          <p className="mt-2 font-medium text-gold-100">{day.festival}</p>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Festival Highlight</p>
          <p className="mt-2 text-sm text-zinc-400">No major festival marked for this date.</p>
        </div>
      )}
    </motion.aside>
  );
}
