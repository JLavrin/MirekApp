import styled from 'styled-components'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import mainPalette from 'constants/mainPalette'
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
    
`
const StyledToolbar = styled(Toolbar)`
  background-color: ${mainPalette.light}
  
`
const StyledIconButton = styled(IconButton)`
  cursor: pointer;
  
  
`
const StyledMenuIcon = styled(Menu)`

`
const StyledText = styled(Typography)`

`

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    margin-top: 65px
  }
`
const StyledBox = styled(Box)`

`

const StyledLink = styled(Link)`
text-decoration: none;
`

export {
  StyledAppBar,
  StyledIconButton,
  StyledMenuIcon,
  StyledText,
  StyledToolbar,
  StyledDrawer,
  StyledBox,
  StyledLink
}