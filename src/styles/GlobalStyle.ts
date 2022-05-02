import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
    background-color: #f3f3f3;
  }
`
export default GlobalStyle
