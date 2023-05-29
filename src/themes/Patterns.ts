import { createTheme } from '@mui/material/styles'

export const colors = {
  DARK_GRAY: '#627179',
  ERROR_RED: '#FF1717',
  LIGHT_GRAY: '#A5A7AF',
  LIGHT_VIOLET: '#BDB2CF',
  PRIMARY_BLACK: '#151322',
  PRIMARY_BLUE: '#3B79D6',
  PRIMARY_WHITE: '#FFFFFF',
  SECONDARY_GRAY: '#F3F0FF',
  SUCCESS_GREEN: '#17A814',
  VIOLET: '#50209E'
}

export const texts = {
  size: {
    SMALL: '12px',
    MEDIUM: '14px',
    BIG: '16px',
    HUGE: '24px'
  }
}

export const theme = createTheme({
  typography: {
    fontSize: 14
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          color: colors.PRIMARY_WHITE,
          backgroundColor: colors.VIOLET,
          textTransform: 'none',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',

          '&:hover': {
            backgroundColor: 'blueviolet'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.SECONDARY_GRAY
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.LIGHT_VIOLET
          }
        },
        notchedOutline: {
          borderColor: colors.SECONDARY_GRAY
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.Mui-focused': {
            color: colors.VIOLET
          }
        }
      }
    }
  }
})
