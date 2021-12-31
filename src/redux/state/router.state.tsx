import { RouterState } from 'connected-react-router'

export type TRouterState = RouterState

const initialRouterState: TRouterState = {
  location: {
    pathname: '',
    search: '',
    state: '',
    hash: '',
    query: {},
  },
  action: 'PUSH',
}

export default initialRouterState