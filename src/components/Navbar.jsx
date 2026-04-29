import { motion } from 'framer-motion';

export default function Navbar({ months, activeMonth, setActiveMonth }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="space-y-1">
          <p className="font-display text-[11px] uppercase tracking-[0.34em] text-gold-300/85">Vedic Intelligence</p>
          <h1 className="font-display text-xl font-semibold md:text-2xl">Panchang Calendar</h1>
        </div>
        <nav className="flex gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-glass">
          {months.map((month) => {
            const active = month === activeMonth;
            return (
              <motion.button
                key={month}
                whileHover={{ y: -1.5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveMonth(month)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ease-premium ${
                  active ? 'bg-gradient-to-br from-gold-300 to-gold-500 text-zinc-900 shadow-glow' : 'text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {month}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
