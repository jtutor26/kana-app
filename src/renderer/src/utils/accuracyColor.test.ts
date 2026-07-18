import { describe, it, expect } from 'vitest'
import { bucketPct, accuracyClasses } from './accuracyColor'

// ─── bucketPct ──────────────────────────────────────────────────────────────

describe('bucketPct', () => {
  it('buckets exact multiples of 20 to themselves', () => {
    expect(bucketPct(0)).toBe(0)
    expect(bucketPct(20)).toBe(20)
    expect(bucketPct(40)).toBe(40)
    expect(bucketPct(60)).toBe(60)
    expect(bucketPct(80)).toBe(80)
    expect(bucketPct(100)).toBe(100)
  })

  it('rounds 10 up to 20 (0.5 rounds up)', () => {
    // 10 / 20 = 0.5, Math.round(0.5) = 1 -> bucket 20
    expect(bucketPct(10)).toBe(20)
  })

  it('rounds 49 down to 40', () => {
    // 49 / 20 = 2.45, Math.round = 2 -> bucket 40
    expect(bucketPct(49)).toBe(40)
  })

  it('rounds 50 up to 60', () => {
    // 50 / 20 = 2.5, Math.round(2.5) = 3 -> bucket 60
    expect(bucketPct(50)).toBe(60)
  })

  it('rounds 67 up to 60', () => {
    // 67 / 20 = 3.35, Math.round = 3 -> bucket 60
    expect(bucketPct(67)).toBe(60)
  })

  it('clamps values below 0', () => {
    expect(bucketPct(-5)).toBe(0)
  })

  it('clamps values above 100', () => {
    expect(bucketPct(105)).toBe(100)
  })
})

// ─── accuracyClasses ────────────────────────────────────────────────────────

describe('accuracyClasses', () => {
  it('returns the neutral/unattempted classes for null', () => {
    expect(accuracyClasses(null)).toEqual({
      bg: 'bg-white',
      border: 'border-slate-200',
      text: 'text-slate-700'
    })
  })

  it('returns red classes for 0%', () => {
    expect(accuracyClasses(0)).toEqual({
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-700'
    })
  })

  it('returns emerald classes for 100%', () => {
    expect(accuracyClasses(100)).toEqual({
      bg: 'bg-emerald-100',
      border: 'border-emerald-400',
      text: 'text-emerald-700'
    })
  })

  it('buckets a non-multiple-of-20 percent before mapping to classes', () => {
    expect(accuracyClasses(67)).toEqual(accuracyClasses(60))
  })
})
