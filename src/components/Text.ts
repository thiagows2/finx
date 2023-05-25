import styled from 'styled-components'

import { texts } from '@/themes/Patterns'

interface TextProps {
  color?: string
  margin?: string
  fontWeight?: number
}

export const Text = {
  Small: styled.p<TextProps>`
    margin: ${({ margin }) => margin};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${texts.size.SMALL};
    color: ${({ color }) => color};
  `,
  Medium: styled.p<TextProps>`
    margin: ${({ margin }) => margin};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${texts.size.MEDIUM};
    color: ${({ color }) => color};
  `,
  Title: styled.h1<TextProps>`
    margin: ${({ margin }) => margin};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${texts.size.HUGE};
    color: ${({ color }) => color};
  `
}
