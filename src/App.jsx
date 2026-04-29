import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CalendarGrid from './components/CalendarGrid';
import DayCard from './components/DayCard';
import InsightStrip from './sections/InsightStrip';
import { panchangData } from './data/panchangData';

const monthLabels = [...new Set(panchangData.map((entry) => entry.month))];

export default function App() {
  const [activeMonth, setActiveMonth] = useState(monthLabels[0]);
  const [selectedDate, setSelectedDate] = useState(panchangData[0].date);

  const monthData = useMemo(() => panchangData.filter((entry) => entry.month === activeMonth), [activeMonth]);
  const selectedDay = useMemo(() => panchangData.find((entry) => entry.date === selectedDate) ?? monthData[0], [monthData, selectedDate]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-80" />
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
      />
      <Navbar months={monthLabels} activeMonth={activeMonth} setActiveMonth={setActiveMonth} />

      <main className="relative mx-auto w-full max-w-7xl space-y-8 px-4 pb-14 pt-28 md:space-y-10 md:px-8">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-glass backdrop-blur-2xl md:p-8"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-gold-300/90">Elite Panchang Experience</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Precision Vedic Calendar with Ritual Context, Day Intelligence, and Fluid Interactions.
          </h2>
        </motion.section>

        <motion.section
          layout
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 lg:grid-cols-[1.65fr_1fr]"
        >
          <CalendarGrid monthData={monthData} selectedDate={selectedDate} onSelectDate={setSelectedDate} activeMonth={activeMonth} />
          <AnimatePresence mode="wait">
            <DayCard key={selectedDay.date} day={selectedDay} />
          </AnimatePresence>
        </motion.section>

        <InsightStrip monthData={monthData} />
      </main>
    </div>
  );
}
