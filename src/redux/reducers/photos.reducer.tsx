import { photos as initialState, TPhotosState, TPhotosList } from '../state'
import { photosTypes as types } from '../actions'
import { IAction } from '../../utils/helper/typesGenerics'

export type TAction = IAction<typeof types, TPhotosList>

export default function reducer(state: TPhotosState = initialState, action: TAction): TPhotosState {
  switch (action.type) {
    case types.FETCH_STARTED: {
      return {
        ...state,
        fetchStarted: true,
        fetchSuccess: false,
        fetchFailed: false,
      }
    }
    case types.FETCH_SUCCESS: {
      return {
        ...state,
        list: action.payload,
        fetchStarted: false,
        fetchSuccess: true,
      }
    }
    case types.FETCH_FAILED: {
      return {
        ...state,
        list: [],
        fetchStarted: false,
        fetchFailed: true,
      }
    }
    default:
      return state
  }
}
