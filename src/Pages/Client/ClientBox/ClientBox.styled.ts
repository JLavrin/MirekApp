import styled from 'styled-components'
import { Typography } from '@mui/material'
import MainPalette from 'constants/mainPalette'
import { Edit } from '@mui/icons-material'
import mainPalette from 'constants/mainPalette'

const StyledClientBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledBasicSection = styled.div`
  height: calc(100% - 60px);
  width: 25%;
  margin: 15px 30px;
  border: 1.5px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

const StyledBasicTitle = styled.div`
  height: 15%;
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
  border-bottom: 1px solid lightgray;
`

const StyledBasicInfo = styled.div`
  color: ${MainPalette.dark};
  position: relative;
  height: 15%;
  flex: 390px;
  display: flex;
  flex-direction: column;
  padding: 20px 0 40px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 30px;
`
const StyledBasicInfoText = styled(Typography)`
  color: ${MainPalette.dark};
  padding: 10px 0;
`

const StyledTextElInvoice = styled.div`
  position: absolute;
  text-align: center;
  width: 100px;
  top: 10px;
  right: 10px;
  font-size: 10px;
`

const StyledEdit = styled(Edit)`
  color: ${mainPalette.dark}
`

export {
  StyledClientBox,
  StyledBasicSection,
  StyledBasicTitle,
  StyledBasicInfo,
  StyledBasicInfoText,
  StyledTextElInvoice,
  StyledEdit
}
