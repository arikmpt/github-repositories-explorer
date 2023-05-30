import { CSSInterpolation } from '@emotion/serialize/types'
import { SerializedStyles } from '@emotion/utils'

export type StyleProps =
  | SerializedStyles
  | SerializedStyles[]
  | CSSInterpolation[]
  | CSSInterpolation
