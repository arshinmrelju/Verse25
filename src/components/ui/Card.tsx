import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  onClick?: () => void
}

export function Card({ children, className, glowColor, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'rounded-2xl bg-gradient-to-br from-forest/80 to-forest-dark/90 border border-christmas-gold/10 backdrop-blur-sm p-5',
        onClick && 'cursor-pointer',
        className,
      )}
      style={glowColor ? { boxShadow: `0 0 15px ${glowColor}20` } : undefined}
      whileHover={onClick ? { y: -2, transition: { type: 'spring', stiffness: 300 } } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  )
}
