import { AnimatePresence, motion } from 'framer-motion';
import { cardHover, easePremium } from './motionTokens';

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const toneMap = { 'Peak Day':'text-emerald-200', 'Strong Day':'text-gold-200', Neutral:'text-zinc-300', Caution:'text-orange-200', Avoid:'text-red-300' };

export default function CalendarGrid({ monthData, selectedDate, onSelectDate, todayIso }) {
  const first = new Date(monthData[0].isoDate);
  const leading = first.getDay();
  const monthKey = monthData[0].month;

  return (
    <section className="rounded-[34px] border border-white/10 bg-surface/80 p-6 shadow-glass backdrop-blur-2xl md:p-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-300/75">Calendar Matrix</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">{monthKey}</h3>
        </div>
        <p className="text-xs text-zinc-500">State-aware daily intelligence</p>
      </div>

      <div className="mb-3 grid grid-cols-7 gap-2 text-center text-[11px] uppercase tracking-[0.2em] text-zinc-500">
        {weekday.map((d) => <p key={d}>{d}</p>)}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={monthKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: easePremium }}
          className="grid grid-cols-7 gap-2 md:gap-3"
        >
          {Array.from({ length: leading }).map((_, i) => <div key={`lead-${i}`} />)}
          {monthData.map((day, idx) => {
            const active = day.isoDate === selectedDate;
            const isToday = day.isoDate === todayIso;
            const hasFestival = Boolean(day.festival);

            return (
              <motion.button
                key={day.isoDate}
                {...cardHover}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...cardHover.transition, delay: idx * 0.008 }}
                onClick={() => onSelectDate(day.isoDate)}
                className={`aspect-square rounded-2xl border p-2 text-left transition-all ${
                  active
                    ? 'border-gold-300/75 bg-gradient-to-b from-gold-300/18 to-gold-500/8 shadow-glow'
                    : 'border-white/10 bg-white/[0.02] hover:border-gold-300/35 hover:bg-white/[0.05]'
                } ${isToday ? 'ring-1 ring-emerald-300/65' : ''}`}
                aria-label={`Select ${day.isoDate}`}
              >
                <p className="font-display text-xl leading-none">{day.day}</p>
                <p className={`mt-1 truncate text-[10px] ${toneMap[day.label]}`}>{day.tithi}</p>
                <div className="mt-1 flex items-center gap-1">
                  {isToday && <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />}
                  {hasFestival && <span className="text-[10px] text-gold-200">✦</span>}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
