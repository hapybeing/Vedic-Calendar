import { motion } from 'framer-motion';
import { fadeUp } from './motionTokens';

function ScoreRing({ score }) {
  const color = score > 70 ? '#34d399' : score > 50 ? '#d4af37' : '#f87171';
  const c = 2 * Math.PI * 32;
  const offset = c - (score / 100) * c;
  return <svg width="78" height="78" className="shrink-0"><circle cx="39" cy="39" r="32" stroke="#2a2a2a" strokeWidth="8" fill="none" /><circle cx="39" cy="39" r="32" stroke={color} strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray={c} strokeDashoffset={offset} transform="rotate(-90 39 39)" /></svg>;
}

export default function TodayPanel({ today, tomorrow, monthAvg }) {
  const deltaText = today.score >= monthAvg ? 'Above monthly average' : 'Below monthly average';

  return (
    <div className="space-y-3">
      <motion.section {...fadeUp} className="rounded-[30px] border border-white/10 bg-panel/70 p-7 shadow-glass backdrop-blur-2xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-300/80">Today Intelligence</p>
        <div className="mt-4 flex items-center gap-5">
          <ScoreRing score={today.score} />
          <div><p className="font-display text-3xl">{today.score}</p><p className="text-sm text-zinc-400">{today.label}</p><p className="text-xs text-zinc-500">{deltaText}</p></div>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <p><span className="text-zinc-500">Day Signature:</span> {today.daySignature}</p>
          <p><span className="text-zinc-500">Primary Driver:</span> {today.primaryDriver}</p>
          <p><span className="text-zinc-500">Best Action:</span> {today.bestAction}</p>
          <p><span className="text-zinc-500">Avoid:</span> {today.avoidAction}</p>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Tomorrow Preview</p>
        <div className="mt-2 flex items-end justify-between">
          <p className="font-display text-2xl text-zinc-100">{tomorrow.score} · {tomorrow.label}</p>
        </div>
        <p className="mt-2 text-sm text-zinc-400">{tomorrow.daySignature}</p>
      </motion.section>
    </div>
  );
}
