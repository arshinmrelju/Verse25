import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { StarIcon, SparkleIcon } from '../ui/Icons'
import { cn } from '../../utils/cn'

const LIGHT_COLORS = ['#f1c40f', '#c0392b', '#2d8a2d', '#e67e22', '#8e1a4a', '#f1c40f', '#c0392b', '#2d8a2d']

const christmasLights = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: (i / 27) * 100,
  top: 10 + Math.sin((i / 27) * Math.PI * 4) * 5,
  color: LIGHT_COLORS[i % LIGHT_COLORS.length],
  delay: i * 0.12,
  duration: 1.5 + Math.random() * 1.5,
}))

const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: 10 + Math.random() * 60,
  size: 1.5 + Math.random() * 2,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
}))

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-christmas-gold/20 bg-forest-dark/60 backdrop-blur sm:h-16 sm:w-16">
          <span className="text-lg font-bold tabular-nums text-christmas-gold-light sm:text-xl">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-wider text-cream/40">{label}</span>
    </div>
  )
}

function targetDec1(): number {
  const now = new Date()
  const year = now.getFullYear()
  return new Date(year, 11, 1).getTime()
}

export function HeroSection() {
  const navigate = useNavigate()
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isLive, setIsLive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const diff = targetDec1() - Date.now()
      if (diff <= 0) { setIsLive(true); return }
      setCd({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[calc(100dvh-7rem)] flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-[#0d1f0d] to-forest-dark" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.06)_0%,transparent_60%)]" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="pointer-events-none absolute rounded-full bg-cream"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0,
            animation: `twinkle-star ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {christmasLights.map((light) => (
        <div
          key={light.id}
          className="pointer-events-none absolute"
          style={{
            left: `${light.left}%`,
            top: `${light.top}px`,
            animation: `light-sway 3s ease-in-out ${light.delay}s infinite`,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${4 + Math.sin(light.id * 0.5) * 2 + 2}px`,
              height: `${4 + Math.sin(light.id * 0.5) * 2 + 6}px`,
              backgroundColor: light.color,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              animation: `light-glow ${light.duration}s ease-in-out ${light.delay}s infinite`,
              boxShadow: `0 0 6px ${light.color}40, 0 0 12px ${light.color}20`,
            }}
          />
          <div
            className="mx-auto mt-0.5 h-2 w-px bg-white/10"
          />
        </div>
      ))}

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-christmas-gold/10 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-christmas-gold/15 bg-christmas-gold/5 px-3 py-1"
        >
          <SparkleIcon className="text-christmas-gold" size={12} />
          <span className="text-[11px] font-medium text-christmas-gold/80">
            Jesus Youth &middot; Pazhassiraja College
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mb-2 text-sm font-medium tracking-[0.2em] text-cream/50 uppercase"
        >
          A 25-Day Christmas Adventure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.45, type: 'spring', stiffness: 120, damping: 12 }}
          className="text-6xl font-bold tracking-tight sm:text-7xl"
        >
          <span className="text-cream">Verse</span>
          <span className="bg-gradient-to-r from-christmas-gold to-christmas-gold-light bg-clip-text text-transparent">25</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-3 max-w-xs text-sm leading-relaxed text-cream/50"
        >
          Open a door each day. Reflect. Pray. Connect. Your Advent adventure begins here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75 }}
          className="mt-8"
        >
          {isLive ? (
            <div className="rounded-xl border border-christmas-green/30 bg-christmas-green/10 px-5 py-2">
              <span className="text-sm font-medium text-christmas-green-light">The adventure is live!</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cream/30">Challenge starts in</span>
              <div className="flex items-center gap-3">
                <CountdownUnit value={cd.days} label="Days" />
                <span className="mb-6 text-lg text-cream/20">:</span>
                <CountdownUnit value={cd.hours} label="Hrs" />
                <span className="mb-6 text-lg text-cream/20">:</span>
                <CountdownUnit value={cd.minutes} label="Min" />
                <span className="mb-6 text-lg text-cream/20">:</span>
                <CountdownUnit value={cd.seconds} label="Sec" />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" onClick={() => navigate('/calendar')} className="w-full sm:w-auto">
            <StarIcon size={18} />
            Start the Adventure
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
          }} className="w-full sm:w-auto">
            How It Works
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] text-cream/20 uppercase tracking-widest">Scroll</span>
          <div className="h-6 w-px bg-gradient-to-b from-christmas-gold/40 to-transparent" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }} />
        </div>
      </motion.div>
    </section>
  )
}
