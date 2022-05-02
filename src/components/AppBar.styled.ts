import styled from 'styled-components'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import mainPalette from 'constants/mainPalette'
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
    
`
const StyledToolbar = styled(Toolbar)`
  position: relative;
  height: 100%;
  width: 100vw;
  
  
  background-color: ${mainPalette.standard}
  
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
const StyledTitle = styled.div`
  position: absolute;
  width: 10%;
  height: 100%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black; 
`

const StyledTypography = styled(Typography)`
  position: absolute;
  bottom: 80px;
  left: 10px;
`

export {
  StyledAppBar,
  StyledIconButton,
  StyledMenuIcon,
  StyledText,
  StyledToolbar,
  StyledDrawer,
  StyledBox,
  StyledLink,
  StyledTitle,
  StyledTypography
}