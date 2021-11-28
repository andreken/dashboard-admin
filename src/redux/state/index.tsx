import auth, { TAuthState } from './auth.state'
import user, { TUserState } from './user.state'
import todos, { TTodosState, TTodosList } from './todos.state'
import photos, { TPhotosState, TPhotosList } from './photos.state'

const initialState = {
  auth,
  user,
  todos,
  photos
}

type TState = typeof initialState

export {
  auth,
  user,
  todos,
  photos
}

export type {
  TAuthState,
  TUserState,
  TTodosState,
  TTodosList,
  TPhotosState,
  TPhotosList,
  TState,
}

export default initialState