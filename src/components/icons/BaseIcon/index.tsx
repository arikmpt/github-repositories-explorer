import { ReactNode } from 'react'
import { IconProps } from '../types'
import styles from './styles'

interface Props
  extends Pick<IconProps, 'rotate' | 'opacity' | 'flipHorizontal' | 'flipVertical' | 'alt'> {
  children: ReactNode
}

const BaseIcon = ({
  rotate,
  children,
  opacity,
  flipHorizontal = false,
  flipVertical = false,
  alt,
}: Props) => (
  <div
    css={[
      styles.container,
      rotate && styles.rotate(rotate, flipHorizontal, flipVertical),
      styles.opacity(opacity),
    ]}
    aria-label={alt}
  >
    {children}
  </div>
)

export default BaseIcon
