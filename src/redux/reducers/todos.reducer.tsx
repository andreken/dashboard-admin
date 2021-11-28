import { todos as initialState, TTodosState, TTodosList } from '../state'
import { todosTypes as types } from '../actions'
import { IAction } from '../../utils/helper/typesGenerics'

type TAction = IAction<typeof types, TTodosList>

export default function reducer(state: TTodosState = initialState, action: TAction): TTodosState {
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
