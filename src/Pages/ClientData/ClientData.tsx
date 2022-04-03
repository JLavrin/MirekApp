import React, { useEffect, useState } from 'react'
import { StyledClientData, StyledForm, StyledButton, StyledFormControl, StyledTextField } from './ClientData.styled'
import { TextField, Typography } from '@mui/material'
import useStore from 'store'
import mainPalette from 'constants/mainPalette'
import { toast } from 'react-toastify'

const ClientData = () => {

 const {data, setData} = useStore(state => state)

  const [companyData, setCompanyData] = useState({
    name: data.clientCompanyName,
    adress: data.clientCompanyAdress,
    postCode: data.clientCompanypostCode,
    email: data.clientEmailAdress,
    NIP: data.clientCompanyNIP,
    regon: data.clientCompanyRegon,
    founder: data.clientCompanyFounder


  })
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setData({
      ...data,
      clientCompanyName: companyData.name,
      clientCompanyAdress: companyData.adress,
      clientCompanypostCode: companyData.postCode,
      clientEmailAdress: companyData.email,
      clientCompanyNIP: companyData.NIP,
      clientCompanyRegon: companyData.regon,
      clientCompanyFounder: companyData.founder
    })
    toast.success("Dane zostały pomyslnie zapisane!")
  }

  const arr = [
    {placeholder: 'np. Darex Sp. Z.O.O', label: 'nazwa', value: 'name'},
    {placeholder: 'np. Mariana Złodzieja 46A/12 Gdańsk', label: 'adres', value: 'adress'},
    {placeholder: '00-000', label: 'kod pocztowy', value: 'postCode'},
    {placeholder: 'jedziem@nawalbrzych.pl', label: 'email', value: 'email'},
    {placeholder: 'np. 123456789', label: 'NIP', value: 'NIP'},
    {placeholder: 'np. 123456789', label: 'REGON', value: 'regon'},
    {placeholder: 'Jarek Tusk', label: 'właściciel / osoba prawna', value: 'founder'}
  ]

  return (
    <>

    <StyledClientData>

      <StyledForm>
        <Typography variant="h4" style={{color: mainPalette.contrast}}>
          Dane firmy
        </Typography>
        <StyledFormControl onSubmit={handleSubmit}>
          {arr.map((item, index) => (<StyledTextField
              key={index}
              label={item.label}
              value={companyData[item.value]}
              onChange={(event: any) => {
                const {value} = event.target
                setCompanyData({...companyData, [item.value]: value})
              }}
              placeholder={item.placeholder}
              variant="outlined"
              fullWidth
            />
          ))}
        </StyledFormControl>

        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{backgroundColor: mainPalette.contrast}}
        >
         Zapisz
        </StyledButton>
      </StyledForm>
    </StyledClientData>
    </>
  )

}
export default ClientData