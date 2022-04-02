import { ThemeProvider } from 'styled-components'
import { Route } from 'wouter'
import Home from './components/Home'
import Quiz from './components/Quiz'
import { GlobalStyle } from './globalStyle'
const theme = {
  font_color: '#293264'
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
    </ThemeProvider>
  )
}

export default App
