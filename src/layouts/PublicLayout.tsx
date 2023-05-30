import { SnackbarProvider } from '@providers'
import { globalStyle } from '@constants/commonStyles'
import { Global } from '@emotion/react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => (
  <SnackbarProvider>
    <>
      <Global styles={globalStyle} />
      <Outlet />
    </>
  </SnackbarProvider>
)

export default PublicLayout
