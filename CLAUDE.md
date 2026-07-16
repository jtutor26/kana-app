# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `kana-app/` (the project root).

```bash
npm run dev          # start Electron app with hot reload
npm test             # run unit tests once (Vitest)
npm run test:watch   # run tests in watch mode
npm run typecheck    # type-check both main and renderer processes
npm run lint         # ESLint
npm run format       # Prettier
npm run build:mac    # package for macOS (.dmg)
npm run build:win    # package for Windows
npm run build:linux  # package for Linux
```

To run a single test file:
```bash
npx vitest run src/renderer/src/hooks/useQuizEngine.test.ts
```

## Architecture

This is an **electron-vite** app with three Vite build targets: `main` (Electron main process), `preload`, and `renderer` (React SPA). The renderer is the entire visible UI; the main process only creates the window.

### Path aliases

| Alias | Resolves to |
|-------|------------|
| `@renderer/*` | `src/renderer/src/*` |
| `@shared/*` | `src/shared/*` |

Both aliases are declared in `electron.vite.config.ts` (for the app) and `vitest.config.ts` (for tests).

### Key files

- `src/shared/types.ts` — shared TypeScript interfaces (`Kana`, `Screen`, `QuizResult`). Import from here in both hooks and components.
- `src/renderer/src/data/kana.ts` — static 208-entry kana dataset; the only source of truth for kana characters and their romaji. Each entry has an optional `altRomaji` array for accepted spelling variants.
- `src/renderer/src/hooks/useQuizEngine.ts` — exports `useQuizEngine(selectedKana[])`, `checkAnswer(kana, input)`, and `normalizeInput(input)`. Quiz state lives here: shuffle, feedback, scoring. `checkAnswer` is the canonical answer-checking function — it matches against `romaji` and all `altRomaji` values, case-insensitively.
- `src/renderer/src/hooks/usePersistedSelection.ts` — selection state backed by `localStorage` key `'kana-selection'`. Exposes `toggle`, `selectAll`, `clearAll`, `selectGroup`.
- `src/renderer/src/App.tsx` — three-state router (`select` | `quiz` | `results`). Owns `selectedKana` and `quizResults` at the top level and passes them down.

### Screen flow

```
KanaSelect → (onStart) → Quiz → (onFinish) → Results
                                     ↓ (onRetry, increments quizKey to remount)
                            Quiz (fresh instance)
Results → (onBack) → KanaSelect
```

`quizKey` in `App.tsx` is incremented on retry to force-remount `<Quiz>` with a fresh `useQuizEngine` instance (and a new shuffle).

### Styling

Tailwind CSS v4 — configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js`). The CSS entry is `src/renderer/src/assets/main.css` with `@import "tailwindcss"` at the top.

### Tests

Unit tests cover `checkAnswer` and `normalizeInput` only — pure functions exported from `useQuizEngine.ts`. Hook behaviour (state transitions) is not tested. The test environment is jsdom (configured in `vitest.config.ts`).
