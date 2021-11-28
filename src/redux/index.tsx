import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './state'
import createRootReducer from './reducers'

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })

export default function configureStore() {
  const middlewares = applyMiddleware(
    routerMiddleware(history),
    thunk,
  )

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middlewares),
  )

  return store
}
