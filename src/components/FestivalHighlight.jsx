import { motion } from 'framer-motion';
import { easePremium } from './motionTokens';

export default function FestivalHighlight({ day }) {
  if (!day.festival) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easePremium }}
      className="rounded-[30px] border border-gold-300/35 bg-gradient-to-r from-gold-300/20 via-gold-500/15 to-gold-300/10 p-7 shadow-glow"
    >
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold-100">Festival Mode Active</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-gold-100">{day.festival}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gold-50/90">Optimized ritual day. Interface emphasis is elevated to prioritize sacred observance, family ceremonies, and intentional planning.</p>
    </motion.section>
  );
}
