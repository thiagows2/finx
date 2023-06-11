import styled from 'styled-components'
import { CSSProperties } from 'react'

interface BoxProps {
  flex?: CSSProperties['flex']
  margin?: CSSProperties['margin']
  maxWidth?: CSSProperties['maxWidth']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  padding?: CSSProperties['padding']
  alignSelf?: CSSProperties['alignSelf']
}

interface FlexProps {
  flexDirection?: string
  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  lineHeight?: CSSProperties['lineHeight']
  width?: CSSProperties['width']
}

export const Box = styled.div<BoxProps>`
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  align-self: ${({ alignSelf }) => alignSelf};
`

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  line-height: ${({ lineHeight }) => lineHeight};
  width: ${({ width }) => width};
`
