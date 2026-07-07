export function isDayUnlocked(day: number): boolean {
  const now = new Date()
  const currentYear = now.getFullYear()
  const december1 = new Date(currentYear, 11, 1)
  const today = new Date(currentYear, 11, now.getDate())

  if (now < december1) return false
  const dayInDec = new Date(currentYear, 11, day)
  return today >= dayInDec
}

export function getCurrentDay(): number {
  const now = new Date()
  if (now.getMonth() !== 11) return 0
  return Math.min(now.getDate(), 25)
}

export function isChristmasSeason(): boolean {
  const now = new Date()
  return now.getMonth() === 11 || (now.getMonth() === 0 && now.getDate() <= 6)
}

export function daysUntilChristmas(): number {
  const now = new Date()
  const christmas = new Date(now.getFullYear(), 11, 25)
  const diff = christmas.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })
}
