import { StyledDrawer, StyledDrawerBox, StyledDrawerTitle, StyledFormControl } from './AddClient.styled'
import React, { useState, VoidFunctionComponent } from 'react'
import { Alert, Snackbar, TextField, Typography } from '@mui/material'
import InitialClientState from 'constants/InitialClientState'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { LoadingButton } from '@mui/lab'
import { Add, Send } from '@mui/icons-material'


type Props = {
  isOpen: boolean
  setIsOpen: () => void
}
const cookies = new Cookies()

const AddClient: VoidFunctionComponent<Props> = ({isOpen, setIsOpen}) => {
  const [buttonAvailability, setButtonAvailability] = useState(true)
  const [company, setCompany] = useState(InitialClientState)
  const [snackbar, setSnackbar] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const SendData = () => {
    setFetchError(false)
    axios.post('/api/clients', {
        ...company
      },
      {
        headers: {
          'Authorization': `Bearer ${cookies.get('auth')}`
        }
      }
    )
      .then(res => {
        setIsLoading(false)
        setSnackbar(true)
        setIsOpen()
      })
      .catch(err => {
        setError(`${err.response.status} ${err.response.statusText}`)
        setFetchError(true)
        setSnackbar(true)
        setIsLoading(false)
      })
  }


  return (
    <>
      <StyledDrawer
        open={isOpen}
        onClose={setIsOpen}
        anchor="right"
      >
        <StyledDrawerBox>
          <StyledDrawerTitle>
            <Typography variant="h1">Dodaj klienta</Typography>
          </StyledDrawerTitle>
          <StyledFormControl onChange={() => setButtonAvailability(false)}>
            <TextField
              label="Nazwa firmy"
              value={company.name}
              onChange={(e) => setCompany(prevState => ({...prevState, name: e.target.value}))}
            />
            <TextField
              label="Numer telefonu"
              value={company.phoneNumber}
              onChange={(e) => setCompany(prevState => ({...prevState, phoneNumber: e.target.value}))}
            />
            <TextField
              label="Adres"
              value={company.address}
              onChange={(e) => setCompany(prevState => ({...prevState, address: e.target.value}))}
            />
            <TextField
              label="Kod pocztowy"
              value={company.postCode}
              onChange={(e) => setCompany(prevState => ({...prevState, postCode: e.target.value}))}
            />
            <TextField
              label="Email"
              value={company.email}
              type="email"
              onChange={(e) => setCompany(prevState => ({...prevState, email: e.target.value}))}
            />
            <TextField
              label="nip"
              value={company.nip}
              onChange={(e) => setCompany(prevState => ({...prevState, nip: e.target.value}))}
            />
            <TextField
              label="Regon"
              value={company.regon}
              onChange={(e) => setCompany(prevState => ({...prevState, regon: e.target.value}))}
            />
            <TextField
              label="Własciciel"
              value={company.founder}
              onChange={(e) => setCompany(prevState => ({...prevState, founder: e.target.value}))}
            />
            <TextField
              label="2 Własciciel"
              value={company.founder2}
              onChange={(e) => setCompany(prevState => ({...prevState, founder2: e.target.value}))}
            />
            <LoadingButton
              style={{marginTop: 'auto', marginBottom: '40px', marginLeft: '400px'}}
              onClick={() => {
                setIsLoading(true)
                setTimeout(SendData, 1000)
              }}
              disabled={buttonAvailability}
              variant="contained"
              loading={isLoading}
              loadingPosition={'end'}
              endIcon={<Add/>}
            >
              Dodaj
            </LoadingButton>
          </StyledFormControl>
        </StyledDrawerBox>
      </StyledDrawer>
      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={() => setSnackbar(false)}
      >
        {!fetchError ?
          <Alert onClose={() => setSnackbar(false)} severity="success" sx={{width: '100%'}}>
            Pomyślnie zapisano zmiany.
          </Alert>
          :
          <Alert onClose={() => setSnackbar(false)} severity="error" sx={{width: '100%'}}>
            Błąd zapisywania danych. ({error})
          </Alert>
        }
      </Snackbar>
    </>
  )
}

export default AddClient