import { CSSProperties } from 'react'
import Token from '@constants/token'
import { css } from '@emotion/react'
import type {
  TokenColor,
  TokenFontSize,
  TokenFontWeight,
  TokenLetterSpacing,
  TokenLineHeight,
  TokenSpacing,
} from '@interfaces/token'
import { TextProps } from '.'

const variant = (variantType: TokenFontWeight) => css`
  font-weight: ${Token.fontWeight[variantType]};
`

const size = (valueType: TokenFontSize) => css`
  font-size: ${Token.fontSize[valueType]}px;
`

const color = (colorType: TokenColor) => css`
  color: ${Token.color[colorType]};
`

const transform = (transformValue: 'uppercase' | 'lowercase') => css`
  text-transform: ${transformValue};
`

const fontFamily = css`
  font-family: 'roboto';
`

const wordSpacing = (valueType: TokenSpacing) => css`
  word-spacing: ${Token.spacing[valueType]}px;
`

const lineClamp = (lineClamp: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: var(--line-clamp, ${lineClamp});
  -webkit-box-orient: vertical;
  word-break: var(--word-break, 'none');
  overflow: hidden;
`

const truncateWord = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const opacity = (value: number) => css`
  opacity: ${value};
`

const align = (value: 'center' | 'left' | 'right') => css`
  text-align: ${value};
`

const letterSpacing = (value: TokenLetterSpacing) => css`
  letter-spacing: ${Token.letterSpacing[value]};
`

const decoration = (value: TextProps['decoration']) => css`
  text-decoration: ${value};
`

const lineHeight = (value: TokenLineHeight) => css`
  line-height: ${Token.lineHeight[value]};
`

const whiteSpace = (value: CSSProperties['whiteSpace']) => css`
  white-space: ${value};
`

const fontStyle = (value: CSSProperties['fontStyle']) => css`
  font-style: ${value};
`

const wordBreak = (value: CSSProperties['wordBreak']) => css`
  word-break: ${value};
`

const styles = {
  variant,
  size,
  color,
  transform,
  fontFamily,
  wordSpacing,
  lineClamp,
  lineHeight,
  truncateWord,
  opacity,
  align,
  letterSpacing,
  decoration,
  whiteSpace,
  fontStyle,
  wordBreak,
}

export default styles
