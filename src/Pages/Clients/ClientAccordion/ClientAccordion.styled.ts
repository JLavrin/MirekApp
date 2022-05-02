import styled from 'styled-components'
import { Button, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import mainPalette from 'constants/mainPalette'

export const StyledButton = styled(Button)`
`

export const StyledListItem = styled(ListItem)`
  margin: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${mainPalette.contrast};
  background-color: aliceblue;
  box-shadow: 0 3px 10px 1px #0000001f
`

export const StyledListItemText = styled(ListItemText)`
  padding: 7.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledSpan = styled.span`
  color: gray; 
`

export const StyledTypography = styled(Typography)`
  color: gray; 
`