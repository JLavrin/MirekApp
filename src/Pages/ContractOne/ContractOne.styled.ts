import styled from 'styled-components'
import { Button, Card, Container } from '@mui/material'
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
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
`

const StyledFormControl = styled.form`
  margin-top: 20px;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 45px);
  grid-gap: 40px;
  
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const LeftBox = styled.div`
  width: 260px;
  border: 1px solid #e0e0e0;


`
const RightBox = styled.div<{$color: string}>`
  padding: 0 10px;
  flex: 1; border: 1px solid #e0e0e0;
  background-color: ${props => props.$color};
`


const StyledButton = styled(Button)`
  place-self: flex-end;
`
export {
  StyledClientData,
  StyledForm,
  StyledFormControl,
  StyledButton,
  Box,
  LeftBox,
  RightBox
}