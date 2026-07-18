import { useState } from 'react'
import type { Kana, QuizResult, Screen } from '@shared/types'
import KanaSelect from './components/KanaSelect'
import Quiz from './components/Quiz'
import Results from './components/Results'
import { useKanaHistory } from './hooks/useKanaHistory'

export default function App() {
  const [screen, setScreen] = useState<Screen>('select')
  const [selectedKana, setSelectedKana] = useState<Kana[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [quizKey, setQuizKey] = useState(0)
  const { recordQuizResults } = useKanaHistory()

  function startQuiz(kana: Kana[]) {
    setSelectedKana(kana)
    setScreen('quiz')
  }

  function handleFinish(results: QuizResult[]) {
    recordQuizResults(results)
    setQuizResults(results)
    setScreen('results')
  }

  function retryQuiz() {
    setQuizKey((k) => k + 1)
    setScreen('quiz')
  }

  function backToSelect() {
    setScreen('select')
  }

  if (screen === 'quiz') {
    return (
      <Quiz
        key={quizKey}
        selectedKana={selectedKana}
        onFinish={handleFinish}
        onBack={backToSelect}
      />
    )
  }

  if (screen === 'results') {
    return (
      <Results
        results={quizResults}
        onRetry={retryQuiz}
        onBack={backToSelect}
      />
    )
  }

  return <KanaSelect onStart={startQuiz} />
}
