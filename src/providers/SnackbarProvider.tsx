import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack'
import { Snackbar } from '@components/commons'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const SnackbarProvider = ({ children }: Props) => (
  <NotistackSnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    content={(key, message) => <Snackbar id={key} message={message} />}
  >
    {children}
  </NotistackSnackbarProvider>
)

export default SnackbarProvider
