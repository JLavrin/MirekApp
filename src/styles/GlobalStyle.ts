import { createGlobalStyle } from 'styled-components'
import mainPalette from 'constants/mainPalette'
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
    background-color: #c9c9c9;
  }
  .Toastify__toast--success {
    color: #fff;
    background-color: ${mainPalette.contrast};
  }
  .Toastify__progress-bar--success {
    background-color: ${mainPalette.standard};
    
  }
  .Toastify__toast-icon {
    color: ${mainPalette.light};
  }
  .Toastify__toast-container--top-right {
    top: 100px;
  }
  
`
export default GlobalStyle
