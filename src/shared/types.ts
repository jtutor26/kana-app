export interface Kana {
  id: string
  script: 'hiragana' | 'katakana'
  char: string
  romaji: string
  altRomaji?: string[]
  group: 'basic' | 'dakuten' | 'handakuten' | 'combo'
}

export type Screen = 'select' | 'quiz' | 'results'

export interface QuizResult {
  kana: Kana
  userAnswer: string
  correct: boolean
}

export type KanaAttemptHistory = Record<string, boolean[]>

export interface KanaStats {
  attempts: number
  correct: number
  accuracyPct: number | null
}

export type KanaFilter = 'all' | 'hiragana' | 'katakana' | 'selected'
