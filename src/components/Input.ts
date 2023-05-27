import styled from 'styled-components'

import { colors } from '@/themes/Patterns'
import { TextField } from '@mui/material'

export const OutlinedInput = styled(TextField).attrs(() => ({
  variant: 'outlined',
  size: 'small'
}))`
  background-color: ${colors.SECONDARY_GRAY};

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.SECONDARY_GRAY};
  }

  .MuiInputLabel-outlined.Mui-focused {
    color: ${colors.VIOLET};
  }
`
