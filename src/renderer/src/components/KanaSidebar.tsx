import { useMemo, useState, type ReactElement } from 'react'
import type { Kana, KanaFilter, KanaStats } from '@shared/types'
import { computeCombinedAccuracy } from '../hooks/useKanaHistory'
import { accuracyClasses } from '../utils/accuracyColor'

const FILTER_LABELS: Record<KanaFilter, string> = {
  all: 'All kana',
  hiragana: 'Only hiragana',
  katakana: 'Only katakana',
  selected: 'Selected kana'
}

const FILTERS: KanaFilter[] = ['all', 'hiragana', 'katakana', 'selected']

interface KanaSidebarProps {
  kanaData: Kana[]
  selectedIds: Set<string>
  getKanaStats: (id: string) => KanaStats
}

export default function KanaSidebar({
  kanaData,
  selectedIds,
  getKanaStats
}: KanaSidebarProps): ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const [filter, setFilter] = useState<KanaFilter>('all')
  const [includeUnattempted, setIncludeUnattempted] = useState(false)

  const filteredIds = useMemo(() => {
    switch (filter) {
      case 'hiragana':
        return kanaData.filter((k) => k.script === 'hiragana').map((k) => k.id)
      case 'katakana':
        return kanaData.filter((k) => k.script === 'katakana').map((k) => k.id)
      case 'selected':
        return [...selectedIds]
      default:
        return kanaData.map((k) => k.id)
    }
  }, [kanaData, selectedIds, filter])

  const combined = useMemo(() => {
    const pcts = filteredIds.map((id) => getKanaStats(id).accuracyPct)
    return computeCombinedAccuracy(pcts, includeUnattempted)
  }, [filteredIds, getKanaStats, includeUnattempted])

  if (collapsed) {
    return (
      <aside className="w-12 shrink-0 border-r border-slate-200 bg-white flex flex-col items-center py-4">
        <button
          onClick={() => setCollapsed(false)}
          className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
          aria-label="Expand accuracy sidebar"
        >
          »
        </button>
      </aside>
    )
  }

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <h2 className="text-sm font-semibold text-slate-700">Accuracy</h2>
        <button
          onClick={() => setCollapsed(true)}
          className="p-1 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
          aria-label="Collapse accuracy sidebar"
        >
          «
        </button>
      </div>

      <div className="px-4 py-4 border-b border-slate-200">
        <div
          className={`text-3xl font-bold ${
            combined === null ? 'text-slate-400' : accuracyClasses(combined).text
          }`}
        >
          {combined === null ? '—' : `${combined}%`}
        </div>
        <p className="text-xs text-slate-500 mt-1">
          {filteredIds.length} kana in {FILTER_LABELS[filter].toLowerCase()}
        </p>
      </div>

      <div className="px-4 py-4 border-b border-slate-200 space-y-1.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`w-full text-left px-3 py-1.5 text-sm rounded-md border transition-colors ${
              filter === f
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'text-slate-600 border-slate-200 hover:bg-indigo-50 hover:border-indigo-300'
            }`}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      <div className="px-4 py-4">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={includeUnattempted}
            onChange={(e) => setIncludeUnattempted(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Include unattempted kana
        </label>
      </div>
    </aside>
  )
}
