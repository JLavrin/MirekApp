import { Routes, Route, Navigate, useLocation} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material'
import Homepage from 'Pages/Homepage/'
import AppBar from 'components'
import GlobalStyle from 'styles/GlobalStyle'
import { StyledContentContainer } from 'App.styled'
import theme from 'helpers/theme'
import React, { useEffect } from 'react'
import Clients from 'Pages/Clients'
import Client from 'Pages/Client'
import useStore from 'store'
import Cookies from 'universal-cookie'

const App = () => {
  const queryClient = new QueryClient()
  const { isLoggedIn, setIsLoggedIn } = useStore(state => state)
  const location = useLocation()
  const cookies = new Cookies()
  useEffect(() => {
    setIsLoggedIn(!!(cookies.get('auth')))
  }, [])

  return (
    <>
      {!isLoggedIn && location.pathname !== '/' && <Navigate to='/' />}
      <GlobalStyle/>
      <AppBar/>
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <StyledContentContainer>
            <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/clients" element={<Clients/>}/>
              <Route path="/clients/:id" element={<Client/>}/>
            </Routes>
            </QueryClientProvider>
          </StyledContentContainer>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </>
  )
}



export default App
