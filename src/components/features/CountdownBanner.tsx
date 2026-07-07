import { motion } from 'framer-motion'
import { useDaysUntilChristmas } from '../../hooks/useDayLock'

export function CountdownBanner() {
  const days = useDaysUntilChristmas()

  if (days === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-4"
      >
        <span className="text-2xl">🎄</span>
        <p className="mt-1 text-lg font-bold text-christmas-gold-light">
          Merry Christmas!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-4"
    >
      <p className="text-xs text-cream/50 uppercase tracking-widest">Christmas in</p>
      <p className="text-4xl font-bold text-christmas-gold tabular-nums mt-1">
        {days}
        <span className="text-lg text-cream/60 ml-1">days</span>
      </p>
    </motion.div>
  )
}
