import createActionTypes from '../../utils/helper/createActionTypes'

const namespace = 'PHOTOS'

const types = {
  FETCH_STARTED: 'FETCH_STARTED',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILED: 'FETCH_FAILED',
}

export type TActionTypes = {
  [key in keyof typeof types]: `${typeof namespace}/${key}`
}

export const actionTypes: TActionTypes = createActionTypes(namespace, Object.values(types))