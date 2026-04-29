import { motion } from 'framer-motion';
import { cardHover, easePremium } from './motionTokens';

export default function FestivalHighlight({ day }) {
  if (!day.festival) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-gold-300/35 bg-gradient-to-r from-gold-300/20 via-gold-500/15 to-gold-300/10 p-7 shadow-glow"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-gold-100">Festival Mode Active</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-gold-100">{day.festival}</h3>
      <p className="mt-2 text-sm text-gold-50/90">UI is elevated for this sacred day. Favor rituals, gratitude, and intentional scheduling.</p>
    </motion.section>
  );
}
