import styled from 'styled-components'
import Link from 'next/link'

import { colors, texts } from '@/themes/Patterns'

interface TextProps {
  color?: string
  margin?: string
  fontWeight?: number
  fontSize?: number
}

const TextBase = styled.p<TextProps>`
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color || colors.LIGHT_GRAY};
`

export const Text = {
  Small: styled(TextBase)`
    font-size: ${({ fontSize }) => fontSize || texts.size.SMALL}px;
  `,
  Medium: styled(TextBase)`
    font-size: ${({ fontSize }) => fontSize || texts.size.MEDIUM}px;
  `,
  Title: styled.h1<TextProps>`
    font-size: ${({ fontSize }) => fontSize || texts.size.HUGE}px;
    color: ${({ color }) => color || colors.PRIMARY_BLACK};
    font-weight: ${({ fontWeight }) => fontWeight};
  `,
  Link: styled(Link)<{ fontSize?: number }>`
    color: ${colors.VIOLET};
    font-size: ${({ fontSize }) => fontSize || texts.size.BIG}px;
    text-decoration: none;

    &:hover {
      color: ${colors.BLUE_VIOLET};
    }
  `,
  Number: styled.p<TextProps>`
    margin: ${({ margin }) => margin || '0'};
    color: ${({ color }) => color || colors.DARK_GRAY};
    font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  `
}
