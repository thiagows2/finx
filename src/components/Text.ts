import styled from 'styled-components'

import { texts } from '@/themes/Patterns'

interface TextProps {
  color?: string
}

export const Text = {
  Small: styled.p<TextProps>`
    'font-size':${texts.size.SMALL}!important;
    color: ${({ color }) => color} !important;
  `,
  Medium: styled.p<TextProps>`
    'font-size':${texts.size.MEDIUM}!important;
    color: ${({ color }) => color} !important;
  `,
  Title: styled.h1<TextProps>`
    'font-size':${texts.size.HUGE}!important ;
    color: ${({ color }) => color} !important;
  `
}
