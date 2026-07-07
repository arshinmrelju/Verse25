export interface DayContent {
  day: number
  title: string
  theme: string
  verse: string
  verseRef: string
  reflection: string
  challenge: string
  prayer: string
  color: string
}

export interface UserProgress {
  completedDays: number[]
  reflectionsSaved: string[]
  startedAt: string
  lastActive: string
}

export interface AppUser {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
  progress: UserProgress
}

export type PageTab = 'home' | 'calendar' | 'about' | 'profile'
