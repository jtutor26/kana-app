import type { QuizResult } from '@shared/types'

interface ResultsProps {
  results: QuizResult[]
  onRetry: () => void
  onBack: () => void
}

export default function Results({ results, onRetry, onBack }: ResultsProps) {
  const correct = results.filter((r) => r.correct).length
  const total = results.length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const missed = results.filter((r) => !r.correct)

  function scoreColor(): string {
    if (pct >= 90) return 'text-emerald-600'
    if (pct >= 60) return 'text-amber-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-slate-800">Quiz Complete</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center gap-8 max-w-2xl mx-auto w-full">
        {/* Score card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col items-center gap-2 w-full">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Score</p>
          <p className={`text-6xl font-extrabold ${scoreColor()}`}>{pct}%</p>
          <p className="text-slate-600 text-lg mt-1">
            <span className="font-bold text-slate-800">{correct}</span> /{' '}
            <span className="font-bold text-slate-800">{total}</span> correct
          </p>
        </div>

        {/* Missed kana */}
        {missed.length > 0 ? (
          <div className="w-full">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Missed ({missed.length})
            </h2>
            <div className="flex flex-wrap gap-3">
              {missed.map((r, i) => (
                <div
                  key={i}
                  className="bg-white border border-red-200 rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[72px]"
                >
                  <span className="text-3xl">{r.kana.char}</span>
                  <span className="text-xs font-mono text-emerald-700 font-semibold">
                    {r.kana.romaji}
                  </span>
                  {r.userAnswer && (
                    <span className="text-xs font-mono text-red-400 line-through">
                      {r.userAnswer}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <p className="text-emerald-700 font-semibold text-lg">Perfect score! 🎉</p>
            <p className="text-emerald-600 text-sm mt-1">You got every kana correct.</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 w-full">
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
          >
            ← Change selection
          </button>
          <button
            onClick={onRetry}
            className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Retry same set
          </button>
        </div>
      </main>
    </div>
  )
}
