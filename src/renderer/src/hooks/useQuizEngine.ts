import { useState, useCallback, useMemo } from 'react'
import type { Kana, QuizResult } from '@shared/types'

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function normalizeInput(input: string): string {
  return input.trim().toLowerCase()
}

export function checkAnswer(kana: Kana, input: string): boolean {
  const normalized = normalizeInput(input)
  if (normalized === kana.romaji) return true
  if (kana.altRomaji?.some((alt) => alt === normalized)) return true
  return false
}

interface UseQuizEngineReturn {
  currentKana: Kana | null
  questionIndex: number
  totalQuestions: number
  results: QuizResult[]
  isDone: boolean
  feedbackState: 'idle' | 'correct' | 'incorrect'
  submitAnswer: (input: string) => boolean
  advance: () => void
  reset: () => void
}

export function useQuizEngine(selectedKana: Kana[]): UseQuizEngineReturn {
  const queue = useMemo(() => shuffle(selectedKana), [selectedKana])

  const [questionIndex, setQuestionIndex] = useState(0)
  const [results, setResults] = useState<QuizResult[]>([])
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'incorrect'>('idle')

  const totalQuestions = queue.length
  const isDone = questionIndex >= totalQuestions
  const currentKana = isDone ? null : queue[questionIndex]

  const submitAnswer = useCallback(
    (input: string): boolean => {
      if (!currentKana || feedbackState !== 'idle') return false
      const correct = checkAnswer(currentKana, input)
      setResults((prev) => [...prev, { kana: currentKana, userAnswer: input.trim(), correct }])
      setFeedbackState(correct ? 'correct' : 'incorrect')
      return correct
    },
    [currentKana, feedbackState]
  )

  const advance = useCallback(() => {
    setFeedbackState('idle')
    setQuestionIndex((i) => i + 1)
  }, [])

  const reset = useCallback(() => {
    setQuestionIndex(0)
    setResults([])
    setFeedbackState('idle')
  }, [])

  return {
    currentKana,
    questionIndex,
    totalQuestions,
    results,
    isDone,
    feedbackState,
    submitAnswer,
    advance,
    reset
  }
}
