import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { staggerContainer, fadeInUp, fadeIn } from '../animations/variants'
import { ChurchIcon, StarIcon, GiftIcon } from '../components/ui/Icons'

export function About() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-christmas-gold/10 border border-christmas-gold/20">
          <StarIcon className="text-christmas-gold" size={28} />
        </div>
        <h2 className="text-2xl font-bold text-cream">About Verse25</h2>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-4">
          <h3 className="text-sm font-semibold text-christmas-gold mb-2 flex items-center gap-2">
            <ChurchIcon size={16} /> The Mission
          </h3>
          <p className="text-sm text-cream/80 leading-relaxed">
            Verse25 is a 25-day Advent journey organised by <strong className="text-cream">Jesus Youth Pazhassiraja College</strong>.
            Each day from December 1st to Christmas Day, a new door opens with a Scripture verse, a short reflection,
            a practical challenge, and a prayer &mdash; designed to help college students pause, reflect, and connect
            with the true spirit of Christmas.
          </p>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-4">
          <h3 className="text-sm font-semibold text-christmas-gold mb-2 flex items-center gap-2">
            <GiftIcon size={16} /> How It Works
          </h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex gap-2">
              <span className="text-christmas-gold shrink-0">1.</span>
              <span>A new day unlocks automatically each morning in December.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-christmas-gold shrink-0">2.</span>
              <span>Read the verse and reflection for the day.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-christmas-gold shrink-0">3.</span>
              <span>Take on the small challenge to live out the theme.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-christmas-gold shrink-0">4.</span>
              <span>End with a prayer and mark the day as complete.</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <h3 className="text-sm font-semibold text-christmas-gold mb-2">Jesus Youth</h3>
          <p className="text-sm text-cream/80 leading-relaxed">
            Jesus Youth is a Catholic youth movement that empowers young people to live out their faith
            in a vibrant, relevant, and community-oriented way. The Pazhassiraja College chapter brings
            students together for prayer, fellowship, and service.
          </p>
        </Card>
      </motion.div>

      <motion.div variants={fadeIn} className="mt-8 text-center">
        <p className="text-xs text-cream/30">&copy; {new Date().getFullYear()} Jesus Youth Pazhassiraja College</p>
      </motion.div>
    </motion.div>
  )
}
