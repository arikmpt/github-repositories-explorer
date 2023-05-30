import Token from '@constants/token'
import { css } from '@emotion/react'
import type { TokenColor } from '@interfaces/token'
import { ButtonProps } from '.'

const button = css`
  text-transform: initial;
  border-radius: ${Token.borderRadius.small};
  box-shadow: none;

  height: 40px;

  &.Mui-disabled {
    opacity: 0.5;
  }
  .MuiButton-startIcon {
    margin-right: ${Token.spacing.xs}px;
    margin-left: unset;
  }
`

const backgroundColor = (value: TokenColor) => css`
  background-color: ${Token.color[value]};
`

const contentVariant = (value: 'icon' | 'text') => {
  if (value === 'icon') {
    return css`
      padding: ${Token.spacing.hs}px;
      max-width: 40px;
      width: 40px;
      min-width: 40px;
    `
  }

  return css`
    padding: ${Token.spacing.xs}px ${Token.spacing.m}px;
  `
}

const borderColor = (value: TokenColor) => css`
  border-color: ${Token.color[value]};
  &:hover {
    border-color: ${Token.color[value]};
  }
`

const whiteSpace = (value: ButtonProps['whiteSpace']) => css`
  white-space: ${value};
`

const hoverColor = (value: TokenColor) => css`
  &:hover {
    background-color: ${Token.color?.[value]};
  }
`

const grow = (value: number) => css`
  flex-grow: ${value};
`

const styles = {
  button,
  backgroundColor,
  contentVariant,
  borderColor,
  whiteSpace,
  hoverColor,
  grow,
}

export default styles
