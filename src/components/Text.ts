import styled from 'styled-components'

import { colors, texts } from '@/themes/Patterns'

interface TextProps {
  color?: string
  margin?: string
  fontWeight?: number
}

const TextBase = styled.p<TextProps>`
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color || colors.LIGHT_GRAY};
`

export const Text = {
  Small: styled(TextBase)`
    font-size: ${texts.size.SMALL};
  `,
  Medium: styled(TextBase)`
    font-size: ${texts.size.MEDIUM};
  `,
  Title: styled.p`
    font-size: ${texts.size.HUGE};
    color: ${({ color }) => color || colors.PRIMARY_BLACK};
    font-weight: bold;
  `,
  Number: styled.p<TextProps>`
    margin: ${({ margin }) => margin || '0'};
    color: ${({ color }) => color || colors.DARK_GRAY};
    font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  `
}
