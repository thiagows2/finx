import styled from 'styled-components'

import { TextField } from '@mui/material'

export const OutlinedInput = styled(TextField).attrs(({ ...rest }) => ({
  variant: 'outlined',
  size: 'small',
  ...rest
}))``
