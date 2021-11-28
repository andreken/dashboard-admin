import createActionTypes from '../../utils/helper/createActionTypes'

const namespace = 'AUTH'

const types = {
  SIGN_IN_STARTED: 'SIGN_IN_STARTED',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_UP_STARTED: 'SIGN_UP_STARTED',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
  SIGN_OUT: 'SIGN_OUT',
}

export type TActionTypes = {
  [key in keyof typeof types]: `${typeof namespace}/${key}`
}

export const actionTypes: TActionTypes = createActionTypes(namespace, Object.values(types))