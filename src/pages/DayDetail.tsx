import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { days } from '../data/days'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { pageTransition, fadeInUp } from '../animations/variants'
import { GiftIcon, CalendarIcon } from '../components/ui/Icons'
import { useDayLock } from '../hooks/useDayLock'

export function DayDetail() {
  const { dayId } = useParams<{ dayId: string }>()
  const navigate = useNavigate()
  const dayNum = Number(dayId)
  const day = days.find((d) => d.day === dayNum)
  const unlocked = useDayLock(dayNum)

  if (!day) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-cream/50">Day not found</p>
        <Button variant="outline" size="sm" className="mt-4" onClick={() => navigate('/calendar')}>
          Back to Calendar
        </Button>
      </div>
    )
  }

  if (!unlocked) {
    return (
      <motion.div {...pageTransition} className="flex flex-col items-center justify-center py-20 text-center">
        <CalendarIcon className="text-cream/20 mb-4" size={48} />
        <p className="text-lg font-semibold text-cream/60">Day {day.day} is locked</p>
        <p className="mt-1 text-sm text-cream/40">Come back on December {day.day} to unlock this reflection.</p>
        <Button variant="outline" size="sm" className="mt-6" onClick={() => navigate('/calendar')}>
          Back to Calendar
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div {...pageTransition}>
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate('/calendar')}>
          &larr; Back
        </Button>
      </div>

      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center mb-8">
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: `${day.color}20` }}
        >
          <GiftIcon size={28} style={{ color: day.color }} />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: day.color }}>
          {day.theme}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-cream">Day {day.day}</h2>
        <p className="mt-1 text-sm text-cream/50">December {day.day}</p>
      </motion.div>

      <Card className="mb-4" glowColor={day.color}>
        <h3 className="text-sm font-semibold text-christmas-gold mb-2">Verse of the Day</h3>
        {day.verse ? (
          <>
            <p className="text-base text-cream/90 italic leading-relaxed">&ldquo;{day.verse}&rdquo;</p>
            <p className="mt-2 text-xs text-cream/50">{day.verseRef}</p>
          </>
        ) : (
          <p className="text-sm text-cream/40 italic">Content coming soon. Stay tuned!</p>
        )}
      </Card>

      <Card className="mb-4">
        <h3 className="text-sm font-semibold text-christmas-gold mb-2">Reflection</h3>
        {day.reflection ? (
          <p className="text-sm text-cream/80 leading-relaxed">{day.reflection}</p>
        ) : (
          <p className="text-sm text-cream/40 italic">This reflection will be available on December {day.day}.</p>
        )}
      </Card>

      <Card className="mb-4">
        <h3 className="text-sm font-semibold text-christmas-gold mb-2">Challenge</h3>
        {day.challenge ? (
          <p className="text-sm text-cream/80 leading-relaxed">{day.challenge}</p>
        ) : (
          <p className="text-sm text-cream/40 italic">A challenge will appear here on December {day.day}.</p>
        )}
      </Card>

      <Card glowColor="rgba(212,160,23,0.15)">
        <h3 className="text-sm font-semibold text-christmas-gold mb-2">Prayer</h3>
        {day.prayer ? (
          <p className="text-sm text-cream/80 leading-relaxed italic">{day.prayer}</p>
        ) : (
          <p className="text-sm text-cream/40 italic">A prayer will be shared on December {day.day}.</p>
        )}
      </Card>
    </motion.div>
  )
}
