import { describe, it, expect } from 'vitest'
import { checkAnswer, normalizeInput } from './useQuizEngine'
import type { Kana } from '@shared/types'

// ─── Fixtures ────────────────────────────────────────────────────────────────

const kana_shi: Kana = {
  id: 'hira-shi',
  script: 'hiragana',
  char: 'し',
  romaji: 'shi',
  altRomaji: ['si'],
  group: 'basic',
}

const kana_ka: Kana = {
  id: 'hira-ka',
  script: 'hiragana',
  char: 'か',
  romaji: 'ka',
  group: 'basic',
}

const kana_tsu: Kana = {
  id: 'hira-tsu',
  script: 'hiragana',
  char: 'つ',
  romaji: 'tsu',
  altRomaji: ['tu'],
  group: 'basic',
}

const kana_chi: Kana = {
  id: 'hira-chi',
  script: 'hiragana',
  char: 'ち',
  romaji: 'chi',
  altRomaji: ['ti'],
  group: 'basic',
}

const kana_fu: Kana = {
  id: 'hira-fu',
  script: 'hiragana',
  char: 'ふ',
  romaji: 'fu',
  altRomaji: ['hu'],
  group: 'basic',
}

const kana_ja: Kana = {
  id: 'hira-ja',
  script: 'hiragana',
  char: 'じゃ',
  romaji: 'ja',
  altRomaji: ['zya', 'jya'],
  group: 'combo',
}

// ─── normalizeInput ───────────────────────────────────────────────────────────

describe('normalizeInput', () => {
  it('lowercases input', () => {
    expect(normalizeInput('SHI')).toBe('shi')
  })

  it('trims whitespace', () => {
    expect(normalizeInput('  ka  ')).toBe('ka')
  })

  it('lowercases and trims combined', () => {
    expect(normalizeInput('  TSU  ')).toBe('tsu')
  })

  it('handles empty string', () => {
    expect(normalizeInput('')).toBe('')
  })
})

// ─── checkAnswer ──────────────────────────────────────────────────────────────

describe('checkAnswer', () => {
  it('accepts exact primary romaji', () => {
    expect(checkAnswer(kana_ka, 'ka')).toBe(true)
  })

  it('accepts primary romaji case-insensitively', () => {
    expect(checkAnswer(kana_ka, 'KA')).toBe(true)
  })

  it('accepts primary romaji with surrounding whitespace', () => {
    expect(checkAnswer(kana_ka, '  ka  ')).toBe(true)
  })

  it('rejects wrong answer', () => {
    expect(checkAnswer(kana_ka, 'ki')).toBe(false)
  })

  it('rejects empty input', () => {
    expect(checkAnswer(kana_ka, '')).toBe(false)
  })

  // Variant romaji

  it('accepts "shi" for し', () => {
    expect(checkAnswer(kana_shi, 'shi')).toBe(true)
  })

  it('accepts "si" variant for し', () => {
    expect(checkAnswer(kana_shi, 'si')).toBe(true)
  })

  it('accepts "tsu" for つ', () => {
    expect(checkAnswer(kana_tsu, 'tsu')).toBe(true)
  })

  it('accepts "tu" variant for つ', () => {
    expect(checkAnswer(kana_tsu, 'tu')).toBe(true)
  })

  it('accepts "chi" for ち', () => {
    expect(checkAnswer(kana_chi, 'chi')).toBe(true)
  })

  it('accepts "ti" variant for ち', () => {
    expect(checkAnswer(kana_chi, 'ti')).toBe(true)
  })

  it('accepts "fu" for ふ', () => {
    expect(checkAnswer(kana_fu, 'fu')).toBe(true)
  })

  it('accepts "hu" variant for ふ', () => {
    expect(checkAnswer(kana_fu, 'hu')).toBe(true)
  })

  it('accepts "ja" for じゃ', () => {
    expect(checkAnswer(kana_ja, 'ja')).toBe(true)
  })

  it('accepts "zya" variant for じゃ', () => {
    expect(checkAnswer(kana_ja, 'zya')).toBe(true)
  })

  it('accepts "jya" variant for じゃ', () => {
    expect(checkAnswer(kana_ja, 'jya')).toBe(true)
  })

  it('rejects an unrelated variant', () => {
    expect(checkAnswer(kana_shi, 'sha')).toBe(false)
  })

  // Kana with no altRomaji

  it('accepts correct answer for kana with no altRomaji', () => {
    expect(checkAnswer(kana_ka, 'ka')).toBe(true)
  })

  it('rejects wrong answer for kana with no altRomaji', () => {
    expect(checkAnswer(kana_ka, 'ga')).toBe(false)
  })
})
