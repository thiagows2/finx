import styled from 'styled-components'

import { colors, texts } from '@/themes/Patterns'
import Button from '@mui/material/Button'

export const ContainedButton = styled(Button)`
  height: 40px;
  font-size: ${texts.size.MEDIUM};
  font-weight: 600;
  color: ${colors.PRIMARY_WHITE};
  background-color: ${colors.VIOLET};
  text-transform: none;

  &:hover {
    background-color: blueviolet;
  }
`
