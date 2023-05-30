import { SnackbarContent, SnackbarKey, SnackbarMessage } from 'notistack'
import { Ref, forwardRef } from 'react'
import { Card } from '..'

interface Props {
  id?: SnackbarKey
  message?: SnackbarMessage
}

const Snackbar = forwardRef(function SnackbarWithRef(
  { id, message }: Props,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <SnackbarContent key={id} ref={ref}>
      <Card grow={1}>{message}</Card>
    </SnackbarContent>
  )
})

export default Snackbar
