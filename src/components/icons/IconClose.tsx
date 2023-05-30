import Token from '@constants/token'
import type { TokenColor } from '@interfaces/token'
import BaseIcon from './BaseIcon'
import { IconProps } from './types'

interface Props extends IconProps {
  color?: TokenColor
}

const IconClose = (props: Props) => {
  const { width = 24, height = 24, color = 'primary', ...baseIconProps } = props
  const baseColor = Token.color[color]

  return (
    <BaseIcon {...baseIconProps}>
      <svg width={width} height={height} viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'}>
        <path
          d={'M17.25 6.75L6.75 17.25M6.75 6.75L17.25 17.25'}
          stroke={baseColor}
          strokeWidth={'1.5'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </svg>
    </BaseIcon>
  )
}

export default IconClose
