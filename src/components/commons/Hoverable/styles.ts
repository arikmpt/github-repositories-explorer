import { css } from '@emotion/react'

const display = (value: 'inline-flex' | 'block') => css`
  display: ${value};
`

const activeContainer = css`
  &:hover {
    cursor: pointer;
  }
`

const noCursor = css`
  cursor: default;
`

const disabledContainer = css`
  opacity: 0.5;
  &:hover {
    pointer-events: unset;
    cursor: not-allowed;
  }

  &.Mui-disabled {
    pointer-events: unset;
    cursor: not-allowed;
  }
`

const linkContainer = css`
  color: initial;
  text-decoration: none;
`

const linkShowUnderline = css`
  text-decoration: underline;
`

const disabledLink = css`
  pointer-events: none;
  cursor: default;
`

const styles = {
  display,
  activeContainer,
  noCursor,
  linkContainer,
  linkShowUnderline,
  disabledContainer,
  disabledLink,
}

export default styles
