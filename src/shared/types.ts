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
