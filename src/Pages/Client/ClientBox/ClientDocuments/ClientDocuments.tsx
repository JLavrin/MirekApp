import React, { useState, VoidFunctionComponent } from 'react'
import {
  StyledBasicInfo,
  StyledBasicSection,
  StyledBasicTitle,
  StyledTextElInvoice
} from 'Pages/Client/ClientBox/ClientBox.styled'
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Checkbox } from '@mui/material'
type Props = {
  client: {
    name: string,
    address: string,
    postCode: string,
    email: string,
    nip: string,
    regon: string,
    founder: string,
    founder2: string,
    contractSignDate: string,
    contractEndDate: string,
    oneTimeFee: string,
    oneTimeText: string,
    subscription: string,
    subscriptionText: string,
    extraFee1: string
  }
}

const ClientDocuments:VoidFunctionComponent<Props> = ({client}) => {

  const [isChosen, setIsChosen] = useState(true)
  const downloadAgreement = (agreementId: string) => {
    fetch('/api/agreements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...client,
        agreementId: agreementId,
        regulamin: false,
        efaktura: isChosen
      })
    })
      .then(res => res.blob())
      .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = agreementId + '.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => console.log(err))
  }


  return (
    <StyledBasicSection>
      <StyledBasicTitle>
        <Typography variant="h3">Dokumenty</Typography>
      </StyledBasicTitle>
      <StyledBasicInfo>
        <StyledTextElInvoice style={{top: '25px', right: '55%'}}>
          <Typography variant="body2">Umowa</Typography>
        </StyledTextElInvoice>
        <StyledTextElInvoice>
          <Typography variant="inherit">Zgoda na elektroniczną fakturę</Typography>
        </StyledTextElInvoice>
        <List style={{marginTop: '50px', width: '100%'}}>
          <ListItem style={{display: 'flex', justifyContent: 'space-between', width: '94%'}}>
            <ListItemButton onClick={() => downloadAgreement('standard')}>
              <ListItemText><Typography><b>Umowa bez roamingu</b>(.docx)</Typography></ListItemText>
            </ListItemButton>
            <Checkbox checked={isChosen} onChange={() => setIsChosen(prevState => !prevState)}/>
          </ListItem>
          <ListItem style={{display: 'flex', justifyContent: 'space-between', width: '94%'}}>
            <ListItemButton onClick={() => downloadAgreement('roaming')}>
              <ListItemText><Typography><b>Umowa z roamingiem</b>(.docx)</Typography></ListItemText>
            </ListItemButton>
            <Checkbox checked={isChosen} onChange={() => setIsChosen(prevState => !prevState)}/>
          </ListItem>
          <ListItem style={{display: 'flex', justifyContent: 'space-between', width: '94%'}}>
            <ListItemButton onClick={() => downloadAgreement('etoll')}>
              <ListItemText><Typography><b>Umowa etoll</b>(.docx)</Typography></ListItemText>
            </ListItemButton>
            <Checkbox checked={isChosen} onChange={() => setIsChosen(prevState => !prevState)}/>
          </ListItem>
          <ListItem style={{display: 'flex', justifyContent: 'space-between', width: '94%'}}>
            <ListItemButton onClick={() => downloadAgreement('promo')}>
              <ListItemText><Typography><b>Umowa promocyjna</b>(.docx)</Typography></ListItemText>
            </ListItemButton>
            <Checkbox checked={isChosen} onChange={() => setIsChosen(prevState => !prevState)}/>
          </ListItem>
        </List>
      </StyledBasicInfo>
    </StyledBasicSection>
  )
}

export default ClientDocuments