import { createTheme } from '@mui/material'
import mainPalette from 'constants/mainPalette'


const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4
    },
    h1: {
      fontSize: '2.3rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '1.9rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 400
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 500
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    caption: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.3
    }
  },
  palette: {
    primary: {
      light: mainPalette.light,
      main: mainPalette.standard,
      dark: mainPalette.dark
    },
    secondary:{
      main: mainPalette.contrast,
    }
  },
  spacing: 8,
})

export default theme