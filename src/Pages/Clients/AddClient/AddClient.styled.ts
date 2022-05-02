import styled from 'styled-components'
import { Drawer, FormControl } from '@mui/material'

const StyledDrawer = styled(Drawer)`


`

const StyledDrawerBox = styled.div`
  background-color: #efefef;
  margin-top: 70px;
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledDrawerTitle = styled.div`
  height: 100px;
  width: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px 30px;
  
`

const StyledFormControl = styled(FormControl)`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export {
  StyledDrawer,
  StyledDrawerBox,
  StyledDrawerTitle,
  StyledFormControl
}