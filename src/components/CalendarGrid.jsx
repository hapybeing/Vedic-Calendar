import { motion } from 'framer-motion';
import { cardHover } from './motionTokens';

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarGrid({ monthData, selectedDate, onSelectDate, todayIso }) {
  const first = new Date(monthData[0].isoDate);
  const leading = first.getDay();

  return (
    <section className="rounded-[32px] border border-white/10 bg-surface/75 p-7 shadow-glass backdrop-blur-2xl md:p-8">
      <div className="mb-5 grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.18em] text-zinc-500">
        {weekday.map((d) => <p key={d}>{d}</p>)}
      </div>
      <motion.div layout className="grid grid-cols-7 gap-2 md:gap-3">
        {Array.from({ length: leading }).map((_, i) => <div key={`lead-${i}`} />)}
        {monthData.map((day) => {
          const active = day.isoDate === selectedDate;
          const isToday = day.isoDate === todayIso;
          const hasFestival = Boolean(day.festival);
          return (
            <motion.button
              key={day.isoDate}
              {...cardHover}
              onClick={() => onSelectDate(day.isoDate)}
              className={`aspect-square rounded-2xl border p-2 text-left transition-all ${
                active ? 'border-gold-300/80 bg-gold-300/15 shadow-glow' : 'border-white/10 bg-white/[0.02] hover:border-gold-300/30'
              } ${isToday ? 'ring-1 ring-emerald-300/60' : ''}`}
            >
              <p className="font-display text-xl leading-none">{day.day}</p>
              <p className="mt-1 truncate text-[10px] text-zinc-400">{day.tithi}</p>
              {hasFestival && <p className="mt-1 text-[10px] text-gold-200">✦</p>}
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
