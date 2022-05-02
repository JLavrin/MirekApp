import styled from 'styled-components'
import { Typography } from '@mui/material'
import mainPalette from 'constants/mainPalette'

const StyledClientBox = styled.section`
  color: ${mainPalette.dark};
  height: 82.5vh;
  width: 95vw;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`

const StyledTopBox = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`
const StyledTitleBox = styled.div`
  position: absolute;
  padding: 0 5%;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledTitle = styled(Typography)`
`

export {
  StyledClientBox,
  StyledTopBox,
  StyledTitle,
  StyledTitleBox
}