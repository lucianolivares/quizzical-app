import styled from 'styled-components'

export const QuestionStyle = styled.h3`
  width: 60ch;
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.font_color};
`
export const Answers = styled.div`
  width: 60ch;
  display: flex;
  gap: 1rem;
`
export const AnswerButton = styled.button`
  color: ${props => props.theme.font_color};
  background-color: ${props => props.selected ? '#D6DBF5' : props.correct ? '#94D7A2' : props.incorrect ? '#F8BCBC' : 'transparent'};
  border: 2px solid #4D5B9E;
  border-style: ${props => props.selected | props.correct | props.incorrect && 'none'};
  border-radius: 1rem;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  opacity: ${props => !props.selected && !props.correct && !props.incorrect && props.disabled ? '0.3' : '1'};
`
export const Divider = styled.hr`
  margin: 1rem 0;
`
