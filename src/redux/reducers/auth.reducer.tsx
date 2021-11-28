import { auth as initialState, TAuthState } from '../state'
import { authTypes as types } from '../actions'
import { IAction } from '../../utils/helper/typesGenerics'

export type TAction = IAction<typeof types, string | null>

export default function reducer(state: TAuthState = initialState, action: TAction): TAuthState {
  switch (action.type) {
    case types.SIGN_IN_STARTED: {
      return {
        ...state,
        signInStarted: true,
        signInSuccess: false,
        signInFailed: false,
        signInErrorMessage: null,
      }
    }
    case types.SIGN_IN_SUCCESS: {
      return {
        ...state,
        signInStarted: false,
        signInSuccess: true,
        signInErrorMessage: null,
      }
    }
    case types.SIGN_IN_FAILED: {
      return {
        ...state,
        signInStarted: false,
        signInFailed: true,
        signInErrorMessage: action.payload,
      }
    }
    case types.SIGN_UP_STARTED: {
      return {
        ...state,
        signUpStarted: true,
        signUpSuccess: false,
        signUpFailed: false,
        signUpErrorMessage: null,
      }
    }
    case types.SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpSuccess: true,
        signUpStarted: false,
        signUpErrorMessage: null,
      }
    }
    case types.SIGN_UP_FAILED: {
      return {
        ...state,
        signUpFailed: true,
        signUpStarted: false,
        signUpErrorMessage: action.payload,
      }
    }
    case types.SIGN_OUT: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}


