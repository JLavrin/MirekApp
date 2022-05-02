import React, { FunctionComponent, useState } from 'react'
import {
  Button,
  List,
  ListItem,
  Typography,
  ListItemText,
  Divider,
  ListItemIcon,
  ListItemButton,
  Snackbar, Alert
} from '@mui/material'
import {
  StyledListItem,
  StyledButton,
  StyledListItemText,
  StyledSpan, StyledTypography
} from 'Pages/Clients/ClientAccordion/ClientAccordion.styled'
import useManageClientData from 'Pages/Clients/ClientAccordion/hooks/useManageClientData'
import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import mainPalette from 'constants/mainPalette'
import AddClientDrawerHandler from 'Pages/Clients/AddClient/hooks/AddClientDrawerHandler'
import AddClient from '../AddClient'
import useStore from 'store/clients'

type Props = {
  refetch: () => void
}

const ClientAccordion: FunctionComponent<Props> = ({refetch}) => {

  const { isError } = useStore(state => state)
  const {data, deleteClient} = useManageClientData(refetch)

  const [snackbar, setSnackbar] = useState(false)


  if (isError) {
    setSnackbar(isError)
  }
  const {isOpen, toggleOpen} = AddClientDrawerHandler()

  return (
    <>
      <AddClient isOpen={isOpen} setIsOpen={toggleOpen}/>
      <List>
        <ListItem>
          <ListItemButton style={{
            background: `linear-gradient(90deg, ${mainPalette.light}44 0%, transparent 33%)`,
            marginLeft: '5px'
          }}
                          onClick={toggleOpen}
          >
            <ListItemIcon><Add/></ListItemIcon>
            <ListItemText><Typography>Dodaj klienta</Typography></ListItemText>
          </ListItemButton>
        </ListItem>
        {!!(data.length )&& data.map((client) => (
          <StyledListItem
            key={client._id}
          >
            <StyledListItemText>
              <Typography variant="body1">{client?.name} <StyledSpan>( {client?.email} )</StyledSpan></Typography>
              <StyledTypography variant="body2">{client?.founder}</StyledTypography>
            </StyledListItemText>
            <Link style={{textDecoration: 'none'}} to={`${client._id}`}>
              <StyledButton
                style={{marginRight: '20px'}}
                variant="outlined"
                color="secondary"
              >
                Szczegóły
              </StyledButton>
            </Link>
          </StyledListItem>
        ))}
      </List>
      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={() => setSnackbar(false)}
      >

        {

          <Alert onClose={() => setSnackbar(false)} severity="error" sx={{width: '100%'}}>
          Błąd zapisywania danych.
        </Alert>}

      </Snackbar>
    </>
  )
}

export default ClientAccordion