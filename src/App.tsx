import { Routes, Route } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import Homepage from 'Pages/Homepage/'
import AppBar from 'components'
import ClientData from 'Pages/ClientData'
import GlobalStyle from 'styles/GlobalStyle'
import { StyledContentContainer } from 'App.styled'
import theme from 'helpers/theme'
import PaymentData from 'Pages/PaymentData'
import ContractOne from 'Pages/ContractOne'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

const App = () => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
    <GlobalStyle/>
    <AppBar/>
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <StyledContentContainer>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/dane-klienta" element={<ClientData/>}/>
            <Route path="/dane-finansowe" element={<PaymentData/>}/>
            <Route path="/umowa1" element={<ContractOne/>}/>
          </Routes>
        </StyledContentContainer>
      </MaterialThemeProvider>
    </StyledThemeProvider>
  </>
)


export default App
