import styled from 'styled-components'
import { CSSProperties } from 'react'

interface BoxProps {
  flex?: CSSProperties['flex']
  maxWidth?: CSSProperties['maxWidth']
  width?: CSSProperties['width']
  padding?: CSSProperties['padding']
}

interface FlexProps {
  flexDirection?: CSSProperties['flexDirection']
  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  lineHeight?: CSSProperties['lineHeight']
}

export const Box = styled.div<BoxProps>`
  flex: ${({ flex }) => flex};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding};
`

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  line-height: ${({ lineHeight }) => lineHeight};
`
