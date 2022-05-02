import {
  StyledBasicInfo,
  StyledBasicInfoText,
  StyledBasicSection,
  StyledBasicTitle,
  StyledEdit
} from 'Pages/Client/ClientBox/ClientBox.styled'
import { IconButton, Typography } from '@mui/material'
import { MouseEvent, VoidFunctionComponent } from 'react'
import { Edit } from '@mui/icons-material'
import { Client } from 'types/Client'
type Props = {
  client: Client,
  handleEditModalOpen: (event: MouseEvent<HTMLButtonElement>, modalType:true) => void
}
const ClientProfile:VoidFunctionComponent<Props> = ({ client , handleEditModalOpen}) => {


  return (
    <StyledBasicSection>
      <StyledBasicTitle>
        <Typography variant="h3">Klient</Typography>
        <IconButton onClick={(e) => handleEditModalOpen(e, true)}><StyledEdit fontSize="small"/></IconButton>
      </StyledBasicTitle>
      <StyledBasicInfo>
        <StyledBasicInfoText variant="h4"><b>{client?.name}</b></StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Nr telefonu </b>{client?.phoneNumber}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Adres </b>{client?.address}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Kod pocztowy </b>{client?.postCode}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>NIP </b>{client?.nip}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>REGON </b>{client?.regon}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>E-mail </b>{client?.email}</StyledBasicInfoText>
        <StyledBasicInfoText variant="body2"><b>Osoba reprezentująca </b>{client?.founder}</StyledBasicInfoText>
        {client?.founder2 &&
          <StyledBasicInfoText variant="body2"><b>Osoba towarzysząca </b>{client?.founder}</StyledBasicInfoText>}
        <StyledBasicInfoText variant="body2"><b></b></StyledBasicInfoText>
      </StyledBasicInfo>
    </StyledBasicSection>
  )
}

export default ClientProfile