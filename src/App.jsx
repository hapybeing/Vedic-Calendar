import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, easePremium } from './components/motionTokens';
import Navbar from './components/Navbar';
import CalendarGrid from './components/CalendarGrid';
import DayCard from './components/DayCard';
import TodayPanel from './components/TodayPanel';
import InsightPanel from './components/InsightPanel';
import FestivalHighlight from './components/FestivalHighlight';
import InsightStrip from './sections/InsightStrip';
import { getMonthPanchang, getPanchangForDate } from './data/panchangData';

const today = new Date();

export default function App() {
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);
  const location = 'Varanasi, IN';

  const monthData = useMemo(() => getMonthPanchang(cursor.year, cursor.month, location), [cursor, location]);
  const selectedDay = monthData.find((d) => d.isoDate === selectedDate) || monthData[0];
  const todayData = getPanchangForDate(today, location);

  return (
    <div className="relative min-h-screen bg-background text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-80" />
      <Navbar cursor={cursor} setCursor={setCursor} onToday={() => { setCursor({ year: today.getFullYear(), month: today.getMonth() }); setSelectedDate(today.toISOString().split('T')[0]); }} />
      <main className="relative mx-auto w-full max-w-[1440px] space-y-8 px-4 pb-16 pt-28 md:space-y-10 md:px-10 xl:px-16">
        <motion.section {...fadeUp} className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <CalendarGrid monthData={monthData} selectedDate={selectedDay.isoDate} onSelectDate={setSelectedDate} todayIso={todayData.isoDate} />
          </div>
          <div className="space-y-6">
            <TodayPanel today={todayData} />
            <InsightPanel day={selectedDay} />
          </div>
        </motion.section>

        <FestivalHighlight day={selectedDay} />

        <motion.section layout transition={{ duration: 0.6, ease: easePremium }} className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
          <DayCard day={selectedDay} />
          <InsightStrip monthData={monthData} />
        </motion.section>
      </main>
    </div>
  );
}
