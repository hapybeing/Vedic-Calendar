import { motion } from 'framer-motion';
import { easePremium } from './motionTokens';

export default function Navbar({ cursor, setCursor, onToday }) {
  const label = new Date(cursor.year, cursor.month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const shiftMonth = (delta) => { const next = new Date(cursor.year, cursor.month + delta, 1); setCursor({ year: next.getFullYear(), month: next.getMonth() }); };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-8 xl:px-12">
        <div><p className="font-display text-[11px] uppercase tracking-[0.36em] text-gold-300/80">CalendarOS</p><h1 className="font-display text-xl font-semibold">Intelligent Vedic Time System</h1></div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
          <motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -1 }} transition={{ duration: 0.24, ease: easePremium }} onClick={() => shiftMonth(-1)} className="rounded-full px-3 py-2 text-sm hover:bg-white/10">←</motion.button>
          <span className="min-w-40 text-center text-sm text-zinc-200">{label}</span>
          <motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -1 }} transition={{ duration: 0.24, ease: easePremium }} onClick={() => shiftMonth(1)} className="rounded-full px-3 py-2 text-sm hover:bg-white/10">→</motion.button>
          <button onClick={onToday} className="rounded-full border border-gold-300/30 bg-gold-300/15 px-3 py-2 text-xs text-gold-100">Today</button>
        </div>
      </div>
    </header>
  );
}
