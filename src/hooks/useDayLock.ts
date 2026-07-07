import { useMemo } from 'react'
import { isDayUnlocked, getCurrentDay, isChristmasSeason, daysUntilChristmas } from '../utils/date'

export function useDayLock(day: number) {
  return useMemo(() => isDayUnlocked(day), [day])
}

export function useCurrentDay() {
  return useMemo(() => getCurrentDay(), [])
}

export function useIsChristmasSeason() {
  return useMemo(() => isChristmasSeason(), [])
}

export function useDaysUntilChristmas() {
  return useMemo(() => daysUntilChristmas(), [])
}
