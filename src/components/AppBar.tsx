import React, { useState } from 'react'

import {
  StyledAppBar,
  StyledToolbar,
  StyledText,
  StyledIconButton,
  StyledMenuIcon,
  StyledDrawer,
  StyledBox,
  StyledLink
} from 'components/AppBar.styled'
import mainPalette from 'constants/mainPalette'
import { List, ListItem, ListItemIcon, ListItemText, tooltipClasses } from '@mui/material'
import { Person } from '@mui/icons-material'

const AppBar = () => {
  const [open, setOpen] = useState(false)
  const handleMenuDrawerChange = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <StyledAppBar style={{zIndex: 2000}}>
      <StyledToolbar>
        <StyledIconButton onClick={handleMenuDrawerChange}>
          <StyledMenuIcon style={{color: mainPalette.dark}}/>
        </StyledIconButton>
      </StyledToolbar>
      <StyledDrawer open={open} anchor="left" onClose={handleMenuDrawerChange} transitionDuration={200}>
        <StyledBox style={{width: 250}}>
          <List>
            <StyledLink to={'/dane-klienta'}>
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Dane klienta</ListItemText>

              </ListItem>
            </StyledLink>

            <StyledLink to={'/dane-finansowe'}>
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Dane finansowe</ListItemText>

              </ListItem>
            </StyledLink>

            <StyledLink to={'/umowa1'} >
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>

                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Umowa 1</ListItemText>

              </ListItem>
            </StyledLink>

            <StyledLink to={'/umowa2'}>
              <ListItem onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>
                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Umowa 2</ListItemText>
              </ListItem>
            </StyledLink>

            <StyledLink to={'/umowa3'}>
              <ListItem  onClick={handleMenuDrawerChange} button style={{color:mainPalette.dark}} divider>
                <ListItemIcon style={{color: 'inherit'}}><Person/></ListItemIcon>
                <ListItemText>Umowa 3</ListItemText>
              </ListItem>
            </StyledLink>
          </List>

        </StyledBox>
      </StyledDrawer>
    </StyledAppBar>
  )

}

export default AppBar