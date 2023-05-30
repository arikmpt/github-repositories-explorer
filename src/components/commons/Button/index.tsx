import { ForwardedRef, MouseEventHandler, ReactNode, forwardRef, useMemo } from 'react'
import { Button as MaterialUIButton, ThemeProvider, createTheme } from '@mui/material'
import Token from '@constants/token'
import type { TokenColor } from '@interfaces/token'
import styles from './styles'

export interface ButtonProps {
  children?: ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  color?: TokenColor
  borderColor?: TokenColor
  hoverColor?: TokenColor
  onClick?: MouseEventHandler<HTMLButtonElement>
  startIcon?: React.ReactElement
  disabled?: boolean
  contentVariant?: 'icon' | 'text'
  grow?: number
  whiteSpace?: 'nowrap'
}

const Button = forwardRef(function ButtonWithRef(
  {
    variant = 'contained',
    onClick,
    disabled,
    grow,
    color,
    borderColor = 'innerBorderGrey',
    hoverColor,
    contentVariant,
    startIcon,
    whiteSpace,
    children,
  }: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: color && color !== 'transparent' ? Token.color?.[color] : Token.color.primary,
          },
        },
      }),
    [color],
  )

  return (
    <ThemeProvider theme={theme}>
      <MaterialUIButton
        ref={ref}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        color={'primary'}
        css={[
          styles.button,
          grow && styles.grow(grow),
          variant === 'outlined' && color && styles.backgroundColor(color),
          borderColor && styles.borderColor(borderColor),
          whiteSpace && styles.whiteSpace(whiteSpace),
          hoverColor ? styles.hoverColor(hoverColor) : color && styles.hoverColor(color),
          styles.contentVariant(contentVariant ?? 'text'),
        ]}
        startIcon={startIcon}
      >
        {children}
      </MaterialUIButton>
    </ThemeProvider>
  )
})

export default Button
