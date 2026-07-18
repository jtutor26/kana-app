import { useState, useCallback } from 'react'
import type { KanaAttemptHistory, KanaStats, QuizResult } from '@shared/types'

const STORAGE_KEY = 'kana-history'
const MAX_ATTEMPTS = 5

export function pushAttempt(history: boolean[], correct: boolean): boolean[] {
  return [...history, correct].slice(-MAX_ATTEMPTS)
}

export function computeKanaStats(history: boolean[] | undefined): KanaStats {
  const attempts = history?.length ?? 0
  const correct = history?.filter(Boolean).length ?? 0
  const accuracyPct = attempts === 0 ? null : Math.round((correct / attempts) * 100)
  return { attempts, correct, accuracyPct }
}

export function computeCombinedAccuracy(
  pcts: (number | null)[],
  includeUnattempted: boolean
): number | null {
  const values = includeUnattempted
    ? pcts.map((p) => p ?? 0)
    : pcts.filter((p): p is number => p !== null)
  if (values.length === 0) return null
  const sum = values.reduce((acc, v) => acc + v, 0)
  return Math.round(sum / values.length)
}

function loadHistory(): KanaAttemptHistory {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (
        parsed &&
        typeof parsed === 'object' &&
        !Array.isArray(parsed) &&
        Object.values(parsed).every(
          (v) => Array.isArray(v) && v.every((b) => typeof b === 'boolean')
        )
      ) {
        return parsed as KanaAttemptHistory
      }
    }
  } catch {
    // ignore malformed storage
  }
  return {}
}

function saveHistory(history: KanaAttemptHistory): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}

interface UseKanaHistoryReturn {
  history: KanaAttemptHistory
  recordQuizResults: (results: QuizResult[]) => void
  getKanaStats: (id: string) => KanaStats
}

export function useKanaHistory(): UseKanaHistoryReturn {
  const [history, setHistory] = useState<KanaAttemptHistory>(loadHistory)

  const update = useCallback((next: KanaAttemptHistory) => {
    setHistory(next)
    saveHistory(next)
  }, [])

  const recordQuizResults = useCallback(
    (results: QuizResult[]) => {
      const next: KanaAttemptHistory = { ...history }
      for (const r of results) {
        const prevArr = next[r.kana.id] ?? []
        next[r.kana.id] = pushAttempt(prevArr, r.correct)
      }
      update(next)
    },
    [history, update]
  )

  const getKanaStats = useCallback((id: string) => computeKanaStats(history[id]), [history])

  return { history, recordQuizResults, getKanaStats }
}
