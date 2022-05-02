import React, { useState } from 'react'
import { StyledClientData, StyledForm, StyledButton, StyledTextField} from 'Pages/Homepage/Homepage.styled'
import { Typography } from '@mui/material'
import mainPalette from 'constants/mainPalette'
import Cookies from 'universal-cookie'
import axios from 'axios'
import useStore from 'store'
import { Navigate } from 'react-router-dom'

const Homepage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setIsError] = useState(false)
  const [status, setStatus] = useState(null)
  const { isLoggedIn, setIsLoggedIn, setUser} = useStore(state => state)
  const handleClickOpen = () => {

    axios.post('/api/auth/login', {
        username: username,
        password: password

    })
      .then(data => {
        const cookies = new Cookies()
        cookies.set('auth', data.data.access_token)
        cookies.set('username', username)
        setIsLoggedIn(true)
        setUser(username)
        setIsError(false)
      })
      .catch(err => {
        if (err.response) {
          setStatus(err.response.status)
          setIsError(true)
        }
      })
  }




  return (
    <StyledClientData>

      <StyledForm>
        {isLoggedIn && <Navigate to='/clients' />}
        <Typography variant="h4" style={{color: mainPalette.dark}}>
         Zaloguj się
        </Typography>
        {error && <Typography variant="body1" style={{color: 'red'}}>
          Złe hasło lub login!
        </Typography>}
        <StyledTextField onChange={(event) => setUsername(event.target.value)} variant="outlined" placeholder="login"></StyledTextField>
        <StyledTextField onChange={(event) => setPassword(event.target.value)} type="password" variant="outlined" placeholder="hasło"></StyledTextField>


        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Zaloguj!
        </StyledButton>
      </StyledForm>
    </StyledClientData>
  )

}
export default Homepage