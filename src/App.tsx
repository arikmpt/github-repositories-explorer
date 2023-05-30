import { Routes, Route } from 'react-router-dom'
import { PublicLayout } from '@layouts'
import { HomePage } from '@pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
