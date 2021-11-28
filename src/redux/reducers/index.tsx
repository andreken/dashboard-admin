import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth.reducer'
import user from './user.reducer'
import todos from './todos.reducer'
import photos from './photos.reducer'

export const reducers = {
  auth,
  user,
  todos,
  photos,
}

const combinedReducers = (history: any) => combineReducers({
  router: connectRouter(history),
  ...reducers,
})

export default combinedReducers