import type { Kana } from '@shared/types'
import { usePersistedSelection } from '../hooks/usePersistedSelection'
import kanaData from '../data/kana'

const SCRIPTS: Kana['script'][] = ['hiragana', 'katakana']
const GROUPS: Kana['group'][] = ['basic', 'dakuten', 'handakuten', 'combo']

const GROUP_LABELS: Record<Kana['group'], string> = {
  basic: 'Basic',
  dakuten: 'Dakuten (voiced)',
  handakuten: 'Handakuten (semi-voiced)',
  combo: 'Combo (Yōon)',
}

interface KanaSelectProps {
  onStart: (selected: Kana[]) => void
}

export default function KanaSelect({ onStart }: KanaSelectProps) {
  const { selectedIds, toggle, selectAll, clearAll, selectGroup, isSelected } =
    usePersistedSelection()

  const selectedKana = kanaData.filter((k) => selectedIds.has(k.id))
  const count = selectedIds.size

  function isGroupFullySelected(script: Kana['script'], group: Kana['group']): boolean {
    const targets = kanaData.filter((k) => k.script === script && k.group === group)
    return targets.length > 0 && targets.every((k) => selectedIds.has(k.id))
  }

  function isScriptFullySelected(script: Kana['script']): boolean {
    const targets = kanaData.filter((k) => k.script === script)
    return targets.length > 0 && targets.every((k) => selectedIds.has(k.id))
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Kana Practice</h1>
          <p className="text-sm text-slate-500 mt-0.5">Select kana to study, then start the quiz</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearAll}
            className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
          >
            Clear all
          </button>
          <button
            onClick={() => selectAll(kanaData)}
            className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
          >
            Select all
          </button>
          <button
            disabled={count === 0}
            onClick={() => onStart(selectedKana)}
            className="px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Start Quiz {count > 0 && `(${count})`}
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 overflow-y-auto px-6 py-6 space-y-10">
        {SCRIPTS.map((script) => (
          <section key={script}>
            {/* Script heading + select-all toggle */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg font-semibold text-slate-700 capitalize">{script}</h2>
              <button
                onClick={() => selectGroup(kanaData, script, null)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                  isScriptFullySelected(script)
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'text-indigo-600 border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {isScriptFullySelected(script) ? 'Deselect all' : 'Select all'}
              </button>
            </div>

            {/* Groups */}
            <div className="space-y-6">
              {GROUPS.map((group) => {
                const cells = kanaData.filter((k) => k.script === script && k.group === group)
                if (cells.length === 0) return null
                const fullySelected = isGroupFullySelected(script, group)
                return (
                  <div key={group}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-slate-500">
                        {GROUP_LABELS[group]}
                      </span>
                      <button
                        onClick={() => selectGroup(kanaData, script, group)}
                        className={`px-2 py-0.5 text-xs rounded border transition-colors ${
                          fullySelected
                            ? 'bg-indigo-100 text-indigo-700 border-indigo-300'
                            : 'text-slate-500 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {fullySelected ? 'Deselect' : 'Select'} group
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cells.map((kana) => {
                        const selected = isSelected(kana.id)
                        return (
                          <button
                            key={kana.id}
                            onClick={() => toggle(kana.id)}
                            className={`w-16 h-16 flex flex-col items-center justify-center rounded-xl border-2 transition-all select-none ${
                              selected
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
                            }`}
                          >
                            <span className="text-2xl leading-none">{kana.char}</span>
                            <span className={`text-[10px] mt-1 font-mono ${selected ? 'text-indigo-200' : 'text-slate-400'}`}>
                              {kana.romaji}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
