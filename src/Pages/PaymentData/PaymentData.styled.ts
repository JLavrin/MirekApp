import styled from 'styled-components'
import { Button, Card, Container, TextField } from '@mui/material'
import mainPalette from 'constants/mainPalette'

const StyledPaymentData= styled(Container)`
  position: relative;
  height: calc(100% - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Card)`
  
  padding: 50px;
  margin: 50px auto 0;
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const StyledFormControl = styled.form`
  margin-top: 20px;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(4, 55px);
  grid-gap: 40px;
`
const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: mainPalette.light
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: mainPalette.light,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: mainPalette.light,
    },
    '&:hover fieldset': {
      borderColor:mainPalette.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: mainPalette.contrast,
    }
  }
})

const StyledButton = styled(Button)`
  place-self: flex-end;
`
export {
  StyledPaymentData,
  StyledForm,
  StyledFormControl,
  StyledButton,
  StyledTextField
}