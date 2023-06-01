import styled from 'styled-components'

import { LoadingButton } from '@mui/lab'

export const ContainedButton = styled(LoadingButton).attrs(({ ...rest }) => ({
  variant: 'outlined',
  ...rest
}))``
