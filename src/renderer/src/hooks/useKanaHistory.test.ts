import { describe, it, expect } from 'vitest'
import { pushAttempt, computeKanaStats, computeCombinedAccuracy } from './useKanaHistory'

// ─── pushAttempt ────────────────────────────────────────────────────────────

describe('pushAttempt', () => {
  it('appends to an empty history', () => {
    expect(pushAttempt([], true)).toEqual([true])
  })

  it('appends to an existing history', () => {
    expect(pushAttempt([true, false], true)).toEqual([true, false, true])
  })

  it('caps at 5 entries, dropping the oldest (FIFO)', () => {
    const history = [true, true, true, true, true]
    expect(pushAttempt(history, false)).toEqual([true, true, true, true, false])
  })

  it('does not mutate the input array', () => {
    const history = [true, false]
    pushAttempt(history, true)
    expect(history).toEqual([true, false])
  })
})

// ─── computeKanaStats ───────────────────────────────────────────────────────

describe('computeKanaStats', () => {
  it('returns null accuracy for undefined history', () => {
    expect(computeKanaStats(undefined)).toEqual({ attempts: 0, correct: 0, accuracyPct: null })
  })

  it('returns null accuracy for empty history', () => {
    expect(computeKanaStats([])).toEqual({ attempts: 0, correct: 0, accuracyPct: null })
  })

  it('computes 100% for a single correct attempt', () => {
    expect(computeKanaStats([true])).toEqual({ attempts: 1, correct: 1, accuracyPct: 100 })
  })

  it('computes 0% for all-incorrect history', () => {
    expect(computeKanaStats([false, false, false, false, false])).toEqual({
      attempts: 5,
      correct: 0,
      accuracyPct: 0
    })
  })

  it('rounds 2/3 correct to 67%', () => {
    expect(computeKanaStats([true, false, true])).toEqual({
      attempts: 3,
      correct: 2,
      accuracyPct: 67
    })
  })
})

// ─── computeCombinedAccuracy ────────────────────────────────────────────────

describe('computeCombinedAccuracy', () => {
  it('returns null for an empty list regardless of includeUnattempted', () => {
    expect(computeCombinedAccuracy([], false)).toBeNull()
    expect(computeCombinedAccuracy([], true)).toBeNull()
  })

  it('returns null when excluding unattempted and everything is unattempted', () => {
    expect(computeCombinedAccuracy([null, null], false)).toBeNull()
  })

  it('excludes unattempted kana from the average when includeUnattempted is false', () => {
    expect(computeCombinedAccuracy([80, null], false)).toBe(80)
  })

  it('counts unattempted kana as 0% when includeUnattempted is true', () => {
    expect(computeCombinedAccuracy([80, null], true)).toBe(40)
  })

  it('weighs each kana equally rather than pooling correct/total', () => {
    expect(computeCombinedAccuracy([100, 0], false)).toBe(50)
  })
})
