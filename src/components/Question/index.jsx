import React from 'react'
import { AnswerButton, QuestionStyle, Answers, Divider } from './styles'
import he from 'he'
function Question ({ question, handleChange }) {
  return (
    <div>
      <QuestionStyle>{he.decode(question.question)}</QuestionStyle>
      <Answers>
        {question.all_answers.map((answer, index) => {
          return (
            <AnswerButton
              disabled={question.checked}
              selected={!question.checked & question.current_answer === answer}
              incorrect={question.checked & !question.correct & question.current_answer === answer}
              correct={question.checked & question.correct & question.correct_answer === answer}
              key={index}
              value={answer}
              id={question.id}
              onClick={handleChange}
            >{he.decode(answer)}
            </AnswerButton>
          )
        })}
      </Answers>
      <Divider />
    </div>
  )
}

export default Question
