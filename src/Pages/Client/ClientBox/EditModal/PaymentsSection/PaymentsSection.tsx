import React, { useState, VoidFunctionComponent } from 'react'
import { Client } from 'types/Client'
import axios from 'axios'
import { StyledFormControl, StyledFromSection } from 'Pages/Client/ClientBox/EditModal/EditModal.styled'
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import Cookies from 'universal-cookie'

type Props = {
  client: Client
}
const cookies = new Cookies()

const PaymentsSection:VoidFunctionComponent<Props> = ({client}) => {
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
            label="Opłata jednorazowa"
            value={company.oneTimeFee}
            onChange={(e) => setCompany(prevState => ({...prevState, name: e.target.value}))}
          />
          <TextField
            label="Opłata miesięczna"
            value={company.subscription}
            onChange={(e) => setCompany(prevState => ({...prevState, address: e.target.value}))}
          />
          <TextField
            label="Jednorazowa słownie"
            value={company.oneTimeText}
            onChange={(e) => setCompany(prevState => ({...prevState, postCode: e.target.value}))}
          />
          <TextField
            label="Miesięczna słownie"
            value={company.subscriptionText}
            type="email"
            onChange={(e) => setCompany(prevState => ({...prevState, email: e.target.value}))}
          />
          <TextField
            label="Opłata dodatkowa"
            value={company.extraFee1}
            onChange={(e) => setCompany(prevState => ({...prevState, nip: e.target.value}))}
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

export default PaymentsSection