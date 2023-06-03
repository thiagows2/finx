import { createTheme } from '@mui/material/styles'

export const colors = {
  BLUE_VIOLET: '#8A2BE2',
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
    SMALL: 12,
    MEDIUM: 14,
    BIG: 16,
    HUGE: 24
  }
}

export const theme = createTheme({
  typography: {
    fontSize: 14
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.ERROR_RED
        }
      }
    },
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
          },

          '& .MuiCircularProgress-root': {
            color: 'white'
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
