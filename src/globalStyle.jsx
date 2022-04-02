import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
  p, h2 {
    color: ${props => props.theme.font_color}
  }
  `

export const PageContainer = styled.div`
  background-color: #F5F7FB;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 1rem;

  &:before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: -20%;
    left: 80%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #FFFAD1;
  }
  &:after {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 80%;
    left: -20%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #DEEBF8;
  }
  * {
    z-index: 2;
  }
`
