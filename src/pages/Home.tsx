import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { CountdownBanner } from '../components/features/CountdownBanner'
import { StarIcon, GiftIcon } from '../components/ui/Icons'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function Home() {
  const navigate = useNavigate()

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center pt-8">
      <motion.div variants={fadeInUp} className="text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-christmas-gold/10 px-4 py-1.5 border border-christmas-gold/20 mb-6">
          <StarIcon className="text-christmas-gold" size={14} />
          <span className="text-xs font-medium text-christmas-gold-light">Jesus Youth Pazhassiraja College</span>
        </div>

        <h2 className="text-4xl font-bold leading-tight text-balance">
          <span className="text-cream">25 Days of</span><br />
          <span className="text-christmas-gold">Christmas</span>
        </h2>

        <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs mx-auto">
          Open a door each day. Reflect. Pray. Connect. Your Advent adventure begins here.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-2">
        <CountdownBanner />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6 flex flex-col gap-3 w-full max-w-xs">
        <Button size="lg" onClick={() => navigate('/calendar')} className="w-full">
          <GiftIcon size={18} />
          Open Today&apos;s Door
        </Button>
        <Button variant="outline" size="md" onClick={() => navigate('/about')} className="w-full">
          Learn More
        </Button>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <p className="text-xs text-cream/30 italic">&ldquo;For unto us a child is born&rdquo;</p>
      </motion.div>
    </motion.div>
  )
}
