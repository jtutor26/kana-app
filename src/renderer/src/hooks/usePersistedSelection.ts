import { useState, useCallback } from 'react'
import type { Kana } from '@shared/types'

const STORAGE_KEY = 'kana-selection'

function loadSelection(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const ids = JSON.parse(raw)
      if (Array.isArray(ids)) return new Set<string>(ids)
    }
  } catch {
    // ignore malformed storage
  }
  return new Set<string>()
}

function saveSelection(ids: Set<string>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
}

interface UsePersistedSelectionReturn {
  selectedIds: Set<string>
  toggle: (id: string) => void
  selectAll: (kana: Kana[]) => void
  clearAll: () => void
  selectGroup: (kana: Kana[], script: Kana['script'] | null, group: Kana['group'] | null) => void
  isSelected: (id: string) => boolean
}

export function usePersistedSelection(): UsePersistedSelectionReturn {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(loadSelection)

  const update = useCallback((next: Set<string>) => {
    setSelectedIds(next)
    saveSelection(next)
  }, [])

  const toggle = useCallback(
    (id: string) => {
      const next = new Set(selectedIds)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      update(next)
    },
    [selectedIds, update]
  )

  const selectAll = useCallback(
    (kana: Kana[]) => {
      update(new Set(kana.map((k) => k.id)))
    },
    [update]
  )

  const clearAll = useCallback(() => {
    update(new Set())
  }, [update])

  const selectGroup = useCallback(
    (kana: Kana[], script: Kana['script'] | null, group: Kana['group'] | null) => {
      const next = new Set(selectedIds)
      const targets = kana.filter(
        (k) => (script === null || k.script === script) && (group === null || k.group === group)
      )
      const allSelected = targets.every((k) => next.has(k.id))
      if (allSelected) {
        targets.forEach((k) => next.delete(k.id))
      } else {
        targets.forEach((k) => next.add(k.id))
      }
      update(next)
    },
    [selectedIds, update]
  )

  const isSelected = useCallback(
    (id: string) => selectedIds.has(id),
    [selectedIds]
  )

  return { selectedIds, toggle, selectAll, clearAll, selectGroup, isSelected }
}
