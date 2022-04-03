import React, { useEffect, useState } from 'react'
import { StyledClientData, StyledForm, StyledButton, StyledFormControl, Box, LeftBox,
  RightBox } from 'Pages/ContractOne/ContractOne.styled'
import { List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import useStore from 'store'
import mainPalette from 'constants/mainPalette'
import { toast } from 'react-toastify'

const ContractOne = () => {

 const {data, setData} = useStore(state => state)


  const sendDataAgreement = (event: any) => {

    const waitForReponse = fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data
      })
    })
      .then(res => res.blob())
      .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "Umowa.docx";
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove();
      })
      .catch(err => console.log(err))

    toast.promise(waitForReponse,
      {
        pending: 'Dokument jest generowany',
        success: 'Dokument został wygenerowany pomyślnie',
        error: 'Wystąpił błąd'
      })
  }


  const arr = Object.keys(data).map((key, index) => {

    let text = '';
    switch(key){
      case 'clientCompanyName': text = 'Imię:'; break;
      case 'clientCompanyAdress': text = 'Adres:'; break;
      case 'clientCompanypostCode': text = 'Kod pocztowy:'; break;
      case 'clientEmailAdress': text = 'Email:'; break;
      case 'clientCompanyNIP': text = 'NIP:'; break;
      case 'clientCompanyRegon': text = 'Regon:'; break;
      case 'clientCompanyFounder': text = 'Właściciel:'; break;
      case 'contractSignDate': text = 'Data:'; break;
      case 'contractEndDate': text = 'Data zakończenia:'; break;
      case 'oneTime': text = 'Opłata jednorazowa:'; break;
      case 'oneTimeString': text = 'Opłata jednorazowa słownie:'; break;
      case 'subscription': text = 'Opłata abonamentowa:'; break;
      case 'subscriptionString': text = 'Opłata abonamentowa słownie:'; break;
      case 'subscriptionAfterContractEnd': text = 'Opłata po zakonczeniu umowy:'; break;
    }
    return(
      <Box key={index}>
        <LeftBox><Typography>{++index}. {text}</Typography></LeftBox>
        <RightBox $color={data[key] === '' ? '#ea000022' : '#fff'}><Typography>{data[key] !== '' ? data[key] : 'nie podano'}</Typography></RightBox>
      </Box>
    )
  })

  return (
    <StyledClientData>

      <StyledForm>
        <Typography variant="h4" style={{color: mainPalette.contrast}}>
          Sprawdź jeszcze raz dane:
        </Typography>
        <StyledFormControl >
          <List>
            {arr}
          </List>
        </StyledFormControl>

        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendDataAgreement}
          style={{backgroundColor: mainPalette.contrast}}
        >
          Potwierdzam!
        </StyledButton>
      </StyledForm>
    </StyledClientData>
  )

}
export default ContractOne