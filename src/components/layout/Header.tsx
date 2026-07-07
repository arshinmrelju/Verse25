import { motion } from 'framer-motion'
import { StarIcon } from '../ui/Icons'

export function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 bg-forest-dark/80 backdrop-blur-lg border-b border-christmas-gold/10 px-4 py-3"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between">
        <div className="flex items-center gap-2">
          <StarIcon className="text-christmas-gold" size={22} />
          <h1 className="text-lg font-bold tracking-tight text-cream">
            Verse<span className="text-christmas-gold">25</span>
          </h1>
        </div>
        <span className="text-xs text-cream/50 font-body">JY Pazhassiraja</span>
      </div>
    </motion.header>
  )
}
