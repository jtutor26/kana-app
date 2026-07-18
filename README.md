# Kana Practice

A desktop app for learning and practicing Japanese kana (hiragana and katakana).

## Description

### Brief

Kana Practice is a focused desktop quiz app that helps you memorize the Japanese syllabary. Pick any subset of hiragana or katakana, start the quiz, type the romaji reading for each character shown, and review your score when you're done. Your selection is saved between sessions so you can pick up exactly where you left off.

### Detailed

The app covers the full kana syllabary across both scripts:

| Group | Hiragana | Katakana | Examples |
|-------|----------|----------|---------|
| Basic | 46 | 46 | あ, い, か, さ, な… / ア, イ, カ, サ, ナ… |
| Dakuten (voiced) | 20 | 20 | が, ざ, だ, ば… / ガ, ザ, ダ, バ… |
| Handakuten (semi-voiced) | 5 | 5 | ぱ, ぴ, ぷ, ぺ, ぽ / パ, ピ, プ, ペ, ポ |
| Combo (Yōon) | 33 | 33 | きゃ, しゃ, ちゃ… / キャ, シャ, チャ… |

**Total: 208 kana entries**

**Quiz flow:**

1. **Select screen** — A grid of all kana, grouped by script and category. Use the quick-select buttons to toggle entire scripts or groups. Your selection persists across app launches via `localStorage`.
2. **Quiz screen** — One kana at a time shown large on screen. Type the romaji answer and press Enter. Instant green ✓ / red ✗ feedback appears, with the correct answer shown on a miss. Press Enter again (or click Next) to advance.
3. **Results screen** — Final score with percentage, a visual list of every missed kana with your wrong answer crossed out, and buttons to retry the same set or go back to selection.

**Accuracy tracking:**

The app remembers your last 5 attempts for every kana (persisted via `localStorage`) and surfaces it two ways on the select screen:

- Each kana card shows a percentage badge and a red→yellow→green background reflecting its recent accuracy (gray for kana you haven't attempted yet).
- A collapsible sidebar on the left shows a combined accuracy percentage for a filterable set of kana (all / hiragana only / katakana only / your current selection), with an "include unattempted kana" toggle. Its filter is independent of a matching set of filter buttons above the main grid, so you can, for example, view only katakana cards while the sidebar summarizes accuracy across all kana.

**Answer checking** accepts both standard Hepburn romanization and common alternatives:

| Kana | Accepted answers |
|------|-----------------|
| し / シ | `shi`, `si` |
| ち / チ | `chi`, `ti` |
| つ / ツ | `tsu`, `tu` |
| ふ / フ | `fu`, `hu` |
| じ / ジ | `ji`, `zi` |
| じゃ / ジャ | `ja`, `jya`, `zya` |

Input is case-insensitive and leading/trailing whitespace is ignored.

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| [Electron](https://www.electronjs.org/) | ^39.2.6 | Desktop shell |
| [electron-vite](https://electron-vite.org/) | ^5.0.0 | Build tool for Electron + Vite |
| [React](https://react.dev/) | ^19.2.1 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5.9.3 | Static typing |
| [Vite](https://vitejs.dev/) | ^7.2.6 | Bundler / dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.3.2 | Utility-first styling (v4, CSS-first config) |
| [Vitest](https://vitest.dev/) | ^4.1.10 | Unit testing |

---

## Prerequisites

- **Node.js** v20 or later (v22 recommended)
- **npm** v10 or later
- macOS, Windows, or Linux

---

## Install & Run

```bash
# 1. Clone the repo
git clone <repo-url>
cd kana-app

# 2. Install dependencies
npm install

# 3. Start the app in development mode
npm run dev
```

The Electron window opens automatically. Hot-reload is active — the renderer updates instantly on file changes.

---

## Build a Distributable

```bash
# macOS (produces a .dmg)
npm run build:mac

# Windows (produces an installer)
npm run build:win

# Linux (produces an AppImage)
npm run build:linux
```

Built artifacts are output to `dist/`.

---

## Run Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

Tests cover the quiz engine's answer-checking and input-normalization logic using Vitest.

---

## Type Check

```bash
npm run typecheck
```

---

## Project Structure

```
kana-app/
├── src/
│   ├── main/
│   │   └── index.ts              # Electron main process
│   ├── preload/
│   │   └── index.ts              # Context bridge (minimal)
│   ├── renderer/
│   │   └── src/
│   │       ├── data/
│   │       │   └── kana.ts       # Full 208-entry kana dataset
│   │       ├── hooks/
│   │       │   ├── useQuizEngine.ts          # Quiz logic (shuffle, check, score)
│   │       │   ├── useQuizEngine.test.ts     # Vitest tests
│   │       │   ├── usePersistedSelection.ts  # localStorage selection state
│   │       │   ├── useKanaHistory.ts         # localStorage per-kana accuracy history
│   │       │   └── useKanaHistory.test.ts    # Vitest tests
│   │       ├── utils/
│   │       │   ├── accuracyColor.ts          # accuracy % -> color bucket mapping
│   │       │   └── accuracyColor.test.ts     # Vitest tests
│   │       ├── components/
│   │       │   ├── KanaSelect.tsx  # Screen 1: kana selection grid
│   │       │   ├── KanaSidebar.tsx # Screen 1: collapsible accuracy sidebar
│   │       │   ├── Quiz.tsx        # Screen 2: quiz questions
│   │       │   └── Results.tsx     # Screen 3: score summary
│   │       ├── assets/
│   │       │   └── main.css        # Tailwind v4 entry
│   │       ├── App.tsx             # Screen router
│   │       └── main.tsx            # React entry point
│   └── shared/
│       └── types.ts              # Shared TypeScript interfaces
├── electron.vite.config.ts       # Vite + Tailwind + Vitest config
├── electron-builder.yml          # Packaging config
├── package.json
└── tsconfig.web.json
```

---

## Alpha Scope

**In scope:**
- Hiragana + Katakana selection (all groups)
- Typed romaji quiz with instant feedback
- End-of-session score and missed-kana summary
- Persistent selection via localStorage
- Per-kana accuracy history across sessions (last 5 attempts), with a filterable sidebar summary and color-coded grid badges

**Future versions:**
- Spaced repetition / weighted retry of missed kana
- Audio pronunciation
- Stroke order / writing practice
- Multiple quiz directions (romaji → kana)
- Vocabulary / word-level practice

---

## Recommended IDE

[VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions installed.

## License

All rights reserved. This code is not open source — see [LICENSE](./LICENSE). Pull requests are welcome; see [CONTRIBUTING.md](./CONTRIBUTING.md) for terms before submitting one.
