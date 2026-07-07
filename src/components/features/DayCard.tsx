import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDayLock } from '../../hooks/useDayLock'
import { cn } from '../../utils/cn'
import { LockIcon, CheckIcon, GiftIcon } from '../ui/Icons'
import type { DayContent } from '../../types'

interface DayCardProps {
  day: DayContent
  index: number
  isCompleted?: boolean
}

export function DayCard({ day, index, isCompleted }: DayCardProps) {
  const unlocked = useDayLock(day.day)
  const navigate = useNavigate()

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
      whileHover={unlocked ? { scale: 1.04, y: -3 } : undefined}
      whileTap={unlocked ? { scale: 0.96 } : undefined}
      onClick={() => unlocked && navigate(`/day/${day.day}`)}
      disabled={!unlocked}
      className={cn(
        'relative flex flex-col items-center justify-center rounded-2xl border p-3 transition-all duration-300 aspect-square',
        unlocked
          ? 'border-christmas-gold/30 bg-gradient-to-br from-forest to-forest-dark cursor-pointer hover:border-christmas-gold/60 hover:shadow-lg hover:shadow-christmas-gold/10'
          : 'border-white/5 bg-white/3 cursor-not-allowed opacity-50',
        isCompleted && 'border-christmas-green-light/50 bg-christmas-green-dark/30',
      )}
    >
      {!unlocked ? (
        <LockIcon className="text-cream/30" size={22} />
      ) : isCompleted ? (
        <div className="flex flex-col items-center gap-1">
          <CheckIcon className="text-christmas-green-light" size={22} />
          <span className="text-[10px] font-medium text-christmas-green-light">Done</span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1">
          <GiftIcon className="text-christmas-gold" size={20} />
          <span className="text-[10px] font-medium text-christmas-gold-light">{day.theme}</span>
        </div>
      )}
      <span className={cn(
        'mt-1 text-xs font-bold',
        unlocked ? 'text-cream' : 'text-cream/30',
      )}>
        {day.day}
      </span>
    </motion.button>
  )
}
