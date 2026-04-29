import { motion } from 'framer-motion';
import { fadeUp } from './motionTokens';

const badgeTone = {
  Auspicious: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  Favorable: 'text-gold-200 border-gold-300/30 bg-gold-400/10',
  Reflective: 'text-orange-200 border-orange-400/30 bg-orange-400/10',
  Neutral: 'text-zinc-200 border-white/15 bg-white/5',
};

export default function TodayPanel({ today }) {
  return (
    <motion.section {...fadeUp} className="rounded-[30px] border border-white/10 bg-panel/70 p-7 shadow-glass backdrop-blur-2xl">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold-300/80">Today Intelligence</p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{today.weekday}, {today.month.split(' ')[0]} {today.day}</h3>
      <div className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs ${badgeTone[today.significance]}`}>{today.significance} day signature</div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{today.festival || 'No major festival today.'} Primary driver is {today.yoga}; time actions with favorable windows for best outcomes.</p>
    </motion.section>
  );
}
