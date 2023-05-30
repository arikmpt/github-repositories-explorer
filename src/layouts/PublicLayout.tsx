import { SnackbarProvider, ReduxProvider } from '@providers'
import { globalStyle } from '@constants/commonStyles'
import { Global } from '@emotion/react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => (
  <ReduxProvider>
    <SnackbarProvider>
      <Global styles={globalStyle} />
      <Outlet />
    </SnackbarProvider>
  </ReduxProvider>
)

export default PublicLayout
