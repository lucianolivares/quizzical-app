import React from 'react'
import { Button, HomeContainer, HomeTitle } from './styles'

function Home () {
  return (
    <HomeContainer>
      <HomeTitle>Quizzical</HomeTitle>
      <p>Some description if needed</p>
      <Button to='/quiz'>Star Quiz</Button>
    </HomeContainer>
  )
}

export default Home
