import {
  CSSProperties,
  FocusEventHandler,
  KeyboardEventHandler,
  LegacyRef,
  ReactNode,
  forwardRef,
} from 'react'
import { StyleProps } from '@interfaces/common'
import type { TokenBorderRadius, TokenColor, TokenSpacing } from '@interfaces/token'
import styles from './styles'

export interface CardProps
  extends Pick<CSSProperties, 'display' | 'position' | 'zIndex' | 'overflow' | 'opacity'> {
  id?: string
  className?: string
  customStyles?: StyleProps
  children?: ReactNode
  direction?: 'row' | 'column'
  align?: CSSProperties['alignItems']
  alignSelf?: 'center' | 'stretch' | 'flex-start' | 'flex-end'
  justify?: CSSProperties['justifyContent']
  basis?: 'auto' | string | number
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  order?: number
  padding?: TokenSpacing
  paddingTop?: TokenSpacing
  paddingBottom?: TokenSpacing
  paddingLeft?: TokenSpacing
  paddingRight?: TokenSpacing
  margin?: TokenSpacing
  marginTop?: TokenSpacing
  marginBottom?: TokenSpacing
  marginLeft?: TokenSpacing
  marginRight?: TokenSpacing
  onClick?: () => void
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  onFocus?: FocusEventHandler
  background?: TokenColor
  grow?: CSSProperties['flexGrow']
  shrink?: CSSProperties['flexShrink']
  height?: CSSProperties['height']
  width?: CSSProperties['width']
  minWidth?: CSSProperties['minWidth']
  maxWidth?: CSSProperties['maxWidth']
  minHeight?: CSSProperties['minHeight']
  maxHeight?: CSSProperties['maxHeight']
  /**
   * @param {CSSProperties['overflow']} overflowX
   * Always use auto when possible, so the scrollbar won't always be visible when not needed
   */
  overflowX?: CSSProperties['overflow']
  overflowY?: CSSProperties['overflow']
  scrollBehaviour?: 'smooth'
  top?: string
  bottom?: string
  left?: string
  right?: string
  borderRadius?: TokenBorderRadius
  borderTopLeftRadius?: TokenBorderRadius
  borderTopRightRadius?: TokenBorderRadius
  borderBottomLeftRadius?: TokenBorderRadius
  borderBottomRightRadius?: TokenBorderRadius
  borderColor?: TokenColor
  borderWidth?: CSSProperties['borderWidth']
  borderStyle?: CSSProperties['borderStyle']
  cursor?: 'pointer'
  gap?: TokenSpacing
  textAlign?: 'left' | 'center' | 'right'
  hidden?: boolean
  ['aria-labelledby']?: string
  role?: string
  tabIndex?: number
  boxSizing?: CSSProperties['boxSizing']
}

const Card = forwardRef<HTMLDivElement, CardProps>(function CardWithRef(
  props: CardProps,
  ref?: LegacyRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      role={props.role}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onFocus={props.onFocus}
      id={props.id}
      className={props.className ?? ''}
      hidden={props.hidden}
      aria-labelledby={props['aria-labelledby']}
      tabIndex={props.tabIndex}
      css={[
        styles.display(props.hidden ? 'none' : props.display),
        props.background && styles.background(props.background),
        props.height && styles.height(props.height),
        props.width && styles.width(props.width),
        props.minWidth && styles.minWidth(props.minWidth),
        props.maxWidth && styles.maxWidth(props.maxWidth),
        props.minHeight && styles.minHeight(props.minHeight),
        props.maxHeight && styles.maxHeight(props.maxHeight),
        props.grow && styles.grow(props.grow),
        typeof props.shrink !== 'undefined' && styles.shrink(props.shrink),
        props.basis && styles.basis(props.basis),
        props.wrap && styles.wrap(props.wrap),
        props.order && styles.order(props.order),
        props.padding && styles.padding(props.padding),
        props.paddingTop && styles.paddingTop(props.paddingTop),
        props.paddingBottom && styles.paddingBottom(props.paddingBottom),
        props.paddingLeft && styles.paddingLeft(props.paddingLeft),
        props.paddingRight && styles.paddingRight(props.paddingRight),
        props.margin && styles.margin(props.margin),
        props.marginTop && styles.marginTop(props.marginTop),
        props.marginBottom && styles.marginBottom(props.marginBottom),
        props.marginLeft && styles.marginLeft(props.marginLeft),
        props.marginRight && styles.marginRight(props.marginRight),
        props.direction && styles.direction(props.direction),
        props.align && styles.alignItems(props.align),
        props.alignSelf && styles.alignSelf(props.alignSelf),
        props.justify && styles.justifyContent(props.justify),
        props.position && styles.position(props.position),
        props.zIndex && styles.zIndex(props.zIndex),
        props.overflow && styles.overflow(props.overflow),
        props.overflowX && styles.overflowX(props.overflowX),
        props.overflowY && styles.overflowY(props.overflowY),
        props.scrollBehaviour && styles.scrollBehaviour(props.scrollBehaviour),
        props.top && styles.top(props.top),
        props.bottom && styles.bottom(props.bottom),
        props.left && styles.left(props.left),
        props.right && styles.right(props.right),
        props.cursor && styles.cursor(props.cursor),
        props.borderRadius && styles.borderRadius(props.borderRadius),
        props.borderTopLeftRadius && styles.borderRadius(props.borderTopLeftRadius, 'top-left'),
        props.borderTopRightRadius && styles.borderRadius(props.borderTopRightRadius, 'top-right'),
        props.borderBottomLeftRadius &&
          styles.borderRadius(props.borderBottomLeftRadius, 'bottom-left'),
        props.borderBottomRightRadius &&
          styles.borderRadius(props.borderBottomRightRadius, 'bottom-right'),
        props.borderColor && styles.borderColor(props.borderColor),
        props.borderWidth && styles.borderWidth(props.borderWidth),
        props.borderStyle && styles.borderStyle(props.borderStyle),
        props.gap && styles.gap(props.gap),
        props.textAlign && styles.textAlign(props.textAlign),
        props.boxSizing && styles.boxSizing(props.boxSizing),
        typeof props.opacity === 'number' && styles.opacity(props.opacity),
        props.customStyles,
      ]}
    >
      {props.children}
    </div>
  )
})

export default Card
