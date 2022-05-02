import styled from 'styled-components'
import { Button, Dialog, FormControl, IconButton } from '@mui/material'
import MainPalette from 'constants/mainPalette'

const StyledDialog = styled(Dialog)`

  & > div > div { 
    margin-top: 80px;
    
    border: 1px solid ${MainPalette.standard};
    position: relative;
    max-width: 80vw;
  }
`

const StyledEditModal = styled.div`
 
  position: relative;
  height: 85vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const StyledButtonSection = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledFromSection = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

const StyledFormControl = styled(FormControl)`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

const StyledDataButton = styled(Button)`

`
const StyledCloseButton = styled(IconButton)`
  top: 10px;
  right: 10px;
  margin-left: auto;
`
const StyledPaymentsButton = styled(Button)`

`

export {
  StyledEditModal,
  StyledButtonSection,
  StyledDataButton,
  StyledPaymentsButton,
  StyledFromSection,
  StyledFormControl,
  StyledCloseButton,
  StyledDialog
}

