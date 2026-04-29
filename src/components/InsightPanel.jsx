import { motion } from 'framer-motion';
import { fadeUp } from './motionTokens';

const tones = {
  good: 'border-emerald-300/30 bg-emerald-300/12 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  moderate: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  avoid: 'border-red-300/30 bg-red-300/10 text-red-100',
};

export default function InsightPanel({ day }) {
  return (
    <motion.section {...fadeUp} className="rounded-[30px] border border-white/10 bg-surface/75 p-7 shadow-glass backdrop-blur-2xl">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold-300/80">Best Time Windows</p>
      <div className="mt-4 grid gap-3">
        {day.bestWindows.map((window, i) => (
          <motion.div key={window.time} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className={`rounded-xl border px-4 py-3 text-sm font-medium ${tones[window.tone]}`}>
            <p className="text-xs uppercase tracking-[0.14em] opacity-80">{window.label}</p><p className="mt-1">{window.time}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
