import { ReactNode } from 'react'
import { IconClose } from '@components/icons'
import { TokenColor } from '@interfaces/token'
import { Card, Hoverable, Text } from '..'

export type SnackbarAlertVariant = 'success' | 'info' | 'error' | 'warning'
type AlertScheme = Record<
  SnackbarAlertVariant,
  {
    background: TokenColor
    textColor: TokenColor
  }
>

const alertSchemes: AlertScheme = {
  success: {
    background: 'primary',
    textColor: 'white',
  },
  info: {
    background: 'contentPrimary',
    textColor: 'white',
  },
  error: {
    background: 'contentNegative',
    textColor: 'white',
  },
  warning: {
    background: 'contentNegativeSecondary',
    textColor: 'white',
  },
}

export interface SnackbarAlertProps {
  variant: SnackbarAlertVariant
  title?: string | string[]
  description?: string
  icon?: ReactNode
  handleClose?: () => void
}

const SnackBarAlert = ({ variant, title, description, icon, handleClose }: SnackbarAlertProps) => {
  const currentScheme = alertSchemes[variant]
  const generateTitle = (title: SnackbarAlertProps['title']) => {
    if (title) {
      if (Array.isArray(title)) {
        return (
          <Card direction={'column'}>{title.map((nestedTitle) => generateTitle(nestedTitle))}</Card>
        )
      }

      return (
        <Text color={currentScheme.textColor} variant={'medium'}>
          {title}
        </Text>
      )
    }

    return null
  }

  return (
    <Card
      grow={1}
      background={currentScheme.background}
      justify={'space-between'}
      gap={'m'}
      align={'center'}
      borderRadius={'default'}
      padding={'xxl'}
    >
      <Card gap={'xxl'} align={'center'}>
        {icon}
        <Card direction={'column'} gap={'xxs'}>
          {generateTitle(title)}
          {description && <Text color={currentScheme.textColor}>{description}</Text>}
        </Card>
      </Card>

      {handleClose && (
        <Hoverable onClick={handleClose} display={'inline-flex'}>
          <IconClose height={16} width={16} color={currentScheme.textColor} />
        </Hoverable>
      )}
    </Card>
  )
}

export default SnackBarAlert
