import { createTheme } from '@mui/material'
import { PALETTE } from 'common/constants/styles'

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          borderRadius: '5px',
          backgroundColor: PALETTE.BLUE,
          color: PALETTE.WHITE,
          fontWeight: 'bold',
        },
        outlined: {
          textTransform: 'none',
          borderRadius: '5px',
          border: `solid 2px ${PALETTE.BLUE}`,
          color: PALETTE.BLUE,
          fontWeight: 'bold',
        },
      },
    },
  },
})