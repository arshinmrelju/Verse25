import type { DayContent } from '../types'

export const days: DayContent[] = Array.from({ length: 25 }, (_, i) => {
  const day = i + 1
  const themes = [
    'Hope', 'Peace', 'Joy', 'Love', 'Light',
    'Faith', 'Grace', 'Mercy', 'Wonder', 'Promise',
    'Humility', 'Patience', 'Kindness', 'Gratitude', 'Togetherness',
    'Generosity', 'Forgiveness', 'Courage', 'Trust', 'Renewal',
    'Presence', 'Celebration', 'Awe', 'Rejoice', 'Emmanuel',
  ]
  const colors = [
    '#c0392b', '#d4a017', '#2d8a2d', '#8e1a4a', '#e67e22',
    '#1a5c1a', '#f0d060', '#c0392b', '#2d8a2d', '#d4a017',
    '#8e1a4a', '#e67e22', '#1a5c1a', '#f0d060', '#c0392b',
    '#d4a017', '#2d8a2d', '#8e1a4a', '#e67e22', '#1a5c1a',
    '#f0d060', '#c0392b', '#d4a017', '#2d8a2d', '#8e1a4a',
  ]

  return {
    day,
    title: `Day ${day}`,
    theme: themes[day - 1],
    verse: '',
    verseRef: '',
    reflection: '',
    challenge: '',
    prayer: '',
    color: colors[day - 1],
  } satisfies DayContent
})
