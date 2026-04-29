import { motion } from 'framer-motion';

export default function CalendarGrid({ monthData, selectedDate, onSelectDate, activeMonth }) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-surface/70 p-6 shadow-glass backdrop-blur-2xl md:p-7">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300/80">Monthly Grid</p>
          <h2 className="mt-2 font-display text-2xl font-semibold">{activeMonth}</h2>
        </div>
        <p className="text-sm text-zinc-400">{monthData.length} curated entries</p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {monthData.map((day, idx) => {
          const active = day.date === selectedDate;
          return (
            <motion.button
              key={day.date}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.52, delay: idx * 0.025, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelectDate(day.date)}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 ease-premium ${
                active
                  ? 'border-gold-300/75 bg-gradient-to-b from-gold-300/20 to-gold-300/5 shadow-glow'
                  : 'border-white/10 bg-white/[0.02] hover:border-gold-300/35 hover:bg-white/[0.04]'
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{day.weekday}</p>
              <p className="mt-2 font-display text-2xl font-semibold leading-none">{day.day}</p>
              <p className="mt-3 truncate text-sm text-zinc-300">{day.tithi}</p>
              <p className="mt-1 truncate text-xs text-zinc-500">{day.nakshatra}</p>
              {day.festival && <p className="mt-3 text-xs text-gold-200">✦ {day.festival}</p>}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
