import styled from 'styled-components'
import { Button, Card, Container, TextField } from '@mui/material'
import mainPalette from 'constants/mainPalette'

const StyledClientData = styled(Container)`
  position: relative;
  height: calc(100% - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Card)`
  padding: 50px;
  margin: 50px auto 0;
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-direction: column;
`

const StyledTextField = styled(TextField)`
  width: 300px;
`


const StyledButton = styled(Button)`
`
export {
  StyledClientData,
  StyledForm,
  StyledButton,
  StyledTextField
}