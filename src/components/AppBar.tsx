import React, { useState } from 'react'

import {
  StyledAppBar,
  StyledToolbar,
  StyledText,
  StyledIconButton,
  StyledMenuIcon,
  StyledDrawer,
  StyledBox,
  StyledLink,
  StyledTitle,
  StyledTypography
} from 'components/AppBar.styled'
import mainPalette from 'constants/mainPalette'
import { Divider, List, ListItem, ListItemIcon, ListItemText, tooltipClasses, Typography } from '@mui/material'
import { Add, Logout, Person } from '@mui/icons-material'
import Cookies from 'universal-cookie'
import useStore from 'store'

const AppBar = () => {

  const { user } = useStore(state => state)
  const cookies = new Cookies()
  const username = user !== '' ? user : cookies.get('username')
  const [open, setOpen] = useState(false)
  const handleMenuDrawerChange = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <StyledAppBar style={{zIndex: 2000}}>
      <StyledToolbar>
        <StyledIconButton onClick={handleMenuDrawerChange}>
          <StyledMenuIcon style={{color: mainPalette.contrast}}/>
        </StyledIconButton>
        <StyledTitle>
          <Typography variant='h3' style={{color: mainPalette.contrast}}>
            Mirek
          </Typography>
          <Typography variant='h5' style={{color: mainPalette.dark, marginBottom: '20px'}}>
            App
          </Typography>
        </StyledTitle>
      </StyledToolbar>
      <StyledDrawer open={open} anchor="left" onClose={handleMenuDrawerChange} transitionDuration={200}>
        <StyledBox style={{width: 250}}>
          <List>
            <StyledLink to={'/clients'}>
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Add/></ListItemIcon>
                <ListItemText>Dodaj klienta</ListItemText>

              </ListItem>
            </StyledLink>
            <Divider/>
            <StyledLink to={'/clients'}>
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Baza klientów</ListItemText>

              </ListItem>
            </StyledLink>
            <Divider/>

            <StyledLink to={'/'} >
              <ListItem onClick={() => {
                cookies.remove('auth')
                cookies.remove('user')
              }
              } button style={{color:mainPalette.dark, marginTop: 'auto'}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Logout/></ListItemIcon>
                <ListItemText>Wyloguj</ListItemText>

              </ListItem>
            </StyledLink>



          </List>
          <StyledTypography >Zalogowano jako: {username}</StyledTypography>
        </StyledBox>

      </StyledDrawer>

    </StyledAppBar>
  )

}

export default AppBar