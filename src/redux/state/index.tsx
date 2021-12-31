import auth, { TAuthState } from './auth.state'
import user, { TUserState } from './user.state'
import router, { TRouterState } from './router.state'
import todos, { TTodosState, TTodosList } from './todos.state'
import photos, { TPhotosState, TPhotosList } from './photos.state'

const initialState = {
  auth,
  user,
  router,
  todos,
  photos,
}

type TState = typeof initialState

export {
  auth,
  user,
  router,
  todos,
  photos
}

export type {
  TAuthState,
  TUserState,
  TRouterState,
  TTodosState,
  TTodosList,
  TPhotosState,
  TPhotosList,
  TState,
}

export default initialState