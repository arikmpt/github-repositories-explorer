import { Provider } from 'react-redux'
import { store } from '../store';

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default ReduxProvider
