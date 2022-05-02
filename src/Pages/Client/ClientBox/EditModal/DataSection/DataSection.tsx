import React, { useState, VoidFunctionComponent } from 'react'
import { Client } from 'types/Client'
import { StyledFromSection, StyledFormControl } from '../EditModal.styled'
import { Alert, Button, FormControl, Snackbar, TextField } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

type Props = {
  client: Client
}
const cookies = new Cookies()

const DataSection: VoidFunctionComponent<Props> = ({client}) => {
  const [company, setCompany] = useState(client)
  const [buttonAvailability, setButtonAvailability] = useState(true)
  const [snackBar, setSnackBar] = useState(false)

  const SendData = () => {
    setButtonAvailability(true)
    axios.patch(`/api/clients/${company._id}`, {
        ...company
      },
      {
        headers: {
          'Authorization': `Bearer ${cookies.get('auth')}`
        }
      }
    )
      .then((response) => {
        setSnackBar(true)
        console.log(response)
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <StyledFromSection>
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
          <Button style={{marginTop: 'auto'}} disabled={buttonAvailability} onClick={SendData} variant="contained">
            Zapisz
          </Button>
        </StyledFormControl>
      </StyledFromSection>
      <Snackbar
        open={snackBar}
        autoHideDuration={5000}
        onClose={() => setSnackBar(false)}
      >
        <Alert onClose={() => setSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          Pomyślnie zapisano zmiany.
        </Alert>
      </Snackbar>
    </>
  )
}

export default DataSection