import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import Question from '../Question'
import { Button, QuestionsContainer } from './styles'

function Quiz () {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [scored, setScored] = useState(0)
  const [over, setOver] = useState(false)

  function getQuestions () {
    setLoading(true)
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy')
      .then(res => res.json())
      .then(data => {
        setQuestions(() => {
          return data.results.map(question => {
            question.id = nanoid()
            question.checked = false
            question.correct = false
            question.current_answer = ''
            question.all_answers = [...question.incorrect_answers, question.correct_answer]
            return question
          })
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    getQuestions()
  }, [])

  function handleChange (event) {
    const { id, value } = event.target
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return question.id === id ? { ...question, current_answer: value } : question
      })
    )
    console.log(questions)
  }

  function checkAnswers () {
    setQuestions(current =>
      current.map(question => {
        question.checked = true
        return question.current_answer === question.correct_answer ? { ...question, correct: true } : question
      })
    )
    setOver(true)
  }
  useEffect(() => {
    setScored(current => questions.filter(question => question.correct))
  }, [questions])

  function playAgain () {
    setQuestions([])
    getQuestions()
    setOver(false)
  }
  const QuestionElements = questions.map((question, index) => {
    return (
      <Question
        key={index}
        question={question}
        handleChange={handleChange}
      />
    )
  })

  return (
    <QuestionsContainer>
      {loading && <p>Loading...</p>}
      {QuestionElements}
      {over && <p>You scored {scored.length}/5 answers</p>}
      {over ? <Button onClick={playAgain}>Play again</Button> : <Button onClick={checkAnswers}>Chech answers</Button>}
    </QuestionsContainer>
  )
}

export default Quiz
