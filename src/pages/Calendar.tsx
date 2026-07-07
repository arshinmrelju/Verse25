import { motion } from 'framer-motion'
import { days } from '../data/days'
import { DayCard } from '../components/features/DayCard'
import { staggerContainer, fadeInUp } from '../animations/variants'

export function Calendar() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div variants={fadeInUp} className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-cream">Advent Calendar</h2>
        <p className="mt-1 text-xs text-cream/50">Tap a door to begin today&apos;s reflection</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid grid-cols-5 gap-2.5">
        {days.map((day, i) => (
          <DayCard key={day.day} day={day} index={i} />
        ))}
      </motion.div>
    </motion.div>
  )
}
