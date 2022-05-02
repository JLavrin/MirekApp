import { MouseEvent, VoidFunctionComponent } from 'react'
import {
  StyledBasicInfo,
  StyledBasicInfoText,
  StyledBasicSection,
  StyledBasicTitle, StyledEdit
} from 'Pages/Client/ClientBox/ClientBox.styled'
import { IconButton, Typography } from '@mui/material'

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
  },
  handleEditModalOpen: (event: MouseEvent<HTMLButtonElement>, modalType:boolean) => void
}

const ClientPayments:VoidFunctionComponent<Props> = ({ client, handleEditModalOpen }) => {

  return (
    <StyledBasicSection>
      <StyledBasicTitle>
        <Typography variant="h3">Opłaty</Typography>
        <IconButton onClick={(e) => handleEditModalOpen(e, false)}><StyledEdit fontSize="small"/></IconButton>
      </StyledBasicTitle>
      <StyledBasicInfo>
        <StyledBasicInfoText variant="body2"><b>Opłata jednorazowa </b>{client?.oneTimeFee ? `${client?.oneTimeFee} zł` : 'brak'}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Opłata miesięczna </b>{client?.subscription ? `${client.subscription} zł` : 'brak'}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Jednorazowa słownie </b>{client?.oneTimeText ? `${client.oneTimeText }zł` : 'brak'}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Miesięczna słownie </b>{client?.subscriptionText ? client.subscriptionText : 'brak'}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Opłata dodatkowa </b>{client?.extraFee1 ? client.extraFee1 : 'brak'}</StyledBasicInfoText>
      </StyledBasicInfo>
    </StyledBasicSection>
  )
}

export default ClientPayments