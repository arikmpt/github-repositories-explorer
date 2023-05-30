import { ForwardedRef, MouseEvent, ReactNode, RefObject, forwardRef, useMemo } from 'react'
import { ButtonBase } from '@mui/material'
import { StyleProps } from '@interfaces/common'
import styles from './styles'

interface DefaultProps {
  id?: string
  children?: ReactNode
  className?: string
  disabled?: boolean
  customStyles?: StyleProps
  linkCustomStyles?: StyleProps
  display?: 'block' | 'inline-flex'
  disableRipple?: boolean
  noCursor?: boolean
  /**
   * @param {number | - 1} tabIndex
   * Used to determine if element can be accessed by tab event.
   * Use -1 to mark the element as non-accessible by tab event.
   */
  tabIndex?: number | -1
}

interface LinkProps extends DefaultProps {
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  /**
   * @param {string} href
   * Href is only passed from next/link wrapper
   */
  href?: string
  target?: '_blank'
  linkShowUnderline?: boolean
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const Hoverable = (
  props: ButtonProps | LinkProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLDivElement>,
) => {
  const {
    id = '',
    children,
    className = '',
    disabled,
    customStyles,
    display = 'block',
    disableRipple = true,
    noCursor,
    tabIndex = 0,
  } = props
  const defaultButtonProps = useMemo(
    () => ({
      id,
      className,
      disabled,
      disableRipple,
      component: 'div' as const,
      css: [
        disabled ? styles.disabledContainer : props?.onClick && styles.activeContainer,
        display && styles.display(display),
        noCursor && styles.noCursor,
        customStyles,
      ],
    }),
    [className, customStyles, disableRipple, disabled, display, id, noCursor, props?.onClick],
  )

  if ('href' in props) {
    return (
      <a
        href={props?.href}
        onClick={disabled ? undefined : props?.onClick}
        css={[
          styles.linkContainer,
          props?.linkShowUnderline && styles.linkShowUnderline,
          props?.linkCustomStyles,
          disabled && styles.disabledLink,
        ]}
        ref={ref as unknown as RefObject<HTMLAnchorElement>}
        tabIndex={tabIndex}
        target={props?.target}
      >
        <ButtonBase tabIndex={-1} {...defaultButtonProps}>
          {children}
        </ButtonBase>
      </a>
    )
  }

  return (
    <ButtonBase
      {...defaultButtonProps}
      onClick={disabled ? undefined : (props?.onClick as unknown as ButtonProps['onClick'])}
      ref={ref as unknown as RefObject<HTMLDivElement>}
      tabIndex={tabIndex}
    >
      {children}
    </ButtonBase>
  )
}

export default forwardRef(Hoverable)
