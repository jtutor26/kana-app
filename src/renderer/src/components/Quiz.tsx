import { useState, useEffect, useRef } from 'react'
import type { Kana, QuizResult } from '@shared/types'
import { useQuizEngine } from '../hooks/useQuizEngine'

interface QuizProps {
  selectedKana: Kana[]
  onFinish: (results: QuizResult[]) => void
  onBack: () => void
}

export default function Quiz({ selectedKana, onFinish, onBack }: QuizProps) {
  const { currentKana, questionIndex, totalQuestions, results, isDone, feedbackState, submitAnswer, advance } =
    useQuizEngine(selectedKana)

  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Transition to results when done
  useEffect(() => {
    if (isDone) {
      onFinish(results)
    }
  }, [isDone, results, onFinish])

  // Auto-focus input whenever feedback resets to idle
  useEffect(() => {
    if (feedbackState === 'idle') {
      inputRef.current?.focus()
    }
  }, [feedbackState, questionIndex])

  function handleSubmit() {
    if (feedbackState === 'idle') {
      if (inputValue.trim() === '') return
      submitAnswer(inputValue)
      setInputValue('')
    } else {
      advance()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  if (!currentKana && !isDone) return null

  const progress = totalQuestions > 0 ? ((questionIndex) / totalQuestions) * 100 : 0

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={onBack}
          className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 transition-colors"
        >
          ← Back to selection
        </button>
        <span className="text-sm font-mono text-slate-600 font-medium">
          {questionIndex + 1} / {totalQuestions}
        </span>
      </header>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-200">
        <div
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main quiz area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
        {/* Kana character */}
        <div
          className={`w-48 h-48 flex items-center justify-center rounded-3xl shadow-lg border-2 transition-all duration-200 ${
            feedbackState === 'correct'
              ? 'bg-emerald-50 border-emerald-400'
              : feedbackState === 'incorrect'
                ? 'bg-red-50 border-red-400'
                : 'bg-white border-slate-200'
          }`}
        >
          <span className="text-8xl select-none">{currentKana?.char}</span>
        </div>

        {/* Feedback message */}
        <div className="h-8 flex items-center">
          {feedbackState === 'correct' && (
            <p className="text-emerald-600 font-semibold text-lg flex items-center gap-2">
              <span>✓</span> Correct!
            </p>
          )}
          {feedbackState === 'incorrect' && (
            <p className="text-red-600 font-semibold text-lg flex items-center gap-2">
              <span>✗</span> The answer is{' '}
              <span className="font-bold font-mono">{currentKana?.romaji}</span>
              {currentKana?.altRomaji && currentKana.altRomaji.length > 0 && (
                <span className="text-red-400 text-sm font-normal">
                  (also: {currentKana.altRomaji.join(', ')})
                </span>
              )}
            </p>
          )}
        </div>

        {/* Input area */}
        <div className="flex flex-col items-center gap-3 w-full max-w-xs">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={feedbackState !== 'idle'}
            placeholder="Type romaji..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="w-full px-4 py-3 text-lg text-center border-2 rounded-xl outline-none font-mono tracking-wider transition-colors
              border-slate-300 focus:border-indigo-400 bg-white text-slate-800
              disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSubmit}
            disabled={feedbackState === 'idle' && inputValue.trim() === ''}
            className="w-full py-2.5 rounded-xl font-semibold text-sm transition-colors
              bg-indigo-600 text-white hover:bg-indigo-700
              disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {feedbackState === 'idle' ? 'Submit (Enter)' : 'Next (Enter)'}
          </button>
        </div>
      </main>
    </div>
  )
}
