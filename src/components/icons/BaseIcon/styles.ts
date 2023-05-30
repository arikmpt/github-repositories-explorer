import Token from '@constants/token'
import { css } from '@emotion/react'
import type { TokenColor } from '@interfaces/token'

const container = css`
  display: inline-flex;
`

const color = (colorType: TokenColor, disabled?: boolean) => {
  const selectedColor = disabled ? Token.color.contentDisabled : Token.color[colorType]
  return css`
    svg path {
      fill: ${selectedColor};
    }
    svg text {
      fill: ${selectedColor};
    }
  `
}

const strokeColor = (colorType: TokenColor, disabled?: boolean) => {
  const selectedColor = disabled ? Token.color.contentDisabled : Token.color[colorType]
  return css`
    svg path {
      stroke: ${selectedColor};
    }
    svg text {
      stroke: ${selectedColor};
    }
  `
}

const rotate = (value: number, flipHorizontal: boolean, flipVertical: boolean) => css`
  -webkit-transition: -webkit-transform 225ms ease-in-out;
  -ms-transition: -ms-transform 225ms ease-in-out;
  transition: transform 225ms ease-in-out;

  transform: rotate(${value}deg) scaleX(${flipHorizontal ? -1 : 1}) scaleY(${flipVertical ? -1 : 1});
`

const opacity = (value?: number) => css`
  opacity: ${value ?? 1};
`

const styles = {
  container,
  color,
  strokeColor,
  rotate,
  opacity,
}

export default styles
