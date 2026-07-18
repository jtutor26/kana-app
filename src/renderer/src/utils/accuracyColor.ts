type AccuracyBucket = 0 | 20 | 40 | 60 | 80 | 100

export function bucketPct(pct: number): AccuracyBucket {
  const rounded = Math.round(pct / 20) * 20
  return Math.min(100, Math.max(0, rounded)) as AccuracyBucket
}

interface AccuracyClasses {
  bg: string
  border: string
  text: string
}

const BUCKET_CLASSES: Record<AccuracyBucket, AccuracyClasses> = {
  0: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-700' },
  20: { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-700' },
  40: { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-700' },
  60: { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800' },
  80: { bg: 'bg-lime-100', border: 'border-lime-500', text: 'text-lime-700' },
  100: { bg: 'bg-emerald-100', border: 'border-emerald-400', text: 'text-emerald-700' }
}

const UNATTEMPTED_CLASSES: AccuracyClasses = {
  bg: 'bg-white',
  border: 'border-slate-200',
  text: 'text-slate-700'
}

export function accuracyClasses(pct: number | null): AccuracyClasses {
  if (pct === null) return UNATTEMPTED_CLASSES
  return BUCKET_CLASSES[bucketPct(pct)]
}
