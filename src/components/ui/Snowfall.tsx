import { useEffect, useState } from 'react'
import { useIsChristmasSeason } from '../../hooks/useDayLock'

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function Snowfall({ active = true }: { active?: boolean }) {
  const isChristmas = useIsChristmasSeason()
  const [flakes, setFlakes] = useState<Snowflake[]>([])

  useEffect(() => {
    if (!active || !isChristmas) {
      setFlakes([])
      return
    }

    const generated: Snowflake[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
    }))
    setFlakes(generated)
  }, [active, isChristmas])

  if (!active || !isChristmas || flakes.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
