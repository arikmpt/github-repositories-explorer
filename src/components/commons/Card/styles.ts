import { CSSProperties } from 'react'
import Token from '@constants/token'
import { css } from '@emotion/react'
import type { TokenBorderRadius, TokenColor, TokenSpacing } from '@interfaces/token'
import { CardProps } from '.'

const display = (value: CardProps['display'] = 'flex') => css`
  display: ${value};
`

const background = (valueKey: TokenColor) => css`
  background-color: ${Token.color[valueKey]};
`

const zIndex = (value: CardProps['zIndex']) => css`
  z-index: ${value};
`

const height = (value: CSSProperties['height']) => css`
  height: ${value};
`

const width = (value: CSSProperties['width']) => css`
  width: ${value};
`

const basis = (value: CardProps['basis']) => css`
  flex-basis: ${value};
`

const wrap = (value: CardProps['wrap']) => css`
  flex-wrap: ${value};
`

const order = (value: number) => css`
  order: ${value};
`

const grow = (value: CSSProperties['flexGrow']) => css`
  flex-grow: ${value};
`

const shrink = (value: CSSProperties['flexShrink']) => css`
  flex-shrink: ${value};
`

const padding = (sizeKey: TokenSpacing) => css`
  padding: ${Token.spacing[sizeKey]}px;
`

const paddingTop = (sizeKey: TokenSpacing) => css`
  padding-top: ${Token.spacing[sizeKey]}px;
`

const paddingBottom = (sizeKey: TokenSpacing) => css`
  padding-bottom: ${Token.spacing[sizeKey]}px;
`

const paddingLeft = (sizeKey: TokenSpacing) => css`
  padding-left: ${Token.spacing[sizeKey]}px;
`

const paddingRight = (sizeKey: TokenSpacing) => css`
  padding-right: ${Token.spacing[sizeKey]}px;
`

const margin = (sizeKey: TokenSpacing) => css`
  margin: ${Token.spacing[sizeKey]}px;
`

const marginTop = (sizeKey: TokenSpacing) => css`
  margin-top: ${Token.spacing[sizeKey]}px;
`

const marginBottom = (sizeKey: TokenSpacing) => css`
  margin-bottom: ${Token.spacing[sizeKey]}px;
`

const marginLeft = (sizeKey: TokenSpacing) => css`
  margin-left: ${Token.spacing[sizeKey]}px;
`

const marginRight = (sizeKey: TokenSpacing) => css`
  margin-right: ${Token.spacing[sizeKey]}px;
`

const direction = (value: 'row' | 'column') => css`
  flex-direction: ${value};
`

const alignItems = (value: CardProps['align']) => css`
  align-items: ${value};
`

const alignSelf = (value: CardProps['alignSelf']) => css`
  align-self: ${value};
`

const justifyContent = (value: CardProps['justify']) => css`
  justify-content: ${value};
`

const minWidth = (value: CSSProperties['minWidth']) => css`
  min-width: ${value};
`

const maxWidth = (value: CSSProperties['maxWidth']) => css`
  max-width: ${value};
`

const minHeight = (value: CSSProperties['minHeight']) => css`
  min-height: ${value};
`

const maxHeight = (value: CSSProperties['maxHeight']) => css`
  max-height: ${value};
`

const position = (value: CardProps['position']) => css`
  position: ${value};
`

const overflow = (value: CardProps['overflow']) => css`
  overflow: ${value};
`

const overflowX = (value: CardProps['overflowX']) => css`
  overflow-x: ${value};
`

const overflowY = (value: CardProps['overflowY']) => css`
  overflow-y: ${value};
`

const scrollBehaviour = (value: CardProps['scrollBehaviour']) => css`
  scroll-behavior: ${value};
`

const top = (value: string) => css`
  top: ${value};
`

const bottom = (value: string) => css`
  bottom: ${value};
`

const left = (value: string) => css`
  left: ${value};
`

const right = (value: string) => css`
  right: ${value};
`

const opacity = (value: number) => css`
  opacity: ${value};
`

const borderRadius = (
  sizeKey: TokenBorderRadius,
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
) => {
  if (position) {
    return css`
      border-${position}-radius: ${Token.borderRadius[sizeKey]};
    `
  }

  return css`
    border-radius: ${Token.borderRadius[sizeKey]};
  `
}

const borderColor = (valueKey: TokenColor) => css`
  border: 1px solid ${Token.color[valueKey]};
`

const borderWidth = (value: CSSProperties['borderWidth']) => css`
  border-width: ${value};
`

const borderStyle = (value: CSSProperties['borderStyle']) => css`
  border-style: ${value};
`

const cursor = (value: CardProps['cursor']) => css`
  cursor: ${value};
`

const gap = (sizeKey: TokenSpacing) => css`
  gap: ${Token.spacing[sizeKey]}px;
`

const textAlign = (value: CardProps['textAlign']) => css`
  text-align: ${value};
`

const boxSizing = (value: CSSProperties['boxSizing']) => css`
  box-sizing: ${value};
`

const styles = {
  display,
  boxSizing,
  background,
  height,
  basis,
  wrap,
  order,
  grow,
  shrink,
  direction,
  alignItems,
  alignSelf,
  justifyContent,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  margin,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  width,
  position,
  zIndex,
  overflow,
  overflowX,
  overflowY,
  scrollBehaviour,
  top,
  left,
  right,
  bottom,
  opacity,
  borderRadius,
  borderColor,
  borderWidth,
  borderStyle,
  cursor,
  gap,
  textAlign,
}

export default styles
