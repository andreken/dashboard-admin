import { user as initialState, TUserState } from '../state'
import { userTypes as types } from '../actions'
import { IAction } from '../../utils/helper/typesGenerics'

type TAction = IAction<typeof types, Exclude<TUserState,null>>

export default function reducer(state: TUserState = initialState, action: TAction): TUserState {
  switch (action.type) {
    case types.STORE_USER_DATA: {
      return {
        ...action.payload
      }
    }
    case types.REMOVE_USER_DATA: {
      return null
    }
    default:
      return state
  }
}


