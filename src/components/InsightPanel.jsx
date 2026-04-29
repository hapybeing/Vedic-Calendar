import { motion } from 'framer-motion';
import { cardHover, easePremium } from './motionTokens';

export default function InsightPanel({ day }) {
  return (
    <motion.section layout className="rounded-[30px] border border-white/10 bg-surface/75 p-7 shadow-glass backdrop-blur-2xl">
      <p className="text-xs uppercase tracking-[0.28em] text-gold-300/80">Best Time Windows</p>
      <div className="mt-4 grid gap-3">
        {day.bestWindows.map((window) => (
          <div key={window} className="rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">✓ {window}</div>
        ))}
        {day.cautionWindows.map((window) => (
          <div key={window} className="rounded-xl border border-orange-300/25 bg-orange-300/10 px-4 py-3 text-sm text-orange-100">⚠ {window}</div>
        ))}
      </div>
    </motion.section>
  );
}
